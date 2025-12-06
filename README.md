# CURELYSTICS Technologies

Smart Healthcare Powered by Data - AI-driven insights, analytics dashboards, automation, queue management, and digital healthcare solutions.

## Getting Started

To run the development server:
\\\ash
npm install
npm run dev
\\\

## Available Scripts

- \
pm run dev\ - Start the development server
- \
pm run build\ - Build for production
- \
pm run lint\ - Run ESLint

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Create a new repository named \curelystics\ (or your preferred name)
3. Clone it to your machine

### Step 2: Update package.json
Add the homepage field to your \package.json\:
\\\json
"homepage": "https://yourusername.github.io/curelystics"
\\\

### Step 3: Build and Deploy
\\\ash
npm run build
# Copy everything from the 'dist' folder to your GitHub Pages branch
\\\

### Step 4: Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Select \main\ branch (or your deploy branch) as the source
4. Save

Your site will be live at: \https://yourusername.github.io/curelystics\

## Features
-  Static React website
-  Contact form (opens email client)
-  Responsive design with Tailwind CSS
-  Fast performance with Vite
-  Free hosting on GitHub Pages
