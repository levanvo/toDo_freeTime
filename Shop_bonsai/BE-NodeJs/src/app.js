import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router_PR from "./routers/products";
import router_CT from "./routers/category";

const app=express();
app.use(express.json());
app.use(cors());
app.use(router_PR);
app.use(router_CT);

mongoose.connect(`mongodb://127.0.0.1:27017/Shop_bonsai`)
    .then(()=>console.log(`Connect successful____________________`))
    .catch((err)=>console.log(`Failed connect ------>>> `,err));

export const viteNodeApp=app;