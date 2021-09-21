"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCodes = void 0;
var HttpStatusCodes;
(function (HttpStatusCodes) {
    HttpStatusCodes[HttpStatusCodes["OK"] = 200] = "OK";
    HttpStatusCodes[HttpStatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCodes[HttpStatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCodes[HttpStatusCodes["INTERNAL_SERVER"] = 500] = "INTERNAL_SERVER";
})(HttpStatusCodes = exports.HttpStatusCodes || (exports.HttpStatusCodes = {}));
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
            code: 500,
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
            default:
                return { ...errorResponse, message: 'Error reading the file.' };
        }
    }
    handleSuccess(api) {
        const successResponse = { code: HttpStatusCodes.OK, status: 'Success' };
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
