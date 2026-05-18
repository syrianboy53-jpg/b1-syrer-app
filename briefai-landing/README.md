# BriefAI Landing Page

Professional landing page for BriefAI — an AI-powered tool that analyzes official German government letters.

## Features

- **Bilingual**: German (default) and Arabic with full RTL support
- **Responsive**: Mobile-first design with Tailwind CSS
- **Landing Page Sections**: Hero, Problem, Solution, Features, Trust, Pilot registration, FAQ, Footer
- **Admin Dashboard**: View messages, pilot registrations, and reply to inquiries
- **API Routes**: Contact form, pilot registration, admin data management
- **Local Storage**: JSON file-based data storage (easily replaceable with a database)

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **i18next** for internationalization
- **TypeScript**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
cd briefai-landing
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build

```bash
npm run build
npm start
```

### Lint & Type Check

```bash
npm run lint
npm run typecheck
```

## Project Structure

```
briefai-landing/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout with i18n
│   ├── globals.css              # Global styles
│   ├── admin/
│   │   ├── layout.tsx           # Admin layout with sidebar
│   │   ├── page.tsx             # Dashboard overview
│   │   ├── messages/page.tsx    # Messages management
│   │   └── pilot-registrations/page.tsx  # Pilot registrations
│   └── api/
│       ├── contact/route.ts     # Contact form API
│       ├── pilot/route.ts       # Pilot registration API
│       └── admin/
│           ├── messages/route.ts         # Get messages
│           ├── pilot-registrations/route.ts  # Get registrations
│           └── reply/route.ts            # Reply to messages
├── components/
│   ├── Navigation.tsx           # Nav bar with language toggle
│   ├── Hero.tsx                 # Hero section
│   ├── Problem.tsx              # Problem section
│   ├── Solution.tsx             # Solution steps
│   ├── Features.tsx             # Features grid
│   ├── Trust.tsx                # Trust & security section
│   ├── Pilot.tsx                # Pilot registration form
│   ├── FAQ.tsx                  # FAQ accordion
│   ├── Footer.tsx               # Footer
│   └── admin/
│       ├── Sidebar.tsx          # Admin sidebar navigation
│       ├── MessageList.tsx      # Messages with reply functionality
│       └── PilotList.tsx        # Pilot registrations table
├── locales/
│   ├── de.json                  # German translations
│   └── ar.json                  # Arabic translations
├── lib/
│   ├── i18n.ts                  # i18next configuration
│   └── I18nProvider.tsx         # React i18n provider
├── data/
│   ├── messages.json            # Messages storage
│   └── pilot-registrations.json # Pilot registrations storage
└── public/                      # Static assets
```

## Customization

### Colors

Primary colors are defined in `tailwind.config.js`:
- Primary Blue: `#2563EB`
- Dark Blue: `#0F172A`

### Fonts

- **German**: Inter (Google Fonts)
- **Arabic**: Cairo (Google Fonts)

### Adding Images/Video

Place media files in the `public/` directory and reference them in components.

## Admin Dashboard

Access the admin panel at `/admin`. Features:
- Dashboard with statistics overview
- Messages list with reply functionality
- Pilot registrations table with status tracking

## Deployment

The project is ready for deployment on Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
npm start
```

## License

Private - All rights reserved.
