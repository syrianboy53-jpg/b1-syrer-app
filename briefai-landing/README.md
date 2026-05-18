# BriefAI Landing Page

صفحة هبوط احترافية لمشروع BriefAI - تطبيق يساعد على فهم الرسائل الرسمية الألمانية باستخدام الذكاء الاصطناعي.

Professional landing page for the BriefAI project – an AI-powered app that helps understand official German letters.

## المميزات / Features

- 🌐 دعم ثنائي اللغة (ألماني/عربي) مع RTL
- 📱 تصميم Mobile First متجاوب
- 🎨 تصميم احترافي بألوان متناسقة
- 📝 نموذج تسجيل Pilot يعمل بالكامل
- 👨‍💼 Dashboard للمدير لإدارة الرسائل والتسجيلات
- 🔒 API Routes آمنة
- 💾 نظام تخزين بسيط (JSON files)

## التقنيات / Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** Inter (German) / Cairo (Arabic)
- **Storage:** JSON file-based storage

## التثبيت / Installation

```bash
# انتقل إلى مجلد المشروع
cd briefai-landing

# تثبيت المكتبات
npm install

# تشغيل في وضع التطوير
npm run dev

# بناء المشروع للإنتاج
npm run build

# تشغيل في وضع الإنتاج
npm start
```

## هيكل المشروع / Project Structure

```
briefai-landing/
├── app/
│   ├── layout.tsx          # Layout الرئيسي
│   ├── page.tsx            # الصفحة الألمانية
│   ├── globals.css         # الأنماط العامة
│   ├── ar/
│   │   └── page.tsx        # الصفحة العربية
│   ├── admin/
│   │   ├── page.tsx        # Dashboard
│   │   ├── messages/       # إدارة الرسائل
│   │   └── pilot/          # إدارة التسجيلات
│   └── api/
│       ├── contact/        # API التواصل
│       ├── pilot/          # API التسجيل
│       └── admin/          # API المدير
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── Features.tsx
│   ├── Trust.tsx
│   ├── Pilot.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   └── admin/
│       ├── AdminLayout.tsx
│       ├── Sidebar.tsx
│       ├── Stats.tsx
│       ├── MessageList.tsx
│       └── PilotList.tsx
├── lib/
│   ├── storage.ts          # نظام التخزين
│   └── translations.ts     # نظام الترجمة
├── locales/
│   ├── de.ts               # الترجمات الألمانية
│   └── ar.ts               # الترجمات العربية
├── data/
│   ├── messages.json       # تخزين الرسائل
│   └── pilot-registrations.json
└── public/                 # الملفات الثابتة
```

## الألوان / Color Palette

| Color | Hex |
|-------|-----|
| Primary Blue | `#2563EB` |
| Dark Blue | `#0F172A` |
| Light Blue | `#EFF6FF` |
| White | `#FFFFFF` |
| Soft Gray | `#F8FAFC` |
| Text Dark | `#111827` |
| Text Gray | `#6B7280` |
| Success Green | `#16A34A` |
| Warning Orange | `#F59E0B` |
| Danger Red | `#DC2626` |

## الروابط / URLs

- `/` – الصفحة الرئيسية (ألماني)
- `/ar` – الصفحة العربية
- `/admin` – Dashboard المدير
- `/admin/messages` – إدارة الرسائل
- `/admin/pilot` – إدارة تسجيلات Pilot

## ملاحظات / Notes

- المشروع مستقل تماماً ويمكن نقله بسهولة
- الكود نظيف ومنظم
- يمكن إضافة صور وفيديوهات لاحقاً في مجلد `/public`
- نظام التخزين بسيط (JSON files) ويمكن استبداله بقاعدة بيانات لاحقاً
