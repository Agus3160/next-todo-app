import mongoose from "mongoose";

const connectMongoFB = async () => {
    try{
        if(mongoose.connection.readyState){
            console.log('MongoDB is already connected')
            return;
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB")
    } catch(error){
        console.log(error)
    }
}

export default connectMongoFB