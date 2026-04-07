import {Router} from 'express';
import { getFoodItems, getNewStores, getStoreById } from '../controllers/store.controller.js';

const router = new Router();

router.get("/", getNewStores);
router.get("/all", getNewStores);
router.get("/foods/:id", getFoodItems);
router.get("/:id", getStoreById);

export default router;