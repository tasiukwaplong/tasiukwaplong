
# Tasiu Kwaplong

Tasiu Kwaplong is a modern, responsive personal portfolio web application built with React, TypeScript, Vite, and Tailwind CSS. It showcases professional experience, education, skills, projects, awards, speaking engagements, and more, with a clean and accessible design.

## Features

- **About**: Personal introduction and summary.
- **Experience**: Timeline of professional roles and achievements.
- **Education**: Academic background and qualifications.
- **Skills**: Technical and soft skills, visually organized.
- **Projects**: Portfolio of work, with descriptions and links.
- **Awards**: Honors and recognitions.
- **Speaking**: Events and talks delivered.
- **Volunteer**: Community service and volunteer work.
- **Contact**: Contact form and details.
- **Open to Work**: Banner indicating job search status.
- **Theme Toggle**: Light/dark mode switch.
- **UI Components**: Custom, reusable components for buttons, cards, dialogs, forms, navigation, and more (see `src/components/ui/`).

## Tech Stack

- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, PostCSS
- **Linting**: ESLint

## Project Structure

```
src/
  components/        # Main page sections and UI components
  hooks/             # Custom React hooks
  lib/               # Utility functions
  pages/             # Page-level components (Hire, Learn, etc.)
  App.tsx            # Main app component
  main.tsx           # Entry point
public/              # Static assets
```

## Getting Started

1. **Install dependencies:**
	```sh
	npm install
	```
2. **Run the development server:**
	```sh
	npm run dev
	```
3. **Build for production:**
	```sh
	npm run build
	```

## Customization

Edit the content in the `src/components/` and `src/pages/` folders to update personal information, projects, and other sections. UI components in `src/components/ui/` can be reused and styled as needed.

## License

This project is open source and available under the MIT License.
