import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';
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
    const { data: existingUser } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    // Insert into Supabase
    const { data, error: supabaseError } = await supabase
      .from('waitlist')
      .insert({
        name,
        email,
        device_type,
        primary_goal: primary_goal || null,
        accountability_interest: accountability_interest || null,
        referral_source: referral_source || null,
      })
      .select()
      .single();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to save your information. Please try again.' },
        { status: 500 }
      );
    }

    // Send thank-you email (don't block on this)
    try {
      const emailHtml = ThankYouEmail({
        name,
        deviceType: device_type,
      });

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'Disciplock <onboarding@resend.dev>',
        to: email,
        subject: "Welcome to Disciplock - You're on the waitlist! 🎯",
        html: emailHtml,
      });
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error('Email sending error:', emailError);
      // Continue - the signup was successful even if email fails
    }

    return NextResponse.json(
      { 
        message: 'Successfully added to waitlist',
        data 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
