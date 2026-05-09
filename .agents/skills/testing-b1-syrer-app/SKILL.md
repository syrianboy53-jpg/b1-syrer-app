---
name: testing-b1-syrer-app
description: Test the B1 Syrer React Native app end-to-end via Expo web mode. Use when verifying UI, navigation, quiz flows, or interactive features.
---

# Testing B1 Syrer App

## Prerequisites
- Node.js and npm installed
- Web dependencies installed: `npx expo install react-dom react-native-web @expo/metro-runtime`

## Setup
1. Navigate to the project root
2. Run `npm install` to install dependencies
3. Start the Expo web server: `npx expo start --web --port 8081`
4. Wait for the bundler to finish (look for "Bundled" message in output)
5. Open `http://localhost:8081` in Chrome

## Key Test Flows

### Home Screen
- Verify header shows "B1 Syrer" title with German flag emoji
- Stats row should display 460+, 7, 350+, 100%
- All 13 feature cards should be visible with icons and Arabic text
- Footer text should be visible at the bottom

### Bottom Tab Navigation
- 4 tabs: Home (الرئيسية), Leben (الجنسية), Planner (الخطة), Achievements (إنجازاتي)
- Each tab should render its corresponding screen content

### Leben Quiz Flow (most interactive)
1. Click Leben tab > Click "جميع الأسئلة" card
2. Answer all 10 questions (currently only 10 sample questions)
3. Verify progress bar advances, correct/wrong highlighting works
4. Result screen should show score as X/10 with percentage
5. "العودة للأقسام" button should return to categories

### Grammar Screen
- Has two tabs: القواعد (Grammar) and المفردات (Vocabulary)
- Grammar tab: 7 rules with expandable details showing explanation + examples
- Vocabulary tab: 5 categories with expandable word lists (German/Arabic pairs)

### Study Planner
- 7 day cards (Monday-Sunday) with 3 tasks each (21 total)
- Clicking a task toggles checkbox with checkmark + strikethrough
- Progress bar and counter (X/21) should update in real-time

### Level Test
- Intro screen with "ابدأ الاختبار" button
- 40 questions with A1/A2/B1 level tags
- Correct answer highlights green, wrong highlights red
- Result screen shows determined level

### RTL Layout
- Arabic text should be right-aligned throughout
- German text in quiz options should remain readable (not reversed)

## Known Limitations
- Only 10 sample Leben questions are included (UI references 460+)
- German umlauts might be ASCII-escaped in some data files
- AsyncStorage is a dependency but persistence is not wired up yet
- Web testing does not cover native Android features (gestures, system back button)
- Default Expo placeholder icons are used (not branded)

## Troubleshooting
- If Expo web fails to start, ensure `react-dom`, `react-native-web`, and `@expo/metro-runtime` are installed
- If the app shows a blank screen, check the browser console for errors
- No Android emulator is available on the Devin VM; use Expo web mode for visual testing
