type JobProps = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  note?: string;
};

export default function JobCard({
  title,
  company,
  startDate,
  endDate,
  location,
  description,
  note,
}: JobProps) {
  return (
    <details className="p-4 border border-neutral-200 hover:border-neutral-300 dark:border-neutral-900 transition hover:dark:bg-neutral-900/30 hover:dark:border-neutral-800 open:dark:bg-neutral-900/30 open:dark:border-neutral-800">
      <summary className="list-none cursor-pointer">
        {/* Job Heading */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-2">
          <h3 className="text-lg md:text-xl font-mono font-bold">{title}</h3>
          <div className="pb-2 flex flex-col md:items-end">
            <span className="md:ml-auto text-xl font-bold">
              {company}
            </span>
            {note && (
              <span className="text-xs font-mono opacity-60">
                {note}
              </span>
            )}
          </div>
        </div>
        {/* Job Info */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-0">
          <span className="text-sm opacity-70">
            {startDate} - {endDate}
          </span>
          <span className="text-sm opacity-50">
            {location}
          </span>
        </div>
      </summary>
      <div className="mt-4 p-4 dark:bg-night-900 border">
        {/* Job Description */}
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </details>
  );
}
