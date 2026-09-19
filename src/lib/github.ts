export function getGithubOgImage(githubUrl?: string): string | null {
  if (!githubUrl) return null;
  try {
    const url = new URL(githubUrl);
    if (!url.hostname.includes("github.com")) return null;
    const [, owner, repo] = url.pathname.split("/");
    if (!owner || !repo) return null;
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
  } catch {
    return null;
  }
}