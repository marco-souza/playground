export interface GithubUserResponse {
  name: string;
  login: string;
  avatar_url: string;
  url: string;
  bio: string;
}

const GITHUB_BASE = "https://api.github.com"

export const github = {
  user: (name: string) => `${GITHUB_BASE}/users/${name}`
}
