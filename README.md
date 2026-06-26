# ☕ Luna Project

**Luna** არის თანამედროვე full-stack ვებ აპლიკაცია, რომელიც შექმნილია რეალური პროდუქტის ლოგიკით და არქიტექტურით.  
პროექტი აერთიანებს სუფთა frontend სტრუქტურას და მოქნილ backend API-ს, რაც საშუალებას იძლევა მარტივად გაფართოვდეს მომავალში.

> ⚠️ **Project Status**  
> This project is currently under active development. New features are being added gradually while the architecture continues to evolve and improve.
---

## 🚀 Tech Stack

### Frontend
- **React.js / TypeScript**
- Tailwind CSS
- Component-based architecture
- Responsive & mobile-first UI


📁 Project Structure(Front-end)
```
├── README.md                     # Project documentation and setup instructions
├── components.json               # shadcn/ui component configuration
├── eslint.config.js              # ESLint configuration for code quality
├── index.html                    # Main HTML template for Vite
├── package-lock.json             # Exact dependency versions
├── package.json                  # Project dependencies and scripts
├── postcss.config.js             # PostCSS configuration (used by Tailwind)
├── public                        # Public static assets (served as-is)
│   └── vite.svg
├── src                           # Main application source code
│   ├── App.css                   # Global component styles
│   ├── App.tsx                   # Root React component
│   ├── api                       # Base API client
│   │   └── data.ts               # Axios instance and API base config
│   ├── assets                    # Static images and media
│   ├── components                # Shared/reusable UI components
│   │   ├── Footer.tsx            # Footer root component
│   │   ├── Header.tsx            # Header and navigation
│   │   ├── NavBar.tsx            # Navbar root component
│   │   ├── NavItem.tsx           # Single nav link component
│   │   ├── shared                # Shared layout utilities
│   │   │   └── wrapper.tsx       # Max-width layout wrapper
│   │   └── ui                    # shadcn/ui primitives
│   │       ├── button.tsx
│   │       ├── popover.tsx
│   │       ├── ScrollToTop.tsx
│   │       └── sheet.tsx
│   ├── constants                 # Static data used across features
│   │   ├── cartModal.data.ts
│   │   ├── coffeeDetails.data.ts
│   │   ├── contactData.ts
│   │   ├── homeData.ts
│   │   └── ourStoryData.ts
│   ├── features                  # Feature-based modules
│   │   ├── auth                  # Authentication feature
│   │   │   ├── components
│   │   │   │   └── view
│   │   │   │       ├── LoginView.tsx       # Login page view
│   │   │   │       └── RegisterView.tsx    # Register page view
│   │   │   ├── EyeIcon.tsx
│   │   │   ├── InputField.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   ├── RegistrationComingSoon.tsx
│   │   │   └── SuccessState.tsx
│   │   ├── cart                  # Shopping cart feature
│   │   │   └── CartModal.tsx
│   │   ├── coffees               # Coffee listing feature
│   │   │   ├── CoffeeCard.tsx
│   │   │   ├── Coffees.tsx
│   │   │   └── DetailsCoffee.tsx
│   │   ├── contact               # Contact page feature
│   │   │   ├── components
│   │   │   │   └── view
│   │   │   │       └── ContactView.tsx     # Contact page view
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactInfo.tsx
│   │   │   ├── contactSchema.ts
│   │   │   ├── FormField.tsx
│   │   │   ├── LocationSection.tsx
│   │   │   ├── PhoneField.tsx
│   │   │   └── SubmitButton.tsx
│   │   ├── landing               # Landing page sections
│   │   │   ├── AboutLuna.tsx
│   │   │   ├── Ritual.tsx
│   │   │   └── WhyLuna.tsx
│   │   ├── our-story             # Our Story page feature
│   │   │   ├── components
│   │   │   │   └── view
│   │   │   │       └── OurStoryView.tsx    # Our Story page view
│   │   │   ├── Hero.tsx
│   │   │   ├── Mission.tsx
│   │   │   ├── Team.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── Values.tsx
│   │   ├── profile               # User profile feature
│   │   │   └── components
│   │   │       └── view
│   │   │           └── ProfileView.tsx     # Profile page view
│   │   ├── rate                  # Rating slider feature
│   │   │   └── RateSlider.tsx
│   │   └── shop                  # Shop feature
│   │       ├── CoffeeShop.tsx
│   │       ├── components
│   │       │   └── view
│   │       │       └── ShopView.tsx        # Shop page view
│   │       ├── FilterPanel.tsx
│   │       ├── Header.tsx
│   │       ├── Shop.tsx
│   │       └── ShopPageCoffeeCard.tsx
│   ├── hooks                     # Shared custom React hooks
│   │   ├── useAuth.ts            # Authentication hook
│   │   ├── useContactForm.ts     # Contact form logic
│   │   ├── useData.ts            # Data fetching (coffees, rates)
│   │   └── useScrollDirection.tsx # Scroll direction detection
│   ├── index.css                 # Global styles
│   ├── layout                    # Application layout
│   │   └── MainLayout.tsx        # Header + Footer + Outlet wrapper
│   ├── lib                       # Utility helpers
│   │   ├── paths.ts              # Route path constants
│   │   └── utils.ts              # General utilities (cn, etc.)
│   ├── main.tsx                  # React app entry point
│   ├── pages                     # Page-level route components
│   │   ├── Contact.tsx           # → ContactView
│   │   ├── Home.tsx              # → Landing components
│   │   ├── LoginPage.tsx         # → LoginView
│   │   ├── OurStory.tsx          # → OurStoryView
│   │   ├── Profilepage.tsx       # → ProfileView
│   │   ├── RegisterPage.tsx      # → RegisterView
│   │   └── Shop.tsx              # → ShopView
│   ├── router.tsx                # TanStack Router configuration
│   ├── services                  # Standalone service utilities
│   │   └── emailService.ts       # Email sending logic
│   ├── store                     # Global state management (Zustand)
│   │   ├── authStore.ts          # Auth state
│   │   └── cartStore.ts          # Cart state
│   ├── styles                    # Design tokens and theme
│   │   └── theme.ts
│   ├── swiper.d.ts               # Swiper type declarations
│   ├── types                     # Global TypeScript type definitions
│   │   ├── CartModal.types.ts
│   │   ├── CoffeeDetails.types.ts
│   │   ├── coffees.types.ts
│   │   ├── Contact.types.ts
│   │   ├── homeData.types.ts
│   │   ├── login.types.ts
│   │   ├── ourStory.types.ts
│   │   ├── rate.type.ts
│   │   └── register.types.ts
│   └── utils                     # Validation and helper utilities
│       ├── login.validate.ts
│       └── register.validate.ts
├── tailwind.config.js            # TailwindCSS configuration
├── tsconfig.app.json             # TypeScript config for app
├── tsconfig.json                 # Base TypeScript configuration
├── tsconfig.node.json            # TypeScript config for Node
├── vercel.json                   # Vercel deployment configuration
└── vite.config.ts                # Vite bundler configuration

```



### Backend
- **Node.js**
- **Express.js**
- RESTful API
- Modular folder structure
- Ready for authentication & database integration


📁 Project Structure(backend)
```
.
├── Dockerfile                     # Docker configuration for containerizing the backend
├── package.json                   # Project dependencies and scripts
├── seed.js                        # Database seed script to populate initial data
└── src                            # Main backend source code
    ├── app.js                     # Express application entry point
    ├── config                     # Configuration files
    │   ├── cloudinary.js          # Cloudinary setup for image uploads
    │   ├── db.js                  # Database connection setup (Sequelize + Neon PostgreSQL)
    │   └── jwt.js                 # JWT token generation and verification
    ├── middlewares                # Custom Express middlewares
    │   ├── auth.middlewares.js    # Authentication middleware (JWT validation)
    │   ├── isAdmin.js             # Admin role authorization middleware
    │   ├── luna.middlewares.js    # Domain-specific middleware
    │   └── upload.js              # File upload middleware (Multer + Cloudinary)
    ├── models                     # Sequelize database schemas
    │   ├── coffee-schema.js       # Coffee product schema
    │   ├── order-item-schema.js   # Order item schema
    │   ├── order-schema.js        # Order schema
    │   ├── rate-schema.js         # Rating schema for products
    │   └── user-schema.js         # User schema (authentication and roles)
    ├── routes                     # Express route definitions
    │   ├── auth-route.js          # Authentication routes (login/register)
    │   ├── luna-route.js          # Coffee product routes
    │   ├── order-route.js         # Order management routes
    │   └── rate-route.js          # Product rating routes
    ├── services                   # Business logic layer
    │   ├── auth.services.js       # Authentication business logic
    │   ├── luna.service.js        # Coffee product services
    │   └── rate.service.js        # Rating service logic
    └── utils                      # Utility helpers
        ├── swaggerProductConfig.js # Swagger documentation config for products
        └── swaggerRateConfig.js   # Swagger documentation config for ratings
```

## Tech Stack

### Frontend

- React  
- React DOM  
- Vite  
- TypeScript  
- TailwindCSS  
- Axios  
- Zustand  
- TanStack React Query  
- TanStack React Router  
- Framer Motion  
- Lucide React  
- Swiper  
- React Hook Form  
- Formik  
- Yup  
- Zod  
- Zod Formik Adapter  
- React Spinners  
- React CountUp  
- React Circular Progressbar  
- React Intersection Observer  
- React Phone Number Input  
- React Scroll  
- Radix UI  
- Class Variance Authority  
- CLSX  
- Tailwind Merge  
- Tw Animate CSS  
- EmailJS  
- rc-slider  
- Sonner  

### Backend

- Node.js  
- Express.js  
- Sequelize  
- PostgreSQL (pg)  
- bcryptjs  
- JSON Web Token (JWT)  
- Multer  
- Cloudinary  
- Multer Storage Cloudinary  
- CORS  
- dotenv  
- Zod  
- Swagger UI Express  
- Swagger JSDoc  
- Zod to OpenAPI  

 


## ✨ Key Features (Current & Planned)

- Modern UI & reusable React components
- Clean separation between frontend and backend
- REST API structure with Express
- Backend prepared for:
  - Authentication (JWT)
  - CRUD operations
  - Database integration
- Scalable project architecture

