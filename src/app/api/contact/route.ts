import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { message: "Invalid form data", errors: result.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, company, message } = result.data

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured")
      return NextResponse.json(
        { message: "Email service not configured" },
        { status: 500 }
      )
    }

    // Email content
    const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">From your Sonarium AI website</p>
      </div>

      <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px;">Contact Details</h2>

        <div style="margin-bottom: 15px;">
          <strong style="color: #475569;">Name:</strong>
          <span style="color: #1e293b; margin-left: 8px;">${name}</span>
        </div>

        <div style="margin-bottom: 15px;">
          <strong style="color: #475569;">Email:</strong>
          <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; margin-left: 8px;">${email}</a>
        </div>

        <div style="margin-bottom: 15px;">
          <strong style="color: #475569;">Company:</strong>
          <span style="color: #1e293b; margin-left: 8px;">${company}</span>
        </div>
      </div>

      <div style="background: white; border: 1px solid #e2e8f0; padding: 25px; border-radius: 8px;">
        <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 16px;">Message</h3>
        <div style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</div>
      </div>

      <div style="margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px; text-center;">
        <p style="color: #64748b; margin: 0; font-size: 14px;">
          This message was sent from the contact form on sonarium.ai
        </p>
        <p style="color: #64748b; margin: 8px 0 0 0; font-size: 12px;">
          Sent at: ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
    `

    // Send email to your business email
    const { data, error } = await resend.emails.send({
      from: "Contact Form <contact@sonarium.ai>",
      to: ["nicolas@sonarium.ai"],
      subject: `New Contact: ${name} from ${company}`,
      html: emailContent,
      replyTo: email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      )
    }

    // Send confirmation email to the user
    const confirmationEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">We've received your message</p>
      </div>

      <div style="padding: 25px;">
        <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px;">What happens next?</h2>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <ul style="margin: 0; padding-left: 20px; color: #475569; line-height: 1.8;">
            <li>Our team will review your inquiry within 2 business hours</li>
            <li>We'll reach out to discuss your LLM production needs</li>
            <li>If relevant, we'll schedule a free 90-minute production readiness audit</li>
          </ul>
        </div>

        <div style="background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #1e293b; margin: 0 0 10px 0; font-size: 16px;">Your Message:</h3>
          <div style="color: #64748b; font-style: italic; line-height: 1.6; white-space: pre-wrap;">"${message}"</div>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #475569; margin: 0 0 10px 0;">Questions? Reply to this email or contact us directly:</p>
          <p style="margin: 0;">
            <a href="mailto:nicolas@sonarium.ai" style="color: #3b82f6; text-decoration: none;">nicolas@sonarium.ai</a>
          </p>
        </div>
      </div>

      <div style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
        <p style="margin: 0;">Sonarium AI - Transforming LLMs from Demo to Production</p>
        <p style="margin: 4px 0 0 0;">
          <a href="https://sonarium.ai" style="color: #3b82f6; text-decoration: none;">sonarium.ai</a>
        </p>
      </div>
    </div>
    `

    await resend.emails.send({
      from: "Sonarium AI <noreply@sonarium.ai>",
      to: [email],
      subject: "Thanks for contacting Sonarium AI - We'll be in touch soon!",
      html: confirmationEmail,
    })

    console.log("Contact form submission successful:", { name, email, company })

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}