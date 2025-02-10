import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async() =>{
    const db = await connectDB();
    const serviceCollection = db.collection("services");
    try{
        const services = await serviceCollection.find().toArray();
        return NextResponse.json(services);
    }catch(error){
        return NextResponse.json({message: "no data found"});
    }
}