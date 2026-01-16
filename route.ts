import { NextResponse } from "next/server";

/**
 * Server-side proxy route to RapidAPI.
 * - Expects POST { url: string }
 * - Uses env vars:
 *   - RAPIDAPI_URL  -> full base URL or endpoint (e.g. https://example-rapidapi-host.p.rapidapi.com/video/info)
 *   - RAPIDAPI_HOST -> rapidapi host required by some APIs (e.g. example-rapidapi-host.p.rapidapi.com)
 *   - RAPIDAPI_KEY  -> your RapidAPI key
 *
 * Notes:
 * - Keep keys server-side (this is a server route).
 * - Add rate-limiting / caching in production.
 */

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const url = String(body?.url || "").trim();

    if (!url) {
      return NextResponse.json({ error: "Missing 'url' in request body." }, { status: 400 });
    }
    if (!url.includes("facebook.com")) {
      return NextResponse.json({ error: "Please provide a valid Facebook video URL." }, { status: 400 });
    }

    const RAPIDAPI_URL = process.env.RAPIDAPI_URL;
    const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST;
    const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

    if (!RAPIDAPI_URL || !RAPIDAPI_HOST || !RAPIDAPI_KEY) {
      return NextResponse.json(
        { error: "Server not configured. Missing RapidAPI environment variables." },
        { status: 500 }
      );
    }

    // Build the upstream URL. Many RapidAPI video endpoints accept a query param like ?url=<video-url>.
    const upstreamUrl = `${RAPIDAPI_URL}${RAPIDAPI_URL.includes("?") ? "&" : "?"}url=${encodeURIComponent(url)}`;

    const upstreamRes = await fetch(upstreamUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": RAPIDAPI_HOST,
        Accept: "application/json"
      },
      // optional: set a timeout with AbortController in production
    });

    const data = await upstreamRes.json().catch(() => null);

    if (!upstreamRes.ok) {
      return NextResponse.json(
        { error: "Upstream error", status: upstreamRes.status, upstream: data },
        { status: 502 }
      );
    }

    // Map common response fields into your FBResult-like shape.
    // Different RapidAPI scrapers return different shapes — adjust mapping to the API you pick.
    const mapped = {
      title: data?.title || data?.video_title || data?.meta?.title || "",
      thumbnail: data?.thumbnail || data?.thumb || data?.cover || data?.meta?.image || "",
      sd: data?.sd || data?.download?.sd || data?.sources?.sd || data?.url_sd || data?.link || "",
      hd: data?.hd || data?.download?.hd || data?.sources?.hd || data?.url_hd || "",
      audioMp3: data?.audio || data?.audio_url || data?.mp3 || "",
      sourceUrl: url,
      raw: data // include raw upstream response for debugging / future mapping
    };

    return NextResponse.json(mapped, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Internal server error" }, { status: 500 });
  }
}