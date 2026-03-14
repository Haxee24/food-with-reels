import {Router} from 'express';
import { registerUser, registerPartner, loginUser, logoutUser } from '../controllers/auth.controller.js';
import upload from '../middleware/multer.middeware.js';

const router = Router();

router.post("/register", registerUser, registerPartner);
router.post("/register-partner", upload.single("heroImage"), registerPartner)
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;