import express from "express";
import  {getAllEquipments} from "../helper.js";
const router =express.Router();

router.get('/', async function (request, response) {
    
    
    const Equipments= await getAllEquipments(request);
    response.send(Equipments);
    })
  

    export const equipmentRouter=router;