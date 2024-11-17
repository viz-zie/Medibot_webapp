import {connect} from '@/dbConfig/dbConfig';
import User from '@/models/userModels';
import { NextResponse } from 'next/server';

connect();
export async function PUT(request) 
{
  console.log("putkanguva")
  const body = await request.json();
  console.log("api",body); // Parse JSON body
  const {_id,address,gender,bloodgroup,latitude,longitude,profilepic } = body;



  try {
    // Update all `orderStatus` fields in the `orders` array for the given `customerId`
    const result = await User.updateOne(
        { _id: _id },  // Filter to find the document by _id
        { 
           $set: { 
              address: address,
              latitude: latitude,
              longitude: longitude,
              profilepic: profilepic,
              gender: gender,
              bloodgroup: bloodgroup
           }
        }
     )

    if (result.nModified === 0) {
      return NextResponse.json(
        { success: false, message: 'No user found for this userId' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'address , latitude , longitude and profile pic  updated for the user' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }

  
}
