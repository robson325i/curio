import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                }
            }
        }),
    ],
    session: {
        updateAge: 60 * 10,
        maxAge: 60 * 30,
        strategy: "jwt"
    },
    secret: process.env.JWT_SECRET,
};
