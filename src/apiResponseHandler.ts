import { IApiResponse, HttpStatusCodes } from './formTypes';

class ApiResponseHandler {

    private static apiHandlerInstance: ApiResponseHandler;

    private constructor() {
        console.log('error constructor called.');
    }

    static getInstance() {
        if (!this.apiHandlerInstance) {
            this.apiHandlerInstance = new ApiResponseHandler();
        }
        return this.apiHandlerInstance;
    }

    handleError(api: string): IApiResponse {
        let errorResponse = {
            code: HttpStatusCodes.INTERNAL_SERVER,
            status: 'Error'
        }

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
                return { ...errorResponse, message: 'Page Not Found.', code: HttpStatusCodes.NOT_FOUND };
            default:
                return { ...errorResponse, message: 'Error reading the file.' };
        }
    }

    handleSuccess(api: string): IApiResponse {
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

export default ApiResponseHandler.getInstance();