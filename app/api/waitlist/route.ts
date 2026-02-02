import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/neon';
import { sendBrevoEmail } from '@/lib/brevo';
import { ThankYouEmail } from '@/emails/thank-you';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, device_type, primary_goal, accountability_interest, referral_source } = body;

    // Validate required fields
    if (!name || !email || !device_type) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and device_type are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate device_type
    if (device_type !== 'ios' && device_type !== 'android') {
      return NextResponse.json(
        { error: 'Invalid device_type. Must be "ios" or "android"' },
        { status: 400 }
      );
    }

    // Check for duplicate email
    try {
      const existingUser = await sql`
        SELECT email FROM waitlist WHERE email = ${email} LIMIT 1
      `;

      // If user exists, return error
      if (existingUser && existingUser.length > 0) {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        );
      }
    } catch (checkError: any) {
      console.error('Error checking for duplicate email:', checkError);
      return NextResponse.json(
        { error: 'Failed to verify email. Please try again.' },
        { status: 500 }
      );
    }

    // Insert into Neon database
    try {
      const data = await sql`
        INSERT INTO waitlist (name, email, device_type, primary_goal, accountability_interest, referral_source)
        VALUES (${name}, ${email}, ${device_type}, ${primary_goal || null}, ${accountability_interest || null}, ${referral_source || null})
        RETURNING *
      `;

      // Send thank-you email (don't block on this)
      try {
        const emailHtml = ThankYouEmail({
          name,
          deviceType: device_type,
        });

        await sendBrevoEmail(
          {
            email: email,
            name: name,
          },
          "Welcome to Disciplock - You're on the waitlist! 🎯",
          emailHtml
        );
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error('Email sending error:', emailError);
        // Continue - the signup was successful even if email fails
      }

      return NextResponse.json(
        { 
          message: 'Successfully added to waitlist',
          data: data[0]
        },
        { status: 201 }
      );
    } catch (dbError: any) {
      // Handle unique constraint violation (duplicate email)
      if (dbError.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        );
      }

      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save your information. Please try again.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
