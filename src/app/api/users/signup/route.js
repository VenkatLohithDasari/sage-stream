import { connectToDB } from "@/utils/database";
import User from "@/models/userModel";
import ProfilePics from "@/models/profilePicsModel";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        console.log(reqBody);

        connectToDB();

        //Check if user already exists
        const user = await User.findOne({ email: email });

        if (user) {
            return new Response("User already exists", { status: 400 });
        }

        //Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //get one random profile pic to assign one to user
        const profilePic = await ProfilePics.findOne({ name: "profilePics" });
        const onePic =
            profilePic.pics[Math.floor(Math.random() * profilePic.pics.length)];

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            profilePicture: onePic,
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        return new Response("User created successfully", { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(error.message, { status: 500 });
    }
};
