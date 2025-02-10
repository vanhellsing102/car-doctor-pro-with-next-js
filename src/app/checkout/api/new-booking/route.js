import { connectDB } from "@/lib/connectDB"

export const POST = async(request) =>{
    const newBooking = await request.json();
    const db = await connectDB();
    const bookingCollection = db.collection("bookings");
    try{
        const booking = await bookingCollection.insertOne(newBooking);
        return Response.json({message: "Order Confirmed"});
    }catch(error){
        console.log(error);
    }
}