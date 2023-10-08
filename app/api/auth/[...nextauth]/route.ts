
import { connectToDatabase } from "@/helpers/server-helpers";
import prisma from "@/prisma";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "creds",
            credentials: {
                email: {label: "Email", placeholder: "Podaj swój adres email"},
                password: {label: "Password", placeholder: "Haslo"}
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }
                try {
                    await connectToDatabase();
                    const user = await prisma.user.findFirst({where: {email: credentials.email}});
                    if (!user?.hashedPassword) {
                        return null;
                    }
                    const isMatch = await bcrypt.compare(credentials.password, user.hashedPassword);
                    if (isMatch) {
                        return user;
                    }
                    return null;
                } catch (error) {
                    console.log(error);
                    return null;
                }
                finally {
                    await prisma.$disconnect();
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}


