import {Router} from 'express';
import { getFoodItems, getNewStores } from '../controllers/store.controller';

const router = new Router();

router.get("/stores", getNewStores);
router.get("/stores/:id", getFoodItems);