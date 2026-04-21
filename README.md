# Zoo Dashboard

A live animal monitoring dashboard built with Next.js and Tailwind.

Each animal has randomly generated hunger, thirst, and hygiene stats. Click a card to open a modal with status bars and care actions (feed food, feed water, clean).

## Tech Stack

- **Next.js 16** (App Router)
- **TanStack Query** for data fetching and cache
- **Zod 4** for runtime schema validation
- **Tailwind CSS** for styling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Build the production bundle      |
| `npm start`     | Run the production server        |

## Docker

Build and run the production image with Docker Compose:

```bash
docker compose up --build
```

The app is served on port **3000**.

## Project Structure

```
src/
├── app/
│   ├── api/animals/route.ts   # GET /api/animals
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx          # TanStack Query provider
├── components/                # UI components (grid, card, modal, status)
├── hooks/useAnimals.ts        # TanStack Query hook
├── schemas/animal.ts          # Zod schemas
├── types/animal.ts            # Inferred TypeScript types
└── utils/
    ├── generateAnimals.ts     # Mock data generator
    └── status.ts              # Status / time helpers
```

## API

### `GET /api/animals`

Returns a fresh list of animals with randomized status values.

```json
{
  "animals": [
    {
      "id": "animal-0",
      "name": "Simba",
      "species": "Lion",
      "emoji": "🦁",
      "age": 7,
      "status": { "hunger": 42, "thirst": 71, "hygiene": 88 },
      "lastFed": "2026-04-21T10:15:00.000Z"
    }
  ],
  "generatedAt": "2026-04-21T12:00:00.000Z"
}
```

## License

MIT
