# AwardScope 🚀

AwardScope is an AI-powered financial aid discovery platform designed to help students unlock their funding potential. By leveraging advanced matching algorithms and generative AI, AwardScope connects students with high-value scholarships and bursaries they actually qualify for—and helps them write the winning essays.

![AwardScope UI](./Frontend/src/assets/preview.png)

## ✨ Key Features

### 🎯 Smart Matching Engine
-   **Real-Time Eligibility**: Instantly filters hundreds of awards based on your GPA, faculty, year, and demographic profile.
-   **Precision Scoring**: categorizes opportunities into **Perfect Matches** (90%+ fit), **Good Matches**, and **Partial Matches**.
-   **Zero Noise**: Hides awards you aren't eligible for, saving you hours of searching.

### 🧠 AI Essay Architect
-   **Instant Blueprints**: Generates personalized essay outlines, hooks, and talking points for any specific award.
-   **Typewriter Effect**: Watch as the AI "thinks" and types out your essay strategy in real-time.
-   **Tailored Content**: Analyzes the award's criteria to suggest the most impactful angles for your application.

### 💎 Premium "Glassmorphism 2.0" UI
-   **Cosmic Aesthetic**: A deep, immersive dark mode with rich gradients and floating background elements.
-   **Interactive Glass Cards**: Frosted glass effects with dynamic hover glows and lighting.
-   **Fluid Animations**: Smooth transitions and entrance effects powered by `framer-motion`.

---

## 🛠️ Tech Stack

### Frontend
-   **React 18** (TypeScript)
-   **Tailwind CSS** (Styling & Design System)
-   **Framer Motion** (Advanced Animations)
-   **Lucide React** (Iconography)
-   **Vite** (Build Tool)

### Backend
-   **Node.js & Express**
-   **MongoDB** (Database)
-   **Google Gemini API** (Generative AI)

### DevOps
-   **Docker & Docker Compose** (Containerization)

---

## 🚀 Getting Started

### Prerequisites
-   [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Tjindl/AwardScope.git
    cd AwardScope
    ```

2.  **Set up Environment Variables:**
    -   Create a `.env` file in the `Backend` directory.
    -   Add your MongoDB URI and Gemini API Key:
        ```env
        MONGODB_URI=your_mongodb_connection_string
        GEMINI_API_KEY=your_gemini_api_key
        ```

3.  **Run with Docker:**
    ```bash
    docker-compose up --build
    ```

4.  **Access the App:**
    -   Frontend: `http://localhost:8080`
    -   Backend API: `http://localhost:3001`

---

## 📖 How to Use

1.  **Select Your University**: Choose from supported institutions (currently UBC) on the home page.
2.  **Create Your Profile**: Enter your academic details, affiliations, and demographics. No account needed.
3.  **View Your Matches**: Automatically see the top awards you qualify for, sorted by match strength.
4.  **Draft Your Essay**: Click the "AI Architect" button on any award card to generate a winning essay structure instantly.

---

## 🔮 Roadmap

-   [ ] **Multi-University Support**: Expanding database to SFU, UVic, and BCIT.
-   [ ] **User Accounts**: Save your profile and track applied scholarships.
-   [ ] **Deadline Reminders**: Email notifications for upcoming award deadlines.
-   [ ] **Alumni Success Stories**: ML-based recommendations from successful past applicants.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---
*Built with ❤️ for Hack the Coast*
