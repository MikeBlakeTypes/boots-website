const STRIPE_PAYMENT_URL = "https://buy.stripe.com/7sY28t78B63fcvc9Xg2kw00";

function redirectToStripe() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: STRIPE_PAYMENT_URL,
      "Cache-Control": "no-store, max-age=0",
      "Referrer-Policy": "no-referrer",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export async function onRequestGet({ env }) {
  const clickDate = new Date().toISOString().slice(0, 10);

  try {
    await env.BOOTS_ANALYTICS.prepare(
      `INSERT INTO outbound_clicks (click_date, link_name, click_count)
       VALUES (?, 'liquid-applause', 1)
       ON CONFLICT(click_date, link_name)
       DO UPDATE SET click_count = click_count + 1`
    )
      .bind(clickDate)
      .run();
  } catch (error) {
    // The payment link must continue to work even if analytics is unavailable.
    console.error("Liquid Applause click count could not be recorded", error);
  }

  return redirectToStripe();
}

// Link previews and availability checks commonly use HEAD requests.
// Redirect them without increasing the human click count.
export function onRequestHead() {
  return redirectToStripe();
}
