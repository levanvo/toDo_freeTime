import axios from "axios";

const instancePr = axios.create({
    baseURL: "http://localhost:8080/products"
});
const jwt = "";
interface Product {
    _id?: string,
    name: string,
    image: string,
    price: number,
    quantity: number,
    description: string,
    categoryID?: string,
    createdAt?: string,
    updatedAt?: string
};

export const getAllPr = () => {
    return instancePr.get("/");
};
export const getOnePr = (_id: string) => {
    return instancePr.get("/" + _id);
};
export const CreatePr = (data: any) => {
    return instancePr.post("/", data, {
        headers: {
            Authorization: jwt,
        }
    });
};
export const UpdatePr = (data: any) => {
    return instancePr.put("/" + data._id, data, {
        headers: {
            Authorization: jwt,
        }
    });
};
export const RemovePr = (_id: string) => {
    return instancePr.delete("/" + _id, {
        headers: {
            Authorization: jwt,
        },
    });
};