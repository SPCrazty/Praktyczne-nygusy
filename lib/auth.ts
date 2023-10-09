import { bcrypt } from 'bcrypt';
import { User } from "next-auth"
import prisma from "@/prisma";

type LoginFn  = (email: string, password: string) => Promise<User>;

export const login: LoginFn = async (email, password) =>{
    const user = await prisma.user.findFirst({
        where: {
            email: email,
        },
    })
    if(user && await bcrypt.compare(password, user.hashedPassword)){
        user.hashedPassword = ""
        return user;
    }else throw new Error("Brak użytkownika o takim adresie")
}
