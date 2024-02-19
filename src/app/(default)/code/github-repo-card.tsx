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
        <CardHeader className="">
          <CardTitle className="">
            <a
              className="text-lg font-mono font-bold hover:text-kb-green-light transition"
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
        <CardFooter className="gap-3 justify-end">
          <CardButton href={repo.url}>repo</CardButton>
          <CardButton href={repo.homepage}>prod</CardButton>
        </CardFooter>
      </Card>
    </div>
  );
}

function CardButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-sm font-mono hover:text-kb-green-light"
    >
      <Button
        size="sm"
        variant="outline"
        className="text-sm font-mono font-bold rounded-none transition hover:bg-neutral-900/30 hover:text-kb-green-light"
      >
        {children}
      </Button>
    </a>
  );
}