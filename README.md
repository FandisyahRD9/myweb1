````markdown
# RimuruSmove — Facebook Video Downloader (UI scaffold)

This is a UI-focused starter scaffold for RimuruSmove built with Next.js (App Router) and Tailwind CSS.

Features:
- Dark-first UI inspired by Rimuru Tempest (sky teal accents).
- Input -> Processing (slime pulse) -> Result flow.
- Result shows thumbnail, title, SD/HD/MP3 download options (mocked).
- How-to and FAQ sections included.
- Lucide-react icons.

Getting started:
1. Install deps:
   - npm install
2. Run dev:
   - npm run dev
3. Replace placeholder fetch in `lib/fetchFacebook.ts` with your real API call.
   - Consider using an API route (/app/api/...) to keep secrets server-side.
   - Map API response to the `FBResult` type.

Notes:
- This scaffold focuses on the frontend flow. Implement server-side downloader/scraper responsibly and in line with platform terms of service.
````markdown