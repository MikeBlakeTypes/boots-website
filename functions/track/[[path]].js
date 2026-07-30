const DESTINATIONS = Object.freeze({
  "stick-season-spotify": "https://open.spotify.com/album/59DHuWbJD1SV2UDB48qGYv?si=jXubclZ9Qsy0q09Il0VoIw",
  "stick-season-apple-music": "https://music.apple.com/at/album/stick-season/6789440573?i=6789440574&l=en-GB",
  "stick-season-amazon-music": "https://music.amazon.com/tracks/B0H8BLJKBV",
  "stick-season-youtube-music": "https://music.youtube.com/watch?v=a3Y2vp-eJWk&si=OF9mPcKX3cZTxrWT",
  "stick-season-youtube": "https://youtu.be/a3Y2vp-eJWk?si=f70TsTJQXH-_FBqR",
  "stick-season-deezer": "https://link.deezer.com/s/33OI77RlocUjJgRathJOO",
  "side-project-marveltonez": "https://www.themarveltonez.com",
  "side-project-jason-howell": "https://www.jason-howell.com",
});

function getLinkName(context) {
  const value = context.params?.path;
  return Array.isArray(value) ? value.join("/") : String(value || "");
}

function redirect(destination) {
  return new Response(null, {
    status: 302,
    headers: {
      Location: destination,
      "Cache-Control": "no-store, max-age=0",
      "Referrer-Policy": "no-referrer",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

function notFound() {
  return new Response("Not found", {
    status: 404,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

async function handle(context, countClick) {
  const linkName = getLinkName(context);
  const destination = DESTINATIONS[linkName];

  if (!destination) return notFound();

  if (countClick) {
    const clickDate = new Date().toISOString().slice(0, 10);

    try {
      await context.env.BOOTS_ANALYTICS.prepare(
        `INSERT INTO outbound_clicks (click_date, link_name, click_count)
         VALUES (?, ?, 1)
         ON CONFLICT(click_date, link_name)
         DO UPDATE SET click_count = click_count + 1`
      )
        .bind(clickDate, linkName)
        .run();
    } catch (error) {
      // External links must still work if analytics is temporarily unavailable.
      console.error(`Outbound click count could not be recorded for ${linkName}`, error);
    }
  }

  return redirect(destination);
}

export function onRequestGet(context) {
  return handle(context, true);
}

// Link previews and availability checks commonly use HEAD requests.
// Redirect them without increasing the human click count.
export function onRequestHead(context) {
  return handle(context, false);
}
