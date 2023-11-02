type Props = {
  title: string;
  description: string;
  href: string;
};

export default function Card({ title, description, href }: Props) {
  return (
    <a
      href={href}
      className="min-h-fit p-5 font-mono group border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-900 hover:dark:border-neutral-800 hover:dark:bg-neutral-900/30 transition-colors"
      target="_blank"
    >
      <h2 className="mb-3 text-night-900 dark:text-white">{title}</h2>
      <p
        className={`m-0 max-w-[30ch] text-xs text-neutral-800 dark:text-neutral-100 opacity-75`}
      >
        {description}
      </p>
    </a>
  );
}
