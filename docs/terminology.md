# What to call this workflow

A precise way to describe the request:

> Create a static mirror of taxbasefragmentation.net, put it under version control in a new repository in the Stone-CID GitHub organization, and deploy it to GitHub Pages.

| Term | Meaning here |
| --- | --- |
| Copy or mirror a website | Reproduce the public pages and their assets at another location. “Static mirror” is the most precise term for this project. |
| Clone | Commonly means copying a website in casual conversation. In Git, `git clone` specifically downloads an existing repository and its history. This site was copied from Squarespace, so it was not initially a Git clone. |
| Repository, or repo | The project folder and its tracked history on GitHub. |
| Organization | The shared GitHub account that owns the repository: `Stone-CID`. |
| Initialize | Start tracking the local project with Git. |
| Commit | Save a named snapshot in Git history. |
| Push | Upload local commits to the remote GitHub repository. |
| Publish a repository | Understandable general phrasing for putting the code on GitHub. More precise: “create a public repository and push the code.” That alone does not host the website. |
| Deploy | Make the website files available on a web host. Here the host is GitHub Pages. |
| GitHub Pages | GitHub's static website hosting service, separate from the repository's code-browsing interface. |
| Migrate | Move a site's hosting or platform. This copy is a static migration of its public pages, with dependencies documented in the README. |
| Domain cutover | Change DNS and hosting settings so the original domain serves the new host. This is a separate step and was not performed. |
| Fork | Create a GitHub-linked copy of an existing GitHub repository. This workflow was not a fork. |

“Clone and publish” makes sense informally. “Mirror, create a repository, push, and deploy” describes the actual technical steps more precisely.

References: [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
