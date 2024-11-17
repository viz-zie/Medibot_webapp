import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModels"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'


connect()


export async function POST(request)
{
    try{
        const reqBody = await request.json()
        const {email,role,password} = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})
        console.log("kanguvaa")

        if (!user){
            return NextResponse.json({error:"User does not exist"},{status:400})
        }

        //check if password exists
        const validpassword = await bcryptjs.compare(password,user.password)
        
        if(!validpassword)
        {
            return NextResponse.json({error:"Invalid password"},{status:400})
        }

        console.log(user.isVerified);

        if (user.isVerified)
        {
                //create tokenData
               
                const tokenData = {
                    id: user._id,
                    username: user.username,
                    email:user.email,
                    role:user.role
                }

                //create token
                console.log("signing ",process.env.TOKEN_SECRET);
                const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET,{ algorithm: 'HS256', expiresIn:"1d"})
                console.log('chki',token);
                const response = NextResponse.json({
                    message: "Login Successful",
                    success : true,
                })
                

                response.cookies.set("token",token,{
                    httpOnly : false,
                    path: "/",
                    maxAge: 1 * 24 * 60 * 60,
                })       
                return response;
        }


    }
    catch (error)
    {
        const response = NextResponse.json({
            message: " Your Signup Expired due to unverified email id",
            success : true,
        })
        return response;
        //return NextResponse.json({error:error.message},{status:500})
    }
}

