# Quick Setup Checklist

Follow these steps to get your Disciplock landing page up and running:

## ✅ Prerequisites
- [ ] Node.js 18+ installed
- [ ] Neon account created
- [ ] Resend account created

## ✅ Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Neon
- [ ] Create a new Neon project at https://neon.tech
- [ ] Go to SQL Editor in Neon dashboard
- [ ] Copy and paste the contents of `neon-setup.sql`
- [ ] Run the SQL script
- [ ] Go to Connection Details
- [ ] Copy your connection string (DATABASE_URL)

### 3. Set Up Resend
- [ ] Sign up at https://resend.com
- [ ] Get your API key from the dashboard
- [ ] (Optional) Verify your domain for custom email addresses
- [ ] Note: For testing, you can use Resend's default domain

### 4. Configure Environment Variables
- [ ] Create `.env.local` file in the root directory
- [ ] Add the following variables:

```env
DATABASE_URL=postgresql://user:password@host/database?sslmode=require
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=Disciplock <noreply@yourdomain.com>
```

**Note**: For testing with Resend, you can use:
```
RESEND_FROM_EMAIL=Disciplock <onboarding@resend.dev>
```

### 5. Run Development Server
```bash
npm run dev
```

### 6. Test the Landing Page
- [ ] Open http://localhost:3000
- [ ] Test the waitlist form submission
- [ ] Verify data appears in Neon dashboard
- [ ] Check your email for the thank-you message

## ✅ Verification Checklist

- [ ] Landing page loads without errors
- [ ] Hero section displays correctly
- [ ] Features section is visible
- [ ] Waitlist form is functional
- [ ] Form validation works (try submitting empty form)
- [ ] Successful submission shows success message
- [ ] Data appears in Neon `waitlist` table
- [ ] Thank-you email is received

## 🚀 Deployment

When ready to deploy:

1. **Vercel (Recommended)**
   - Push code to GitHub
   - Import repository in Vercel
   - Add environment variables in Vercel dashboard
   - Deploy!

2. **Other Platforms**
   - Ensure all environment variables are set
   - Build command: `npm run build`
   - Start command: `npm start`

## 📝 Notes

- The email sending is non-blocking - if it fails, the signup still succeeds
- Duplicate emails are prevented at the database level
- All form fields are validated on both client and server side
- The landing page is fully responsive and mobile-friendly

## 🆘 Troubleshooting

**Issue**: "Missing DATABASE_URL environment variable"
- **Solution**: Make sure `.env.local` exists and has the DATABASE_URL variable set to your Neon connection string

**Issue**: "Failed to save your information"
- **Solution**: Check that the waitlist table exists in your Neon database (see `neon-setup.sql`)

**Issue**: Email not received
- **Solution**: Check Resend dashboard for delivery status, verify API key is correct

**Issue**: Form validation errors
- **Solution**: Make sure all required fields are filled (name, email, device type)
