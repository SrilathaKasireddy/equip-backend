import express from "express";
import  {getAllEquipments} from "./helper.js";
import { auth } from "../middleware/auth.js";
const router =express.Router();

router.get('/', async function (request, response) {
    
    
    const Equipments= await getAllEquipments(request);
    response.send(Equipments);
    })
  

    export const equipmentRouter=router;