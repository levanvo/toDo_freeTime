import mongoose from "mongoose";

const SchemaProducts = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true
        },

        categoryID: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        }
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("product", SchemaProducts);