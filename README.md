# AI Resume Analyzer

An intelligent resume analysis application that evaluates resumes using AI, providing detailed scoring, ATS compatibility analysis, and personalized recommendations for job seekers.

🌐 **Live Demo:** [ai-resume-analyzer-one-azure.vercel.app](https://ai-resume-analyzer-one-azure.vercel.app/)

🎬 **Demo Video:** [Watch on Google Drive](https://drive.google.com/file/d/1GNnLNJE6EbEhRSjd7X-gPfSkSIMxEhNn/view?usp=drive_link)

---

## 🎯 Overview

The AI Resume Analyzer helps users optimize their resumes by:
- Analyzing resume content and structure
- Providing ATS (Applicant Tracking System) compatibility scores
- Generating detailed feedback and improvement suggestions
- Offering visual performance metrics and scoring

---

## 🏗️ Project Structure

```
AI-resume_Analyzer/
├── app/                          # Application root
│   ├── app.css                   # Global styles
│   ├── root.tsx                  # Root component
│   ├── routes.ts                 # Route definitions
│   ├── components/               # Reusable React components
│   │   ├── Accordion.tsx         # Accordion UI component
│   │   ├── ATS.tsx               # ATS analysis display
│   │   ├── Details.tsx           # Resume details view
│   │   ├── FileUploader.tsx       # Resume file upload handler
│   │   ├── Navbar.tsx            # Navigation component
│   │   ├── ResumeCard.tsx        # Resume preview card
│   │   ├── ScoreBadge.tsx        # Score display badge
│   │   ├── ScoreCircle.tsx       # Circular score visualizer
│   │   ├── ScoreGauge.tsx        # Gauge chart component
│   │   └── Summary.tsx           # Analysis summary view
│   ├── constants/
│   │   └── index.ts              # Application constants
│   ├── lib/                      # Utility functions
│   │   ├── pdf2img.ts            # PDF to image conversion
│   │   ├── puter.ts              # Puter API integration
│   │   └── utils.ts              # General utilities
│   ├── routes/                   # Page route components
│   │   ├── auth.tsx              # Authentication page
│   │   ├── home.tsx              # Home page
│   │   ├── resume.tsx            # Resume analysis page
│   │   ├── upload.tsx            # Upload page
│   │   └── wipe.tsx              # Data clearing page
│   └── types/                    # TypeScript type definitions
│       ├── index.d.ts            # Main type definitions
│       └── puter.d.ts            # Puter service types
├── public/                       # Static assets
│   ├── pdf.worker.min.mjs        # PDF.js worker
│   ├── icons/                    # Icon assets
│   └── images/                   # Image assets
├── build/                        # Production build output
├── vite.config.ts                # Vite build configuration
├── tsconfig.json                 # TypeScript configuration
├── react-router.config.ts        # React Router configuration
├── Dockerfile                    # Docker containerization
└── package.json                  # Dependencies and scripts
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend Framework** | React 19 | UI library |
| **Routing** | React Router v7 | Client-side routing |
| **Build Tool** | Vite | Fast development server & bundling |
| **Language** | TypeScript | Type-safe JavaScript |
| **Styling** | TailwindCSS | Utility-first CSS framework |
| **PDF Processing** | PDF.js | Extract and render PDFs |
| **Backend Services** | Puter API | Cloud storage & file handling |
| **Containerization** | Docker | Application deployment |
| **Runtime** | Node.js | JavaScript runtime |

---

## 📋 Features

- ✅ Resume file upload (PDF support)
- ✅ AI-powered resume analysis
- ✅ ATS compatibility scoring
- ✅ Visual score metrics (gauges, badges, circles)
- ✅ Detailed improvement suggestions
- ✅ Resume preview and display
- ✅ Data persistence with Puter
- ✅ Responsive design
- ✅ TypeScript type safety

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Docker (optional, for containerization)

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Run Production Build

```bash
npm run start
```

---

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t ai-resume-analyzer .
```

### Run Container

```bash
docker run -p 3000:3000 ai-resume-analyzer
```

The application will be available at `http://localhost:3000`

### Deploy To Cloud

This Docker image can be deployed to:
- AWS ECS / Elastic Beanstalk
- Google Cloud Run
- Azure Container Apps
- DigitalOcean App Platform
- Fly.io
- Railway
- Heroku

---

## 📁 Key File Purposes

| File | Purpose |
|------|---------|
| app/routes.ts | Defines all application routes |
| app/root.tsx | Root layout component |
| vite.config.ts | Vite build and dev server config |
| react-router.config.ts | React Router SSR configuration |
| tsconfig.json | TypeScript compiler options |
| app/lib/pdf2img.ts | PDF parsing and image conversion |
| app/lib/puter.ts | Puter cloud service integration |

---

## 🔄 Data Flow

1. User uploads resume (PDF) via `FileUploader` component
2. File sent to backend for AI analysis
3. Results processed and formatted
4. Scores calculated for various metrics (ATS, content, structure)
5. Data stored in Puter cloud storage
6. Results displayed with visualizations (charts, badges, summaries)

---

## 🤝 Contributing

When contributing, maintain:
- TypeScript type safety
- Component modularity
- TailwindCSS for styling
- Consistent file structure
- Documentation in code

---

## 📝 Environment Variables

Create a `.env` file with necessary Puter API credentials (if using cloud storage features).

---

## 📦 Dependencies

See package.json for the complete list of dependencies and devDependencies.

---

## 📄 License

This project is open source and available under the MIT License.
