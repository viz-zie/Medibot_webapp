import {connect} from '@/dbConfig/dbConfig';
import Order from '../../../models/orderModel';
import { NextResponse } from 'next/server';


connect();
export default async function handler(request) {
  

  if (request.method === 'DELETE') {
    const { orderId } = req.body;

    // Validate required fields
    if (!orderId) {
      return NextResponse.json({ success: false, error: 'Order ID is required for deleting an order' }, { status: 400 });
    }

    try {
      const deletedOrder = await Order.findOneAndDelete({ orderId });

      if (!deletedOrder) {
        return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
      }

      return NextResponse.json({ success: true, message: 'Order deleted successfully' }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ success: false, error: 'Error deleting order' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false, error: 'Method not allowed' }, { status: 405 });
  }
}
