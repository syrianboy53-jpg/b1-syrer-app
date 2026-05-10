# مستشارك الأسري في ألمانيا | Familienberater

تطبيق جوال وموقع إلكتروني متكاملين لتقديم استشارات قانونية متخصصة في القانون الأسري بألمانيا.

A mobile app and website providing specialized legal consultations in German family law.

## Features | الميزات

### Mobile App (React Native + Expo)
- **Legal Content** - Comprehensive guides on dealing with Police, Jugendamt, Fines, Prosecutors
- **Consultation Booking** - Book free or paid legal consultations
- **Blog** - Legal articles and analysis
- **User Profiles** - Authentication, consultation history, documents
- **Bilingual** - Full Arabic/German support with RTL layout
- **Offline Access** - Key legal content available offline

### Landing Page (HTML/CSS/JS)
- Responsive design for all screen sizes
- Bilingual (Arabic/German) with dynamic language switching
- Service overview, testimonials, stats
- Contact form for booking consultations
- SEO optimized

## Tech Stack

- **Mobile App**: React Native, Expo, TypeScript
- **Navigation**: React Navigation (Bottom Tabs + Stack)
- **State**: React Context API
- **Storage**: AsyncStorage
- **Landing Page**: HTML5, CSS3, JavaScript
- **Icons**: Ionicons (app), Font Awesome (web)
- **Fonts**: Cairo (Arabic), Inter (German)

## Project Structure

```
family-lawyer-app/
├── App.tsx                    # App entry point
├── src/
│   ├── i18n/                  # Internationalization
│   │   ├── translations.ts   # Arabic/German translations
│   │   └── LanguageContext.tsx # Language provider
│   ├── navigation/
│   │   └── AppNavigator.tsx   # Tab & Stack navigation
│   ├── screens/
│   │   ├── HomeScreen.tsx     # Landing/home screen
│   │   ├── legal/             # Legal content screens
│   │   ├── consultation/      # Booking screens
│   │   ├── blog/              # Blog screens
│   │   └── profile/           # User profile screens
│   ├── components/            # Reusable components
│   ├── data/                  # Legal content & blog data
│   └── utils/                 # Theme & utilities
├── landing-page/
│   ├── index.html             # Web landing page
│   ├── styles.css             # Responsive styles
│   └── script.js              # Language toggle & interactions
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npx expo start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

### Landing Page
Open `landing-page/index.html` in any browser.

## Screenshots

The app features:
- A professional green/gold color scheme
- RTL support for Arabic content
- Bottom tab navigation
- Card-based UI for legal topics
- Consultation booking form
- Blog with article details

## License

MIT
