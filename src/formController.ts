import { RequestHandler } from "express";
import User from "./formModels";
import apiHandler from "./apiResponseHandler";

export const saveUserDataController: RequestHandler = async (req, res): Promise<void> => {
    const { firstName, lastName, email, designation } = req.body;

    const user = new User('', firstName, lastName, email, designation);
    const response = await user.saveUser();

    res.status(response.code).send(response);
}

export const updateUserDataController: RequestHandler = async (req, res): Promise<void> => {
    const { id, firstName, lastName, email, designation } = req.body;

    const user = new User(id, firstName, lastName, email, designation);

    const response = await user.updateUser();

    res.status(response.code).send(response);
}

export const deleteUserDataController: RequestHandler = async (req, res): Promise<void> => {
    const { id, firstName, lastName, email, designation } = req.body;

    const user = new User(id, firstName, lastName, email, designation);

    const response = await user.deleteUser();

    res.status(response.code).send(response);
}

export const fetchUserDataController: RequestHandler = async (req, res): Promise<void> => {

    const response = await User.getUsers();

    res.status(response.code).send(response);
}

export const handle404Controller: RequestHandler = (req, res): void => {
    const response = apiHandler.handleError('404');
    res.status(404).send(response);
}
