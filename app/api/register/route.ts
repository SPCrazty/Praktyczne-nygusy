import prisma from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/helpers/server-helpers";
import { Dai_Banna_SIL } from "next/font/google";
import * as z from "zod";

const UserSchema = z
  .object({
    name: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  });

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const { name, email, password } =UserSchema.parse(body);
        if (!name ||!email ||!password) {
            return NextResponse.json({message:"Invalid data"}, { status: 422});
        }
        const existingEmail = await prisma.user.findUnique({
            where: {email: email}
        })
        if (existingEmail) {
            return NextResponse.json({error: "Email already exists"}, {status: 400});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectToDatabase();
        const user = await prisma.user.create({data: {email,name, hashedPassword}});
        return NextResponse.json({ user }, {status: 201});
    }catch (error) {
        console.log(error);
        return NextResponse.json({message:"Server Error"}, { status: 422});
    }finally {
        await prisma.$disconnect();
    }
    
};