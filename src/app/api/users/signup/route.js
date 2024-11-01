import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModels"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

connect()



export async function POST(request)
{
    try{
        const reqBody = await request.json()
        const {username,password} = reqBody

        console.log(reqBody);

        //check if user already exisits
        const user = await User.findOne({username})

        if (user){
            return NextResponse.json({error:"User already exists"},{status:400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            password:hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success:true,
            savedUser
        })

    }
    catch (error)
    {
        return NextResponse.json({error:error.message},{status:500})
    }
}

