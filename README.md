# Aakarsh Gupta — Ather Energy AI Generalist (Design) Portfolio

A responsive, dark-first, static portfolio built with semantic HTML, CSS and vanilla JavaScript. No framework, build step, backend, or API key is required.

## Files

- `index.html` — all portfolio content and project sections
- `styles.css` — responsive layout, dark/light themes, responsive project visuals and supplied evidence images
- `script.js` — theme toggle, mobile navigation, project-image preview dialog, dynamic year
- `assets/Aakarsh-Gupta-Resume.pdf` — résumé supplied for this portfolio
- `assets/easyuceed-analytics-dashboard.png` — original EasyUCEED dashboard screenshot, preserved as supplied
- `assets/docusense-ui-mockups.png` — four-panel DocuSENSE interface concept used as the project visual

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a modern browser.

For a local web server (recommended if your browser restricts local file behavior), open a terminal in the extracted folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy for a public portfolio link

### GitHub Pages
1. Create a new public repository, for example `ather-ai-portfolio`.
2. Upload the contents of this folder to the repository root. Ensure `index.html` is at the root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the published URL shown on the Pages settings screen. Open it in a private/incognito window to confirm public access.

### Netlify
1. Sign in to Netlify and choose **Add new site → Deploy manually**.
2. Drag the extracted portfolio folder (or its contents) into the deployment drop zone.
3. Open the generated URL in a private/incognito window to verify it is accessible without login.

## Before sending to Ather

- Verify the public deployment URL in an incognito window.
- The résumé file is bundled and linked from the hero.
- Live demos were not supplied. The EasyUCEED link opens `https://easyuceed.com/analytics`; GitHub links open the supplied repositories.
- LinkedIn was taken from the supplied résumé (`https://www.linkedin.com/in/aakarsh-gupta/`), because the supplied “LinkedIn” URL was actually the DocuSENSE GitHub repository.
- Check whether the résumé is appropriate to publish publicly before deploying it. The bundled PDF contains the contact details present in the résumé.
- The internship and résumé metrics are based on the supplied résumé. The EasyUCEED dashboard screenshot is displayed as supplied, without cropping or editing. The DocuSENSE four-panel visual is a design concept rather than a capture of the running app. The CI/CD project card describes the résumé-listed AWS EKS work without claiming that AWS console or Docker Hub screenshots are currently included.

## Updating content

Edit the text directly in `index.html`. Replace the bundled PDF in `assets/` if your résumé changes. Keep the file name `Aakarsh-Gupta-Resume.pdf` or update the `href` in `index.html`.


### Navigation note

The mobile menu is hidden until the menu button is clicked. The `[hidden]` state is explicitly enforced in CSS so it cannot cover the page content while closed.


## Screenshot assets

The available files in this package include the original EasyUCEED dashboard screenshot and the DocuSENSE interface concept. AWS Console and Docker Hub screenshots were not present in the files available when this version was prepared. Add your actual screenshots to `assets/` and link them from the CI/CD project card when available; do not substitute fabricated console screenshots.
