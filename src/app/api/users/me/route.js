import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { connectToDB } from "@/utils/database";

export const GET = async (req, res) => {
    try {
        const userId = await getDataFromToken(req);
        await connectToDB();
        const user = await User.findById(userId.id, { _id: 1, username: 1, email: 1, profilePicture: 1 });
        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        return new Response(String(error.message), { status: 500 });
    }
};
