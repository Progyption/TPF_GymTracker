# TPF

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

## Conventions

- One folder per page inside `src/pages/` (e.g. `src/pages/About/About.jsx`)
- Use **CSS Modules** (`*.module.css`) for component-scoped styles
- Shared components go in `src/components/`
- Keep business logic out of components — use `src/utils/` or `src/hooks/`
