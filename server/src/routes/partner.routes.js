import {Router} from 'express';
import { addFoodItem } from '../controllers/partner.controller.js';
import authenticateToken from '../middleware/auth.middleware.js';

const router = Router();

router.post("/addItem", authenticateToken, addFoodItem);

export default router;
