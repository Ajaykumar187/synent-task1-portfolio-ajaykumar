# Task Report — Personal Portfolio Website
**Synent Technologies Web Development Internship**

---

**Intern Name:** Ajay Kumar
**Task Number:** Task 1
**Task Level:** Basic
**Task Title:** Personal Portfolio Website
**Date Submitted:** June 2025

---

## 1. Task Summary

The objective of this task was to build a personal portfolio website using HTML and CSS. The website needed to be a single page with four main sections: Header, About Me, Skills, and Contact. The output should have a clean layout with proper spacing and alignment.

---

## 2. What I Built

A fully responsive single-page portfolio website that showcases my profile as a full-stack developer. The site goes beyond the minimum requirements by also including a Projects section and an Education section, giving a more complete picture of my background.

The final site includes:
- A hero/header with my name, role, and current status
- An About Me section with a personal summary and quick facts table
- A Skills section organized into six categories in a CSS Grid layout
- A Projects section with cards for PredictX and SkyWatch
- An Education & Certifications timeline
- A Contact footer with email, phone, GitHub, and LinkedIn

---

## 3. Technologies Used

**HTML5**
Used semantic elements throughout — `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` — so the structure is readable and meaningful. Navigation links use `href="#id"` anchor tags to jump between sections on the same page.

**CSS3**
The stylesheet uses three modern CSS features:
- CSS Custom Properties (`:root` variables) for the color palette and fonts
- Flexbox for one-dimensional layouts (nav bar, button rows, about section)
- CSS Grid for the two-dimensional skills panel (3 columns × 2 rows)
One `@media` query handles the full mobile layout below 720px.

**JavaScript (Vanilla)**
A small script handles the only interactive element on the page: the mobile hamburger menu. It listens for a click on the menu button, toggles an `open` class on the `<ul>`, and removes it when a link is clicked.

**Google Fonts**
Three typefaces loaded via the Google Fonts API:
- Space Grotesk — headings
- IBM Plex Sans — body text
- IBM Plex Mono — labels, tags, and code-like UI elements

---

## 4. Development Process

**Stage 1 — Planning**
Reviewed the task brief and mapped the required sections to my resume content. Sketched the page layout on paper before writing any code.

**Stage 2 — HTML**
Wrote the full HTML structure first, without any styling. Focused on getting the semantic structure right — correct heading hierarchy (h1 → h2 → h3), meaningful class names, and `id` attributes on each section.

**Stage 3 — Base Styles**
Added CSS variables, reset styles, and typography. Set up the font stack and base spacing.

**Stage 4 — Section by Section**
Styled each section one at a time, starting from the top of the page (nav → hero → about → stack → work → education → footer).

**Stage 5 — Responsive**
Added the `@media` query at the end, tested in Chrome DevTools at 375px (iPhone), 768px (tablet), and 1280px (desktop).

**Stage 6 — Final Check**
Verified all links work, all sections are reachable from the nav, and the page loads correctly by opening it directly as a file and through a local server.

---

## 5. Challenges and Solutions

| Challenge | Solution |
|---|---|
| Nav links overlapping on small screens | Used `@media` query to hide nav links and show a hamburger button below 720px, with JS toggle |
| Skills section uneven on different screen sizes | Switched from Flexbox to CSS Grid with `repeat(3, 1fr)` for equal column widths |
| Maintaining consistent spacing throughout | Defined spacing values as CSS custom properties at the top of the stylesheet |

---

## 6. What I Learned

- How to use CSS custom properties to build a consistent design system
- The difference between Flexbox (one-dimensional) and Grid (two-dimensional) and when to use each
- How to write a proper mobile responsive layout using a single media query
- How `position: sticky` works for the navigation bar
- Semantic HTML structure and why it matters for accessibility and readability

---

## 7. Result

A fully functional, responsive personal portfolio website built with plain HTML, CSS, and a small amount of JavaScript. Meets all the requirements of Task 1 and is ready for deployment on GitHub Pages.

---

## 8. Screenshots

See the `/screenshots` folder in the repository for:
- `desktop-hero.png` — hero section on desktop
- `desktop-skills.png` — skills grid on desktop
- `desktop-projects.png` — project cards on desktop
- `desktop-contact.png` — contact footer on desktop
- `mobile-view.png` — full page on mobile width

---
