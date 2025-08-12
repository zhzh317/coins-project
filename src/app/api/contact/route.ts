import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

// Define the schema for the contact form submission
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(), // Phone is optional
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Invalid input', errors: parsed.error.format() },
        { status: 400 }
      )
    }

    const { name, email, phone, message } = parsed.data

    // Save the submission to the database
    const newSubmission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    })

    return NextResponse.json(
      {
        message: 'Thank you! Your message has been sent successfully.',
        submission: newSubmission,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { message: 'An internal server error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
