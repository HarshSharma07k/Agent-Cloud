# Agent Cloud

An AI-powered video calling application that allows users to create and interact with custom AI agents in real-time video calls. This project provides features like automated summaries, searchable transcripts, and a full subscription model.

This project was created as a learning exercise to explore modern web development technologies and the integration of powerful AI and video SDKs, based on a tutorial from Antonio on YouTube.

## 📖 About The Project

Agent Cloud is a feature-rich, AI-driven video conferencing platform designed to showcase the power of modern web technologies. The core concept is to move beyond simple video calls and create an interactive environment where users can engage with specialized AI agents in real-time.

Imagine having a dedicated language tutor, a hyper-focused interview coach, or a creative brainstorming partner available on-demand within your calls. This project makes that possible by integrating a powerful video SDK with the OpenAI API, allowing for the creation and management of custom AI personas.

This application was built as a comprehensive learning project to demonstrate a full-stack, type-safe architecture using Next.js 15, tRPC, Drizzle ORM, and a suite of other cutting-edge tools. It serves as a practical, real-world example of how to build, deploy, and manage a modern AI-powered SaaS application from the ground up.

## ✨ Key Features

* **Custom AI Agents**: Create, manage, and customize AI agents with specific roles and instructions.

* **Real-time Video Calls**: Schedule, manage, and join video calls directly in the app.

* **Live AI Interaction**: AI agents can join calls and interact with users in real-time.

* **Post-Meeting Intelligence**:

  * **AI-Powered Summaries**: Automatically generate clean, topic-based summaries with timestamps.

  * **Searchable Transcripts**: Full transcripts with keyword highlighting.

  * **Call Recordings**: Replay full video call recordings.

  * **Meeting Chatbot**: An intelligent chatbot that can answer questions about the meeting's content.

* **SaaS Subscription Model**: Integrated checkout process and subscription management.

* **Secure Authentication**: Full email and social (Google, GitHub) login system.

* **Fully Responsive**: A seamless experience on both desktop and mobile devices.

* **Personalized Dashboard**: Manage your agents and meetings from a central dashboard.

* **Background Job Processing**: Asynchronous tasks like transcript generation and summarization are handled in the background.

## 💻 Tech Stack

This project is built with a modern, type-safe, and scalable technology stack:

* **Framework**: [Next.js](https://nextjs.org/) 15 & [React](https://react.dev/) 19

* **Type Safety**: [tRPC](https://trpc.io/) with [TanStack Query](https://tanstack.com/query/latest)

* **Database**: [PostgreSQL](https://www.postgresql.org/) on [Neon](https://neon.tech/)

* **ORM**: [Drizzle ORM](https://orm.drizzle.team/)

* **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 & [Shadcn UI](https://ui.shadcn.com/)

* **Authentication**: [Better Stack](https://betterstack.com/)

* **Payments**: [Polar](https://polar.sh/)

* **Video & Chat**: [Stream Video & Chat SDK](https://getstream.io/)

* **AI**: [OpenAI API](https://openai.com/)

* **Background Jobs**: [Ingest](https://www.inngest.com/)

* **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or later)

* npm or yarn

* A PostgreSQL database (e.g., from Neon)

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/HarshSharma07k/Agent-Cloud.git
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root of the project and add the necessary API keys and credentials for the services used:

   ```
   # Database
   DATABASE_URL="..."
   
   # Authentication (Better Stack)
   ...
   
   # Video & Chat (Stream)
   ...
   
   # AI (OpenAI)
   OPENAI_API_KEY="..."
   
   # Other services...
   ```

4. **Run the database migrations:**

   ```
   npm run db:push
   ```

5. **Run the development server:**

   ```
   npm run dev
   ```

   Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## 🙏 Acknowledgments

This project is based entirely on the incredible full-stack tutorial by Antonio. All credit for the architecture, design, and implementation guidance goes to him.

* **Tutorial**: [Build and Deploy a Full-Stack AI SaaS with Next.js 15, React 19, tRPC, Drizzle & more](https://www.google.com/search?q=https://youtu.be/xEDCEmqyvC8)

* **Creator**: Antonio from AI Explorers
