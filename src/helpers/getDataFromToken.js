import { NextRequest } from "next/server";
import  jwt  from "jsonwebtoken";

export const getDataFromToken = (request) =>{
    try
    {
        const token = request.cookies.get("mytoken")?.value || '';
        const decodedToken = jwt.verify(token,process.env.TOKEN_SECRET);
        console.log('decoded',decodedToken);
        return decodedToken.id;
    }
    catch(error)
    {
        throw new Error(error.message)
    }
}