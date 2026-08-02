# Sameer Kulkarni — Portfolio

This is a modern personal portfolio website built with React and Vite. It is designed to showcase your work, skills, and contact information in a polished, animated experience.

Live site: https://sameer-cmd-git.github.io/SameerSpace/

## What this project includes

- Responsive one-page portfolio layout
- Smooth animated sections and visual effects
- Project showcase section
- Skills section
- Contact section
- GitHub Pages deployment setup

## Tech stack

- React
- Vite
- CSS
- GitHub Actions for deployment

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

## Build for production

```bash
cd portfolio
npm run build
```

The production files will be generated in the `dist` folder.

## Deploy to GitHub Pages

This project is already configured to publish to GitHub Pages using GitHub Actions.

### Steps

1. Push your changes to the main branch.
2. Go to your GitHub repository settings.
3. Open Pages.
4. Choose GitHub Actions as the deployment source.
5. Save the settings.

Your site will be published at:

```text
https://sameer-cmd-git.github.io/SameerSpace/
```

## Project structure

```text
portfolio/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── projects.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## How to edit content

You can update the website content by editing the files inside the `src` folder:

- `src/components/Hero.jsx` — name, role, intro text
- `src/components/About.jsx` — biography and personal details
- `src/projects.js` — your projects list
- `src/components/Skills.jsx` — your skills
- `src/components/Contact.jsx` — email and contact details
- `src/components/Footer.jsx` — social links

## Notes

This portfolio is ready to be hosted on GitHub Pages and can be updated easily by changing the relevant React component files.

