import { MongoClient, ServerApiVersion } from "mongodb";
let db;
export const connectDB = async() =>{
    if(db){
        return db;
    }
    try{
        const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USER_ID}:${process.env.NEXT_PUBLIC_MONGODB_USER_PASSWORD}@cluster0.wnyje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true
            }
        });
        db = client.db('carDoctorPro');
        return db;
    }catch(error){
        console.log(error);
    }
}