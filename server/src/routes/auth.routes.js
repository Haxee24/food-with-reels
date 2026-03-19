import {Router} from 'express';
import authenticateToken from '../middleware/auth.middleware.js';
import { registerUser, registerPartner, loginUser, logoutUser, getUser } from '../controllers/auth.controller.js';
import upload from '../middleware/multer.middeware.js';

const router = Router();

router.post("/register", registerUser, registerPartner);
router.post("/register-partner", upload.single("heroImage"), registerPartner)
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/getUser", authenticateToken, getUser);

export default router;