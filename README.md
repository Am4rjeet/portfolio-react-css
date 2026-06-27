# 🚀 Modern Glassmorphic Portfolio Website

A premium, fully responsive, dark-themed portfolio website built using **React**, **Vite**, and **Vanilla CSS**. The website features a cutting-edge developer layout with animated backdrop glows, custom scrollbars, glassmorphic cards, and an interactive mockup code terminal.

This portfolio is **100% configurable and editable**. All bio details, texts, icons, statistics counters, skills lists, and project details are loaded dynamically from a single JSON database file. You do not need to modify any React component code to update your website in the future!

---

## ✨ Key Features

- 🗄️ **Centralized Configuration Database**: Update, delete, or add projects, skills, and personal links by editing a single JSON file.
- 🎨 **Premium Aesthetics**: Sleek dark theme with violet/pink accent glows, translucent glass panels (`backdrop-filter: blur`), custom typing subtitles, and smooth scroll animations.
- 📱 **Fully Responsive Layout**: Built with CSS Grid and media queries, optimizing the display perfectly for Desktop, Tablet, and Mobile screens.
- 📋 **Interactive Copy to Clipboard**: Simple copy button in the Contact section to copy your email (`amarjeetxwd@gmail.com`) with active "Copied!" feedback tooltips.
- ⚡ **Lightning Fast Build**: Built on Vite, yielding sub-second rendering and builds.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS (CSS Custom Variables, Flexbox, CSS Grid)
- **Icons**: FontAwesome CDN
- **Fonts**: Google Fonts (Outfit & Inter)

---

## 🚀 Getting Started

To run the portfolio website locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Am4rjeet/portfolio-react-css.git
cd portfolio-react-css
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` (or the port displayed in your terminal).

### 4. Build for production
To compile and optimize the app for hosting:
```bash
npm run build
```
This will generate production-ready files in the `dist/` directory.

---

## 📝 Customization Guide

You can customize **everything** on this site by editing the following file:
📍 `src/data/portfolioData.json`

### File Structure:
- **`personalInfo`**: Modify your name, role title, email, GitHub URL, and current location.
- **`hero`**: Edit the typewriter subtitles, main paragraph description, and status tags.
- **`about`**: Add/remove text paragraphs or customize statistical metrics cards (number of commits, years of development, etc.).
- **`skills`**: Manage your skillset categories (Frontend, Backend, Database, Tools) along with progress bar percentages.
- **`projects`**: Add new project objects. The responsive CSS grid will automatically wrap and scale additional project cards into clean rows.

#### Example (Adding a New Project):
Add a new object inside the `projects` list array:
```json
{
  "title": "Project Name",
  "subtitle": "Short description of project type",
  "description": "A detailed narrative of what you engineered...",
  "tags": ["React", "Express", "Node.js"],
  "githubLink": "https://github.com/Am4rjeet/repo-name",
  "demoLink": "https://demo-site.com"
}
```

---

## 🤝 Contact
- **Name**: Amarjeet Kumar
- **Email**: [amarjeetxwd@gmail.com](mailto:amarjeetxwd@gmail.com)
- **GitHub**: [@Am4rjeet](https://github.com/Am4rjeet)
