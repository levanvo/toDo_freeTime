import mongoose from "mongoose";

const SchemaMG_Ct = new mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },
        products:[{
            type:mongoose.Types.ObjectId,
            ref:"products"
        }]
    },{timestamps:true,versionKey:false}
);
export default mongoose.model("category",SchemaMG_Ct);