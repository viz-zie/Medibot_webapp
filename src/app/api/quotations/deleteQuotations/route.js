import {connect} from '@/dbConfig/dbConfig';
import Quotation from '@/models/quotationsModels';
import { NextResponse } from 'next/server';


connect();
export async function DELETE(request) 
{
  

  //console.log(request)
  const { searchParams } = new URL(request.url);
  const cust = searchParams.get('customerId');
  const order = searchParams.get('orderId');
  //console.log(cust,item);  //null null
  const inputJson = {cust,order}
  console.log(inputJson)
  
  try 
  {
    const deletedQuotation = await Order.deleteOne({
    customerId: cust,
    orderId: order
  });

  console.log("delted quotation",deletedQuotation)
    
    return NextResponse.json(deletedQuotation,{status:200});
  } 
  catch (error) 
  {
    console.error(error);
    return NextResponse.json({error:error.message},{status:500});
  }

  

  
}
