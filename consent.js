document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var STORAGE_KEY = 'bootsConsentV1';
  var STORAGE_DAYS = 180;
  var currentPreferences = readPreferences();
  var returnFocusTo = null;

  function readPreferences() {
    try {
      var stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!stored || stored.version !== 1 || stored.expiresAt < Date.now()) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return {
        essential: true,
        media: stored.media === true,
        analytics: false,
        version: 1,
        expiresAt: stored.expiresAt
      };
    } catch (_error) {
      return null;
    }
  }

  function savePreferences(preferences) {
  alert('SAVE STARTED');
    currentPreferences = {
      essential: true,
      media: preferences.media === true,
      analytics: false,
      version: 1,
      expiresAt: Date.now() + STORAGE_DAYS * 24 * 60 * 60 * 1000
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentPreferences));
    } catch (_error) {
      // The selection still applies during this page view if storage is unavailable.
    }
    hideBanner();
    closePreferences();
    updateSpotifyPlayers();
  }

  function allows(category) {
    if (category === 'essential') return true;
    return Boolean(currentPreferences && currentPreferences[category] === true);
  }

  function createInterface() {
    var container = document.createElement('div');
    container.innerHTML =
      '<section class="consent-banner" id="consentBanner" aria-labelledby="consentTitle" role="region">' +
        '<div class="consent-banner-copy">' +
          '<p class="consent-kicker">Datenschutz · BOOTS</p>' +
          '<h2 id="consentTitle">Cookies &amp; eingebettete Medien</h2>' +
          '<p>Wir verwenden notwendigen lokalen Speicher für Ihre Auswahl. Mit Ihrer Einwilligung dürfen Spotify-Player geladen werden; Spotify kann dabei Cookies oder Gerätedaten verarbeiten. Ihre Auswahl können Sie jederzeit ändern.</p>' +
          '<p lang="en">We use essential local storage to remember your choice. With your consent, Spotify players may load and process cookies or device data. You can change your choice at any time.</p>' +
          '<a href="privacy.html">Datenschutz &amp; Privacy Policy</a>' +
        '</div>' +
        '<div class="consent-banner-actions">' +
          '<button class="consent-button" data-consent="accept" type="button"><span>Spotify erlauben</span><small>Accept Spotify</small></button>' +
          '<button class="consent-button" data-consent="reject" type="button"><span>Optionales ablehnen</span><small>Reject optional</small></button>' +
          '<button class="consent-button consent-button-secondary" data-consent="preferences" type="button"><span>Einstellungen</span><small>Preferences</small></button>' +
        '</div>' +
      '</section>' +
      '<div class="consent-modal" id="consentModal" hidden>' +
        '<div class="consent-modal-backdrop" data-consent-close></div>' +
        '<section class="consent-dialog" role="dialog" aria-modal="true" aria-labelledby="preferencesTitle">' +
          '<button class="consent-close" type="button" aria-label="Cookie-Einstellungen schließen" data-consent-close>&times;</button>' +
          '<p class="consent-kicker">Ihre Privatsphäre · Your privacy</p>' +
          '<h2 id="preferencesTitle">Cookie- &amp; Medieneinstellungen</h2>' +
          '<p>Optionale Dienste bleiben deaktiviert, bis Sie sich anders entscheiden. Die Einwilligung ist freiwillig und kann hier jederzeit widerrufen werden.</p>' +
          '<p lang="en">Optional services stay off unless you choose otherwise. Consent is voluntary and can be withdrawn here at any time.</p>' +
          '<div class="consent-category"><div><strong>Notwendiger Speicher</strong><span>Speichert Ihre Auswahl bis zu sechs Monate. · Remembers your choice for up to six months.</span></div><input aria-label="Notwendiger Speicher ist immer aktiviert" checked disabled type="checkbox"></div>' +
          '<label class="consent-category" for="mediaConsent"><div><strong>Eingebettete Medien</strong><span>Erlaubt Spotify-Player auf dieser Website. · Allows Spotify players on this website.</span></div><input id="mediaConsent" type="checkbox"></label>' +
          '<div class="consent-category consent-category-disabled"><div><strong>Analyse</strong><span>Wird derzeit nicht verwendet. · Not currently used.</span></div><input aria-label="Analyse wird nicht verwendet" disabled type="checkbox"></div>' +
          '<div class="consent-dialog-actions"><button class="consent-button" data-consent="save" type="button">Auswahl speichern</button><button class="consent-button" data-consent="reject" type="button">Optionales ablehnen</button></div>' +
          '<p class="consent-fine-print">Details: <a href="privacy.html">Datenschutz &amp; Privacy Policy</a>.</p>' +
        '</section>' +
      '</div>';
    while (container.firstChild) document.body.appendChild(container.firstChild);
  }

  function showBanner() {
    var banner = document.getElementById('consentBanner');
    if (banner) banner.hidden = false;
  }

  function hideBanner() {
    var banner = document.getElementById('consentBanner');
    if (banner) banner.hidden = true;
  }

  function openPreferences(trigger) {
    returnFocusTo = trigger || document.activeElement;
    var modal = document.getElementById('consentModal');
    var mediaCheckbox = document.getElementById('mediaConsent');
    mediaCheckbox.checked = allows('media');
    modal.hidden = false;
    document.body.classList.add('consent-open');
    modal.querySelector('.consent-close').focus();
  }

  function closePreferences() {
    var modal = document.getElementById('consentModal');
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('consent-open');
    if (returnFocusTo && typeof returnFocusTo.focus === 'function') returnFocusTo.focus();
  }

  function updateSpotifyPlayers() {
    var enabled = allows('media');
    document.querySelectorAll('.spotify-embed').forEach(function (slot) {
      if (enabled) {
        if (slot.querySelector('iframe')) return;
        slot.innerHTML = '';
        var frame = document.createElement('iframe');
        frame.src = slot.dataset.spotifySrc;
        frame.title = slot.dataset.title;
        frame.loading = 'lazy';
        frame.referrerPolicy = 'strict-origin-when-cross-origin';
        frame.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
        slot.appendChild(frame);
        return;
      }
      slot.innerHTML = '<div class="media-consent-placeholder"><p>Spotify ist deaktiviert, bis Sie eingebettete Medien erlauben.<br><span lang="en">Spotify is blocked until you allow embedded media.</span></p><button type="button" data-enable-spotify>Spotify erlauben · Allow Spotify</button></div>';
      slot.querySelector('[data-enable-spotify]').addEventListener('click', function () {
        savePreferences({ media: true });
      });
    });
  }

  function handleAction(button) {
  alert('BOOT CONSENT CLICKED: ' + button.dataset.consent);

  var action = button.dataset.consent;
    if (action === 'accept') savePreferences({ media: true });
    if (action === 'reject') {
  alert('REJECT PATH ENTERED');
  savePreferences({ media: false });
}
    if (action === 'preferences') openPreferences(button);
    if (action === 'save') savePreferences({ media: document.getElementById('mediaConsent').checked });
  }

  createInterface();

document.addEventListener('click', function (event) {
  var target = event.target;

  if (!target || typeof target.closest !== 'function') {
    return;
  }

  var button = target.closest('[data-consent]');
  if (button) {
    handleAction(button);
    return;
  }

  var openButton = target.closest('[data-open-consent]');
  if (openButton) {
    openPreferences(openButton);
    return;
  }

var closeButton = target.closest('[data-consent-close]');
  if (closeButton) {
    closePreferences();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') closePreferences();
});

  window.BootsConsent = {
    allows: allows,
    open: openPreferences,
    grantMedia: function () { savePreferences({ media: true }); },
    get: function () { return currentPreferences; }
  };

  updateSpotifyPlayers();
  if (currentPreferences) hideBanner();
  else showBanner();
});
