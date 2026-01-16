/**
 * Placeholder client-friendly fetch function.
 * Replace the internals of `fetchFacebookVideoPlaceholder` with your real API call (RapidAPI, custom scraper, etc).
 *
 * For now this returns mocked data (simulates network latency).
 */

export type FBResult = {
  title: string;
  thumbnail: string;
  sd: string;
  hd?: string;
  audioMp3?: string;
  sourceUrl: string;
};

export async function fetchFacebookVideoPlaceholder(url: string): Promise<FBResult> {
  // rudimentary validation
  if (!url || !url.includes("facebook.com")) {
    throw new Error("Please paste a valid Facebook video URL.");
  }

  // simulate network latency
  await new Promise((r) => setTimeout(r, 900));

  // Mocked response — replace with real API response mapping
  return {
    title: "Cute Rimuru Compilation — Mocked Title",
    thumbnail: "https://placehold.co/800x450/38dbe6/071617.png?text=RimuruSmove+Thumbnail",
    sd: "https://example.com/mock-video-sd.mp4",
    hd: "https://example.com/mock-video-hd.mp4",
    audioMp3: "https://example.com/mock-audio.mp3",
    sourceUrl: url
  };
}