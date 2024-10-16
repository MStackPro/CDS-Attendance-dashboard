import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function DELETE(req, context){

    const id = context.params.id

    try {  
        const res = await prisma.corper.delete({
            where: {
                parent_id: id
            }
        })
        return NextResponse.json({id: id})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"})
    }
    
}