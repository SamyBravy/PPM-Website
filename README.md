# 📰 PPM-Front-End

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Multi_Device-success?style=for-the-badge)

A high-fidelity replica of the [CBS News](https://www.cbsnews.com/) homepage, developed for the **PPM (Progettazione e Produzione Multimediale)** course. The goal was to recreate a complex, dynamic news portal using only vanilla web technologies while ensuring advanced responsiveness across various breakpoints.

**[🌐 View Live Demo](https://samybravy.github.io/PPM-Front-End/)**

## 🚀 Overview

This project was built from scratch without external frameworks to demonstrate mastery of core web development principles:

-   **Semantic HTML5**: Used structured tags (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`) for improved accessibility and SEO.
-   **Advanced CSS3**:
    -   Complex layouts powered by **CSS Grid** and **Flexbox**.
    -   Pixel-perfect responsive design using **Media Queries**.
    -   Custom typography integration via Google Fonts (PT Serif, Roboto, Lora).
    -   Smooth hover effects and fluid transitions.
-   **Vanilla JavaScript (ES6+)**:
    -   Interactive **Burger Menu** for mobile navigation.
    -   Custom overlay logic and scroll management during navigation.

## ✨ Key Features

-   **Multi-Breakpoint Responsiveness**: The layout adapts fluidly to specific viewport widths:
    -   **Full Desktop**: > 1360px
    -   **Reduced Desktop**: 1020px - 1359px
    -   **Tablet**: 768px - 1019px
    -   **Mobile**: < 767px
-   **Interactive Header**:
    -   Sticky main header that stays visible while scrolling.
    -   Content-rich dropdown menus for different news categories.
    -   Mobile-specific navigation menu with animated transitions and background overlay.
-   **Multi-Section Layout**:
    -   **Hero Section**: Featured articles with asymmetric grid layouts.
    -   **Sidebar**: Breaking news tickers and primary video highlights.
    -   **Topic Clusters**: Thematic sections organized with clean, modern cards.
    -   **Video & Live Channels**: Dedicated multimedia sections with "LIVE" badges and optimized placeholders.
-   **Visual Fidelity**: High attention to font weights, color palettes, and whitespace to match the professional aesthetic of CBS News.

## 📚 Project Structure

```text
├── index.html   # Main site structure and content
├── style.css    # Comprehensive responsive styles
├── script.js    # Interactive logic (Menus & Overlays)
└── README.md    # Project documentation
```