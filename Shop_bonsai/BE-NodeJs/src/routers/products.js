import express from "express";
import { Create_PR, GetAll_PR, GetOne_PR, Remove_PR, Update_PR } from "../controls/products";
// import { CheckMission } from "../middles/middle";

const router_PR=express.Router();

router_PR.get(`/products`,GetAll_PR);
router_PR.get(`/products/:id`,GetOne_PR);
router_PR.post(`/products`,Create_PR);//1
router_PR.put(`/products/:id`,Update_PR);//2
router_PR.delete(`/products/:id`,Remove_PR);//3

export default router_PR;