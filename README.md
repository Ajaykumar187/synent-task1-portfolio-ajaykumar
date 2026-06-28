# Task 1: Personal Portfolio Website

**Internship:** Synent Technologies — Web Development Internship
**Submitted by:** Ajay Kumar
**Email:** ajayistheking17@gmail.com
**GitHub:** [github.com/Ajaykumar187](https://github.com/Ajaykumar187)
**LinkedIn:** [linkedin.com/in/ajay-kumar](https://linkedin.com/in/ajay-kumar)

---

## 🔗 Links

| Resource | Link |
|---|---|
| Live Demo | https://ajaykumar187.github.io/synent-task1-portfolio-ajaykumar |
| GitHub Repo | https://github.com/Ajaykumar187/synent-task1-portfolio-ajaykumar |

---

## 📌 Task Description

Build a personal portfolio website using HTML and CSS to showcase a developer profile.

**Requirements from the task sheet:**
- Single-page website built with HTML and CSS
- Sections: Header (Name & Title), About Me, Skills, Contact
- Output: Clean layout with proper spacing and alignment

---

## 🎯 Objective

Create a fully functional, responsive, single-page portfolio that presents my background, skills, featured projects, and contact information — suitable to share with recruiters and employers.

---

## 🛠️ Methodology

### Step 1 — Planning & Structure
Decided on the page sections based on the task requirements and my resume content:
- Header / Hero (name, title, current status)
- About Me (summary, quick facts)
- Skills / Stack (grouped by category)
- Projects (PredictX & SkyWatch)
- Education & Certifications
- Contact / Footer

### Step 2 — HTML Skeleton
Built `index.html` first using semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`). Each section was given an `id` so the navigation links can jump to it using anchor tags.

### Step 3 — CSS Styling
Wrote `style.css` with the following approach:
- **CSS Custom Properties (variables)** defined at `:root` level for colors and fonts — makes the theme easy to change in one place
- **Flexbox** used for the navigation bar, hero buttons, project cards, and contact grid
- **CSS Grid** used for the skills section (`grid-template-columns: repeat(3, 1fr)`) to create an even 3-column layout
- **Mobile-first thinking** with a single `@media` query at 720px that collapses the nav into a hamburger menu and stacks grid columns

### Step 4 — JavaScript
Added `script.js` with vanilla JavaScript for one specific job: toggle the mobile navigation menu open/closed when the hamburger button is clicked, and close it automatically when a nav link is selected.

### Step 5 — Testing & Polish
- Tested the layout across desktop, tablet, and mobile screen widths using browser DevTools
- Checked all anchor links scroll to the correct section
- Verified fonts load from Google Fonts
- Adjusted spacing, font sizes, and border radius for visual consistency

---

## 📁 File Structure

```
synent-task1-portfolio-ajaykumar/
│
├── index.html        # Page structure and content
├── style.css         # All styling — variables, layout, responsive
├── script.js         # Mobile menu toggle (vanilla JS)
├── README.md         # This file
│
└── screenshots/
    ├── hero.png
    ├── skills.png
    ├── projects.png
    ├── contact.png
    └── mobile-view.png
```

---

## 💡 Key Concepts Used

| Concept | Where it's used |
|---|---|
| CSS Custom Properties | `:root` — all colors and font families |
| Flexbox | Navbar, hero buttons, about grid, contact grid |
| CSS Grid | Skills/stack section (3 columns) |
| Semantic HTML | `<header>`, `<section>`, `<article>`, `<footer>` |
| Anchor navigation | `id` attributes on sections, `href="#section"` on nav links |
| Media queries | Mobile layout under 720px |
| Google Fonts API | Space Grotesk, IBM Plex Sans, IBM Plex Mono |
| Vanilla JavaScript | Mobile hamburger menu toggle |

---

## 📸 Screenshots

> Screenshots are in the `/screenshots` folder.

**Desktop — Hero Section**
![alt text](hero.png)

**Desktop — Skills Section**
![alt text](skills.png)

**Desktop — Projects Section**
![alt text](projects.png)

**Desktop — Contact Section**
![alt text](contact-1.png)

**Mobile View**
![alt text](mobile-view-1.png)

---

## 🚀 How to Run Locally

No build tools or dependencies needed — it is plain HTML, CSS, and JavaScript.

**Option 1 — Open directly**
```bash
git clone https://github.com/Ajaykumar187/synent-task1-portfolio-ajaykumar.git
cd synent-task1-portfolio-ajaykumar
# Open index.html in any browser
```

**Option 2 — Local server (recommended)**
```bash
# Using Node.js
npx serve .

# OR using Python
python -m http.server 5500
```
Then open `http://localhost:5500` in your browser.

---

## 🌐 Deploying on GitHub Pages

1. Push the code to a public GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select `Deploy from a branch`
4. Choose `main` branch and `/ (root)` folder
5. Click **Save** — GitHub will give you a live URL in a minute

---

## ✅ Task Checklist

- [x] Built with HTML and CSS
- [x] Single-page website
- [x] Header section with name and title
- [x] About Me section
- [x] Skills section
- [x] Contact section
- [x] Clean layout with proper spacing and alignment
- [x] Responsive design (mobile + desktop)
- [x] JavaScript for interactivity (mobile menu)
- [x] Minimum 5 GitHub commits
- [x] Demo video recorded and uploaded
- [x] Posted on LinkedIn with @Synent Technologies tag

---

## 👤 About Me

**Ajay Kumar**
B.Tech Computer Science & Engineering (2023–2027)
KCC Institute of Technology and Management, Greater Noida

Full-stack developer with experience building MERN stack applications and ML-based prediction systems. Skilled in REST API development, responsive UI design, and database management.

---
