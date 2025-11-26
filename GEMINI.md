# Project: Cronograma Físico-Financeiro

## Project Overview

This project is a static web application that serves as a dashboard for monitoring the financial and physical progress of the "Centro de Reabilitação Neuromotora" project. It provides a comprehensive view of the project's schedule, budget, performance, and key metrics.

The application is built with vanilla HTML, CSS, and JavaScript, and it uses the Chart.js library for data visualization. All the project data is hardcoded in the `app/app.js` file.

The dashboard is organized into the following sections:

*   **Visão Geral (Overview):** Displays summary cards, budget distribution charts, and a project timeline.
*   **Cronograma Detalhado (Detailed Schedule):** Shows a detailed breakdown of activities for each project axis.
*   **Desempenho (Performance):** A table to track planned vs. actual investment and physical progress.
*   **Curva S (S-Curve):** Visualizes the project's performance over time using an S-Curve chart.
*   **Relatório (Report):** Provides a summary report with milestones, risks, and responsibilities.

## Building and Running

This is a static web application and does not require a build process.

To run the application, simply open the `app/index.html` file in a web browser.

## Development Conventions

*   **Data:** All project data is stored in the `projectData` object in the `app/app.js` file. To update the application's content, you need to modify this object.
*   **Styling:** The application uses a custom design system defined in `app/style.css`. It includes a comprehensive set of CSS variables for colors, typography, and spacing, with support for both light and dark modes.
*   **JavaScript:** The application's logic is contained in `app/app.js`. It includes functions for rendering the different views, handling user interactions, and updating the charts.
*   **Dependencies:** The only external dependency is Chart.js, which is included via a CDN in `app/index.html`.
