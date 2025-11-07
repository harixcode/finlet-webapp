# Finlet Web

Finlet is a modern personal finance companion that delivers sleek, data-rich calculators for everyday money decisions. The site is built with React, Material UI, and Recharts, and is styled with a custom dark theme that spotlights charts, tables, and responsive layouts.

## Features

- **Investment Projection** – Plan recurring contributions, compare monthly vs annual compounding, and review detailed accumulation schedules with interactive line charts and tables.
- **Percentage Calculators** – Quickly compute "percentage of" values and understand how one number relates to another with contextual chips and instant results.
- **Percentage Change Analyzer** – Track increases or decreases between two values, including visual signals (up/down badges) and a progress indicator.
- **Responsive Experience** – Optimised layouts for mobile, tablet, and desktop with polished cards, gradients, and glassmorphism accents.
- **About Page** – Explains the Finlet philosophy, highlights use cases, and showcases the broader vision for finance tooling.

## Tech Stack

- **React 18** with TypeScript support
- **Material UI v5** for components and theming
- **Recharts** for charts and data visualisation
- **React Router v6** for SPA navigation
- **Inter Variable** for typography

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open your browser to [http://localhost:3000](http://localhost:3000) to view the app. The page automatically reloads when you save edits, and lint errors appear in the terminal.

## Available Scripts

- `npm start` – Run the app in development mode.
- `npm run build` – Create an optimised production build.
- `npm test` – Launch the interactive test runner.

## Project Structure

```
src/
 ├── components/
 │   ├── header/          # Responsive app bar
 │   ├── footer/          # Glassmorphism footer
 │   ├── percentage/      # Percentage calculators
 │   ├── investment/      # Investment projection card + chart
 │   └── about/           # About section content
 ├── pages/
 │   ├── Home.tsx         # Hero section + calculators grid
 │   └── About.tsx        # About page layout
 ├── theme.ts             # Custom MUI theme
 ├── App.tsx              # Router + layout shell
 └── index.js             # App bootstrap
```

## Deployment

The project follows standard Create React App conventions, so it can be deployed to providers such as Vercel, Netlify, or any static hosting service that serves the `build` directory.

---

Finlet is crafted to help you make confident money moves—contributions, comparisons, and projections all in one polished dashboard.
