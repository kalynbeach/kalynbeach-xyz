export type CodeProject = {
  type: "app" | "site" | "tool" | "library";
  title: string;
  description: string;
  emoji: string;
  repoUrl: string;
  url: string;
  tags: string[];
};

export const projects: CodeProject[] = [
  {
    type: "site",
    title: "kalynbeach-xyz",
    description: "this site",
    emoji: "🌐",
    repoUrl: "https://github.com/kalynbeach/kalynbeach-xyz",
    url: "https://kalynbeach.xyz",
    tags: ["typescript", "react", "nextjs", "tailwindcss"],
  },
  {
    type: "app",
    title: "wave-visions",
    description: "audio visualizations",
    emoji: "🔊",
    repoUrl: "https://github.com/kalynbeach/wave-visions",
    url: "https://wave-visions.vercel.app",
    tags: ["typescript", "react", "nextjs", "tailwindcss"],
  },
  {
    type: "app",
    title: "wave-player",
    description: "a music player",
    emoji: "🎵",
    repoUrl: "https://github.com/kalynbeach/wave-player",
    url: "https://github.com/kalynbeach/wave-player",
    tags: ["typescript", "react", "nextjs", "tailwindcss"],
  },
  {
    type: "app",
    title: "wave-dex",
    description: "a music project and library manager",
    emoji: "🗂️",
    repoUrl: "https://github.com/kalynbeach/wave-visions",
    url: "https://wave-dex.vercel.app",
    tags: ["typescript", "react", "nextjs", "tailwindcss"],
  },
];

// export const projects = [
//   {
//     title: "kalynbeach-xyz",
//     description: "🌐 This site",
//     href: "https://github.com/kalynbeach/kalynbeach-xyz",
//   },
//   {
//     title: "wave-player",
//     description: "🎵 A music player",
//     href: "https://github.com/kalynbeach/wave-player",
//   },
//   {
//     title: "wave-visions",
//     description: "🔊 Audio visualizations",
//     href: "https://github.com/kalynbeach/wave-visions",
//   },
//   {
//     title: "wave-dex",
//     description: "🗂️ Music project and library indexer",
//     href: "https://github.com/kalynbeach/wave-dex",
//   },
//   {
//     title: "ai-sdk-experiments",
//     description: "🤖 AI experiments",
//     href: "https://github.com/kalynbeach/ai-sdk-experiments",
//   },
// ];

export const jobs = [
  {
    title: "Senior Software Engineer",
    company: "World of Good Brands",
    location: "Los Angeles, CA",
    startDate: "July 2022",
    endDate: "Present",
    description: `Building and maintaining numerous content-focused sites, web apps and in-house tools while listening, learning, and leading as needed. Supporting my team however I can - from implementing ad-hoc feature requests to sharing my experience and helping younger engineers. Continuing to grow my sense of the work and the field at a higher level (team, products, business, industries) and at a lower level (theory, patterns, modern libraries & frameworks).`,
    note: "(fka Leaf Group)"
  },
  {
    title: "Software Engineer",
    company: "Leaf Group",
    location: "Los Angeles, CA",
    startDate: "September 2016",
    endDate: "July 2022",
    description: `Worked on a small engineering team creating and maintaining over 30 content publishing sites reaching millions of visitors monthly. Became increasingly focused on web accessibility and performance. Continuously grew my understanding of the Internet, from its low-level protocols to the products we interact with daily.`,
  },
  {
    title: "Associate Software Engineer",
    company: "Leaf Group",
    location: "Santa Monica, CA",
    startDate: "September 2015",
    endDate: "September 2016",
    description: `Helped build the React frontend for Leaf Group's internal CMS platform, Content Lab, which is still in use today. Gained foundational experience implemementing designs, building component-based UIs, and learning about web application architecture.`,
    note: "(fka Demand Media)"
  },
  {
    title: "Software Engineer Intern",
    company: "Demand Media",
    location: "Santa Monica, CA",
    startDate: "June 2015",
    endDate: "September 2015",
    description: `Interned on the eHow.com engineering team, where I implemented frontend features and fixes with HTML, CSS, and JS (jQuery), and PHP. First experiences working with large codebases and sites with millions of visitors.`,
  },
  {
    title: "Contract Web Developer",
    company: "CPR Interactive",
    location: "Orange, CA",
    startDate: "April 2015",
    endDate: "June 2015",
    description: `Built informational 'eBook' sites for companies like Oracle, gained initial experience working off designs and in a professional environment, expanded my nascent knowledge of HTML, CSS and JS.`,
  },
];

const content = {
  projects,
  jobs,
};

export default content;
