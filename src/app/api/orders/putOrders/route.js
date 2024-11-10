import {connect} from '@/dbConfig/dbConfig';
import Order from '@/models/ordersModels';
import { NextResponse } from 'next/server';

connect();
export async function PUT(request) 
{
  const body = await request.json(); // Parse JSON body
  const { customerId, orderStatus } = body;

  console.log("orderstat = ",orderStatus)
  // Check if required parameters are provided
  if (!customerId || !orderStatus) {
    return NextResponse.json(
      { success: false, message: 'Customer ID and new order status are required' },
      { status: 400 }
    );
  }

  try {
    // Update all `orderStatus` fields in the `orders` array for the given `customerId`
    const result = await Order.updateMany(
      {customerId: customerId },
      { $set: { "orderStatus": orderStatus } }
    );

    if (result.nModified === 0) {
      return NextResponse.json(
        { success: false, message: 'No orders found for this customer' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Order status updated for all orders of the customer' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }

  
}
