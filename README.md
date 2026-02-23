# ☕ Luna Project

**Luna** არის თანამედროვე full-stack ვებ აპლიკაცია, რომელიც შექმნილია რეალური პროდუქტის ლოგიკით და არქიტექტურით.  
პროექტი აერთიანებს სუფთა frontend სტრუქტურას და მოქნილ backend API-ს, რაც საშუალებას იძლევა მარტივად გაფართოვდეს მომავალში.

> ⚠️ **Project Status**  
> პროექტი ამჟამად არის **აქტიური განვითარების პროცესში**. ფუნქციონალი ეტაპობრივად ემატება და არქიტექტურა მუდმივად იხვეწება.

---

## 🚀 Tech Stack

### Frontend
- **React.js / TypeScript**
- Tailwind CSS
- Component-based architecture
- Responsive & mobile-first UI


📁 Project Structure(Front-end)
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



### Backend
- **Node.js**
- **Express.js**
- RESTful API
- Modular folder structure
- Ready for authentication & database integration


📁 Project Structure(backend)
```
luna-backend/
├── src/
│   ├── app.js                    # Application entry point
│   ├── middlewares/
│   │   ├── auth.middlewares.js   # JWT authentication middleware
│   │   └── luna.middlewares.js   # Custom middlewares
│   ├── models/
│   │   ├── user-schema.js        # User database model
│   │   └── luna-schema.js        # Todo database model
│   ├── routes/
│   │   ├── auth-route.js         # Authentication routes
│   │   └── luna-route.js         # Todo routes
│   ├── services/
│   │   ├── auth.services.js      # Authentication business logic
│   │   └── luna.service.js       # Todo business logic
│   └── utils/
│       ├── db.js                 # Database configuration
│       ├── jwt.js                # JWT utilities
│       └── swaggerConfig.js      # Swagger setup
├── .env                          # Environment variables
├── .gitignore                    # Git ignore rules
├── package.json                  # Dependencies
└── README.md                     # Documentation
```

## ✨ Key Features (Current & Planned)

- Modern UI & reusable React components
- Clean separation between frontend and backend
- REST API structure with Express
- Backend prepared for:
  - Authentication (JWT)
  - CRUD operations
  - Database integration
- Scalable project architecture

