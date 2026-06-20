# BlackForgeX — company website

Static website for **BlackForgeX Pvt. Ltd.** (Akola, India) — a software development
company. Plain HTML/CSS/JS, no build step, deploys to GitHub Pages at
**https://blackforge.group**.

## Pages
- `index.html` — home
- `services.html` — services
- `about.html` — about
- `contact.html` — contact (mailto form)
- `404.html` — not-found page
- `assets/` — CSS, JS, favicon
- `CNAME` — custom domain (`blackforge.group`) for GitHub Pages

## Preview locally
```
cd blackforge-site
python -m http.server 8000
```
Open http://localhost:8000

## Deploy (GitHub Pages)
The domain DNS already points to GitHub Pages under the account `atharvasunilzade`.
Publish the contents of this folder to the repo **`atharvasunilzade.github.io`**
(branch `main`, root). The included `CNAME` sets the custom domain automatically.

## Edit the content
All text is plain HTML — phone `+91 83089 66290`, email `info@blackforge.group`
and address appear in the header/footer/contact of each page.
