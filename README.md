# Subly test

## Goals

- Fetch data from endpoint (https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b).
- Recreate the cards in the test using React and TypeScript
  - Think about architecture
    - Make easy to reuse
    - Make east to understand
  - Elements of the card
    - Cover image
    - Title
    - Status
    - Last edited
  - The card can handle lots of different states
    - "Ready"
      - Show how many languages the medium has
      - On hover, show edit button on top of the cover image
    - "Error"
      - Show an error instead of the cover image
    - "Transcribing"
      - Show a loading bar on top of the cover image
- Accessible
  - Keyboard
  - Text to speech
- UX
- Bonus points
  - Add some search filters
    - By status
    - By language
  - Test components
  - Deploy creation and send link

## Tech stack

- Core framework / language
  - React
  - TypeScript
- Querying API
  - Native fetch
- Date handling
  - date-fns
- Styling
  - TailwindCSS
  - SCSS ??
- Animations
  - native CSS ??
  - React Spring ??
  - React Framer ?? 
- Testing
  - Jest
  - React testing Library
- Deploy
  - Github Pages
- Dev QA
  - Prettier
  - Eslint

## Roadmap

- [x] Init
- [x] Install / setup tech stack
- [ ] Create skeleton (no styling) // TDD ??
- [ ] Style everything
- [ ] Deploy