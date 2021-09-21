"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllUserData = exports.deleteUserData = exports.updateUserData = exports.appendUserData = exports.getDeleteData = exports.getUpdateData = exports.getAppendData = exports.writeUserData = exports.readUserData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const apiResponseHandler_1 = __importDefault(require("./apiResponseHandler"));
const readUserData = (getData, writeData, modifiedData) => {
    fs_1.default.readFile(path_1.default.resolve(__dirname, '../src/data.json'), 'utf-8', (error, data) => {
        if (error)
            throw error;
        const users = data ? JSON.parse(data) : [];
        const updatedData = getData(users, modifiedData);
        writeData(updatedData);
    });
};
exports.readUserData = readUserData;
const writeUserData = (data) => {
    fs_1.default.writeFile(path_1.default.resolve(__dirname, '../src/data.json'), JSON.stringify(data), (error) => {
        if (error)
            throw error;
    });
};
exports.writeUserData = writeUserData;
const getAppendData = (data, modifiedData) => {
    const count = Math.floor(10000 + Math.random() * 90000);
    const userData = Object.assign({}, modifiedData, { id: count.toString() });
    return data.concat([userData]);
};
exports.getAppendData = getAppendData;
const getUpdateData = (data, modifiedData) => {
    return data.map((user) => {
        if (modifiedData.id === user.id) {
            return { ...modifiedData };
        }
        return user;
    });
};
exports.getUpdateData = getUpdateData;
const getDeleteData = (data, modifiedData) => {
    return data.filter((user) => modifiedData.id !== user.id);
};
exports.getDeleteData = getDeleteData;
const appendUserData = async (modifiedData) => {
    let response;
    response = apiResponseHandler_1.default.handleSuccess('save');
    try {
        console.log('in append user data');
        await exports.readUserData(exports.getAppendData, exports.writeUserData, modifiedData);
    }
    catch (error) {
        console.log('in catch block of append user data');
        response = apiResponseHandler_1.default.handleError('save');
    }
    return response;
};
exports.appendUserData = appendUserData;
const updateUserData = async (modifiedData) => {
    let response;
    try {
        await exports.readUserData(exports.getUpdateData, exports.writeUserData, modifiedData);
        response = apiResponseHandler_1.default.handleSuccess('save');
    }
    catch (error) {
        response = apiResponseHandler_1.default.handleError('save');
    }
    return response;
};
exports.updateUserData = updateUserData;
const deleteUserData = async (modifiedData) => {
    let response;
    try {
        await exports.readUserData(exports.getDeleteData, exports.writeUserData, modifiedData);
        response = apiResponseHandler_1.default.handleSuccess('save');
    }
    catch (error) {
        response = apiResponseHandler_1.default.handleError('save');
    }
    return response;
};
exports.deleteUserData = deleteUserData;
const fetchAllUserData = () => {
    let response;
    let data = [];
    try {
        const apiData = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../src/data.json'), { encoding: 'utf8', flag: 'r' });
        const successResponse = apiResponseHandler_1.default.handleSuccess('fetch');
        data = JSON.parse(apiData);
        response = { data, ...successResponse };
    }
    catch (error) {
        const errorResponse = apiResponseHandler_1.default.handleError('fetch');
        response = { data, ...errorResponse };
    }
    return response;
};
exports.fetchAllUserData = fetchAllUserData;
