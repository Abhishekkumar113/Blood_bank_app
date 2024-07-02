import express from "express"
import { currentUserController, loginController, registerController } from "../controllers/authController.js";
import { middleware} from "../middlewares/authMiddleware.js";

const router = express.Router()

router.post('/register',registerController)
router.post('/Login',loginController)

//GET CURRENT USER || GET
router.get('/current-user',middleware,currentUserController)


export default router;