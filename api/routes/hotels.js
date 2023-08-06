import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getallHotel, updateHotel } from "../controller/hotelcontroller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/",verifyAdmin ,createHotel)

//update
router.put("/:id",verifyAdmin ,updateHotel)

//delete
router.delete("/:id",verifyAdmin ,deleteHotel)

//get
router.get("/find/:id",getHotel)

//getall
router.get("/" ,getallHotel)

router.get("/countbycity" ,countByCity)

router.get("/countbytype" ,countByType)
router.get("/room/:id" ,getHotelRooms)


export default router;