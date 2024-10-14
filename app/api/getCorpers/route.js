import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req){

    try {  
        const res = await prisma.corper.findMany()
        return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"})
    }
    
}