

import { NextRequest , NextResponse } from "next/server";

import User from '@/models/userModels'

import { connect } from "@/dbConfig/dbConfig";


connect();

export async function GET(request)
{
    
  
    try
    {
        const userdetails = await User.find(
            { role: "Vendor" },
            { _id:1,username:1,email:1,address: 1,latitude:1,longitude:1,profilepic: 1 }
          );
          
          return NextResponse.json(userdetails,{status:200});
    }
    catch(error)
    {
        return NextResponse.json({error:error.message},{status:400})
    }
}