# ALX Listing App

## Description
The ALX Listing App is a web application inspired by Airbnb, designed to display property listings with a clean and reusable UI. The project uses React with TypeScript to create a scalable and maintainable codebase for showcasing property details in a card-based layout.

---

## Project Goals

- Scaffold a professional-grade project with **Next.js 13+**, **TypeScript**, and **TailwindCSS**.
- Implement **reusable components** with a clean and scalable folder structure.
- Enforce **code quality** using ESLint and best practices.
- Lay the groundwork for a real-world **Airbnb-style listing platform**.

## Project Structure
- **`components/common/`**: Contains reusable UI components.
  - `Card.tsx`: A reusable card component to display property information (e.g., image, title, price).
  - `Button.tsx`: A reusable button component for actions like "Book Now" or "View Details".
- **`interfaces/`**: Defines TypeScript interfaces for type safety.
  - `index.ts`: Contains interfaces like `CardProps` and `ButtonProps`.
- **`constants/`**: Stores reusable constants such as API URLs and UI text.
  - `index.ts`: Defines constants like `API_URL` and `UI_TEXT`.
- **`public/assets/`**: Stores static assets like images and SVGs for property listings.


## 🧑Technologies Used

| Tech           | Description                                  |
|----------------|----------------------------------------------|
| Next.js 13+    | React-based framework with routing & SSR     |
| TypeScript     | Type safety and maintainable code            |
| TailwindCSS    | Utility-first CSS for rapid UI development   |
| ESLint         | Linting for consistent, error-free code      |

---

## Requirements

Before getting started, make sure you have the following installed:

- **Node.js** v16 or higher
- **npm**
- A modern code editor like **VS Code**
- VS Code extensions:
  - TailwindCSS IntelliSense
  - TypeScript Support

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app
npm install
npm run dev

Open the app in your browser at http://localhost:3000
