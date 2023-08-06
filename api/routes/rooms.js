import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getallRoom, updateRoom, updateRoomAvailibility } from "../controller/roomcontroller.js";

const router = express.Router();

//create
router.post("/:hotelid",verifyAdmin ,createRoom)

//update
router.put("/:id",verifyAdmin ,updateRoom)
router.put("/availibility/:id",updateRoomAvailibility)

//delete
router.delete("/:id/:hotelid",verifyAdmin ,deleteRoom)

//get
router.get("/:id",getRoom)

//getall
router.get("/" ,getallRoom)

export default router;