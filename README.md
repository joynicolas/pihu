# Pihu — Pregnancy Journal

A gentle, day-by-day pregnancy companion for the mother **and** her partner.
Pihu turns the nine-month journey into a daily ritual of learning, bonding and
keepsake-making — and runs entirely on the user's own phone.

Everything (notes, photos, drawings, voice messages) is stored **on the device
only** — nothing is ever sent to a server. The app works offline and can be
installed to the home screen like a real app.

---

## What's inside

**A complete 36-week program (252 days), from week 5 to week 40.**
Each day has:

- **Today's science note** — a clinically-grounded milestone for that pregnancy
  week (what the baby is developing right now). The weekly milestones follow
  standard guidance from sources such as Mayo Clinic, ACOG, Cleveland Clinic and
  the American Pregnancy Association.
- **An activity for Mumma** — small, doable, science-aligned things like slow
  breathing, a folate-rich meal, reading or singing to the bump, a belly photo.
- **An activity for the partner (Dada)** — equally simple ways to bond and
  support: reading to the bump, packing the hospital bag, a back rub, talking to
  the baby (who can hear from the second trimester onward).
- **A reflection prompt** — a warm question to capture how this stage feels.
- **A mood check, photo memories, a doodle-and-sticker canvas, and a 2-minute
  voice message** ("Talk to your baby"), all saved per day.

Activities rotate through each trimester so every day feels fresh and appropriate
to the stage — calm and restful early on, bonding and movement in the middle,
preparation and anticipation near the end.

**Languages:** English, Marathi (आई / बाबा) and Hindi (मम्मी / पापा) — switch any
time with one tap. Purely scientific in tone; no religious content.

**Other features:** a personal cover with the parents' names and a photo of
Mumma & Dada, jump-to-any-day navigation, a printable **keepsake PDF** (opens
with a cover page), and **Back up / Restore** so the journal is never lost. The
app reopens on the **last day you visited**.

---

## Files in this package
- `index.html` — the whole app (open this; everything is inside it)
- `manifest.json` — app name, colours and icon for "Add to Home Screen"
- `sw.js` — service worker (offline support; always fetches the latest when online)
- `icon-192.png`, `icon-512.png` — the Pihu app icon
- `README.md` — this file

## Put it live on GitHub Pages (free)
1. Create a GitHub repository, e.g. **pihu**.
2. Upload ALL the files above into the repository (root, not a sub-folder).
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
5. Wait ~1 minute. Your app will be live at:
   `https://<your-username>.github.io/pihu/`
6. Open that link on a phone → browser menu → **Add to Home Screen** to install
   it as "Pihu". (Voice recording and install both need this https link.)

## Editing or extending the content
All content lives inside `index.html`, in clearly-marked data:
- `WEEKS` — the weekly science notes (weeks 5–40).
- `MOM`, `DAD`, `REF` — the per-trimester activity and reflection banks.
- `UI` — every interface label, in all three languages.

Each item has an `{en, mr, hi}` block. Edit the text, re-upload `index.html`, and
the change is live — no other files need to change.

---

*Created by Joy James Nicolas — https://www.linkedin.com/in/joy9887*

> Pihu is a supportive journal, not medical advice. Mothers should always follow
> the guidance of their own doctor or midwife.
