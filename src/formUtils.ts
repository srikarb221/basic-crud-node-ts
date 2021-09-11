import fs from 'fs';
import path from 'path';
import { IInFormState, IOutFormState } from './formModels';

export const appendDataToJson = (inputData: IInFormState) => {
    fs.readFile(path.resolve(__dirname, '../src/data.json'), 'utf-8', (err, data) => {
        if (err) throw err;

        let jsonData: IOutFormState[] = data ? JSON.parse(data) : [];
        const count: number = Math.floor(10000 + Math.random() * 90000);
        const userData = Object.assign({}, inputData, { id: count.toString() });
        jsonData.push(userData);

        fs.writeFile(path.resolve(__dirname, '../src/data.json'), JSON.stringify(jsonData), (err) => {
            if (err) throw err;
        });
    });
}

export const updateUserData = (inputData: IOutFormState) => {
    fs.readFile(path.resolve(__dirname, '../src/data.json'), 'utf-8', (err, data) => {
        if (err) throw err;

        let jsonData: IOutFormState[] = data ? JSON.parse(data) : [];
        const updatedUserData = jsonData.map((user) => {
            if (inputData.id === user.id) {
                return { ...inputData };
            }
            return user;
        });

        fs.writeFile(path.resolve(__dirname, '../src/data.json'), JSON.stringify(updatedUserData), (err) => {
            if (err) throw err;
        });
    });
}

export const deleteUserData = (inputData: IOutFormState) => {
    fs.readFile(path.resolve(__dirname, '../src/data.json'), 'utf-8', (err, data) => {
        if (err) throw err;

        let jsonData: IOutFormState[] = data ? JSON.parse(data) : [];
        const updatedUserData = jsonData.filter((user) => inputData.id !== user.id);

        fs.writeFile(path.resolve(__dirname, '../src/data.json'), JSON.stringify(updatedUserData), (err) => {
            if (err) throw err;
        });
    });
}

export const getJsonData = () => {
    let jsonData = '';
    try {
        jsonData = fs.readFileSync(path.resolve(__dirname, '../src/data.json'), { encoding: 'utf8', flag: 'r' });
    } catch (error) {
        throw error;
    }
    return jsonData ? JSON.parse(jsonData) : [];
}
