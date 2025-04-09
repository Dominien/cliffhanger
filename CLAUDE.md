# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- Start dev server: `npm run dev`
- Build project: `npm run build`
- Production start: `npm run start`
- Type check: `npm run check`
- Database schema push: `npm run db:push`

## Code Style Guidelines
- **Imports**: Group imports by source (React, 3rd party, local), use absolute paths with @ aliases
- **Types**: Use TypeScript; prefer explicit typing and type safety
- **Components**: Functional React components with explicit type definitions
- **Naming**: PascalCase for components, camelCase for variables/functions
- **File Structure**: Components in /components with feature/section organization
- **Styling**: Use Tailwind with cn() utility for class merging
- **Error Handling**: Capture and log errors in backend, proper status codes in responses
- **Formatting**: 2-space indentation, consistent trailing commas
- **Path Aliases**: Use @/ for client src files, @shared/ for shared files