var CACHE = 'pihu-v1';
var ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(ASSETS.map(function(u){ return c.add(u).catch(function(){}); }));
  }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
  }));
  self.clients.claim();
});
self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(function(resp){
      var copy = resp.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, copy); }).catch(function(){});
      return resp;
    }).catch(function(){
      return caches.match(e.request).then(function(r){ return r || caches.match('./index.html'); });
    })
  );
});
