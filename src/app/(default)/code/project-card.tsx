import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { CodeProject } from "./content";

type ProjectCardProps = CodeProject;

export default function ProjectCard({
  type,
  title,
  description,
  emoji,
  repoUrl,
  url,
  tags,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <Card className="bg-background rounded-none">
        <CardHeader  className="flex flex-col gap-1">
          <CardTitle className="flex justify-between items-center">
            <span className="text-xl font-mono font-bold">
              {title}
            </span>
            <span>{emoji}</span>
          </CardTitle>
          <CardDescription className="text-neutral-800 dark:text-neutral-300">{description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex flex-row justify-end gap-4">
          <Button variant="outline" className="group rounded-none hover:bg-night-900 hover:border-kb-green-light">
            <a href={url} target="_blank" className="group-hover:text-kb-green-light">
              {type}
            </a>
          </Button>
          <Button variant="outline" className="group rounded-none hover:bg-night-900 hover:border-kb-green-light">
            <a href={repoUrl} target="_blank" className="group-hover:text-kb-green-light">
              code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}