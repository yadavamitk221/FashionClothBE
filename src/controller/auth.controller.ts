import express, { Request, Response } from "express";
import User, { IUser } from "../model/User";
import bcrypt from "bcrypt";

interface User {
  email: string;
  password: string;
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check if email is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already taken" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser: IUser = new User({
      email,
      password: hashedPassword,
    });

    // Save the user to the database


    return res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    console.log(req.body);

    // Check if user with the provided email exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password in the database
    console.log("Comparing the data",bcrypt.compare(password, existingUser.password));
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  
    // If the credentials are valid, you can implement token generation and authentication logic here

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};




