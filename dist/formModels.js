"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formUtils_1 = require("./formUtils");
class User {
    constructor(id, firstName, lastName, email, designation) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.designation = designation;
    }
    async saveUser() {
        const response = formUtils_1.appendUserData(this);
        return response;
    }
    async updateUser() {
        const response = await formUtils_1.updateUserData(this);
        return response;
    }
    static getUsers() {
        const response = formUtils_1.fetchAllUserData();
        return response;
    }
    async deleteUser() {
        const response = await formUtils_1.deleteUserData(this);
        return response;
    }
}
exports.default = User;
