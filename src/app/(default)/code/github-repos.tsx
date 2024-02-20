import GitHubRepoCard from "./github-repo-card";

export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string;
  visibility: string;
  url: string;
  homepage: string;
  language: string;
  stars: number;
  createdAt: Date;
  pushedAt: Date;
  updatedAt: Date;
  tags: string[];
};

type Props = {
  username: string;
  count?: number;
};

export default async function GitHubRepos({
  username,
  count
}: Props) {
  const repos: GitHubRepo[] = await fetchRepos(username, count);
  return (
    <div className="github-repos grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3">
      {repos.map((repo) => (
        <div key={repo.name} className="github-repo-container">
          <GitHubRepoCard repo={repo} />
        </div>
      ))}
    </div>
  );
}

async function fetchRepos(username: string, count: number = 6) {
  const url = `https://api.github.com/users/${username}/repos?sort=pushed&per_page=${count}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch GitHub repos");
  }
  const reposJson = await res.json();
  let repos: GitHubRepo[] = [];
  for (const repo of reposJson) {
    repos.push({
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description,
      visibility: repo.visibility,
      url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stars: repo.stargazers_count,
      createdAt: repo.created_at,
      pushedAt: repo.pushed_at,
      updatedAt: repo.updated_at,
      tags: repo.topics,
    });
  }
  repos.sort((a, b) => {
    return new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime();
  });
  return repos;
}