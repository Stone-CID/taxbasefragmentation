# Sharing a website for review without search indexing

## Public review link on GitHub Pages

For material that can be public but should stay out of search results:

- Add `<meta name="robots" content="noindex, nofollow"/>` inside `<head>` on every HTML page, including aliases and any custom error pages.
- Keep crawling allowed. A `robots.txt` disallow rule can stop a crawler from seeing `noindex`; it is not a substitute for that directive.
- Keep the preview out of public site navigation and sitemaps. This reduces discovery but is not access control.
- Verify the directives on the deployed URLs, not just in the source files.
- Keep HTTPS enabled. For this buildless project, publishing from `main` at `/` is appropriate; branch publishing versus GitHub Actions does not change indexing or privacy.
- A private source repository can keep the source and GitHub repository listing private on a supporting plan, but the Pages site is public unless separately configured for private publication.

As checked October 30, 2026, Stone-CID uses GitHub Team. The current taxbasefragmentation repository and its Pages site are public. Only the HTML pages carry the indexing opt-out: directly linked CSVs, images, and the public GitHub repository remain publicly accessible. Search engines that do not honor the directive are not blocked. Already indexed pages may remain in results until recrawled; Google Search Console's removal tools can accelerate removal when needed.

## Restrict viewing to specific reviewers

Use authentication when access must be limited to invited people.

On GitHub Pages, private publication requires an organization on GitHub Enterprise Cloud and a private or internal project repository. To limit access to a small group, use a private repository, grant those reviewers read access, then choose Private under Repository Settings > Pages > GitHub Pages visibility. A private repository alone does not make the published site private. Reviewers need an authorized GitHub account, and read access also lets them read the repository source.

For a simpler review workflow outside Enterprise Cloud, keep the code on GitHub and deploy an authenticated preview with another host. For example, Cloudflare Pages previews can require authentication through Cloudflare Access and restrict access using an explicit reviewer policy. Cloudflare preview deployments also send `X-Robots-Tag: noindex` by default. Its preview access setting protects preview URLs, not the production `pages.dev` URL or custom domains; protect or avoid those alternate public routes as well.

For future confidential reviews, my recommended combination is a private GitHub repository, an authenticated preview restricted to reviewer emails, and noindex as an additional safeguard. A password prompt implemented only in browser JavaScript is not a substitute for host-enforced access control.

## Sources

- [Google: Block Search indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- [GitHub: Changing the visibility of your GitHub Pages site](https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)
- [Cloudflare: Preview deployments and access policies](https://developers.cloudflare.com/pages/configuration/preview-deployments/)
