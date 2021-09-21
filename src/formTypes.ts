export interface IFieldState {
    value: string;
    error: boolean;
    required: boolean;
}

export interface IApiResponse {
    code: number;
    status: string;
    message: string;
}

export enum HttpStatusCodes {
    OK = 200,
    NOT_FOUND = 404,
    BAD_REQUEST = 400,
    INTERNAL_SERVER = 500
}

export interface IUserState {
    id: string;
    firstName: IFieldState,
    lastName: IFieldState,
    email: IFieldState,
    designation: IFieldState
}

export interface IFetchData extends IApiResponse {
    data: IUserState
}