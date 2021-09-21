import fs from 'fs';
import path from 'path';
import { IApiResponse, IFetchData, IUserState } from './formTypes';
import ApiResponseHandler from './apiResponseHandler';

export const readUserData = (getData: Function, writeData: Function, modifiedData: IUserState): void => {
    fs.readFile(path.resolve(__dirname, '../src/data.json'), 'utf-8', (error, data) => {
        if (error) throw error;
        const users: IUserState[] = data ? JSON.parse(data) : [];
        const updatedData = getData(users, modifiedData);
        writeData(updatedData);
    });
}

export const writeUserData = (data: IUserState[] | []): void => {
    fs.writeFile(path.resolve(__dirname, '../src/data.json'), JSON.stringify(data), (error) => {
        if (error) throw error;
    });
}

export const getAppendData = (data: IUserState[], modifiedData: IUserState): IUserState[] => {
    const count: number = Math.floor(10000 + Math.random() * 90000);
    const userData = Object.assign({}, modifiedData, { id: count.toString() });
    return data.concat([userData]);
}

export const getUpdateData = (data: IUserState[], modifiedData: IUserState): IUserState[] => {
    return data.map((user) => {
        if (modifiedData.id === user.id) {
            return { ...modifiedData };
        }
        return user;
    });
}

export const getDeleteData = (data: IUserState[], modifiedData: IUserState): IUserState[] => {
    return data.filter((user) => modifiedData.id !== user.id);
}

export const appendUserData = async (modifiedData: IUserState): Promise<IApiResponse> => {
    let response;
    response = ApiResponseHandler.handleSuccess('save');
    try {
        console.log('in append user data');
        await readUserData(getAppendData, writeUserData, modifiedData);
    } catch (error) {
        console.log('in catch block of append user data');
        response = ApiResponseHandler.handleError('save');
    }
    return response;
}

export const updateUserData = async (modifiedData: IUserState): Promise<IApiResponse> => {
    let response;
    try {
        await readUserData(getUpdateData, writeUserData, modifiedData);
        response = ApiResponseHandler.handleSuccess('save');
    } catch (error) {
        response = ApiResponseHandler.handleError('save');
    }
    return response;
}

export const deleteUserData = async (modifiedData: IUserState): Promise<IApiResponse> => {
    let response;
    try {
        await readUserData(getDeleteData, writeUserData, modifiedData);
        response = ApiResponseHandler.handleSuccess('save');
    } catch (error) {
        response = ApiResponseHandler.handleError('save');
    }
    return response;
}

export const fetchAllUserData = (): IFetchData => {
    let response;
    let data = [];
    try {
        const apiData = fs.readFileSync(path.resolve(__dirname, '../src/data.json'), { encoding: 'utf8', flag: 'r' });
        const successResponse = ApiResponseHandler.handleSuccess('fetch');
        data = JSON.parse(apiData);

        response = { data, ...successResponse };
    } catch (error) {
        const errorResponse = ApiResponseHandler.handleError('fetch');
        response = { data, ...errorResponse };
    }
    return response;
}
