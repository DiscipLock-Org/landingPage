# Disciplock Landing Page

A professional, conversion-optimized landing page for Disciplock - a focus and accountability app that helps users set limits on distracting apps and complete meaningful tasks before unlocking.

## Features

- **Modern UI/UX**: Professional design with smooth animations and micro-interactions
- **Waitlist Form**: Comprehensive signup form collecting user information
- **Neon Integration**: Stores waitlist signups in Neon (serverless Postgres) database
- **Email Notifications**: Sends thank-you emails via Resend when users sign up
- **Responsive Design**: Fully responsive, mobile-first design
- **Accessibility**: WCAG 2.1 AA compliant

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Backend**: Neon (serverless Postgres database)
- **Email**: Resend (transactional emails)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A Neon account and project
- A Resend account and API key

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```env
# Neon Database Configuration
DATABASE_URL=postgresql://user:password@host/database?sslmode=require

# Resend Configuration
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=Disciplock <noreply@yourdomain.com>
```

3. Set up Neon database:

Run the following SQL in your Neon SQL editor to create the waitlist table:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  device_type TEXT NOT NULL CHECK (device_type IN ('ios', 'android')),
  primary_goal TEXT,
  accountability_interest TEXT,
  referral_source TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);
```

4. Configure Resend:

- Sign up for a Resend account at https://resend.com
- Get your API key from the dashboard
- If you have a custom domain, verify it in Resend. Otherwise, you can use Resend's default domain for testing.

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## Project Structure

```
landingPage/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts     # API route for Neon database integration
│   └── globals.css          # Global styles + Tailwind
├── components/
│   ├── Hero.tsx             # Hero section with headline
│   ├── Features.tsx         # Key features showcase
│   ├── WaitlistForm.tsx     # Signup form component
│   ├── Logo.tsx             # Disciplock logo component
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       └── RadioGroup.tsx
├── lib/
│   ├── neon.ts              # Neon database client configuration
│   └── resend.ts            # Resend email client configuration
├── emails/
│   └── thank-you.tsx        # Thank-you email template
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Waitlist Form Fields

### Required Fields
- **Name**: User's full name
- **Email**: Email address (validated)
- **Device Type**: iOS or Android

### Optional Fields
- **Primary Goal**: Why they want to use Disciplock (faith, discipline, doom-scrolling, or custom)
- **Accountability Partner Interest**: Interest level in the accountability partner feature
- **Referral Source**: How they heard about the app

## Email Integration

When a user successfully signs up for the waitlist, they automatically receive a thank-you email via Resend. The email includes:
- Personalized greeting
- Confirmation of their signup
- Information about what to expect
- Overview of Disciplock's features

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in Vercel's dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Make sure to set all environment variables in your deployment platform.

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The current theme uses:
- Primary: Blue shades (trust, security)
- Accent: Gray/silver shades (from logo)

### Content

- Update hero section text in `components/Hero.tsx`
- Modify features in `components/Features.tsx`
- Customize email template in `emails/thank-you.tsx`

## License

This project is private and proprietary.

## Support

For questions or issues, please contact the development team.
