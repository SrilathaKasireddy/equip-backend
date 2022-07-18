import {client } from "./index.js";

export async function getAllEquipments(request) {
 return await client.db("Equipments")
 .collection("Equipments")
 .find(request.query).toArray();
}