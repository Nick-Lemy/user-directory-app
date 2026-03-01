# User Directory App

A small web application that fetches users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) and displays them in a browsable, searchable directory. Built with React 19, TypeScript, Tailwind CSS v4, and React Router v7.

## Setup Instructions

```bash
git clone https://github.com/Nick-Lemy/user-directory-app.git
cd user-directory-app
pnpm install
pnpm dev
```

The app will be available at `http://localhost:5173`.

## Running Tests

```bash
pnpm vitest run
```

## Build for Production

```bash
pnpm build
pnpm preview
```

## State Management Approach

All state is managed with React's built-in hooks  - no external state library is used, as the scope doesn't warrant one.

- **`useUsers` hook** (`features/home/hooks/useUsers.ts`)  - Encapsulates the data-fetching lifecycle (`users`, `loading`, `error`) and exposes a `retry` function. This keeps the API concern out of UI components and avoids redundant API calls by fetching once on mount.
- **Search and sort state** live in `HomePage` and are passed down as props. Search filtering uses `useDeferredValue` to avoid blocking the UI during rapid typing, and `useMemo` to skip recomputation when inputs haven't changed.
- **User detail page** is handled via client-side routing (`/users/:id`), so the directory's search/sort state is naturally preserved when navigating back.

This approach was chosen because the app has a shallow component tree with straightforward data flow. Lifting state to the nearest common parent and passing props down is sufficient  - Context or an external store would add complexity without benefit here.

## Assumptions

- The JSONPlaceholder API is stable and always returns the same 10 users.
- "Full address" means the combination of suite, street, city, and zipcode from the API response.
- The sort toggle sorts by full name (not username) since that's the primary display field.
- React Compiler (babel-plugin-react-compiler) is enabled for automatic memoization, which reduces the need for manual `React.memo` wrappers.

## What I Would Improve With More Time

- **Pagination or virtual scrolling** for larger datasets.
- **Debounced search** as an alternative to `useDeferredValue` for broader browser support.
- **More comprehensive tests**  - integration tests for the full search-filter-sort flow, and tests for the `useUsers` hook with mocked fetch.
- **Accessibility audit**  - proper ARIA labels on the search input, sort button, and card interactions, plus keyboard navigation between cards.
- **Skeleton loading states** instead of a simple spinner for a smoother perceived loading experience.
- **Error boundary** at the app level to catch unexpected rendering errors gracefully.

## Project Structure

```
src/
├── api/
│   └── users.ts                # fetchUsers(), fetchUser(), User type
├── utils/
│   └── avatar.ts               # avatarGradients, getInitials(), getGradient()
├── components/
│   └── shared/
│       └── Logo.tsx
├── features/
│   └── home/
│       ├── components/
│       │   ├── HeroSection.tsx  # Hero banner, search input, sort toggle
│       │   ├── UserGrid.tsx     # Card grid with filtering and sorting
│       │   ├── UserCard.tsx     # Individual user card
│       │   ├── UserModal.tsx    # User detail modal
│       │   └── Navbar.tsx       # Top navigation bar
│       ├── hooks/
│       │   └── useUsers.ts     # Data fetching hook
│       ├── layouts/
│       │   └── HomeLayout.tsx
│       └── pages/
│           ├── HomePage.tsx    # Main directory listing
│           └── UserPage.tsx    # User detail page (/users/:id)
├── test/
│   ├── setup.ts
│   ├── utils/
│   │   └── avatar.test.ts     # Unit tests for utility functions
│   └── components/
│       └── UserCard.test.tsx   # Unit tests for UserCard component
├── index.css
└── main.tsx
```

## Bonus Features Implemented

- Sort A-Z toggle next to the search bar
- Client-side routing with shareable URLs (`/users/:id`)
- Unit tests for both a utility (`avatar.ts`) and a component (`UserCard`)
- Staggered card entrance animations and modal open/close animations
