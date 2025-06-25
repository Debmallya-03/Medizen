# MediZen - A Secure Doctors Appointment Platform

MediZen is a **secure doctor appointment platform** built to streamline the healthcare journey. It allows users to book appointments, consult with doctors via video calls, and manage their health records — all in one place.

---


## 🚀 Features

* 📅 **Book Doctor Appointments** with real-time availability
* 🎥 **Video Consultations** powered by Vonage
* 🧑‍⚕️ **Secure Authentication** using Clerk
* 💳 **Subscription Plans** using Clerk Subscriptions (Beta)
* 🔐 **End-to-End Encrypted Communication**
* 📈 **Clean and Intuitive Dashboard** with ShadCN UI & Tailwind CSS

---

## 🛠️ Tech Stack

* **Frontend**: Next.js 14, Tailwind CSS, ShadCN UI
* **Backend**: Next.js API Routes
* **Database**: Neon (PostgreSQL)
* **ORM**: Prisma
* **Authentication**: Clerk
* **Subscription Management**: Clerk Subscription Beta
* **Video Call API**: Vonage

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/medizen.git
cd medizen

# Install dependencies
npm install

# Copy the env file and configure it
cp .env.example .env.local
# Fill in the values:
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
# CLERK_SECRET_KEY=...
# NEXT_PUBLIC_CLERK_SIGN_IN_URL=...
# NEXT_PUBLIC_CLERK_SIGN_UP_URL=...
# NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=...
# NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=...
# NEXT_PUBLIC_VONAGE_APPLICATION_ID=...
# VONAGE_PRIVATE_KEY=...
# DATABASE_URL=...


# Push Prisma schema to database
npx prisma db push

# Run the dev server
npm run dev
```

---

## 📁 Folder Structure

```
medizen/
├── actions/              #server actions
├── app/                  # App router with pages and routes
├── components/           # UI components
├── hooks/                # Custom React hooks for reusable logic
├── lib/                  # Utility and config files
├── prisma/               # Prisma schema
├── public/               # Static files
├── .env                  # Environment variables
├── package.json
└── README.md
```

---

##  Database Management

<img src="https://github.com/user-attachments/assets/48665457-09a8-4bc5-832c-b66cf3f78045" width="350" />

---


> Built with ❤️ by Debmallya Bhandari










