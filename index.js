
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
import express from 'express';
import { equipmentRouter } from "./routes/Equipments.js";
import cors from "cors"
import { usersRouter } from './routes/users.js';
dotenv.config();


const app = express()

app.use(cors());

const PORT=process.env.PORT;

app.use(express.json())
const MONGO_URL=process.env.MONGO_URL;
 async function createConnection(){
  const client =new MongoClient(MONGO_URL);
   await client.connect();
   console.log("mongo is connected😊👍");
   return client;
}
 export const client =await createConnection();




app.get('/', function (request, response) {
  response.send("Hello world 🌍🎉🎉🎉")
})



app.use("/Equipments",equipmentRouter)
app.use("/users",usersRouter)


app.listen(PORT,()=>console.log(`App started in ${PORT}`));






