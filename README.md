# portfolio-site

Paul DeFrain's cybersecurity portfolio. A static site with no build step, hosted on GitHub Pages.

## Files

- `index.html` is the page layout, styles and interactivity. You rarely need to touch it.
- `content.js` holds all of the site's text: name, links, projects, skills, education.
- `resume.pdf` is the resume the site links to.

## Updating the site

1. Open the site and press **Shift+E** (or add `#edit` to the address) to open the editor.
2. Make your changes. They show on the page as you type.
3. In the **Publish** tab, select **Download content.js** or **Copy content.js**.
4. Replace `content.js` in this folder, then run:

```
git add content.js
git commit -m "Update portfolio content"
git push
```

The live site updates within a minute or two. Back on the site, use **Discard edits** so you're viewing the published version.

To update your resume, replace `resume.pdf` with the new file (keep the same name) and push.

## Preview locally

Open `index.html` in a browser. It works straight from the folder.
