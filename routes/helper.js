import {client } from "../index.js";

export async function getAllEquipments(request) {
 return await client.db("Equipments")
 .collection("Equipments")
 .find(request.query).toArray();
}

export async function getUserByName(username) {
 //db.users.findOne({username: username });
return await client.db("users").collection("users").
findOne({ username: username });
}

export async function createUser(data) {
 //db.users.insertOne(data);
return await client.db("users").collection("users").insertOne(data);
}