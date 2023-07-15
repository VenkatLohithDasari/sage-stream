import { connectToDB } from "@/utils/database";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        connectToDB();

        //Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return new Response("User not found", { status: 404 });
        }

        //check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return new Response("Invalid credentials", { status: 401 });
        }

        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        const response = NextResponse.json({
            message: "User logged in successfully",
            success: true,
        });
        response.cookies.set("token", token, {
            httpOnly: true,
        });

        return response;
    } catch (error) {
        console.log(error);
        return new Response(error.message, { status: 500 });
    }
};
