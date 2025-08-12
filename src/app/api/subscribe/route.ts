import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

// Define the schema for the request body
const subscribeSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = subscribeSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Invalid input', errors: parsed.error.format() },
        { status: 400 }
      )
    }

    const { email } = parsed.data

    // Check if the email is already subscribed
    const existingSubscription = await prisma.subscription.findUnique({
      where: { email },
    })

    if (existingSubscription) {
      return NextResponse.json(
        { message: 'This email is already subscribed.' },
        { status: 409 } // 409 Conflict
      )
    }

    // Create the new subscription
    const newSubscription = await prisma.subscription.create({
      data: {
        email,
      },
    })

    return NextResponse.json(
      {
        message: 'Thank you for subscribing!',
        subscription: newSubscription,
      },
      { status: 201 } // 201 Created
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { message: 'An internal server error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
