import express from 'express';
import  {registerUser} from '../Controller/UserController.js';
import { loginUser } from "../Controller/LoginController.js";
import { adminLogin } from "../Controller/AdminLoginController.js";
import { registerAdder } from "../Controller/AdminAddController.js";
import { updateAdder } from "../Controller/AdminUpdateController.js";
import { deleteAdder } from "../Controller/AdminDeleteController.js";
import { getAllAdders } from "../Controller/AdminDisplayController.js";
const router=express.Router()
router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/admin-login", adminLogin);
router.post("/admin-add",registerAdder );
router.get("/admin-display", getAllAdders);
router.put("/admin-update/:id", updateAdder);
router.delete("/admin-delete/:id", deleteAdder);
export default router;