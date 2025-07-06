# 🌐 IR Website - Starter Layout

This is the base layout for the **IR Wing website of IIT Kanpur**, built using **Next.js (React-based framework)**. The project is set up for **easy collaboration** — every section (like About, Contact, Team) can be independently developed by contributors.

---

## 🔧 Tech Stack

| Technology       | Purpose                                |
|------------------|----------------------------------------|
| **Next.js**      | React framework with built-in routing  |
| **React.js**     | Component-based frontend UI            |
| **Plain CSS**    | Styling (no Tailwind/Bootstrap)        |
| **ESLint**       | Code formatting and linting            |
| **Git + GitHub** | Version control & collaboration        |

---

## 📁 Pages Available

- `/` → Home (via `src/app/page.js`)
- `/about` → About Page (`src/app/about/page.js`)
- `/contact` → Contact Page (`src/app/contact/page.js`)

You can add more pages like `/team`, `/projects`, etc., by creating corresponding folders.

---

## 🛠️ Getting Started

To set up locally:

```bash
git clone https://github.com/your-username/ir-web.git
cd ir-web
npm install
npm run dev


Visit: http://localhost:3000

## 🚀 Live Site
Deployed at: [https://ir-web.vercel.app](https://ir-web.vercel.app)


ir-web/
├── src/
│   └── app/
│       ├── layout.js         # Global layout (nav bar)
│       ├── globals.css       # Global styles
│       ├── page.js           # Home page
│       ├── about/page.js     # About section
│       └── contact/page.js   # Contact section
├── public/                   # Static assets (images, etc.)
├── .gitignore
├── jsconfig.json             # Import aliases
├── eslint.config.mjs         # Linting rules
├── next.config.mjs           # Next.js config
├── package.json              # Scripts & dependencies
└── README.md

--------------------------------------------------------------------------

Layouts & Styling
This project uses the Next.js App Router, which supports both global and per-page layouts.

🧱 Global Layout
src/app/layout.js: Defines the global layout for all pages (like navigation, shared header/footer).

src/app/globals.css: Base global styles applied across the app.

🧩 Page-Specific Layouts
Each route (e.g. /about, /contact) can have its own layout and styles:

pgsql
Copy
Edit
src/app/
├── layout.js         ← global layout (nav + wrapper)
├── globals.css       ← base CSS for the whole site
├── about/
│   ├── layout.js     ← optional layout for /about
│   ├── about.css     ← scoped styles for /about
│   └── page.js


-------------------------------------------------------------------

➕ Adding a New Page
To add a new section (e.g., /team):

mkdir src/app/team
touch src/app/team/page.js
Inside page.js:


export default function TeamPage() {
  return <h1>Our Team</h1>;
}
Now accessible at: http://localhost:3000/team
