import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async(request, {params}) =>{
    const id = params.id;
    const db = await connectDB();
    const bookingCollection = db.collection("bookings");
    try{
        const filter = { _id: new ObjectId(id)}
        const result = await bookingCollection.deleteOne(filter);
        return NextResponse.json({message: "Deleted Successfully", result});
    }catch(error){
        return NextResponse.json({message: "no data"});
    }
}

export const PATCH = async(request, {params}) =>{
    const {date, phone, address} = request.json();
    const db = connectDB();
    const bookingCollection = db.collection("bookings");
    try{
        const filter = { _id: new ObjectId(params.id)};
        const updateDoc = {
            date, phone, address
        }
        const options = {upsert: true};
        const result = await bookingCollection.updateOne(filter, updateDoc, options);
        return Response.json({message: "updated"}, result);
    }catch(error){
        console.log(error);
    }
}