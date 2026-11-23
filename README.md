# BlackMedia Competitor Intelligence

Internal competitor research workspace for BlackMedia.

## MVP scope
- Yandex SEO research workspace
- Yandex Direct ad observation through a browser extension
- Competitor and region management
- AI-assisted analysis of collected evidence (planned integration)
- CSV export (planned)

## Stack
Next.js App Router, TypeScript, Prisma, PostgreSQL, Tailwind CSS.

## Local development
1. Install Node.js 20+.
2. Copy `.env.example` to `.env` and set `DATABASE_URL`.
3. Run `npm install`.
4. Run `npx prisma generate`.
5. Run `npm run dev`.

The first commit establishes the application foundation. External Yandex data providers and production deployment are intentionally not represented as connected until credentials and access are configured.

## Browser extension
The `extension/` directory will contain a Manifest V3 extension. It records only ad units explicitly saved by a staff member while viewing a Yandex search results page. A captured search query is an observation context, not proof of an advertiser's actual targeting keyword.
