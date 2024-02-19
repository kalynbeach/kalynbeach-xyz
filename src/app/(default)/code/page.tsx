import { Suspense } from "react";
import { projects, jobs } from "./content";
import PageHeading from "@/components/page-heading";
import JobCard from "./job-card";
import ProjectCard from "./project-card";
import GitHubRepos from "./github-repos";

export const metadata = {
  title: "code",
  description: "Kalyn Beach Code",
};

export default async function Code() {
  return (
    <div>
      <PageHeading emoji="💻" name="code" />

      {/* Projects */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-night-900 dark:text-white tracking-wider">
          Projects
        </h2>
        {/* <div className="grid lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div> */}
        <Suspense fallback={<div>Loading projects...</div>}>
          <GitHubRepos username="kalynbeach" />
        </Suspense>
      </section>

      {/* Work (Experience) */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-night-900 dark:text-white tracking-wider">
          Work
        </h2>
        <div className="flex flex-col gap-6">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>
      </section>
    </div>
  );
}
