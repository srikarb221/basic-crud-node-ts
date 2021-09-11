import { RequestHandler } from "express";
import { appendDataToJson, getJsonData, updateUserData, deleteUserData } from './formUtils';

export const saveFormDataController: RequestHandler = async (req, res) => {
    let response: { code: number, message: string } = { code: 200, message: "success" };
    const data = req.body;

    try {
        await appendDataToJson(data);
    } catch (error) {
        response.code = 500;
        response.message = error as string;
    }

    res.status(response.code).send(response);
}

export const updateUserDataController: RequestHandler = async (req, res) => {
    let response: { code: number, message: string } = { code: 200, message: "success" };
    const data = req.body;
    try {
        await updateUserData(data);
    } catch (error) {
        response = { code: 500, message: error as string }
    }
    res.status(response.code).send(response);
}

export const deleteUserDataController: RequestHandler = async (req, res) => {
    let response: { code: number, message: string } = { code: 200, message: "success" };
    const data = req.body;
    try {
        await deleteUserData(data);
    } catch (error) {
        response = { code: 500, message: error as string }
    }
    res.status(response.code).send(response);
}

export const fetchFormDataController: RequestHandler = async (req, res) => {
    let response = {};
    let code = 200;
    try {
        response = await getJsonData();
    } catch (error) {
        code = 500;
        response = { code: 500, message: error }
    }
    res.status(code).send(response);
}

