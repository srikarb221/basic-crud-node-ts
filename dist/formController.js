"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFormDataController = exports.deleteUserDataController = exports.updateUserDataController = exports.saveFormDataController = void 0;
const formUtils_1 = require("./formUtils");
const saveFormDataController = async (req, res) => {
    let response = { code: 200, message: "success" };
    const data = req.body;
    try {
        await formUtils_1.appendDataToJson(data);
    }
    catch (error) {
        response.code = 500;
        response.message = error;
    }
    res.status(response.code).send(response);
};
exports.saveFormDataController = saveFormDataController;
const updateUserDataController = async (req, res) => {
    let response = { code: 200, message: "success" };
    const data = req.body;
    try {
        await formUtils_1.updateUserData(data);
    }
    catch (error) {
        response = { code: 500, message: error };
    }
    res.status(response.code).send(response);
};
exports.updateUserDataController = updateUserDataController;
const deleteUserDataController = async (req, res) => {
    let response = { code: 200, message: "success" };
    const data = req.body;
    try {
        await formUtils_1.deleteUserData(data);
    }
    catch (error) {
        response = { code: 500, message: error };
    }
    res.status(response.code).send(response);
};
exports.deleteUserDataController = deleteUserDataController;
const fetchFormDataController = async (req, res) => {
    let response = {};
    let code = 200;
    try {
        response = await formUtils_1.getJsonData();
    }
    catch (error) {
        code = 500;
        response = { code: 500, message: error };
    }
    res.status(code).send(response);
};
exports.fetchFormDataController = fetchFormDataController;
