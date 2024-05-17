# Events of the villages (eotv)

> Neighborhood event application

## Uses:

- NextJS ^14 (app router, server actions)
- Typescript (type checking )
- Shadcn (custom components)
- Tailwind CSS (styling)
- Drizzle ORM (object relational mapping => communicate with DB)
- ZOD (validation)
- Tan Query (fetching, caching, synchronizing and updating server state)
- React Hook Form (form validation)
- Posthog (analytics)
- Vercel (CI/CD)
- Clerk (authentication)
- PostgreSQL (object relational database)

## TODO:

- [x] CI/CD (vercel)
- [x] change ts version to workspace
- [x] optimize build (turbopack)
- [x] component library (shadcn)
- [x] icons (lucide)
- [x] setup db (vercel postgres)
- [x] setup orm (drizzle)
- [x] analytics (posthog)
- [x] auth (clerk)
- [x] create custom date function and add to add event form
- [x] create custom time function adn add to add event form
- [x] add date picker to forms
- [x] fix react-server-dom-turbopack-client.browser.development.js:1828 Uncaught (in promise) Error: Only plain objects,
- [] style add event form
- [] setup server side analytics
- [] change favicon
- [] fix landing page image color issue in dark mode
- [] add rate limiting
- [] change auth to only see my-events, add, edit, delete events

## Issues:

- Need time picker that is customizable and works with shadcn, no time picker in shadcn
  • Created custom time selector from Shadcn select
- Need to read documentation covering several new technologies

# Current Issue

- events from db will show in all-events page with first logging in but once clicking submit on search for all events show no events found
