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
.
├── README.md                     → Project documentation and setup instructions
├── eslint.config.js              → ESLint configuration for code linting
├── index.html                    → Root HTML file used by Vite
├── package-lock.json             → Exact dependency versions
├── package.json                  → Project dependencies and scripts
├── postcss.config.js             → PostCSS configuration (used by Tailwind)
├── public
│   └── vite.svg                  → Static assets served directly by Vite
├── src                           → Main source code of the application
│   ├── App.css                   → Global styles for App component
│   ├── App.tsx                   → Root React component
│   ├── api                       → API related logic
│   │   ├── api
│   │   │   └── data.ts           → API functions for fetching data
│   │   ├── hook                  → Custom API hooks (optional structure)
│   │   ├── services              → API service layer (request logic)
│   │   └── type
│   │       ├── coffees.ts        → TypeScript types for coffee data
│   │       └── rate.ts           → TypeScript types for rating data
│   ├── assets                    → Static images and media files
│   │   ├── Logo2.png
│   │   ├── Luna.png
│   │   ├── coffee.png
│   │   ├── coffeeimg.png
│   │   ├── homecover.png
│   │   ├── lunaframe1.png
│   │   ├── lunaframe2.png
│   │   └── lunaframe3.png
│   ├── component                 → Reusable UI components
│   │   ├── Shop.tsx              → Shop section component
│   │   ├── aboutLuna
│   │   │   └── AboutLuna.tsx     → About section component
│   │   ├── cart
│   │   │   └── CartModal.tsx     → Cart modal with cart logic
│   │   ├── coffees
│   │   │   ├── CoffeeCard.tsx    → Coffee item card component
│   │   │   └── Coffees.tsx       → Coffee list display
│   │   ├── contact
│   │   │   ├── ContactForm.tsx   → Contact form UI
│   │   │   ├── ContactInfo.tsx   → Contact information display
│   │   │   └── LocationSection.tsx → Location / map section
│   │   ├── footer
│   │   │   └── Footer.tsx        → Website footer
│   │   ├── header
│   │   │   ├── Header.tsx        → Main navigation header
│   │   │   └── NavItem.tsx       → Navigation link component
│   │   ├── rate
│   │   │   └── RateSlider.tsx    → Customer rating slider
│   │   ├── ritual
│   │   │   └── Ritual.tsx        → Coffee ritual section
│   │   ├── shoop
│   │   │   ├── CoffeeShop.tsx    → Shop page coffee list
│   │   │   ├── FilterPanel.tsx   → Coffee filter panel
│   │   │   ├── ShopPageCoffeeCard.tsx → Coffee card used on shop page
│   │   │   └── useCoffeeFilter.ts → Hook for filtering coffee products
│   │   ├── ui
│   │   │   └── Button.tsx        → Reusable button component
│   │   └── whyuna
│   │       └── WhyLuna.tsx       → Why Luna section
│   ├── hooks
│   │   └── useRates.ts           → React Query hook for fetching rates
│   ├── index.css                 → Global CSS styles
│   ├── layout
│   │   └── MainLayout.tsx        → Layout wrapper (Header + Footer + Outlet)
│   ├── lib
│   │   └── utils.ts              → Utility helper functions
│   ├── main.tsx                  → React app entry point
│   ├── pages                     → Page-level components used by router
│   │   ├── Contact.tsx           → Contact page
│   │   ├── Home.tsx              → Home page
│   │   ├── OurStory.tsx          → Our story page
│   │   └── Shop.tsx              → Shop page
│   ├── router.tsx                → TanStack Router configuration
│   ├── routes
│   │   └── paths.ts              → Route path constants
│   ├── store
│   │   └── cartStore.ts          → Zustand cart state management
│   ├── styles
│   │   └── theme.ts              → Theme configuration
│   └── swiper.d.ts               → TypeScript definitions for Swiper
├── tailwind.config.js            → Tailwind CSS configuration
├── tsconfig.app.json             → TypeScript config for app
├── tsconfig.json                 → Base TypeScript configuration
├── tsconfig.node.json            → Node specific TypeScript config
└── vite.config.ts                → Vite build configuration

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

