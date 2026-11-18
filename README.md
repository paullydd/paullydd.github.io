# portfolio-site

Paul DeFrain's cybersecurity portfolio, hosted on GitHub Pages at https://paullydd.github.io. A static site with no build step.

## Files

- `index.html`: layout, styles and behavior. You rarely need to touch it.
- `content.js`: all of the site's text, projects, skills and education.
- `images/`: project screenshots.
- `resume.pdf`: the resume the site links to.
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`: site icons.
- `og-image.png`: the preview image shown when the link is shared on LinkedIn, iMessage or Slack.
- `404.html`: shown for broken links.

## Updating the site

1. Open the site and press **Shift+E** (or add `#edit` to the address) to open the editor.
2. Make your changes. They show on the page as you type.
3. In **Publish**, select **Download content.js**, and replace the file in this folder.
4. Push:

```
git add -A
git commit -m "Update portfolio"
git push
```

### Adding screenshots

Save the image in `images/` (WebP or PNG, about 1600 px wide), then in the editor's Projects tab add a line under Screenshots:
`images/my-screenshot.webp | Caption text`

The first screenshot is the project's cover on the home page. Check **Show in Selected work** to feature a project.

### Adding a photo

Save it as `photo.jpg` in this folder and type `photo.jpg` in the editor's About tab.

### Updating the resume

Replace `resume.pdf` with the new file, keeping the same name, and push.
