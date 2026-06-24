**Pihu — Pregnancy Journal (trial build)**

A gentle, day-by-day pregnancy journal. Runs entirely in the browser — all data
is saved on the user's own device (nothing is sent to any server). Works offline
once loaded, and can be installed to the phone's home screen like an app.

Files in this package


index.html — the whole app (open this; everything is inside it)
manifest.json — app name, colours and icons for "Add to Home Screen"
sw.js — service worker (offline support; always fetches the latest when online)
icon-192.png, icon-512.png — app icons
README.md — this file


Put it live on GitHub Pages (free)


Create a new GitHub repository, e.g. pihu.
Upload ALL the files above into the repository (root, not a sub-folder).
Go to Settings → Pages.
Under Source, choose Deploy from a branch, branch main, folder /(root), then Save.
Wait ~1 minute. Your app will be live at:
https://<your-username>.github.io/pihu/
Open that link on a phone → browser menu → Add to Home Screen to install it as "Pihu".


Updating the content later

All the daily content lives inside index.html in a clearly marked list called
DAYS (and the wording in the UI object). You can edit those directly and
re-upload index.html — no other files need to change.

Created by Joy James Nicolas — https://www.linkedin.com/in/joy9887
