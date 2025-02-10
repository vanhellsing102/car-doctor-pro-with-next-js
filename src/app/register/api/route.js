import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async(request) =>{
    const user = await request.json();
    try{
        const db = await connectDB();
        const userCollection = db.collection('users');
        const exitsUser = await userCollection.findOne({email: user.email});
        if(exitsUser){
            return NextResponse.json({message: "User Already Exits"}, {status: 403});
        }
        const hashedPassword = bcrypt.hashSync(user.password, 10);
        const res = await userCollection.insertOne({...user, password: hashedPassword});
        return NextResponse.json({message: "User Created"}, {status: 200}, res);
    }catch(error){
     return NextResponse.json({message: "Something Went Wrong", error}, {status: 500});
    }
}