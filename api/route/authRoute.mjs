import { Router } from "express";
const router = Router();


//*--> Import all controllers  <--*//
import {register, login, updateUser, profile,logout } from "../controllers/authController.mjs";

//? POST
router.route("/register").post(register);
router.route("/login").post(login);


//? GET
router.route("/profile").get( profile); //$ get user profile



export default router;

// import { Router } from "express";
// const router = Router();

//  //*--> Import all controllers  <--*//
// import {register, login, updateUser}  from "../controllers/authController.mjs"

 

// //* POST
// router.route('/register').post(register)
// router.route('/login').post(login)

// //* PATCH
// router.route('/updateUser').patch(updateUser)



// export default router;