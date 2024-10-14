import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req) {

    const body = await req.json()
    const {full_name, state_code, state, ppa, cds, phone_number } = body

    try {

        const newCorper = await prisma.corper.create({
            data: {
                full_name: full_name,
                state_code: state_code,
                state: state,
                ppa: ppa,
                cds: cds,
                phone_number: phone_number
            },
        })


        return NextResponse.json({newCorper, message: 'Corper created successfully!'})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error, message: "Something went wrong"})
    }
    
}