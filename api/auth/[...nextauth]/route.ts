import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "creds",
            credentials: {
                email: {label: "Email", placeholder: "Email"},
                password: {label: "Password", placeholder: "Hasło"}
            },
            authorize: async  (credentials) => {
                if(!credentials ||!credentials.email ||!credentials.password) {
                    return null;
                }
                const user = users.find((item) => item.email === credentials.email);
                if(user?.password ===credentials.password) {
                    return user;
                }
                return null;
            },
        })
    ],
};
const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}


