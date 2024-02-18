import type { GitHubRepo } from "./github-repos";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GitHubRepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <div className="github-repo-card">
      <Card className="min-h-40 bg-background rounded-none">
        <CardHeader className="p-4">
          <CardTitle className="">
            <a
              className="text-lg font-mono hover:text-kb-green-light transition"
              href={repo.url}
              target="_blank"
            >
              {repo.name}
            </a>
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <p className="text-sm">{repo.description}</p>
        </CardContent>
        <CardFooter className="">
          <div className="flex flex-col gap-3 justify-between">
            <div className="flex flex-row gap-2 justify-between">
              <span className="text-xs">{repo.language}</span>
              <span className="text-xs">{repo.stars} stars</span>
            </div>
            <div className="flex flex-row gap-2 justify-between">
              <span className="text-xs">created: {repo.createdAt}</span>
              <span className="text-xs">updated: {repo.updatedAt}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}