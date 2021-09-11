import { Router } from "express";
import {
    saveFormDataController,
    fetchFormDataController,
    updateUserDataController,
    deleteUserDataController
} from './formController'


const router = Router();


router.post('/save', saveFormDataController);

router.get('/fetch', fetchFormDataController);

router.put('/update', updateUserDataController);

router.delete('/delete', deleteUserDataController);

export default router;