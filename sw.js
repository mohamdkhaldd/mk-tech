// The web version without internet: the first visit keeps a copy of the whole
// program (this build's files) on the phone, so it opens with no connection.
// With internet the page itself always comes from the site, so updates show
// on the next open; a new build replaces this copy.
// The three values below are filled in at build time (vite.tablet.config.ts).
// one copy per address: the same build can be served from more than one
// folder of the site (old link, new link, /preview/)
const PREFIX = "albunyan-rental:" + new URL(self.registration.scope).pathname + "-";
const CACHE = PREFIX + "ea260bf730f9";
const FILES = ["apple-touch-icon.png","assets/App-B2k1GMSz.js","assets/App-BnSB7uFX.js","assets/Launcher-yWC1Ya_j.js","assets/LicenseGate-BU_Iliam.js","assets/brand-YCguQlj6.js","assets/cairo-arabic-400-normal-CI-r9s-3.woff","assets/cairo-arabic-400-normal-h-BtS9qV.woff2","assets/cairo-arabic-600-normal-DKFBrmZX.woff","assets/cairo-arabic-600-normal-ZVfwAX8N.woff2","assets/cairo-arabic-700-normal-BSE79iNS.woff2","assets/cairo-arabic-700-normal-C1Bm1EwF.woff","assets/cairo-arabic-800-normal-CEqOMnLm.woff","assets/cairo-arabic-800-normal-F7Hlgj_V.woff2","assets/cairo-latin-400-normal-CThZ5gOL.woff2","assets/cairo-latin-400-normal-QAyfwbjQ.woff","assets/cairo-latin-600-normal-BjJ4U6Jn.woff2","assets/cairo-latin-600-normal-CogBmo_n.woff","assets/cairo-latin-700-normal-CusH9kSK.woff2","assets/cairo-latin-700-normal-DhqWbAW9.woff","assets/cairo-latin-800-normal-Ci7vInAO.woff2","assets/cairo-latin-800-normal-DVVW_Rel.woff","assets/cairo-latin-ext-400-normal-D4JKxl0R.woff2","assets/cairo-latin-ext-400-normal-L5OHPnlz.woff","assets/cairo-latin-ext-600-normal-Bhhavsqo.woff","assets/cairo-latin-ext-600-normal-WmNHKzPv.woff2","assets/cairo-latin-ext-700-normal-BauXs8nZ.woff","assets/cairo-latin-ext-700-normal-XJQDPGXz.woff2","assets/cairo-latin-ext-800-normal-24yENjmb.woff","assets/cairo-latin-ext-800-normal-CrlDRH7K.woff2","assets/index-B1f8KCav.js","assets/index-BwNUrsxM.css","assets/index-DH174bZK.css","assets/noto-kufi-arabic-arabic-600-normal-1Jn-cpnY.woff2","assets/noto-kufi-arabic-arabic-600-normal-nBHVNV64.woff","assets/noto-kufi-arabic-arabic-700-normal-BHTovI-x.woff2","assets/noto-kufi-arabic-arabic-700-normal-CjLDP6vt.woff","assets/noto-kufi-arabic-arabic-800-normal-DEdXkywJ.woff","assets/noto-kufi-arabic-arabic-800-normal-uI3UPWLp.woff2","assets/noto-kufi-arabic-latin-600-normal-BW-ZbPpC.woff","assets/noto-kufi-arabic-latin-600-normal-q3HWDcR-.woff2","assets/noto-kufi-arabic-latin-700-normal-DTKKz0rn.woff2","assets/noto-kufi-arabic-latin-700-normal-DmxKOLlE.woff","assets/noto-kufi-arabic-latin-800-normal-C6Uym7KU.woff","assets/noto-kufi-arabic-latin-800-normal-CuoUIktr.woff2","assets/noto-kufi-arabic-latin-ext-600-normal-CYiV_BVW.woff2","assets/noto-kufi-arabic-latin-ext-600-normal-DTHg8hDF.woff","assets/noto-kufi-arabic-latin-ext-700-normal-DcBBRY1j.woff","assets/noto-kufi-arabic-latin-ext-700-normal-IXrgIZW2.woff2","assets/noto-kufi-arabic-latin-ext-800-normal-BwqkYdxY.woff2","assets/noto-kufi-arabic-latin-ext-800-normal-SRhkTvg5.woff","assets/noto-kufi-arabic-math-600-normal-CX8vgiR8.woff","assets/noto-kufi-arabic-math-600-normal-SrJwKEfu.woff2","assets/noto-kufi-arabic-math-700-normal-DRdTHvi8.woff2","assets/noto-kufi-arabic-math-700-normal-nnhbzK0g.woff","assets/noto-kufi-arabic-math-800-normal-C5DMPsbo.woff2","assets/noto-kufi-arabic-math-800-normal-Ck_uwESp.woff","assets/noto-kufi-arabic-symbols-600-normal-CbsKkuYM.woff2","assets/noto-kufi-arabic-symbols-600-normal-DqVlqcgs.woff","assets/noto-kufi-arabic-symbols-700-normal-B0RrZ4WM.woff2","assets/noto-kufi-arabic-symbols-700-normal-Mt9lA1zF.woff","assets/noto-kufi-arabic-symbols-800-normal-BS-906EY.woff2","assets/noto-kufi-arabic-symbols-800-normal-CO0LaCul.woff","assets/readex-pro-arabic-300-normal-Cn564iF2.woff","assets/readex-pro-arabic-300-normal-Z7ib0yfN.woff2","assets/readex-pro-arabic-400-normal-Bu6eOpsJ.woff2","assets/readex-pro-arabic-400-normal-Dr31TTLO.woff","assets/readex-pro-arabic-500-normal-DSFvUTxE.woff","assets/readex-pro-arabic-500-normal-WBPXibk9.woff2","assets/readex-pro-arabic-600-normal-CCHYCjn7.woff","assets/readex-pro-arabic-600-normal-DKIR1fo9.woff2","assets/readex-pro-latin-300-normal-CynyOhVp.woff","assets/readex-pro-latin-300-normal-wWCyKdSA.woff2","assets/readex-pro-latin-400-normal-CbpgoMGJ.woff","assets/readex-pro-latin-400-normal-DA-ZJHpQ.woff2","assets/readex-pro-latin-500-normal-B0quaOh_.woff","assets/readex-pro-latin-500-normal-CftioIYm.woff2","assets/readex-pro-latin-600-normal-CCSBMN-g.woff2","assets/readex-pro-latin-600-normal-D9AzzAqC.woff","assets/readex-pro-latin-ext-300-normal-BQKIPt3T.woff","assets/readex-pro-latin-ext-300-normal-C0iO8R51.woff2","assets/readex-pro-latin-ext-400-normal-BnIlS29N.woff","assets/readex-pro-latin-ext-400-normal-DkOI2K9o.woff2","assets/readex-pro-latin-ext-500-normal-C9U3KVFy.woff","assets/readex-pro-latin-ext-500-normal-v1Of3aeY.woff2","assets/readex-pro-latin-ext-600-normal-DXwHdkh1.woff","assets/readex-pro-latin-ext-600-normal-DYDPBwcV.woff2","assets/readex-pro-vietnamese-300-normal-D746diud.woff","assets/readex-pro-vietnamese-300-normal-rQrz9L4g.woff2","assets/readex-pro-vietnamese-400-normal-DUG7_51Z.woff","assets/readex-pro-vietnamese-400-normal-DUl6-0OS.woff2","assets/readex-pro-vietnamese-500-normal--H4lhFty.woff","assets/readex-pro-vietnamese-500-normal-CsrAaMtn.woff2","assets/readex-pro-vietnamese-600-normal-Bo1BqZhG.woff2","assets/readex-pro-vietnamese-600-normal-Ul_qmvtb.woff","assets/sql-wasm-C1D_RJuy.wasm","assets/theme-BvDcfpuv.js","assets/theme-Qxlx2W34.js","assets/web-BiyvsnuT.js","assets/web-_-bBfpxZ.js","assets/web-vlz0SN_W.js","index.html","logo.png","manifest.webmanifest","mk-icon-192.png","mk-icon.png"];
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
