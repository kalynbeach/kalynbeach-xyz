type JobProps = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

export default function Job({
  title,
  company,
  startDate,
  endDate,
  location,
  description,
}: JobProps) {
  return (
    <details className="p-4 border border-neutral-200 hover:border-neutral-300 dark:border-neutral-900 transition hover:dark:bg-neutral-900/30 hover:dark:border-neutral-800 open:dark:bg-neutral-900/30 open:dark:border-neutral-800">
      <summary className="list-none cursor-pointer">
        {/* Job Heading */}
        <div className="mb-2 flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-0">
          <h3 className="text-lg md:text-xl font-mono">{title}</h3>
          <h4 className="text-lg md:text-xl font-sans font-bold tracking-wider">
            {company}
          </h4>
        </div>
        {/* Job Info */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-0">
          <span className="text-sm font-mono text-neutral-800 dark:text-neutral-100 opacity-75">
            {startDate} - {endDate}
          </span>
          <span className="text-sm font-mono text-neutral-800 dark:text-neutral-100 opacity-50">
            {location}
          </span>
        </div>
      </summary>
      <div className="mt-4 p-4 bg-neutral-900">
        {/* Job Description */}
        <p className="text-sm font-mono leading-6">{description}</p>
      </div>
    </details>
  );
}
