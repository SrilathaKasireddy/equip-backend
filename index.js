
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
import express from 'express';
import { equipmentRouter } from "./routes/Equipments.js";
import cors from "cors"
dotenv.config();


const app = express()

app.use(cors());

const PORT=process.env.PORT;

app.use(express.json())//it intercepts all post apis & applies express.json()
// const MONGO_URL="mongodb://localhost"
const MONGO_URL=process.env.MONGO_URL;
 async function createConnection(){
  const client =new MongoClient(MONGO_URL);//like dailing a num
   await client.connect();//like call button
   console.log("mongo is connected😊👍");
   return client;
}
 export const client =await createConnection();//top level await 
 //npm run dev have installed this 




app.get('/', function (request, response) {
  response.send("Hello world 🌍🎉🎉🎉")
})



app.use("/Equipments",equipmentRouter)


app.listen(PORT,()=>console.log(`App started in ${PORT}`));






