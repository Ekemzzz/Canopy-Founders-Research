# Inside Canopy — implementation plan

## Project basis

The initialized project directory was empty: there was no framework, package manifest, dependency tree, application code, or development server. This is a new static React/Vite project in the managed WebDev workspace. The project uses no backend, database, authentication, or persistent user data. Vercel remains the requested deployment target; this task prepares the code and README for Vercel but does not publish it.

The research pass accessed official Canopy pages and corroborating public material and found three founders (Adam Liposky, Andrew Nguyen, and Shawn Regan) and four people named on the official team page (Roniel Valdez, Pablo Ocampo, Eric Nielson, and Mark Regan). Evidence strength differs by profile. Eric's official Canopy listing and April 2026 project article establish Canopy engineering involvement, while his public LinkedIn lists Adobe as a current role beginning March 2026. Shawn's founder role is direct but his independent biography is sparse. Roniel's and Pablo's Founding Engineer roles are listed by Canopy, with public GitHub evidence but no verified tenure. Do not imply current employment for anyone unless the published sources support it. Source notes live under `research/`.

Default to initials instead of personal portraits when image rights are unclear. For the user-requested Roniel Valdez Preview edit, use only the image that Canopy’s live About/team page currently displays beside his name and role: reference its official HTTPS CDN URL directly, do not download or rehost it, retain descriptive alt text and initials fallback, and keep his Team-card `.person-photo-credit` paragraph empty with no visible credit link, as explicitly confirmed in the latest request. Preserve the image-credit metadata and official team-page source in Roniel’s profile. The checked Canopy Terms of Service did not provide a separate portrait-reuse license; record this limitation plainly, do not claim permission, and require permission or a licensed/user-provided replacement before any public Vercel deployment. For the follow-up Adam Liposky edit, use the exact user-supplied `Adamlipsyceo.jpg` file, which the requester confirmed depicts Adam; store it in WebDev project storage and render it on `/people/adam-liposky` and his shared founder cards, including the directory and homepage featured-founder card. Keep the image fallback and alt text; record the user-provided provenance without claiming independently verified rights, and confirm permission or remove/replace it before public Vercel deployment. For Andrew Nguyen, use the supplied `AndyNguyen.jpg` in the shared founder cards and on `/people/andrew-nguyen`, stored in WebDev project storage with descriptive alt text and an initials fallback. For Shawn Regan, use the supplied `shawn.jpg` in the shared founder cards and on `/people/shawn-regan`, stored in WebDev project storage with descriptive alt text and an initials fallback; leave Andrew’s image unchanged. For Pablo Ocampo, use the supplied `pablo.avif` on his Team card only, replacing “PO,” with project storage, descriptive alt text and an initials fallback; leave his individual profile page unchanged. Record the user-provided provenance of all supplied portraits without claiming independently verified rights; confirm permission or remove/replace them before public Vercel deployment. Do not use the GitHub anime avatar as Roniel’s likeness, generate a lookalike, or add portraits for other people without established rights and attribution.

## Implementation approach

Use React, Vite, JavaScript, semantic HTML, React Router, Lucide React, plain CSS, and local JavaScript content files. Pin pnpm in `package.json` and declare the reviewed lifecycle-script policy before dependency installation. Keep dependencies minimal; there is no reason to introduce a server, database, authentication, Redux, Next.js, or a testing framework solely for appearances.

Build a static, data-driven single-page application with direct-load support for the declared pages. Route paths are `/`, `/founders`, `/team`, `/timeline`, `/sources`, and `/people/:slug`; the final catch-all renders a custom 404 page. Founder and team cards use the shared person-detail route and component. Search and role filters are stateful only where needed and derive results from local data. Profile, milestone, and source records retain source URLs close to the claims they support. Include only facts with identifiable public evidence; omit unsupported optional fields and label evidence limitations in the methodology or profile copy.

The Home page introduces Canopy in original, concise wording attributed to the project's public material. Its hero begins directly with the main heading—no separate eyebrow or decorative eyebrow dot—while the independent-project notice remains in the shared disclaimer and hero metadata. The Founders and Team pages reuse profile cards and a shared profile grid. The Team search includes a labelled input, role filter only for supported categories, reset behavior, and an empty state. Timeline entries use the date precision supported by their evidence. The Sources page documents source selection, attribution, update and correction practice, and the independent-project disclaimer. A shared header, mobile menu, footer, section heading, source link/list, disclaimer, timeline and 404 keep page behavior consistent.

Page titles and descriptions are set per route without adding a heavy SEO dependency. The initial HTML carries the site-wide title and social metadata; route metadata updates on navigation. Provide a favicon and conservative `robots.txt`. A sitemap's `<loc>` entries require absolute URLs; because no deployment origin has been configured and deployment is out of scope, do not create `sitemap.xml` now. Add it after confirming the production domain. Do not invent canonical or social-preview URLs. Keep external links validated and secure, avoid unsafe HTML rendering, support the user-requested externally hosted Roniel team portrait and the project-stored portraits of Adam, Andrew and Shawn on their profile headers and shared founder cards, and support Pablo’s project-stored photo on his Team card only; each image keeps an initials fallback if loading fails.

## Project structure

- `index.html` — Vite document shell, global metadata, font preconnect and favicon reference to the supplied Canopy logo.
- `/manus-storage/canopy_a0c0ee47.png` — requester-supplied Canopy logo used in the shared header/footer and favicon.
- `app.config.ts` — separate platform project-logo metadata pointing to the stable public CDN copy of the supplied logo.
- `public/manus-routes.json` — route manifest kept aligned with the React Router page declarations.
- `public/robots.txt` — conservative crawl rules with no invented sitemap target; generate `sitemap.xml` only after a canonical production origin is confirmed.
- `src/main.jsx` — React entry point.
- `src/App.jsx` and `src/routes.js` — route composition and centralized route metadata.
- `src/components/` — navigation/mobile menu, footer, page container, section heading, person cards/grid, search/filter/empty state, timeline items, source links/lists and disclaimer.
- `src/pages/` — Home, Founders, Team, shared person detail, Timeline, Sources/Methodology and Not Found pages.
- `src/data/` — founders, team members, milestones, sources and factual research records kept separate from presentation.
- `src/hooks/` — focused hooks such as route metadata only if useful.
- `src/utils/` — external-URL validation and formatting helpers.
- `src/styles/` — CSS variables, reset/global typography, shared components and page-level layout styles.
- `research/` — retained human-readable source notes used to maintain the content records.
- `README.md` — project overview, local commands, research/attribution policy, limitations and Vercel deployment instructions.

## Design system

**Design movement:** independent technology-journalism archive with a restrained field-notes/editorial influence.

**Core principles:** evidence before spectacle; clear editorial hierarchy; people presented with dignity and sparse claims; quiet, deliberate interaction.

**Color philosophy:** the near-black and deep forest surfaces suggest a calm research workspace, while the single emerald accent helps users locate links and actions. These are Inside Canopy's chosen interface colors, not a statement about Canopy Network's official identity. Tokens begin with `#080D0B` background, `#0D1410` secondary surface, `#111A15` cards, `#45D69A` accent, `#F0F5F1` primary text, `#9EB0A4` secondary text and `#26372D` borders.

**Layout paradigm:** a wide editorial canvas with left-aligned copy, margin labels, narrow metadata rails, offset text-and-index hero composition, and responsive directory grids only where comparison among people is useful. Avoid making every section a centered card grid.

**Signature elements:** the requester-supplied Canopy mark shown as a compact image to identify the subject of the research; fine rules and compact source/reference markers; a restrained dotted/network motif used as a background texture rather than a crypto illustration.

**Interaction philosophy:** links and buttons communicate their destination; keyboard focus is always visible; hover is a small change in border, color or position; filters remain understandable and reversible.

**Animation:** short opacity/transform transitions for menus and hover states, with no large parallax, pulsing glow, or motion-dependent content. Disable nonessential transitions under `prefers-reduced-motion`.

**Typography:** Inter for interface and body text, with a system sans-serif fallback; use strong weight/size contrast for editorial display headings, a compact uppercase eyebrow for section metadata, and readable 16px-or-larger body copy. Do not rely on tiny labels for key facts.

**Brand essence:** a source-backed directory and archive for readers who want to understand the people and documented journey behind Canopy Network; **curious, precise, independent**.

**Brand voice:** direct, careful, and human; distinguish evidence from inference. Example headlines: “The people behind the protocol.” “A timeline built from public records.” CTA examples: “Explore the team” and “Read the research notes.”

**Wordmark and logo:** replace the project-created line-work mark and “inside / canopy” lockup with the requester-supplied Canopy Network logo in the shared header/footer and favicon. Keep “Inside Canopy” as the independent publication name in page titles and accessible link names; preserve the visible non-official disclaimer and make no claim of endorsement or affiliation. Logo reuse rights have not been independently verified; confirm permission or use a licensed replacement before public deployment. The forest interface remains this project’s design choice.

## Accessibility, privacy and deployment constraints

Use semantic landmarks and a logical heading hierarchy. All navigation, search, filters, cards and reset controls must work by keyboard and expose labels/states as needed. Maintain sufficient contrast, descriptive alt text for the portrait and any future images, touch-friendly controls, reduced-motion support, and no horizontal overflow at the requested mobile, tablet and desktop widths. Do not communicate profile status by color alone. Avoid private information, wallet-based identity inference, unsafe HTML and secrets in frontend files.

The README explains Vercel deployment, but no public URL, canonical origin, GitHub repository, affiliation or deployment result is claimed unless it is later established. The site clearly identifies itself as independent and not the official Canopy Network site.
