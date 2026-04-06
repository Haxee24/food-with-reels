import {Router} from "express";
import { getNewReels } from "../controllers/customer.controller.js";

const router = Router();
router.get("/new-reels", getNewReels);

export default router;