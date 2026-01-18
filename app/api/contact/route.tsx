import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, phone, email, message } = body

    // For now, we'll log the data and return success
    // In production, you would integrate with an email service like Resend, SendGrid, or AWS SES

    console.log("[v0] Contact form submission:", {
      firstName,
      lastName,
      phone,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@flybydeniz.com',
    //   to: 'ayhan@flybydeniz.com',
    //   subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // })

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting us! We will get back to you soon.",
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message. Please try again." }, { status: 500 })
  }
}
