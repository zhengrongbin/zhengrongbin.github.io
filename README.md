# Computational Multiomics Lab — plain HTML website

Six-page static website for `zhengrongbin.github.io`. No Vue, Astro, React, npm, package manager or build step. The approved annotated hero artwork is included at `images/homepage-hero.png`.

## Pages
- `index.html` Home
- `research.html` Research
- `biography.html` PI Biography
- `publications.html` Selected Publications
- `software.html` Software & Resources
- `join.html` Join Us

## Preview locally
Double-click `index.html` to open in a browser. Alternatively, from the project folder run `python3 -m http.server 8000` and visit `http://localhost:8000`.

## Publish to GitHub Pages
1. Back up the current contents of the existing `zhengrongbin.github.io` repository. The ZIP does not alter the live site.
2. Review all copy, especially publication statuses, recruiting information, links, PI appointment/affiliation, and contact information. Replace the PI portrait placeholder and provide a current public contact email.
3. Upload the contents of this folder (NOT the containing folder itself) to the repository's `main` branch. `index.html` must be at repository root.
4. In repository Settings → Pages, select **Deploy from a branch**, `main`, `/ (root)` and save.
5. Once published, open `https://zhengrongbin.github.io/` and check links on desktop and mobile.

## Edit content
Each page is a standalone HTML file. Shared styles are in `css/style.css`; mobile navigation and publication filtering live in `js/main.js`. The header/footer are duplicated in each HTML file to keep the site dependency-free: if changing navigation, update all six pages. Replace `images/homepage-hero.png` if desired. Use relative links to work at GitHub Pages root.

## Content notes
Text is adapted from the supplied CV, cover letter and research statement, and is not a substitute for final public biography review. Some publications are selected examples, not an exhaustive CV list. Prior collaborative software is attributed as developed or co-developed, not presented as solely originated at the new laboratory. No position is claimed to be actively open without confirmation.

## Revision and verification notes
This revision starts from the supplied `computational-multiomics-lab-HTML.zip`. Its existing copy and annotated image are preserved; the original CV, cover letter and Research Statement were not included in that archive and have not been independently compared. Review appointment, authorship and publication details before deployment.

Navigation remains available without JavaScript. With JavaScript enabled, the mobile menu supports Escape and the publication filter announces its result count. The image keeps its original proportions. `.nojekyll` keeps GitHub Pages from processing the files with Jekyll.

The footer Home links now point to the local homepage, so previewing this archive does not send visitors to the current live site. External publication and software links remain as supplied; availability is not guaranteed by local link checks.

No live-site changes have been made. To edit the portrait, replace the `.profile-placeholder` blocks in `index.html` and `biography.html` with an image and meaningful alt text. Add a verified public email in `join.html` using a `mailto:` link. Keep private application documents out of the public repository unless you intend to publish them.
