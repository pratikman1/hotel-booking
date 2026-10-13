# 🏨 Staybnb - Hotel Booking Web Application

A modern, responsive, and elegant hotel booking web application built with **React 19**, **Vite**, and **Tailwind CSS**, featuring secure user authentication with **Clerk**.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646C9F?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Available Scripts](#-available-scripts)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Staybnb** provides an intuitive, seamless hotel search and room discovery experience. Designed with a luxury aesthetic and mobile-first philosophy, users can search destinations, browse curated luxury rooms, apply granular filtering, explore limited-time vacation packages, and manage their authentication profiles effortlessly.

---

## ✨ Key Features

- **🔍 Smart Search & Booking Hero**:
  - Filter by destination city (Dubai, Singapore, New York, London, etc.).
  - Select check-in and check-out dates with an interactive date picker.
  - Specify guest counts for accurate room recommendations.

- **🔐 Seamless Authentication (Clerk)**:
  - User sign-in, registration, and session management.
  - Dynamic user profile button and account modal overlay.
  - Context-aware navbar adjusting based on authentication status.

- **🛏️ Rooms Directory & Comprehensive Filters**:
  - Browse rooms with detailed pricing, high-res photos, star ratings, and amenities.
  - Filter by room categories: *Single Bed*, *Double Bed*, *Luxury Suite*, and *Family Room*.
  - Budget filtering across customizable price tiers.
  - Multi-criteria sorting: *Price: Low to High*, *Price: High to Low*, and *Newest First*.

- **💎 Curated Destination & Deals**:
  - **Featured Destinations**: Discover top travel spots with quick exploration links.
  - **Exclusive Offers**: Time-limited holiday and luxury retreat promo packages.

- **⭐ Social Proof & Engagement**:
  - Testimonials section highlighting verified guest feedback and ratings.
  - Newsletter subscription integration for discounts and travel updates.

- **🎨 Modern Design & Glassmorphism**:
  - Dynamic translucent sticky navbar with backdrop-blur effects on scroll.
  - Elegant typography pairing with **Outfit** and **Playfair Display**.
  - Mobile-friendly off-canvas drawer navigation.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Frontend component architecture |
| **[Vite 8](https://vitejs.dev/)** | High-performance build tool and dev server |
| **[Tailwind CSS v3](https://tailwindcss.com/)** | Utility-first responsive styling and typography |
| **[Clerk](https://clerk.com/)** | User authentication, session management, and auth modals |
| **[React Router DOM v7](https://reactrouter.com/)** | Declarative client-side routing |
| **[PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer)** | CSS processing and vendor prefixing |

---

## 📂 Project Structure

```text
hotel-booking/
├── client/
│   ├── public/                 # Static assets & public icons
│   ├── src/
│   │   ├── assets/             # Vector icons, imagery, and dummy data models
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ExclusiveOffers.jsx
│   │   │   ├── FeaturedDestination.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── HotelCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NewsLetter.jsx
│   │   │   ├── StarRating.jsx
│   │   │   ├── Testimonial.jsx
│   │   │   └── Title.jsx
│   │   ├── pages/              # Application views & route targets
│   │   │   ├── Home.jsx        # Landing page with hero, deals & showcases
│   │   │   └── AllRooms.jsx    # Room catalog with sidebar filter & sorting
│   │   ├── App.jsx             # Main layout, route definitions & navbar logic
│   │   ├── index.css           # Global Tailwind directives & Google Fonts
│   │   └── main.jsx            # React root mount with Clerk & Router providers
│   ├── .env                    # Local environment variables
│   ├── eslint.config.js        # ESLint flat config
│   ├── index.html              # HTML entry template
│   ├── package.json            # Scripts & dependencies
│   ├── pnpm-lock.yaml          # Dependency lockfile
│   ├── postcss.config.js       # PostCSS configuration
│   ├── tailwind.config.js      # Tailwind theme extensions
│   └── vite.config.js          # Vite configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended) - [Download Node.js](https://nodejs.org/)
- **pnpm** (or `npm` / `yarn`) - [Install pnpm](https://pnpm.io/installation)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pratikman1/hotel-booking.git
   cd hotel-booking
   ```

2. **Navigate to the client directory:**
   ```bash
   cd client
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

### Environment Variables

Create a `.env` file inside the `client` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

> **Note:** You can obtain your publishable key by creating a free project at [Clerk.com](https://clerk.com/) and navigating to **API Keys** in the dashboard.

### Running the App

Start the local development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173
```

---

## 📜 Available Scripts

Inside the `client/` directory, you can run:

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `pnpm build` | Compiles and bundles production-ready assets into `dist/`. |
| `pnpm preview` | Serves the production build locally to test bundle output. |
| `pnpm lint` | Runs ESLint to check for code quality and syntax issues. |

---

## 🗺️ Roadmap

- [ ] **Room Details View**: Detailed room page showing photo galleries, full amenity breakdown, and booking calendar.
- [ ] **Owner / Host Portal (`/owner`)**: Dedicated dashboard to register properties, manage room inventories, and track bookings.
- [ ] **Checkout & Payments**: Stripe or Razorpay integration for secure payment handling.
- [ ] **User Bookings Dashboard**: History of active and completed stays for authenticated users.
- [ ] **Wishlist & Favorites**: Save rooms for future trips.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
