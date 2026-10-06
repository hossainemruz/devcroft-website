# Devcroft website

The Astro product website for [Devcroft](https://github.com/hossainemruz/devcroft), at **https://devcroft.hossainemruz.dev**.

## Local development

Use Node.js 22.12+ (an even-numbered supported release).

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

## Cloudflare

This is a static Astro build; no server adapter or secrets are required.

**Cloudflare Pages:** connect this repository, select Astro, use `npm run build` as the build command and `dist` as the output directory. Set the build environment to Node.js 22.12+ or 24. Add `devcroft.hossainemruz.dev` under Custom domains and follow Cloudflare's DNS instructions.

**Cloudflare Workers:** `wrangler.jsonc` configures static assets from `dist` and proper 404 handling. After building, run `npx wrangler deploy` when ready to publish, then attach the same custom domain in Cloudflare. Deployment has deliberately not been performed by this implementation.

The canonical domain is configured in `astro.config.mjs`, page metadata, and `public/robots.txt`.

## Content and assets

- `src/pages/index.astro`: product copy, showcase frames, FAQs, download links, metadata.
- `src/data/showcase.ts`: all screenshot paths, annotations, and video configuration.
- `src/components/VideoShowcase.astro`: hero poster and native video player when a recording is configured.
- `src/components/ScreenshotFrame.astro`: framed captures, numbered callouts, and accessible enlargement dialogs.
- `src/scripts/showcase.ts`: placeholder video feedback, screenshot enlargement, and download feedback. The previous interactive tour has been removed.
- `src/styles/global.css`: responsive design and reduced-motion handling.
- `public/media`: temporary WebP images captured from the previous website illustrations. **These are not real screenshots of Devcroft**; the page labels them as placeholders.
- `public/images`: original Devcroft/agent icons and the website sharing card.
- `public/fonts`: self-hosted Google Sans Flex and its OFL license, from Devcroft.

### Replace download placeholders

The macOS and Linux buttons currently point to `#download-status` and explain that release downloads are coming soon. When binaries are available, replace their `href` values with release asset URLs, remove their `data-download` attributes, and update the status copy. No binary architecture or minimum OS version is claimed until releases are confirmed.

### Replace the video and screenshot placeholders

1. Add a real MP4 recording, a poster image, optional WebVTT captions, and app screenshots to `public/media/`.
2. In `src/data/showcase.ts`, set `demoVideo.src` to the MP4 path and update `poster` and `captions`. The component automatically replaces the placeholder with a native `<video controls playsinline preload="none">`; nothing autoplays.
3. For each screenshot, update `src`, descriptive `alt`, and set `placeholder: false`. The placeholder labels disappear automatically.
4. Adjust annotation `x`/`y` percentages to point at the real UI. The numbered explanations stay outside the image and stack on mobile.

The hero currently demonstrates the thumbnail/play-button layout. Clicking play shows an honest recording-pending message with a return button; it does not simulate video playback. Feature images can be enlarged using the mouse or keyboard. Escape or the close button dismisses the native dialog and returns focus.

Capture the same clean demo project throughout. Use full workspace captures for Agent, Review, and Resources and focused captures for Home and Relationships. Keep app colors intact and avoid personal paths, account information, or private project content. Preserve the screenshot aspect ratios; the image frames adapt to the files.

### Product sources

Copy is grounded in the desktop repository's README, `docs/resources.md`, and `docs/review-comments.md`, with the existing Rust/GPUI code and bundled brand assets inspected. The feature-led structure takes inspiration from [OmniWM](https://omniwm.app/) while using Devcroft's own identity and content.
