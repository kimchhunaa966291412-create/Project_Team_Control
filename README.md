# 🌾 KhmerCrop AI · Project Control

## 🔄 Real-time sync between team members

By default this app saves only to each person's own browser. To make edits
show up live for every teammate (member 1 edits → everyone sees it), enable
free Firebase sync — takes about 3 minutes:

1. Go to https://console.firebase.google.com → **Add project** (free tier is enough).
2. **Build → Firestore Database → Create database** → start in **Production mode** → pick any region.
3. **Build → Authentication → Sign-in method** → enable **Anonymous**.
4. In **Firestore → Rules**, replace the contents with:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /khmercrop-project-control/{docId} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```
   then click **Publish**.
5. Project settings (gear icon, top left) → **General** → scroll to **Your apps** → click the **</>** (Web) icon → register the app → copy the `firebaseConfig` values shown.
6. Open `app.js` in this repo, find the `FIREBASE_CONFIG` block near the top, and paste your values in place of the `"YOUR_..."` placeholders.
7. Commit and push. Reload the site — the status bar at the top will switch to **🟢 Sync ជាមួយក្រុមផ្សេងទៀត (Real-time)**.

That's it — every member who opens the page now shares the same live data.
If a teammate is actively typing when an update arrives, it won't interrupt
them; instead a banner appears offering to pull in the update (or they can
press `Ctrl+S`).

If you skip this setup, the app still works exactly as before, just
per-device only.


A single-page project management dashboard (Khmer language) for tracking phases,
tasks, team, budget, risks, meetings, and progress — no backend required.
All data is saved in the browser via `localStorage`, and can be exported /
imported as JSON or exported as a Markdown report.

## Project structure

```
khmercrop-ai/
├── index.html              # Main HTML entry point
├── css/
│   └── style.css           # All styling (light + dark theme via CSS variables)
├── js/
│   └── app.js               # All application logic (state, rendering, events)
├── assets/
│   └── favicon.svg          # App icon
├── .github/
│   └── workflows/
│       └── deploy.yml       # Auto-deploy to GitHub Pages on push to main
├── .gitignore
├── LICENSE
└── README.md
```

This is a plain HTML/CSS/JS static site — no build step, no framework,
no dependencies to install. Open `index.html` directly, or serve the folder
with any static file server.

## Run locally

Just open `index.html` in a browser, or, for a proper local server (recommended
so relative paths behave the same as they will on GitHub Pages):

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Host for free on GitHub Pages

1. Create a new **public** GitHub repository (e.g. `khmercrop-ai`).
2. Push this folder's contents to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In your repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
   The included workflow at `.github/workflows/deploy.yml` will build and
   deploy automatically on every push to `main`.
   *(Alternatively, choose Source → "Deploy from a branch" → `main` → `/root`,
   and you don't need the Actions workflow at all — either method works for
   a static site like this.)*
5. After the first deploy finishes (check the **Actions** tab), your site
   will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

## Editing the app

- **Content / structure** → edit `index.html`
- **Colors, spacing, layout, dark mode tokens** → edit `css/style.css`
  (look for the `:root` and `[data-theme="dark"]` blocks at the top)
- **Behavior / data / features** → edit `js/app.js`
  - `STORAGE_KEY` — the localStorage key used to persist project data
  - `USER_KEY` — the localStorage key used to persist the selected user
  - The `data` object holds everything: `phases`, `tasks`, `team`, `budget`,
    `risks`, `goals`, `meetings`, `impact`, `techStack`
  - `save()` / `load()` — persistence
  - `render()` — re-renders every section; called after any state change

Since everything is in three plain files, you can open this repo directly in
the [github.dev](https://github.dev) web editor, or clone it and edit with
Claude Code / any editor — no local Node/npm setup required.

## Data & backup

All project data lives only in your browser's `localStorage`, scoped to the
domain you host it on. Use the **⬇ នាំចេញ** (Export) button in-app to export
a Markdown report, and the JSON import/export controls (if enabled in the
dropdown menu) to back up or transfer your data between browsers/devices.

## License

MIT — see [LICENSE](LICENSE).
