# Paperwise PDF Field Guide

A static, seven-page educational website. No installation or build is needed.

## Publish on GitHub Pages

1. The canonical URLs, Open Graph URLs, sitemap and robots.txt assume the site will be published at `https://pdfformat.github.io/`. That address requires control of the `pdfformat` GitHub account and a repository named `pdfformat.github.io`. The reference site was unavailable during creation, so the address is an assumption, not a verified deployment.
2. Create or open that repository. Upload **the contents of this folder** (not the enclosing folder) to its root. Ensure `index.html`, `sitemap.xml`, `robots.txt`, `favicon.ico` and the `assets` folder are at the same root level. Commit the changes to the main branch.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then save. Wait for GitHub to publish and visit the Pages URL shown in Settings.
4. Check each page, menu and link on the live site. You can submit the live sitemap in Google Search Console; indexing and rankings are not guaranteed.

## If your publishing URL is different

Before uploading, replace `https://pdfformat.github.io/` with your exact final base URL, **including a trailing slash**, in all HTML files, `sitemap.xml` and `robots.txt`. For a project site it is typically `https://USERNAME.github.io/REPOSITORY/`; for a custom domain use its public HTTPS base URL. The internal links and assets are relative and work under either a root or project path. If publishing under a project path, robots.txt must be served at the domain root to apply to crawlers; GitHub project sites cannot publish a domain-root robots.txt by themselves. A root-level robots.txt is not required for indexing; use Search Console to submit the project-path sitemap. If another robots.txt already exists at the domain root, update it there to reference the sitemap.

Do not change the single external homepage link unless you intend to change its destination. FAQ structured data is deliberately omitted: Google restricts FAQ rich results to eligible authoritative health and government sites.

## Local preview

Open `index.html` in a browser, or run `python3 -m http.server` inside this folder and visit the local address it prints. A web server is only for preview; GitHub Pages serves the files as static content.
