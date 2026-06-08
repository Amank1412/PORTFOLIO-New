import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aman Kumar",
  initials: "AK",
  url: "https://amannn.site",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/new+delhi",
  description:
    "full-stack developer building apps with react, node.js & typescript, sharing on X",
  summary:
    "I'm a full-stack developer and B.Tech CSE student. Recently worked as a Growth Engineer at a stealth startup in Austin, focused on bringing users in and scaling them fast with data-driven systems, while constantly building products on the side.\n\nBefore that, a Quant Research Consultant at WorldQuant. I've contributed to a bunch of open source, participated in many hackathons, and won several bounties along the way. These days I'm increasingly drawn to Web3, exploring how to build user-centric decentralized apps.",
  avatarUrl: "/my.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "C++",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@Amank1412", icon: NotebookIcon, label: "Blog", external: true },
  ],
  contact: {
    email: "amankumarr7390@gmail.com",
    tel: "9024070925",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Amank1412",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amank1412/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Amank1412",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amankumarr7390@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Stealth Startup",
      href: "#",
      badges: [],
      location: "Austin, Texas, United States · Remote",
      title: "Growth Engineer",
      logoUrl: "/stealth.jpg",
      start: "Mar 2026",
      end: "May 2026",
      description:
        "Focused on bringing users in and scaling them fast with data-driven systems.",
    },
    {
      company: "WorldQuant",
      href: "https://worldquant.com",
      badges: [],
      location: "Old Greenwich, Connecticut, United States · Remote",
      title: "Research Consultant",
      logoUrl: "/worldquant_logo.jpg",
      start: "Jul 2025",
      end: "Dec 2025",
      description:
        "Built and optimized market-neutral long-short alpha strategies across global markets using diverse datasets.",
    },
  ],
  education: [
    {
      school: "Maharshi Dayanand University",
      href: "https://mdu.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/school.jpg",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Snapi",
      href: "https://github.com/Amank1412/Snapi",
      dates: "2026",
      active: true,
      description:
        "Auto-organised Notion library powered by Gemini. Connect Notion in one click, auto-tag pages by course, topic, and difficulty with AI-generated summaries. Built with Notion OAuth, Supabase RLS, and Dodo Payments subscriptions.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Gemini",
        "Dodo Payments",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Amank1412/Snapi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/snapi.jpg",
      video: "",
    },
    {
      title: "FileDrive",
      href: "https://file-drive-gamma-five.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Minimal file storage app with upload, organize, favorites, trash & restore, and team collaboration. Built with Next.js 14, Clerk auth, and Supabase storage.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Clerk",
        "Supabase",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://file-drive-gamma-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amank1412/File-drive",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/filedrive.jpg",
      video: "",
    },
    {
      title: "Flowio",
      href: "https://github.com/Amank1412/Flowio",
      dates: "2025",
      active: true,
      description:
        "Freelance contract management platform with digital signatures, PDF generation, email delivery, and tiered subscription billing. Free plan with 3 contracts/month, Pro at $2/month.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Resend",
        "Dodo Payments",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Amank1412/Flowio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/flowio.jpg",
      video: "",
    },
    {
      title: "Cardora",
      href: "https://cardora-topaz.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Create and share beautiful digital business cards with no login required. QR codes, shareable links, and direct sharing to X. Encrypted card IDs with Firebase storage and offline support via IndexedDB.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Firebase",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://cardora-topaz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amank1412/Cardora",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cardora.jpg",
      video: "",
    },
  ],
} as const;
