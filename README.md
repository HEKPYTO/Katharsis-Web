# Katharsis (Portfolio Website)

A modern, minimalistic portfolio website built with SvelteKit, featuring dynamic GitHub integration, interactive terminal, and responsive design.

## Features

- **Dynamic GitHub Integration** - Automatically fetches and displays your latest repositories
- **Interactive Terminal** - Explore development philosophy through terminal commands
- **Responsive Design** - Optimized for all devices with smooth animations
- **Dark/Light Mode** - Automatic theme switching with user preference detection
- **Multiple Sections**:
  - Home with hero section and featured projects
  - Projects page with complete GitHub repository showcase
  - About page with personal interests and development setup
  - Contact page with social links and contact form

## Tech Stack

- **Framework**: SvelteKit 2.x with TypeScript
- **Package Manager**: Bun (fast, all-in-one toolkit)
- **Styling**: TailwindCSS 4.x with custom design system
- **Icons**: Tabler Icons
- **API**: GitHub REST API via Axios
- **Deployment**: Ready for Vercel, Netlify, or any adapter-compatible platform

## Quick Start

> **Prerequisites**: [Bun](https://bun.sh) - Install with `curl -fsSL https://bun.sh/install | bash`

```bash
# Clone the repository
git clone <your-repo-url>
cd katharsis

# Install dependencies (fast with bun!)
bun install

# Start development server
bun run dev

# Open in browser
# Navigate to http://localhost:5173
```

## Development Commands

```bash
# Development server with hot reload
bun dev
# or
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Type checking
bun run check

# Format code
bun run format

# Lint and check formatting
bun run lint

# Install new dependencies
bun add <package-name>

# Install dev dependencies
bun add -d <package-name>
```

````

## Customization

### GitHub Integration

Update your GitHub username in `src/lib/api/github.ts`:

```typescript
const USERNAME = 'your-github-username';
````

### Personal Information

Update the following files with your information:

- `src/routes/interests/+page.svelte` - Anime list and setup details
- `src/routes/socials/+page.svelte` - Social media links and contact info
- `src/lib/components/Terminal.svelte` - Terminal commands and responses

### Styling

The design system uses custom CSS variables defined in `src/app.css`. Key customization points:

- **Colors**: Modify the `@theme` block for light/dark mode colors
- **Typography**: Three font families are configured (serif, sans, mono)
- **Animations**: All animations are intentionally slowed down for a premium feel

### Content Sections

1. **Hero Section** (`src/lib/components/Hero.svelte`)

   - Main headline and call-to-action
   - Animated gradient button

2. **Terminal Section** (`src/lib/components/Terminal.svelte`)

   - Interactive command system
   - Customizable commands and responses

3. **Projects Section**

   - Automatically populated from GitHub API
   - Filterable and sortable project cards

4. **About Section**
   - Personal interests (anime collection)
   - Development setup showcase
   - Philosophy cards

## Project Structure

```
src/
├── lib/
│   ├── api/
│   │   └── github.ts              # GitHub API integration
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   ├── FeatureCard.svelte     # Feature showcase cards
│   │   ├── FeatureGrid.svelte     # Grid layout component
│   │   ├── Hero.svelte            # Homepage hero section
│   │   ├── Navigation.svelte      # Site navigation
│   │   ├── ProjectCard.svelte     # GitHub project cards
│   │   └── Terminal.svelte        # Interactive terminal
│   ├── stores/
│   │   └── theme.ts               # Theme management
│   └── utils.ts                   # Utility functions
├── routes/
│   ├── interests/                 # About page
│   ├── projects/                  # Projects showcase
│   ├── socials/                   # Contact page
│   ├── +layout.svelte             # Global layout
│   └── +page.svelte               # Homepage
└── app.css                        # Global styles and design system
```

## Key Features Implementation

### GitHub API Integration

- Fetches public repositories automatically
- Filters out forks and applies sorting
- Handles API errors gracefully
- Displays repository stats (stars, forks, language)

### Interactive Terminal

- Command history with arrow key navigation
- Multiple commands: `help`, `about`, `skills`, `philosophy`, `tools`, `whoami`, `clear`
- Blinking cursor animation
- Responsive click-to-focus behavior

### Responsive Design

- Mobile-first approach
- Smooth animations and transitions
- Optimized for performance
- Accessibility considerations

### Theme System

- Automatic dark/light mode detection
- Smooth theme transitions
- Persistent user preference
- High contrast dark mode

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with SvelteKit's automatic code splitting
- **Loading Speed**: Fast initial load with progressive enhancement
- **Development**: Lightning-fast builds and hot reload with Bun
- **SEO**: Proper meta tags and semantic HTML

## Browser Support

- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Progressive enhancement for older browsers
- Responsive design for all screen sizes

## Deployment

The project is configured for multiple deployment platforms:

```bash
# Build for production
bun run build

# The build output will be in the `build` directory
# Deploy to your preferred platform (Vercel, Netlify, etc.)
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Install dependencies with `bun install`
4. Make your changes
5. Ensure tests pass and code is formatted (`bun run lint`)
6. Submit a pull request

---

Built using SvelteKit and modern web technologies.
