# Putting your portfolio online (GitHub Pages + Namecheap)

Free hosting, free HTTPS. About 20 minutes, plus up to an hour for DNS to update.

## 1. Personalise the site
- `index.html` — search for `EDIT:` and `Your Name`; change name, bio, skills, email, social links.
- `artwork.js` — list your pieces. Put files in `images/`. It supports:
  - **Renders** (JPG/PNG/WebP). Export at around 2000px wide and compress (e.g. squoosh.app) so the site loads fast.
  - **Turntable videos** (MP4, H.264, 1080p, under ~15 MB). Add a `poster` still image.
  - **Interactive 3D models** (.glb). In Blender use File → Export → glTF 2.0 (.glb). Keep them under ~20 MB.
  - **Sketchfab models**: paste the model ID.
- Replace `images/hero.svg` with your best render (and update the path in `index.html`), then delete the `images/sample-*` files and the demo astronaut entry.
- GitHub rejects single files over 100 MB, so keep big videos on YouTube/Vimeo or compress them.
- Add your CV as `resume.pdf` in this folder (or remove the "Download CV" button).
- `CNAME` — already set to `nopakunwong.com`. Keep this file; GitHub needs it for your domain.

## 2. Upload to GitHub
1. Make a free account at github.com if you don't have one.
2. Create a new **public** repository, e.g. `portfolio`.
3. On the repo page click **Add file → Upload files**, drag in everything from this folder (including the `images` folder and `CNAME`), and click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment* pick **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. Under *Custom domain* type `nopakunwong.com` and **Save**.

## 3. Point your Namecheap domain at GitHub
1. Namecheap → **Domain List** → **Manage** next to your domain → **Advanced DNS** tab.
2. Delete any existing records for `@` and `www` (like the "parking page" URL redirect or CNAME).
3. Add these records:

| Type         | Host | Value                       |
|--------------|------|-----------------------------|
| A Record     | @    | 185.199.108.153             |
| A Record     | @    | 185.199.109.153             |
| A Record     | @    | 185.199.110.153             |
| A Record     | @    | 185.199.111.153             |
| CNAME Record | www  | forian00f.github.io. |

(TTL: Automatic is fine.) Make sure **Nameservers** on the Domain tab is set to *Namecheap BasicDNS*.

## 4. Turn on HTTPS
Back in GitHub **Settings → Pages**, wait until the DNS check passes (minutes to an hour), then tick **Enforce HTTPS**.

Done — your site is live at `https://nopakunwong.com`.

## Updating later
Change files on GitHub (upload new images, edit `artwork.js` with the pencil icon). The site updates within a minute or two.
