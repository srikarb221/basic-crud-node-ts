"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formController_1 = require("./formController");
const router = express_1.Router();
router.post('/save', formController_1.saveFormDataController);
router.get('/fetch', formController_1.fetchFormDataController);
router.put('/update', formController_1.updateUserDataController);
router.delete('/delete', formController_1.deleteUserDataController);
exports.default = router;