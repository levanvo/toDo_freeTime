import axios from "axios";

const instanceAT=axios.create({
    baseURL:"http://localhost:8081"
});

export const Signup=(data:any)=>{
    return instanceAT.post("/signup",data);
};
export const Signin=(data:any)=>{
    return instanceAT.post("/signin",data);
};
export const getOneAccount=(data:any)=>{
    return instanceAT.get(`/getoneAccount`,data);
}
export const getAllAccount=()=>{
    return instanceAT.get(`/getallAccount`);
}

// ,{
//     headers:{
//         Authorization:jwtCT,
//     }
// }