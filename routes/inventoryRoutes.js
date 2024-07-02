import express from "express"
// import { name } from "../middlewares/authMiddleware.js";
import { createInventoryController, getInventoryController } from "../controllers/inventoryController.js";
import { middleware } from './../middlewares/authMiddleware.js';

const router = express.Router()

//Add inventory || POST

router.post("/create-inventory",middleware,createInventoryController);

//  GET ALL BLOOD RECORDS
router.get('/get-inventory',middleware,getInventoryController)



export default router;