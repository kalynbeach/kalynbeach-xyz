# Notes

## TODOs

- [ ] Add better unit tests
- [ ] Implement authentication using `next-auth`
- [ ] Buy and configure `kalynbeach.io` domain

## Features

### 🔒 Auth

> Implement authentication using `next-auth`.

#### Auth Concepts

- **Authentication**
  - Verifies if the user is who they say they are.
  - Requires the user to prove their identity with something they have, such as a username and password.
- **Session Management**
  - Tracks the user's state (e.g. logged in) across multiple requests.
- **Authorization**
  - Decides what parts of the application the user is allowed to access.

#### Authorization "Zones"

- **Public**
  - Default for all routes
- **Shared**
  - Matched to specific routes
  - For pages and content meant to be shared with specific people
  - Passwordless/token-based authentication
    - Maybe credentials-based login, initially
- **Admin**
  - Matched to specific routes
  - For `kalynbeach` (and any other admins) only
  - OAuth/OpenID Connect-based authentication
    - Probably using the GitHub provider initially

#### Auth Resources

- [Next.js Docs - Authentication](https://nextjs.org/docs/app/building-your-application/authentication)

### 🔊 Internal `WavePlayer`

> Re-implement the `WavePlayer` component package as an internal component library.

### 📖 Blog

> Build a blog.

#### Blog Concepts

- Content
  - Data (`string` in `.mdx` file format)
  - Database
  - Headless CMS (if needed?)
- Route
- Components
  - Layout(s)
  - Page(s)
    - RSCs
    - UI Components

#### Blog Resources

- [leerob/leerob.io](https://github.com/leerob/leerob.io/tree/main)
