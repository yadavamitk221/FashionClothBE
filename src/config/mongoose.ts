import mongoose, { Connection } from "mongoose";

export async function connectToDatabase() {
  mongoose.connect(
    "mongodb+srv://FashionCloth:Cloth123@cluster0.pywxhii.mongodb.net/?retryWrites=true&w=majority"
  );

  const db: Connection = mongoose.connection;

  db.on(
    "error",
    console.error.bind(console, "Error in connecting to the database")
  );

  db.once("open", function () {
    console.log("Connected to database :: Mongodb");
  });  
}
