import {Router} from 'express';
import { getFoodItems, getNewStores } from '../controllers/store.controller.js';

const router = new Router();

router.get("/", getNewStores);
router.get("/all", getNewStores);
router.get("/:id", getFoodItems);

export default router;