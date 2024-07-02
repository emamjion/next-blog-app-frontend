import mongoose from "mongoose";


export const ConnectDB = async() => {
    await mongoose.connect('mongodb+srv://blogAppDB:SULD3TVe04pA54kr@cluster0.bjkyc58.mongodb.net/next-blog-app');
    console.log('DB Connected');
};