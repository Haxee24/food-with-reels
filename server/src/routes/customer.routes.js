import {Router} from "express";
import { getNewReels } from "../controllers/customer.controller.js";
import verifyToken from "../middleware/auth.middleware.js";

const router = Router();
router.get("/new-reels", verifyToken, getNewReels);

export default router;