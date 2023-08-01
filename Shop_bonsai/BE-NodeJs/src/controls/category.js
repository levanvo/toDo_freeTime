import SchemaMG_Ct from "../models/category"
import joi from "joi"

const SchemaJoi_ct=joi.object({
    name:joi.string().required(),
});

export const GetAll_CT=async(req,res)=>{
    try{
        const data = await SchemaMG_Ct.find();
        return res.status(200).json({message:"Tat ca danh muc: ===> ",data});
    }catch(error){return res.status(400).json("Try catch getAll CT.....")};
}
export const GetOne_CT=async(req,res)=>{
    try{
        const data = await SchemaMG_Ct.findById(req.params.id);
        return res.status(200).json({message:" Thay 1 danh muc ===>> ",data});
    }catch(error){return res.status(400).json("Try catch getOne CT.....")};
}
export const Create_CT=async(req,res)=>{
    try{
        const body=req.body;
        const {error}=await SchemaJoi_ct.validate(body);
        if(error){return res.json(error.details[0].message)};

        const data=await SchemaMG_Ct.create(body);
        return res.status(200).json({message:" Them 1 danh muc ===>> ",data});
    }catch(error){return res.status(400).json("Try catch Create CT.....")};
}
export const Update_CT=async(req,res)=>{
    try{
        const body=req.body;
        const {error}=await SchemaJoi_ct.validate(body);
        if(error){return res.json(error.details[0].message)};

        const data=await SchemaMG_Ct.findByIdAndUpdate(req.params.id,body,{new:true});
        return res.status(200).json({message:" Cap nhat 1 danh muc ===>> ",data});
    }catch(error){return res.status(400).json("Try catch Update CT.....")};
}
export const Remove_CT=async(req,res)=>{
    try{
        const data=await SchemaMG_Ct.findByIdAndDelete(req.params.id);
        return res.status(200).json({message:" Xoa 1 danh muc ===>> ",data});
    }catch(error){return res.status(400).json("Try catch Remove CT.....")};
}