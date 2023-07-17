import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/utils/database";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

const options = {
    pages: {
        signIn: "/auth/signin",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@email.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password",
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                await connectToDB();

                const user = await User.findOne(
                    { email: credentials.email },
                    "_id username password email profilePicture isAdmin"
                );

                if (
                    !user ||
                    !(await bcrypt.compare(credentials.password, user.password))
                ) {
                    return null;
                }

                let role = user.isAdmin ? "admin" : "user";

                const userData = {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    profilePicture: user.profilePicture,
                    role: role,
                };

                return userData;
            },
        }),
    ],
    callbacks: {
        async jwt({ user, token }) {
            if (user) {
                // Note that this if condition is needed
                token.user = { ...user };
            }
            return token;
        },
        async session({ session, token }) {
            if (token?.user) {
                // Note that this if condition is needed
                session.user = token.user;
            }
            return session;
        },
    },
};

export default options;
