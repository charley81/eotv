# Events of the villages (eotv)

> Neighborhood event application

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
- [] style add event form
- [] setup server side analytics
- [] add date picker to forms
- [] change favicon
- [] fix landing page image color issue in dark mode
- [] add rate limiting
- [] fix react-server-dom-turbopack-client.browser.development.js:1828 Uncaught (in promise) Error: Only plain objects,

## Issues:

- Need time picker that is customizable and works with shadcn, no time picker in shadcn
  • Created custom time selector from Shadcn select

# Notes

- currently create event is reaching mutation onSuccess
- error toast is showing
- onSuccess data is coming back as undefined
- create event server action is not returning what it the event
