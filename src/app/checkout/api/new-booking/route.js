import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const POST = async(request) =>{
    const newBooking = await request.json();
    const db = await connectDB();
    const bookingCollection = db.collection("bookings");
    try{
        const booking = await bookingCollection.insertOne(newBooking);
        return NextResponse.json({message: "Order Confirmed"});
    }catch(error){
        return NextResponse.json({message: "no data"})
    }
}