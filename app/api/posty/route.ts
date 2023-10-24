
import { connectToDatabase } from '@/helpers/server-helpers';
import prisma from '@/prisma';
import { NextResponse } from 'next/server';


export const GET = async (req: Request, res: NextResponse) => {
    try {
        await connectToDatabase();
        const posts = await prisma.post.findMany();
        return NextResponse.json({posts}, {status: 200});
    } catch (error) {
        return NextResponse.json({error:"Server error"}, {status: 500});
    }
    finally {
        await prisma.$disconnect();
    }
};

// export const  POST = async (req: Request, res: NextResponse) => {
//     console.log("POST")
// }