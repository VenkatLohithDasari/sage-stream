import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "sage_anime",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;

        console.log("MongoDB is Connected");
    } catch (error) {
        console.log(error);
    }
};
