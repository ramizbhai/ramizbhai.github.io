# Portfolio Website - Ramizbhai Pinjara

A high-performance, production-ready portfolio website built with Astro and Tailwind CSS, optimized for GitHub Pages deployment.

## 🚀 Features

- **High Performance**: Built with Astro for optimal static site generation
- **Dark Mode First**: Professional dark theme with smooth transitions
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimizations
- **25+ Projects**: Showcase of diverse web development projects
- **5 Case Studies**: Detailed case studies for complex projects
- **Performance Target**: Lighthouse score 95+

## 🛠️ Technology Stack

- **Framework**: Astro (Static Site Generator)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 🏗️ Build

To build the site for production:

```bash
npm run build
```

The static files will be generated in the `dist/` directory.

## 📤 Deployment to GitHub Pages

### Prerequisites

1. Create a GitHub repository (if you haven't already)
2. Update the `site` URL in `astro.config.mjs` with your GitHub username and repository name:
   ```javascript
   site: 'https://YOUR_USERNAME.github.io',
   base: '/Portfolio', // Change if your repo name is different
   ```

3. Update social links in `src/utils/constants.ts`:
   ```typescript
   export const SOCIAL_LINKS = {
     github: "https://github.com/YOUR_USERNAME",
     linkedin: "https://linkedin.com/in/YOUR_USERNAME",
     email: "your.email@example.com",
   };
   ```

### Deployment Steps

#### Option 1: Using npm script (Recommended)

1. Build the site:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

This will automatically build the site and push it to the `gh-pages` branch.

#### Option 2: Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. Deploy using gh-pages:
   ```bash
   npx gh-pages -d dist
   ```

### GitHub Pages Configuration

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select the `gh-pages` branch
4. Click **Save**

Your site will be available at `https://YOUR_USERNAME.github.io/Portfolio`

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Base layout components
│   ├── pages/           # Route pages
│   ├── content/         # JSON data files
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions and constants
├── public/              # Static assets
├── astro.config.mjs     # Astro configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Customization

### Updating Personal Information

1. **Name and Bio**: Edit `src/utils/constants.ts`
2. **Projects**: Modify `src/content/projects.json`
3. **Experience**: Update `src/content/experience.json`
4. **Certificates**: Edit `src/content/certificates.json`
5. **Skills**: Update `src/utils/constants.ts` (SKILLS object)

### Styling

The site uses Tailwind CSS with a dark mode first approach. Customize colors and styles in:
- `src/styles/global.css` - Global styles and CSS variables
- Component files - Tailwind utility classes

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

## 📊 Performance Optimization

The site includes several performance optimizations:

- **Static Site Generation**: Zero JavaScript by default
- **Image Optimization**: WebP format support (add images to `public/images/`)
- **Lazy Loading**: Images load on demand
- **CSS Purging**: Unused Tailwind classes are removed
- **Minimal Bundle Size**: Optimized for fast loading

## 📝 Content

### Projects

The portfolio includes 25 projects from various regions:
- Southeast Asia (Indonesia, Philippines, Vietnam, etc.)
- Eastern Europe (Romania, Bulgaria, Poland, etc.)
- Africa (Nigeria, Kenya, Ghana, etc.)
- South Asia (Bangladesh, Sri Lanka, Nepal, etc.)

### Case Studies

5 detailed case studies are available for the most complex projects:
1. Jakarta Urban Transit Management System
2. Manila E-Commerce Platform for Local Artisans
3. Bucharest Healthcare Appointment System
4. Lagos Agricultural Supply Chain Tracker
5. Ho Chi Minh City Smart Parking Solution

## 🤝 Contributing

This is a personal portfolio website. If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ramizbhai Pinjara**
- Web Developer & Full-Stack Engineer
- Active in IT industry since 2021
- Specializing in HTML, CSS, JavaScript, and Python

---

Built with ❤️ using Astro and Tailwind CSS
