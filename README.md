# 🛒 Modern E-Commerce Store

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

> A modern, responsive, and fully functional e-commerce frontend simulation built with React and Tailwind CSS.

---

## 📖 About The Project

This project is a React-based Single Page Application (SPA) that simulates a real-world shopping experience. It fetches real-time data from the FakeStore API and implements advanced frontend logic including global state management, routing, and a simulated asynchronous checkout process.

The design focuses on **"Glassmorphism"** aesthetics, smooth transitions, and a clean, minimalist UI suitable for modern SaaS products.

### Key Features
* **Dynamic Data Fetching:** Products are fetched from an external API (FakeStoreAPI) and managed via React Hooks.
* **Global State Management:** Shopping cart state is "lifted up" to the App level, allowing seamless data flow between the Product List, Navbar (Badge), and Cart Page.
* **Smart Routing:**
    * **Home:** Displays a hero section and a limited "Featured" slice of products.
    * **Shop:** Displays the full product catalog.
    * **Cart:** A split-screen layout with quantity controls and sticky order summary.
* **Simulated Checkout Flow:** A custom modal that handles form inputs, simulates an API payment delay (loading spinners), and handles success states.
* **Modern UI/UX:**
    * Sticky Glassmorphic Navbar.
    * Hover lift effects and image zooms.
    * Gradient buttons and text.
    * Responsive Grid Layouts.

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS (Utility-first CSS framework)
* **Routing:** React Router DOM v6
* **Icons:** HeroIcons / Inline SVG
* **Data Source:** [FakeStore API](https://fakestoreapi.com/)
* **Deployment:** Vercel
cd ecommerce-portfolio-demo
