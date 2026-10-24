// The web version without internet: the first visit keeps a copy of the whole
// program (this build's files) on the phone, so it opens with no connection.
// With internet the page itself always comes from the site, so updates show
// on the next open; a new build replaces this copy.
// The three values below are filled in at build time (vite.tablet.config.ts).
// one copy per address: the same build can be served from more than one
// folder of the site (old link, new link, /preview/)
const PREFIX = "albunyan-rental:" + new URL(self.registration.scope).pathname + "-";
const CACHE = PREFIX + "2cfc53e9dbb7";
const FILES = ["apple-touch-icon.png","assets/App-BDoc_pK2.js","assets/App-Ds_V3H_R.js","assets/Launcher-RvxecOVz.js","assets/LicenseGate-C12gOgll.js","assets/brand-gYynp8T4.js","assets/cairo-arabic-400-normal-CI-r9s-3.woff","assets/cairo-arabic-400-normal-h-BtS9qV.woff2","assets/cairo-arabic-600-normal-DKFBrmZX.woff","assets/cairo-arabic-600-normal-ZVfwAX8N.woff2","assets/cairo-arabic-700-normal-BSE79iNS.woff2","assets/cairo-arabic-700-normal-C1Bm1EwF.woff","assets/cairo-arabic-800-normal-CEqOMnLm.woff","assets/cairo-arabic-800-normal-F7Hlgj_V.woff2","assets/cairo-latin-400-normal-CThZ5gOL.woff2","assets/cairo-latin-400-normal-QAyfwbjQ.woff","assets/cairo-latin-600-normal-BjJ4U6Jn.woff2","assets/cairo-latin-600-normal-CogBmo_n.woff","assets/cairo-latin-700-normal-CusH9kSK.woff2","assets/cairo-latin-700-normal-DhqWbAW9.woff","assets/cairo-latin-800-normal-Ci7vInAO.woff2","assets/cairo-latin-800-normal-DVVW_Rel.woff","assets/cairo-latin-ext-400-normal-D4JKxl0R.woff2","assets/cairo-latin-ext-400-normal-L5OHPnlz.woff","assets/cairo-latin-ext-600-normal-Bhhavsqo.woff","assets/cairo-latin-ext-600-normal-WmNHKzPv.woff2","assets/cairo-latin-ext-700-normal-BauXs8nZ.woff","assets/cairo-latin-ext-700-normal-XJQDPGXz.woff2","assets/cairo-latin-ext-800-normal-24yENjmb.woff","assets/cairo-latin-ext-800-normal-CrlDRH7K.woff2","assets/index-BC8AhHbC.js","assets/index-BxBk4gN5.css","assets/index-DTtKDOxI.css","assets/noto-kufi-arabic-arabic-600-normal-1Jn-cpnY.woff2","assets/noto-kufi-arabic-arabic-600-normal-nBHVNV64.woff","assets/noto-kufi-arabic-arabic-700-normal-BHTovI-x.woff2","assets/noto-kufi-arabic-arabic-700-normal-CjLDP6vt.woff","assets/noto-kufi-arabic-arabic-800-normal-DEdXkywJ.woff","assets/noto-kufi-arabic-arabic-800-normal-uI3UPWLp.woff2","assets/noto-kufi-arabic-latin-600-normal-BW-ZbPpC.woff","assets/noto-kufi-arabic-latin-600-normal-q3HWDcR-.woff2","assets/noto-kufi-arabic-latin-700-normal-DTKKz0rn.woff2","assets/noto-kufi-arabic-latin-700-normal-DmxKOLlE.woff","assets/noto-kufi-arabic-latin-800-normal-C6Uym7KU.woff","assets/noto-kufi-arabic-latin-800-normal-CuoUIktr.woff2","assets/noto-kufi-arabic-latin-ext-600-normal-CYiV_BVW.woff2","assets/noto-kufi-arabic-latin-ext-600-normal-DTHg8hDF.woff","assets/noto-kufi-arabic-latin-ext-700-normal-DcBBRY1j.woff","assets/noto-kufi-arabic-latin-ext-700-normal-IXrgIZW2.woff2","assets/noto-kufi-arabic-latin-ext-800-normal-BwqkYdxY.woff2","assets/noto-kufi-arabic-latin-ext-800-normal-SRhkTvg5.woff","assets/noto-kufi-arabic-math-600-normal-CX8vgiR8.woff","assets/noto-kufi-arabic-math-600-normal-SrJwKEfu.woff2","assets/noto-kufi-arabic-math-700-normal-DRdTHvi8.woff2","assets/noto-kufi-arabic-math-700-normal-nnhbzK0g.woff","assets/noto-kufi-arabic-math-800-normal-C5DMPsbo.woff2","assets/noto-kufi-arabic-math-800-normal-Ck_uwESp.woff","assets/noto-kufi-arabic-symbols-600-normal-CbsKkuYM.woff2","assets/noto-kufi-arabic-symbols-600-normal-DqVlqcgs.woff","assets/noto-kufi-arabic-symbols-700-normal-B0RrZ4WM.woff2","assets/noto-kufi-arabic-symbols-700-normal-Mt9lA1zF.woff","assets/noto-kufi-arabic-symbols-800-normal-BS-906EY.woff2","assets/noto-kufi-arabic-symbols-800-normal-CO0LaCul.woff","assets/sql-wasm-C1D_RJuy.wasm","assets/theme-DjVc5LFG.js","assets/theme-dvHMnOx2.js","assets/web-B1ZI_aEV.js","assets/web-B6f--mvu.js","assets/web-B8b3YUji.js","index.html","logo.png","manifest.webmanifest","mk-icon-192.png","mk-icon.png"];
const page = () => new URL("index.html", self.registration.scope).href;

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(FILES.map((f) => new Request(new URL(f, self.registration.scope), { cache: "reload" }))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      // only this copy's older versions
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(() => caches.match(page(), { cacheName: CACHE })));
    return;
  }
  e.respondWith(caches.match(req, { cacheName: CACHE, ignoreSearch: true }).then((hit) => hit ?? fetch(req)));
});
