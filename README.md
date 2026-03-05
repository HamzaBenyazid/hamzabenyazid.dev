# hamzabenyazid.dev

My personal professional website — a central hub to manage my professional presence, showcase my work, experience, and portfolio, and keep everything in sync.

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** — React framework (App Router)
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling

## Project Structure

```
src/
├── app/                  # Next.js App Router pages & layout
├── components/           # UI components (Navbar, Hero, About, Experience, Projects, Contact, Footer)
├── data/                 # JSON data files for easy content management
│   ├── profile.json      # Personal info, bio, location
│   ├── experiences.json  # Work experience entries
│   ├── projects.json     # Portfolio projects
│   └── social.json       # Social media links
└── types/                # TypeScript type definitions
```

## Updating Content

All site content is managed through JSON files in `src/data/`:

- **`profile.json`** — Update your name, title, bio, location, and email
- **`experiences.json`** — Add or update work experiences
- **`projects.json`** — Add or update portfolio projects
- **`social.json`** — Update social media platform links

## Development

```bash
npm install
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build
npm run lint    # Run ESLint
```
