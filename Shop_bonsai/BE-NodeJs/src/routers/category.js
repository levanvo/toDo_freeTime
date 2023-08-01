import express from "express"
import { Create_CT, GetAll_CT, GetOne_CT, Remove_CT, Update_CT } from "../controls/category";

const router_CT=express.Router();

router_CT.get("/categories",GetAll_CT);
router_CT.get("/categories/:id",GetOne_CT);
router_CT.post("/categories",Create_CT);
router_CT.put("/categories/:id",Update_CT);
router_CT.delete("/categories/:id",Remove_CT);

export default router_CT;