# Views Directory

This directory contains all the view components for the TREX application.

## Structure

```
views/
├── index.ts          # Export file for all views
├── Home.tsx          # Home view component (includes Hero + Statistics)
├── About.tsx         # About view component
└── README.md         # This documentation
```

## Routing Setup

This project uses **Next.js 13+ App Router** with a organized pages structure:

### Current Routes:
- `/` → Home page (Hero + Statistics sections)
- `/about` → About page

### Adding New Views:

1. **Create the view component** in `src/views/`:
   ```typescript
   // src/views/Contact.tsx
   import React from 'react';

   export default function Contact() {
     return (
       <main className="min-h-screen bg-white">
         {/* Your page content */}
       </main>
     );
   }
   ```

2. **Export it** in `src/views/index.ts`:
   ```typescript
   export { default as Contact } from './Contact';
   ```

3. **Create the route** in `src/app/`:
   ```typescript
   // src/app/contact/page.tsx
   import Contact from '../../views/Contact';

   export default function ContactPage() {
     return <Contact />;
   }
   ```

4. **Update navigation** in `src/components/NavBar.tsx` if needed.

## Best Practices

- Keep view components focused on layout and composition
- Extract reusable logic into custom hooks
- Use the `views/` directory for page-level components only
- Place shared components in `components/` directory
- Follow consistent naming: `PascalCase` for components, `kebab-case` for routes

## Examples of Future Views

```typescript
// Services view
export { default as Services } from './Services';

// Blog view
export { default as Blog } from './Blog';

// Contact view  
export { default as Contact } from './Contact';
```

## Navigation Integration

The NavBar component already includes links for common pages:
- Home (`/`)
- About (`/about`) 
- Services (`/services`)
- Facilities (`/facilities`)

Add your new routes to the NavBar component to enable navigation. 