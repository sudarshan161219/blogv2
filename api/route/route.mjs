import { Router } from "express";
const router = Router();


//*--> Import all controllers  <--*//
import * as controller from "../controllers/appController.mjs";


//? POST
router.route("/register").post(controller.register);
router.route("/login").post( controller.login); //$ login in app
// router.route("/refresh").get(controller.refresh); 
// router.route("/logout").get(controller.logout); 

//? GET
router.route("/profile").get(controller.verifyToken, controller.profile); //$ get user profile



export default router;