import { appendUserData, fetchAllUserData, updateUserData, deleteUserData } from './formUtils';
import { IUserState, IFieldState, IApiResponse, IFetchData } from './formTypes';

class User implements IUserState {
    constructor(
        public id: string,
        public firstName: IFieldState,
        public lastName: IFieldState,
        public email: IFieldState,
        public designation: IFieldState
    ) { }

    async saveUser(): Promise<IApiResponse> {
        const response = appendUserData(this);
        return response;
    }

    async updateUser(): Promise<IApiResponse> {
        const response = await updateUserData(this);
        return response
    }

    static getUsers(): IFetchData {
        const response = fetchAllUserData();
        return response;
    }

    async deleteUser(): Promise<IApiResponse> {
        const response = await deleteUserData(this);
        return response;
    }
}

export default User;
