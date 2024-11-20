import {connect} from '@/dbConfig/dbConfig';
import Quotation from '@/models/quotationsModels';
import Order from '@/models/ordersModels'; // Example import statement

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

connect();
console.log('inside quotation api')
export async function POST(request)
{
    const { searchParams } = new URL(request.url);

    const uservalue = searchParams.get('quoterequieredcustomer');
    console.log("custid inside post quotations ",uservalue);
    const userObjectId = new mongoose.Types.ObjectId(uservalue);
        
    try{
        
        const reqBody = await request.json()
        const vendIds = reqBody.vendId;
       // console.log("REQUEST BODY in post quotations",vendIds);
// Extracting vendId array from the object
        
        const listOfOrderIds = await Order.aggregate([
            {
                $match:{ customerId: userObjectId },
            },
            {
                $project: {
                    orderId: "$_id",  // Renaming _id to orderId
                    _id: 0  // Do not include the original _id field
                }
            }
        ]);
        
       // console.log(listOfOrderIds,vendIds)

      // Generate the cross-joined data   
      const newexpandedData = vendIds.flatMap(vendId => 
        
        listOfOrderIds.map(order => ({
            vendId: new mongoose.Types.ObjectId(vendId), //this is converted to objectid
            orderId: order.orderId,                       // it is already an objectid
            rate:null,
            amount:null,
            quotationStatus:null
        }))
    );

        console.log('new',newexpandedData)

        const insertedQuotations = await Quotation.insertMany(newexpandedData);

        console.log('Bulk insert successful:', insertedQuotations);
     //   return insertedQuotations; // Or handle response as needed

        return NextResponse.json({
         message: "Quotation inserted successfully",
          success:true,
          insertedQuotations})

      }
      catch (error) 
      {
        // Handle unique key violation for orderId or other database errors
        if (error.code === 11000) {
            console.error('Duplicate item in error:', error);
            return NextResponse.json({error:'Duplicate item exists in Quotation Request:' },{status:201});

            // Handle duplicate key error, e.g., by notifying the user or logging
        } else {
            // Handle other types of errors
            console.error('Failed to insert documents:', error);
            return NextResponse.json({error: 'Error creating quotation' },{status:500});

        }
      }  

}
    



