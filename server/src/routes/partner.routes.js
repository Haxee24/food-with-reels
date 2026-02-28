import {Router} from 'express';
import { addFoodItem } from '../controllers/partner.controller.js';
import authenticateToken from '../middleware/auth.middleware.js';
import upload from '../middleware/multer.middeware.js';

const router = Router();

router.post("/addItem", authenticateToken, upload.single("foodimg"), addFoodItem);

export default router;
