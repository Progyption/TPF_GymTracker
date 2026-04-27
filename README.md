# TPF

A collaborative frontend project built with **React** and **JavaScript** (Vite).

## Team

| Developer | Branch  |
|-----------|---------|
| Kamil     | `Kamil` |
| Jakub     | `Jakub` |
| Mykola    | `Mykola` |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Progyption/TPF.git
cd TPF

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command          | Description                        |
|------------------|------------------------------------|
| `npm run dev`    | Start the development server       |
| `npm run build`  | Build the app for production       |
| `npm run preview`| Preview the production build locally|

## Project Structure

```
TPF/
├── public/             # Static assets served as-is
├── src/
│   ├── api/            # API call functions (fetch, axios wrappers, etc.)
│   ├── assets/         # Images, fonts, SVGs used inside components
│   ├── components/     # Shared/reusable UI components
│   ├── context/        # React Context providers (global state)
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page-level components, one folder per route
│   │   └── Home/
│   │       ├── Home.jsx
│   │       └── Home.module.css
│   ├── styles/
│   │   └── global.css  # Global CSS reset and base styles
│   ├── utils/          # Pure helper / utility functions
│   ├── App.jsx         # Root component with route definitions
│   └── main.jsx        # Application entry point
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
└── package.json
```

## Development Workflow

1. **Checkout your branch** before starting work:
   ```bash
   git checkout Kamil   # or Jakub / Mykola
   ```
2. Pull the latest changes from `main` regularly:
   ```bash
   git pull origin main
   ```
3. Open a **Pull Request** from your branch into `main` when a feature is ready for review.

## Conventions

- One folder per page inside `src/pages/` (e.g. `src/pages/About/About.jsx`)
- Use **CSS Modules** (`*.module.css`) for component-scoped styles
- Shared components go in `src/components/`
- Keep business logic out of components — use `src/utils/` or `src/hooks/`
