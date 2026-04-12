# MasterDash — Tailwind CSS v4 + React 19

## টেক স্ট্যাক
- **React 19** + **React DOM 19**
- **Tailwind CSS v4** (`@tailwindcss/vite` প্লাগিন)
- **React Router v7**
- **Lucide React** (আইকন)
- **Chart.js 4** (CDN)
- **Vite** (বিল্ড টুল)

---

## ফাইল স্ট্রাকচার

```
src/
├── main.jsx                   ← Entry point (BrowserRouter এখানে)
├── App.jsx                    ← Dark mode class toggle + Routes
├── index.css                  ← Tailwind v4 @import
├── components/
│   ├── DashboardLayout.jsx    ← Sidebar + Topbar + Outlet
│   ├── Sidebar.jsx            ← ড্রপডাউন মেনু, প্রোফাইল, থিম টগল
│   └── Topbar.jsx             ← নোটিফিকেশন, থিম, ল্যান্ডিং বাটন
└── pages/
    ├── LandingPage.jsx        ← পূর্ণ ল্যান্ডিং পেজ (স্ক্রোলেবল)
    ├── DashboardHome.jsx      ← মেট্রিক্স + চার্ট + অ্যাক্টিভিটি
    ├── UserManagement.jsx     ← পূর্ণ CRUD + ফিল্টার + মোডাল
    └── ContentManagement.jsx  ← CMS + লিস্ট/গ্রিড ভিউ + CRUD
```

---

## সেটআপ

```bash
# ১. তোমার প্রজেক্টের src/ ফোল্ডারে ফাইলগুলো রাখো

# ২. package.json চেক করো — এগুলো থাকতে হবে:
# "@tailwindcss/vite": "^4.x"
# "lucide-react": "^0.x"
# "react-router": "^7.x"
# "tailwindcss": "^4.x"

# ৩. vite.config.js আপডেট করো:
# import tailwindcss from '@tailwindcss/vite'
# plugins: [react(), tailwindcss()]

# ৪. src/index.css এ শুধু এটুকু:
# @import "tailwindcss";

# ৫. চালু করো
npm run dev
```

---

## Dark Mode কাজ করার নিয়ম

`App.jsx` এ `<div className={dark ? 'dark' : ''}>` র‍্যাপার আছে।
Tailwind v4 তে `index.css` এ এই লাইন লাগে:
```css
@variant dark (&:where(.dark, .dark *));
```

এরপর যেকোনো জায়গায় `dark:bg-slate-900` এভাবে ব্যবহার করো।

---

## নতুন পেজ যোগ করা

**1. পেজ তৈরি করো:**
```jsx
// src/pages/MyPage.jsx
export default function MyPage() {
  return <div className="space-y-4">...</div>
}
```

**2. App.jsx এ Route যোগ করো:**
```jsx
import MyPage from './pages/MyPage'
<Route path="mypage" element={<MyPage />} />
```

**3. Sidebar.jsx এ মেনু যোগ করো:**
```js
{ to: '/dashboard/mypage', label: 'আমার পেজ', icon: SomeIcon }
```
