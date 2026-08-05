# BOOTS Liquid Applause — Stripe Integration Notes

## Stage 1 completed in v2.7.5

The BOOTS website now includes a general thank-you experience at:

`/thank-you/`

This release does **not** change the existing Stripe Payment Link or post-payment behaviour.

## Stage 2 — configure after the page is deployed and approved

1. In Stripe, edit the existing BOOTS Liquid Applause Payment Link.
2. Set the successful-payment action to redirect the customer to:

   `https://bootsmusic.net/thank-you/`

3. Save the Stripe setting only after the deployed page has been checked on desktop and iPhone.
4. Complete one genuine low-value tip to verify the full sequence:

   `TIP JAR · TRINKGELD → Stripe payment → /thank-you/ → thank-you yodel → BACK TO BOOTS`

5. Confirm that cancelling or abandoning the Stripe payment does not redirect the visitor to the thank-you page.

## Scope and limitation

The `/thank-you/` page displays no payment amount, personal details, Stripe session identifiers or transaction information. It is a general thank-you experience; visiting the URL directly is not proof that a payment was completed.
