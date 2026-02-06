📁 Project Structure
```
├── README.md                  # Project documentation and setup instructions
├── eslint.config.js            # ESLint configuration for code quality
├── index.html                  # Main HTML entry point (used by Vite)
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── postcss.config.js           # PostCSS configuration (used by Tailwind)
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # Base TypeScript configuration
├── tsconfig.app.json           # TypeScript config for the React app
├── tsconfig.node.json          # TypeScript config for Node/Vite
├── vite.config.ts              # Vite configuration (plugins, aliases, dev server)
│
├── public/                     # Public static files (served as-is)
│   └── vite.svg                # Default Vite asset
│
├── src/                        # Application source code
│   ├── main.tsx                # React application entry point
│   ├── App.tsx                 # Root React component
│   ├── App.css                 # App-level styles
│   ├── index.css               # Global styles (Tailwind base styles)
│
│   ├── assets/                 # Images and static assets
│   │   ├── Logo2.png
│   │   ├── Luna.png
│   │   └── coffee.png
│
│   ├── api/                    # API-related logic
│   │   ├── services/           # API service calls (fetch/axios)
│   │   ├── hook/               # Custom React hooks for API usage
│   │   └── type/               # TypeScript types for API responses
│
│   ├── component/              # Reusable UI components
│   │   ├── header/             # Header and navigation components
│   │   ├── footer/             # Footer components
│   │   ├── coffees/            # Coffee-related UI components
│   │   ├── contact/            # Contact form and contact sections
│   │   ├── aboutLuna/           # About section components
│   │   ├── whyuna/              # Why Luna section
│   │   ├── ritual/              # Ritual section
│   │   ├── rate/                # Rating section
│   │   └── ui/                  # Shared UI components (Button, etc.)
│
│   ├── pages/                  # Route-level pages
│   │   ├── Home.tsx             # Home page
│   │   ├── Shop.tsx             # Shop page
│   │   ├── Contact.tsx          # Contact page
│   │   └── OurStory.tsx         # Story/About page
│
│   ├── layout/                 # Application layouts
│   │   └── MainLayout.tsx       # Main layout (Header + Footer + Outlet)
│
│   ├── routes/                 # Routing configuration
│   │   ├── Routes.tsx           # React Router setup
│   │   └── paths.ts             # Route path constants
│
│   ├── services/               # Frontend service logic (helpers, integrations)
│
│   ├── styles/                 # Theme and design tokens
│   │   └── theme.ts             # Color palette and UI theme config
│
│   ├── lib/                    # Utility/helper functions
│   │   └── utils.ts
│
│   └── swiper.d.ts             # TypeScript declarations for Swiper

```
