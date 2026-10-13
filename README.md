# Inside Canopy

**The People Behind Canopy.** An independent, source-backed exploration of the people, ideas, and public milestones behind Canopy Network.

This is a portfolio/community research project. It is not Canopy Network’s official website, is not endorsed by Canopy, and does not claim collaboration with the Canopy team.

## Why this project exists

Inside Canopy organizes publicly available information about Canopy Network’s founders, publicly identified team members, documented contributions, and project milestones. It presents claims with links to supporting public sources and records when the evidence is incomplete.

## Features

- Editorial homepage with sourced Canopy context and featured founders.
- Founder directory and individual source-linked profiles.
- Searchable team directory with role-category filtering, reset behavior, and an empty-search state.
- Selective milestone timeline with publication/event date precision and per-entry source links.
- Sources and methodology index covering attribution, image handling, correction guidance, and update policy.
- Responsive navigation, keyboard focus states, reduced-motion support, and a custom 404 route.
- No backend, database, account system, or private information.

## Technology

- React 19 and Vite 6
- JavaScript and semantic HTML
- React Router 6
- Plain CSS and Lucide React
- pnpm 11 (pinned in `package.json`)

## Project structure

```text
public/                  Favicon, route manifest and robots rules
src/components/           Shared navigation, cards, citations and timeline components
src/data/                 Founders, team, milestones and source catalog
src/hooks/                Page metadata hook
src/pages/                Home, directories, details, timeline, sources and 404
src/styles/               Global tokens and responsive site styles
src/utils/                External URL safety helpers
research/                 Human-readable person and milestone research notes
plan.md                   Approved implementation and design plan
TODO.md                   Outcome tracker
```

## Run locally

Requirements: Node.js 20.19 or newer and pnpm 11.

```bash
pnpm install
pnpm dev
```

Vite listens on `http://localhost:3000`. The package script binds to `0.0.0.0` for the managed preview; for local-only use, change the host to `127.0.0.1` if preferred.

## Build

```bash
pnpm build
pnpm preview
```

The production output is written to `dist/`.

## Deploy to Vercel

1. Create or select a GitHub repository for this project and push the project source to its default branch. No Inside Canopy GitHub repository is connected in this workspace yet.
2. In Vercel, import that repository and select the Vite framework preset.
3. Use `pnpm install` as the install command, `pnpm build` as the build command, and `dist` as the output directory.
4. The included `vercel.json` rewrite sends nested client routes to the app entry point, while static assets continue to be served from the build output.
5. After the public host is established, update `sitemap.xml` if desired and add a canonical URL and `og:url` only for that confirmed domain. This project does not invent a canonical domain.

No production deployment was performed as part of this task.

## Research and methodology

The research pass reviewed Canopy’s public website and About/team page, official announcements, its public whitepaper and GitHub repositories, public professional profiles, interviews and relevant reporting. Person records retain role claims, source IDs, documented contributions and evidence notes. Official company announcements are identified as official claims; personal career details are attributed as self-reported; public repository records support attributed code contributions but are not treated as proof of employment.

Research was reviewed on **11 October 2026**. Evidence depth varies across the seven people represented. In particular, the site does not assert current Canopy employment for Eric Nielson because his public LinkedIn profile lists Adobe as a current role beginning in March 2026. Several Canopy role listings do not provide start or end dates. See `research/people/` and each profile’s source list for detail.

The user-requested Roniel Valdez portrait is the image displayed beside his name on Canopy’s official About/team page. It is embedded directly from Canopy’s CDN (not rehosted), with descriptive alt text and an initials fallback. Per the requester’s latest Preview instruction, the Team-card photo-credit paragraph is empty and no visible image-credit link is rendered there; the image-credit metadata is retained and the official team page remains in his profile’s source list. No separate portrait-reuse license or permission was found in the checked Canopy Terms of Service; the source reference is not a claim of permission. Confirm reuse permission or replace/remove the image before any public Vercel deployment. The GitHub avatar for `@rem1niscence` is an anime illustration and is not used as Roniel’s likeness. Adam Liposky’s profile and founder cards use the portrait supplied with the project request and identified by the requester as Adam. Andrew Nguyen’s and Shawn Regan’s supplied portraits appear on their shared founder cards and individual profile headers. Pablo Ocampo’s Team card uses the portrait supplied with the project request, stored in project storage with descriptive alt text and an initials fallback; his individual profile remains initials. No separate source or rights documentation accompanied the Adam, Andrew, Shawn or Pablo files, so confirm rights or replace/remove them before public deployment. The official Canopy page lists separate Andrew and Shawn headshots, but the supplied files have not been independently matched to those assets. Pablo’s supplied photo is not represented as a GitHub profile image. Other people retain initials rather than unverified or generated portraits. No identity is inferred from wallet addresses, and unsupported optional profile fields remain empty.

Eric Nielson’s Team card and individual profile use the portrait supplied with the project request. No separate source or reuse-rights documentation accompanied it; confirm permission or replace/remove it before any public deployment.

## Attribution and disclaimer

Canopy Network names and public source materials are referenced for research and attribution. The requester-supplied Canopy Network logo is displayed only to identify the subject of this independent research; its reuse rights have not been independently verified. The Inside Canopy palette, editorial layout and page copy are original project choices and are not represented as official Canopy branding or copied website text. Each factual profile and milestone links to its source catalog entry.

## Known limitations

- Roles and public profiles can change; the directory is a dated snapshot, not a live HR directory.
- The number and depth of public biographies are uneven. Some profiles have only a verified project listing and limited independent background.
- A corrections explanation is present, but no project email address, public repository, or submission form is connected yet.
- No public canonical domain or social-preview image is configured. A sitemap with absolute URLs should be added after a confirmed deployment domain exists.
- This workspace has not connected an Inside Canopy repository to the user’s GitHub and has not deployed the site to Vercel.

## Future improvements

- Connect a public GitHub repository and add a live correction/issue link.
- Revisit each profile’s status and source links on a documented schedule.
- Confirm reuse rights for Roniel’s official-team portrait and the user-provided Adam Liposky, Andrew Nguyen, Shawn Regan and Pablo Ocampo portraits before public deployment, or replace/remove any image without appropriate rights; add other portraits only when permission or a suitable license is established and attribution can be recorded.
- Add a canonical URL, Open Graph image, and sitemap after selecting the production domain.
- Expand the timeline only when new significant milestones have clear, opened supporting sources.
