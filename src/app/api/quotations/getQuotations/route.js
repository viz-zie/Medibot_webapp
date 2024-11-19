import {connect} from '@/dbConfig/dbConfig';
import Quotation from '@/models/quotationsModels';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
connect();
export async function GET(request) 
{
  //console.log(request)
  const { searchParams } = new URL(request.url);
  const uservalue = searchParams.get('customerId');
  console.log(uservalue);

  const userObjectId = new mongoose.Types.ObjectId(uservalue);
  
  try 
  {
    const orderresult = await Order.aggregate([
      {
        $match: { customerId: userObjectId }, // Replace `customerId` with the actual value you want to filter by
      },
      {
        $lookup: {
          from: 'drugs',               // The name of the Drug collection in MongoDB
          localField: 'itemId',        // Field in the Order schema
          foreignField: '_id',         // Field in the Drug schema
          as: 'drugDetails',           // The resulting array field for joined documents
        },
      },
      {
        $unwind: '$drugDetails',       // Unwind to get a flat document structure
      },
      {
        $group: {
          _id: '$customerId',          // Group by customerId
          orders: {
            $push: {
              itemId: '$itemId',
              qty: '$qty',
              orderStatus: '$orderStatus',
              drugDetails: '$drugDetails', // Include drug details
            },
          },
        },
      },
    ]);


    console.log(orderresult);
    
    return NextResponse.json(orderresult,{status:200});
   //return drugresult; 
  } 
  catch (error) 
  {
    console.error(error);
    return NextResponse.json({error:error.message},{status:500});
    {/*res.status(500).json({ message: 'Error fetching drugs' });*/}
  }

  
}
