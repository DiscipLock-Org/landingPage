import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Link,
  Hr,
} from '@react-email/components';

interface ThankYouEmailProps {
  name: string;
  deviceType: 'ios' | 'android';
}

export function ThankYouEmail({ name, deviceType }: ThankYouEmailProps): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Disciplock</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #030712;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #111827; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); border: 1px solid #1f2937;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">Disciplock</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; color: #f3f4f6; font-size: 24px; font-weight: bold;">
                Welcome, ${name}! 🎉
              </h2>
              
              <p style="margin: 0 0 20px; color: #d1d5db; font-size: 16px; line-height: 1.6;">
                Thank you for joining the Disciplock waitlist! We're excited to have you on this journey toward better focus and discipline.
              </p>
              
              <p style="margin: 0 0 20px; color: #d1d5db; font-size: 16px; line-height: 1.6;">
                You've signed up for <strong style="color: #f3f4f6;">${deviceType === 'ios' ? 'iOS' : 'Android'}</strong> notifications. We'll let you know as soon as the app is available for your device.
              </p>
              
              <div style="background-color: #1e293b; border-left: 4px solid #2563eb; padding: 20px; margin: 30px 0; border-radius: 4px;">
                <h3 style="margin: 0 0 10px; color: #60a5fa; font-size: 18px; font-weight: bold;">
                  What to Expect
                </h3>
                <ul style="margin: 0; padding-left: 20px; color: #cbd5e1; font-size: 15px; line-height: 1.8;">
                  <li>Early access when we launch</li>
                  <li>Updates on our progress and new features</li>
                  <li>Tips and resources for building better focus</li>
                </ul>
              </div>
              
              <p style="margin: 30px 0 20px; color: #d1d5db; font-size: 16px; line-height: 1.6;">
                <strong style="color: #f3f4f6;">What is Disciplock?</strong><br>
                Disciplock is a focus and accountability app that helps you set limits on distracting apps. Before you can unlock an app, you must complete a meaningful task—whether that's reading a Bible verse, meditating, reflecting, or another discipline-building activity. And here's the unique part: only your accountability partner can approve early breaks, creating real social accountability.
              </p>
              
              <div style="text-align: center; margin: 40px 0;">
                <a href="#" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                  Learn More About Disciplock
                </a>
              </div>
              
              <p style="margin: 30px 0 0; color: #9ca3af; font-size: 14px; line-height: 1.6;">
                Have questions? Just reply to this email—we'd love to hear from you!
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #0f172a; border-radius: 0 0 12px 12px; border-top: 1px solid #1f2937;">
              <p style="margin: 0 0 10px; color: #9ca3af; font-size: 14px; text-align: center;">
                <strong style="color: #f3f4f6;">Disciplock</strong><br>
                Lock Your Distractions. Unlock Your Focus.
              </p>
              <p style="margin: 10px 0 0; color: #6b7280; font-size: 12px; text-align: center;">
                You're receiving this email because you signed up for the Disciplock waitlist.<br>
                If you no longer wish to receive these emails, you can 
                <a href="#" style="color: #60a5fa; text-decoration: underline;">unsubscribe here</a>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
