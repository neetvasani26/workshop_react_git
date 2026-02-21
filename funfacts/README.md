# React + TypeScript + Vite
## Project Architecture

The project is structured as follows:

```
funfacts/
├── public/              # Static assets (e.g., images, icons)
│   └── vite.svg
├── src/                 # Source code for the React app
│   ├── App.tsx          # Main App component
│   ├── App.css          # App styles
│   ├── index.css        # Global styles
│   ├── main.tsx         # Entry point for React app
│   └── assets/          # App-specific assets
│       └── react.svg
├── index.html           # Main HTML file
├── package.json         # Project metadata and dependencies
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.app.json    # TypeScript app config
├── tsconfig.node.json   # TypeScript node config
├── eslint.config.js     # ESLint configuration
├── README.md            # Project documentation
├── .gitignore           # Git ignore rules
├── node_modules/        # Installed dependencies
├── package-lock.json    # Dependency lock file
```

### Folder & File Descriptions

- **public/**: Contains static files served directly (e.g., images, icons).
- **src/**: Main source code for the React application.
  - **App.tsx**: Root React component.
  - **App.css**: Styles for the App component.
  - **index.css**: Global CSS styles.
  - **main.tsx**: Entry point for the React app.
  - **assets/**: App-specific images and icons.
- **index.html**: Main HTML template for the app.
- **package.json**: Project metadata, scripts, and dependencies.
- **vite.config.ts**: Vite build tool configuration.
- **tsconfig*.json**: TypeScript configuration files.
- **eslint.config.js**: ESLint configuration for code linting.
- **README.md**: Project documentation and instructions.
- **.gitignore**: Specifies files/folders to ignore in git.
- **node_modules/**: Directory for installed npm packages.
- **package-lock.json**: Lock file for npm dependencies.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
