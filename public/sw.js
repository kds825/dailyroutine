const PREFIX='morning-lab-'+self.registration.scope;
const CACHE=PREFIX+'v1';
const ASSETS=['./','./app.js','./learning.js','./style.css','./icon.svg','./icon-192.png','./icon-512.png','./manifest.webmanifest','./device-store.mjs','./phone-coach.mjs','./lib/catalog.mjs','./lib/content.mjs','./lib/joseon-course.mjs','./lib/idiom-course.mjs','./lib/python-course.mjs'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||url.pathname.includes('/api/'))return;event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}return response;}).catch(()=>caches.match(event.request).then(cached=>cached||new Response('인터넷 연결 후 다시 열어주세요.',{status:503}))));});
