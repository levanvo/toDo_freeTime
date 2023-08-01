import SchemaProducts from "../models/products";
import SchemaCategory from "../models/category";
import joi from "joi";

const JoiProducts = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    price: joi.number().required(),
    quantity: joi.number().required(),
    description: joi.string().required(),
    categoryID:joi.string().required(),
    discount:joi.number().required(),
});

export const GetAll_PR = async (req, res) => {
    try {
        const data = await SchemaProducts.find();
        return res.status(200).json({ message: "getAllPr products ===>", data });
    } catch (error) {
        return res.status(400).json({ message: "getAllPr failed ===>", error });
    };
};
export const GetOne_PR = async (req, res) => {
    try {
        const data = await SchemaProducts.findOne({ _id: req.params.id });
        if (!data) {
            return res.status(400).json({ message: "No Products" });
        }
        return res.status(200).json({ message: "get one products ===>", data });
    } catch (error) {
        return res.status(400).json({ message: "get one failed ===>", error });
    };
};
export const Create_PR = async (req, res) => {
    try {
        const body = req.body;
        // validate
        const { error } = await JoiProducts.validate(body);
        if (error) { return res.json(error.details[0].message) };
        // add
        const data = await SchemaProducts.create(body);
        await SchemaCategory.findByIdAndUpdate(data.categoryID,{
            $addToSet:{
                products:data._id
            },
        },{new:true});
        return res.status(200).json({ message: "addPr one products ===>", data });
    } catch (error) {
        return res.status(400).json({ message: "addPr failed ===>", error });
    };
};
export const Update_PR = async (req, res) => {
    try {
        const body = req.body;
        // validate
        const { error } = await JoiProducts.validate(body);
        if (error) { return res.json(error.details[0].message) };
        // update
        const data = await SchemaProducts.findByIdAndUpdate(req.params.id, body, { new: true });
        return res.status(200).json({ message: "updatePr one products ===>", data });
    } catch (error) {
        return res.status(400).json({ message: "updatePr failed ===>", error });
    };
};
export const Remove_PR = async (req, res) => {
    try {
        const data = await SchemaProducts.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "removePr one products ===>", data });
    } catch (error) {
        return res.status(400).json({ message: "removePr failed ===>", error });
    };
};