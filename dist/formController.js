"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle404Controller = exports.fetchUserDataController = exports.deleteUserDataController = exports.updateUserDataController = exports.saveUserDataController = void 0;
const formModels_1 = __importDefault(require("./formModels"));
const apiResponseHandler_1 = __importDefault(require("./apiResponseHandler"));
const saveUserDataController = async (req, res) => {
    const { firstName, lastName, email, designation } = req.body;
    const user = new formModels_1.default('', firstName, lastName, email, designation);
    const response = await user.saveUser();
    res.status(response.code).send(response);
};
exports.saveUserDataController = saveUserDataController;
const updateUserDataController = async (req, res) => {
    const { id, firstName, lastName, email, designation } = req.body;
    const user = new formModels_1.default(id, firstName, lastName, email, designation);
    const response = await user.updateUser();
    res.status(response.code).send(response);
};
exports.updateUserDataController = updateUserDataController;
const deleteUserDataController = async (req, res) => {
    const { id, firstName, lastName, email, designation } = req.body;
    const user = new formModels_1.default(id, firstName, lastName, email, designation);
    const response = await user.deleteUser();
    res.status(response.code).send(response);
};
exports.deleteUserDataController = deleteUserDataController;
const fetchUserDataController = async (req, res) => {
    const response = await formModels_1.default.getUsers();
    res.status(response.code).send(response);
};
exports.fetchUserDataController = fetchUserDataController;
const handle404Controller = (req, res) => {
    const response = apiResponseHandler_1.default.handleError('404');
    res.status(404).send(response);
};
exports.handle404Controller = handle404Controller;
