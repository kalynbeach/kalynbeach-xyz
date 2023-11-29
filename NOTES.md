# Notes

## TODOs

- **Pages**
  - `about` page
    - Add content
  - `blog` page
    - Build out blog layout and components
- **Tests**
  - `ui` components
    - `Header`
      - `MobileNav`
        - `toggleMenu` functionality
  - `music` route (slots & components)
    - `@enter`
      - `actions`
      - `EnterForm`
      - `EnterScene`
  - `code` route (content & components)

## Refactor: Music Routes & Pages

### Music Pages

- `/music` (new "intro/portal" page) -> `EnterButton`
  - `/music/enter` -> `EnterScene`, `EnterForm`
  - `/music/init`-> `MusicScene`, `WavePlayerStack`

### Music Routes Flow

1. Navigate to `/music` page
2. Click `EnterButton` -> navigate to `/music/enter` page
3. Submit password into `EnterForm`
4. Verify submitted password
5. If password is correct, navigate to `/music/init` page
