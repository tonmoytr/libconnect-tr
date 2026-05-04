
````markdown
# 📚 LibConnect - Modern Digital Library

**LibConnect** is a professional-grade Library Management Web Application designed for the modern reader. Built with the **MERN Stack** and **Next.js**, it offers a seamless experience for browsing technical documentation, science journals, and storytelling masterpieces.

🔗 **Live URL:** https://libconnect-trt.vercel.app

---

## 🚀 Purpose

The purpose of LibConnect is to provide a centralized, interactive dashboard where users can explore a digital collection of books. It bridges the gap between simple static lists and high-end interactive platforms by utilizing **Server-Side Rendering (RSC)** for performance and **BetterAuth** for secure user management.

---

## ✨ Key Features

- **Dynamic Home Page**  
  Features an animated announcement marquee, featured books, and an interactive **Swiper.js** testimonial section.

- **Intelligent Filtering**  
  A functional category sidebar on the "All Books" page that allows real-time filtering via URL query parameters.

- **Search Functionality**  
  A server-side search logic that helps users find specific titles instantly.

- **Secure Authentication**  
  Integrated with **BetterAuth**, supporting Google Social Login and Email/Password credentials.

- **User Profile Management**  
  A dedicated profile route where users can view their verified membership status and update their personal information.

- **Logic-First Architecture**  
  Utilizes Next.js Server Components (RSC) to minimize client-side JavaScript and optimize SEO.

---

## 🛠️ Tech Stack & NPM Packages

### Core Framework
- **Next.js (App Router)** – The foundation of the application  
- **React.js** – For building interactive UI components  

### Authentication & Database
- **BetterAuth** – For managing sessions and user accounts  
- **MongoDB** – Primary database for storing user and book data  
- **Mongoose** – Elegant MongoDB object modeling for Node.js  

### Styling & UI
- **Tailwind CSS** – For high-end, responsive styling and layout  
- **React Icons** – For consistent and professional iconography  
- **Swiper.js** – Powering the smooth, touch-friendly testimonial slider  
- **React Toastify** – Providing real-time user feedback  

### Development Tools
- **React Hook Form** – For efficient and validated forms  

---

## 🛠️ Installation & Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/libconnect-tr.git
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file and add the following:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
MONGO_URI=your_mongodb_uri
BETTER_AUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
```

### 4. Run the development server

```bash
npm run dev
```

---

## 👨‍💻 Author

**Tonmoy Roy**
Junior MERN Stack Developer | Front-End Specialist

```

