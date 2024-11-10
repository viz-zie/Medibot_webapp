import {connect} from '@/dbConfig/dbConfig';
import Order from '@/models/ordersModels';
import { NextResponse } from 'next/server';


connect();
export async function DELETE(request) 
{
  

  //console.log(request)
  const { searchParams } = new URL(request.url);
  const cust = searchParams.get('customerId');
  const item = searchParams.get('itemId');
  //console.log(cust,item);  //null null
  const inputJson = {cust,item}
  console.log(inputJson)
  
  try 
  {
    const deletedOrder = await Order.deleteOne({
    customerId: cust,
    itemId: item
  });

  console.log("delted order",deletedOrder)
    
    return NextResponse.json(deletedOrder,{status:200});
  } 
  catch (error) {
    console.error(error);
    return NextResponse.json({error:error.message},{status:500});
  }

  

  
}
