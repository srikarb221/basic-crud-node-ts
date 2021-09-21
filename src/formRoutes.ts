import { Router } from "express";
import {
    saveUserDataController,
    fetchUserDataController,
    updateUserDataController,
    deleteUserDataController
} from './formController'


const router = Router();

router.post('/save', saveUserDataController);

router.get('/fetch', fetchUserDataController);

router.put('/update', updateUserDataController);

router.delete('/delete', deleteUserDataController);

export default router;