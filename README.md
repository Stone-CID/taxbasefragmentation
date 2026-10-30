# Tax Base Fragmentation

Static mirror of [taxbasefragmentation.net](https://www.taxbasefragmentation.net/), captured October 30, 2026, for the Stone Center for Inequality Dynamics.

- Live copy: https://stone-cid.github.io/taxbasefragmentation/
- Original: https://www.taxbasefragmentation.net/
- Researchers: Robert Manduca, Brian Highsmith, and Jacob Waggoner.

## What is included

The Map, How to Use, Data, and About pages retain the original page markup, visual styles, and research text. `/home/` is an alias of the Map page. Fonts, three instructional screenshots, stylesheets and their referenced assets, and all six downloadable CSV files are stored locally. Relative links work under the GitHub Pages repository path and on a local server.

Squarespace's hosted runtime and analytics were removed. `assets/static-site.js` supplies the mobile navigation behavior and header sizing. `assets/static-site.css` handles static rendering. The `docs/source-manifest.json` file records the original asset URLs, source checksums, and local checksums. Original design and content attribution is retained; this repository does not add a new license to third-party material.

## External services and migration limits

- The interactive map remains the original public U-M ArcGIS application (`211615c5b888419d8e51436a300ff848`). Its application, hosted layers, basemaps, and data services have not been copied into GitHub. Continued operation depends on those services.
- GitHub Pages cannot process the Squarespace contact form. The About page links to the form on the original website and explains where it opens.
- The original Supplementary Appendix link contained an expired signed URL. This copy points to the paper's supplementary-data section instead.
- The paper and researcher profile links remain external.
- This is a snapshot, not an automatic sync or a backup of the Squarespace editor, account, form submissions, or hosting configuration.
- The original domain and its DNS have not been changed. This copy is hosted at the separate GitHub Pages URL above.

## Review site and search indexing

This GitHub Pages copy is a public review site. Every HTML page includes `<meta name="robots" content="noindex, nofollow"/>` to opt out of indexing by search engines that honor that directive. Crawling is left allowed so search engines can read it. This setting does not restrict who can open or share the link. Existing search results may take time to disappear after a recrawl.

The GitHub repository and directly linked downloads are still public; the HTML directive does not make those resources private or prevent the repository from appearing in search. The original Squarespace website and external ArcGIS service are unaffected.

See [review sharing settings](docs/review-sharing.md) for recommended options for future previews.

## Editing and publishing

Edit `index.html`, `how-to-use/index.html`, `data/index.html`, or `about/index.html`. If changing the map page, keep `home/index.html` in sync, accounting for its `../` relative asset and navigation paths.

This is a buildless site. GitHub Pages publishes the root of the `main` branch. `.nojekyll` disables Jekyll processing. Pushing a commit to `main` triggers publication.

Local preview:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8765/.

## Verification at import

- 176 local HTML and stylesheet references resolved.
- Map, home alias, Data, and How to Use main-page text matched the original.
- All six CSVs parsed successfully (18,438 and 11,281 jurisdiction rows; 919, 918, 728, and 728 metro/commuting-zone rows).
- U-M ArcGIS confirmed the application was public.
- JavaScript syntax validation passed.

See [terminology](docs/terminology.md) for a plain-language description of this workflow.
