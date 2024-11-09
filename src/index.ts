import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import UserController from "./controllers/UserController";

const app = express();
const prisma = new PrismaClient();


app.use(express.json());
// app.use(router);
app.use(cors());

app.get("/", UserController.getUsers);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
