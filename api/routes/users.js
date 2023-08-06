import express from "express";
import { deleteUser, getUser, getallUser, updateUser } from "../controller/usercontroller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next) => {
//     res.send("hello user you are verify!")
// });

// router.get("/checkuser/:id",verifyUser,(req,res,next) => {
//     res.send("hello user you are verify and you can delete your account!")
// });

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next) => {
//     res.send("hello,admin  admin you are verify and you can delete all account!")
// });

//update
router.put("/:id",verifyUser,updateUser)

//delete
router.delete("/:id",verifyUser,deleteUser)

//get
router.get("/:id",verifyUser,getUser)

//getall
router.get("/",verifyAdmin,getallUser)

export default router;