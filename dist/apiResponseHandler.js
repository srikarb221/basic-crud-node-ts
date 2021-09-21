"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formTypes_1 = require("./formTypes");
class ApiResponseHandler {
    constructor() {
        console.log('error constructor called.');
    }
    static getInstance() {
        if (!this.apiHandlerInstance) {
            this.apiHandlerInstance = new ApiResponseHandler();
        }
        return this.apiHandlerInstance;
    }
    handleError(api) {
        let errorResponse = {
            code: formTypes_1.HttpStatusCodes.INTERNAL_SERVER,
            status: 'Error'
        };
        switch (api) {
            case 'fetch':
                return { ...errorResponse, message: 'Error reading the file.' };
            case 'save':
                return { ...errorResponse, message: 'Error saving the file.' };
            case 'update':
                return { ...errorResponse, message: 'Error updating the file.' };
            case 'delete':
                return { ...errorResponse, message: 'Error deleting the file.' };
            case '404':
                return { ...errorResponse, message: 'Page Not Found.', code: formTypes_1.HttpStatusCodes.NOT_FOUND };
            default:
                return { ...errorResponse, message: 'Error reading the file.' };
        }
    }
    handleSuccess(api) {
        const successResponse = { code: formTypes_1.HttpStatusCodes.OK, status: 'Success' };
        switch (api) {
            case 'fetch':
                return { ...successResponse, message: 'Success reading the file.' };
            case 'save':
                return { ...successResponse, message: 'Success saving the file.' };
            case 'update':
                return { ...successResponse, message: 'Success updating the file.' };
            case 'delete':
                return { ...successResponse, message: 'Success deleting the file.' };
            default:
                return { ...successResponse, message: 'Success reading the file.' };
        }
    }
}
exports.default = ApiResponseHandler.getInstance();
