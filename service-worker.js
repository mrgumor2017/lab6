/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "61f5c8841cab2f6d58d5f120c36f22dc"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.23808315.css",
    "revision": "37bd52f775af105a7fc2c4fbd332d4dd"
  },
  {
    "url": "assets/img/1.979cf05c.jpg",
    "revision": "979cf05c6ceb876d4c82e101defad847"
  },
  {
    "url": "assets/img/photo_1_2024-05-26_20-14-43.523a13c1.jpg",
    "revision": "523a13c11e913fd9ca296bf350d15135"
  },
  {
    "url": "assets/img/photo_2_2024-05-26_20-14-43.2c314a67.jpg",
    "revision": "2c314a67b87e23529613212599bd5885"
  },
  {
    "url": "assets/img/photo_3_2024-05-26_20-14-43.da394ee1.jpg",
    "revision": "da394ee132766643dc5cacc2745702cd"
  },
  {
    "url": "assets/img/photo_4_2024-05-26_20-14-43.56899239.jpg",
    "revision": "568992399f79c048691ef93fc39b4c68"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Shema.b32c2104.png",
    "revision": "b32c2104c309d360a83d183b6c91e325"
  },
  {
    "url": "assets/js/10.2335d171.js",
    "revision": "fea7c8caf3c78ceee44a393912146324"
  },
  {
    "url": "assets/js/11.baa31513.js",
    "revision": "7c3183bb28914e7eca93f8097e64cdf1"
  },
  {
    "url": "assets/js/12.95061cd2.js",
    "revision": "f5303aac86a7f3b24ee097c3f9692a35"
  },
  {
    "url": "assets/js/13.c3894ce7.js",
    "revision": "668eca286afae228c2dcbfed26c0e0b3"
  },
  {
    "url": "assets/js/14.eed6fbcb.js",
    "revision": "fc8adf744f64945e3fb309f06e74d6fa"
  },
  {
    "url": "assets/js/15.90a7e12c.js",
    "revision": "e989c24d3da7f7b7bc46e2ed54fe5a80"
  },
  {
    "url": "assets/js/16.bc5152e5.js",
    "revision": "c263f49960ab72c2409770204b77dbaf"
  },
  {
    "url": "assets/js/17.78da9552.js",
    "revision": "f0076d81d9b4ba7404f2fff8be73eead"
  },
  {
    "url": "assets/js/18.e93cda26.js",
    "revision": "1fcdbc15c35def4bf1bbe57b6184765f"
  },
  {
    "url": "assets/js/19.3d56db05.js",
    "revision": "88c7be85a96dc0cc35e1ffb380c9cc42"
  },
  {
    "url": "assets/js/2.3d0758d1.js",
    "revision": "e83ae08752bb15e89a35040767e944e9"
  },
  {
    "url": "assets/js/20.374134d6.js",
    "revision": "5a4251c1fc49cbffe5cac9fcc8282c98"
  },
  {
    "url": "assets/js/21.8f5099b3.js",
    "revision": "81a0811ac6e28792922ff42b8704b5f5"
  },
  {
    "url": "assets/js/22.2c484115.js",
    "revision": "612ef438973fdbd86f5b1d29869550c6"
  },
  {
    "url": "assets/js/23.4fa12205.js",
    "revision": "50d01655fa7f18c9e477577d2427327a"
  },
  {
    "url": "assets/js/24.7075afe3.js",
    "revision": "655e78f0f4ea14fb0d7feadd1c8e7124"
  },
  {
    "url": "assets/js/26.92f11a01.js",
    "revision": "30d3a279ef2c9a3926b29b676025ac05"
  },
  {
    "url": "assets/js/3.d5702423.js",
    "revision": "cfecf2605b180a613a22dfacc2849e24"
  },
  {
    "url": "assets/js/4.66174c51.js",
    "revision": "6911d36e018bc8ad6311e3ac8fdfdc2b"
  },
  {
    "url": "assets/js/5.66e81c4b.js",
    "revision": "380ea1057a82131278aaa086feeaac57"
  },
  {
    "url": "assets/js/6.c6360e74.js",
    "revision": "fd09527626dd68c3ac05800c5aeac174"
  },
  {
    "url": "assets/js/7.d6fbf01d.js",
    "revision": "46ad7d5ada3793aa18628a96f89ce767"
  },
  {
    "url": "assets/js/8.9bd88bfb.js",
    "revision": "6e77d6755a4be3b51d8e4cbe8328b320"
  },
  {
    "url": "assets/js/9.12a41922.js",
    "revision": "bd7019f9104848e37a7283efbd174418"
  },
  {
    "url": "assets/js/app.63e264e6.js",
    "revision": "488d8d8cfedfb40eace96d3882c772fa"
  },
  {
    "url": "conclusion/index.html",
    "revision": "053381f9945da526e768881c96a8ece5"
  },
  {
    "url": "design/index.html",
    "revision": "559fe6f7029d057afe7e401f977413da"
  },
  {
    "url": "index.html",
    "revision": "879fdd70938d932980405ad91f9b10d3"
  },
  {
    "url": "intro/index.html",
    "revision": "f8d9b3f08132b921991e13feb80092a8"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a8d2da6227d739b1d241f5f8a873cc37"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "34de0affe5493360ddf5dac4a1d703d9"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9bca8eede6b2e846baa0c0a9c6062181"
  },
  {
    "url": "software/index.html",
    "revision": "541834d45edfa7be0ba790ffb8419643"
  },
  {
    "url": "test/index.html",
    "revision": "6657d5e54a0a58588265c0c0881c0785"
  },
  {
    "url": "use cases/index.html",
    "revision": "9f98cf5649b5010d305ba67df9cd4dc4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
