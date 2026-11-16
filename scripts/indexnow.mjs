// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver; Bing also powers ChatGPT search and
// Copilot) about every page in the live sitemap. Run after each deploy:  npm run indexnow
// The key below must match the file public/02b3d5b7f4499f8e980e74a226fbe6cd.txt that is deployed with the site.
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://so-digital.in").replace(/\/$/, "");
const KEY = "02b3d5b7f4499f8e980e74a226fbe6cd";

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error(`No URLs found in ${SITE}/sitemap.xml. Is the site live?`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, response ${res.status} ${res.statusText}`);
if (res.status >= 400) process.exitCode = 1;
