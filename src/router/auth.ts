import express from "express";
const router = express.Router();
import {createUser, loginUser } from "../controller/auth.controller";

router.post("/signup", createUser)
      .post("/login", loginUser)

export default router;
