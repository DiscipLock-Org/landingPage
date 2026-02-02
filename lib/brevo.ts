/**
 * Send email using Brevo REST API
 * This uses the REST API directly to avoid SDK module resolution issues in Next.js
 */
export async function sendBrevoEmail(
  to: { email: string; name?: string },
  subject: string,
  htmlContent: string,
  sender?: { name: string; email: string }
) {
  const brevoApiKey = process.env.BREVO_API_KEY;

  if (!brevoApiKey) {
    throw new Error('Missing BREVO_API_KEY environment variable');
  }

  // Parse the from email (format: "Name <email@domain.com>" or just "email@domain.com")
  const fromEmail = process.env.BREVO_FROM_EMAIL || 'Disciplock <noreply@smtp-relay.brevo.com>';
  const fromMatch = fromEmail.match(/^(.+?)\s*<(.+?)>$|^(.+)$/);
  const senderName = sender?.name || fromMatch?.[1]?.trim() || fromMatch?.[3]?.split('@')[0] || 'Disciplock';
  const senderEmail = sender?.email || fromMatch?.[2]?.trim() || fromMatch?.[3]?.trim() || 'noreply@smtp-relay.brevo.com';

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': brevoApiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [to],
      subject,
      htmlContent,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorMessage = `Brevo API error: ${response.status} ${response.statusText}`;
    
    // Parse error response for more helpful messages
    try {
      const errorData = JSON.parse(errorText);
      if (errorData.message) {
        errorMessage += ` - ${errorData.message}`;
      }
      // Check for sender validation error
      if (errorText.includes('sender') && errorText.includes('not valid')) {
        errorMessage += '\n\nPlease verify your sender email in Brevo dashboard or update BREVO_FROM_EMAIL to use a verified sender address.';
      }
    } catch {
      // If JSON parsing fails, use the raw error text
      if (errorText) {
        errorMessage += ` - ${errorText}`;
      }
    }
    
    throw new Error(errorMessage);
  }

  return response.json();
}
