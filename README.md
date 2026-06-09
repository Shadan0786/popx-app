# PopX App

A modern React application built with Vite, featuring a responsive UI powered by Tailwind CSS and seamless routing with React Router.

## 🚀 Features

- **React 19** - Latest React version with improved performance and features
- **Vite** - Lightning-fast development server and build tool
- **React Router v7** - Client-side routing for seamless navigation
- **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development
- **ESLint** - Code quality and consistency checks
- **Hot Module Replacement (HMR)** - Instant updates during development

## 📋 Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| React | UI Library | ^19.2.0 |
| React Router DOM | Routing | ^7.13.1 |
| Vite | Build Tool | ^7.3.1 |
| Tailwind CSS | Styling | ^4.2.1 |
| ESLint | Linting | ^9.39.1 |

## 📊 Project Composition

- **JavaScript**: 88.3%
- **CSS**: 7.5%
- **HTML**: 4.2%

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/Shadan0786/popx-app.git
cd popx-app
```

2. **Install dependencies**
```bash
npm install
```

## 🎯 Development

### Start Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173` with hot module replacement enabled.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally before deployment.

### Lint Code
```bash
npm run lint
```
Check code quality and fix ESLint issues.

## 📁 Project Structure

```
popx-app/
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Styling

This project uses **Tailwind CSS v4** for styling. Tailwind provides a comprehensive set of utility classes to build custom designs without leaving your HTML.

Learn more: [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🧭 Routing

Navigation is handled by **React Router v7**. Define your routes in the main App component to enable seamless client-side navigation.

Learn more: [React Router Documentation](https://reactrouter.com)

## 🔧 Configuration

### Vite Configuration
Edit `vite.config.js` to customize Vite settings and plugins.

### Tailwind CSS Configuration
Edit `tailwind.config.js` to customize Tailwind themes and extend functionality.

### ESLint Configuration
Edit `eslint.config.js` to adjust linting rules and standards.

## 📦 Build Output

The production build is optimized for performance and creates:
- Minified JavaScript and CSS
- Code splitting for better caching
- Asset optimization

Built files are output to the `dist/` directory.

## 🚀 Deployment

The `dist/` folder is ready to be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any other static hosting platform

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and ESLint rules.

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` to check code quality
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [ESLint Documentation](https://eslint.org)

## 📞 Support

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/Shadan0786/popx-app/issues).

---

Built with ❤️ using React + Vite
