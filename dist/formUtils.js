"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonData = exports.deleteUserData = exports.updateUserData = exports.appendDataToJson = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const appendDataToJson = (inputData) => {
    fs_1.default.readFile(path_1.default.resolve(__dirname, '../src/data.json'), 'utf-8', (err, data) => {
        if (err)
            throw err;
        let jsonData = data ? JSON.parse(data) : [];
        const count = Math.floor(10000 + Math.random() * 90000);
        const userData = Object.assign({}, inputData, { id: count.toString() });
        jsonData.push(userData);
        fs_1.default.writeFile(path_1.default.resolve(__dirname, '../src/data.json'), JSON.stringify(jsonData), (err) => {
            if (err)
                throw err;
        });
    });
};
exports.appendDataToJson = appendDataToJson;
const updateUserData = (inputData) => {
    fs_1.default.readFile(path_1.default.resolve(__dirname, '../src/data.json'), 'utf-8', (err, data) => {
        if (err)
            throw err;
        let jsonData = data ? JSON.parse(data) : [];
        const updatedUserData = jsonData.map((user) => {
            if (inputData.id === user.id) {
                return { ...inputData };
            }
            return user;
        });
        fs_1.default.writeFile(path_1.default.resolve(__dirname, '../src/data.json'), JSON.stringify(updatedUserData), (err) => {
            if (err)
                throw err;
        });
    });
};
exports.updateUserData = updateUserData;
const deleteUserData = (inputData) => {
    fs_1.default.readFile(path_1.default.resolve(__dirname, '../src/data.json'), 'utf-8', (err, data) => {
        if (err)
            throw err;
        let jsonData = data ? JSON.parse(data) : [];
        const updatedUserData = jsonData.filter((user) => inputData.id !== user.id);
        fs_1.default.writeFile(path_1.default.resolve(__dirname, '../src/data.json'), JSON.stringify(updatedUserData), (err) => {
            if (err)
                throw err;
        });
    });
};
exports.deleteUserData = deleteUserData;
const getJsonData = () => {
    let jsonData = '';
    try {
        jsonData = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../src/data.json'), { encoding: 'utf8', flag: 'r' });
    }
    catch (error) {
        throw error;
    }
    return jsonData ? JSON.parse(jsonData) : [];
};
exports.getJsonData = getJsonData;
