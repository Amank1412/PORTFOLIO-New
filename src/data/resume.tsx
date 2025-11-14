import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aman Kumar",
  initials: "AK",
  url: "https://amannn.site",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/new+delhi",
  description:
    "full-stack developer, building apps with react, node.js & typescript.",
  summary:
    "I’m a full-stack developer pursuing a B.Tech in Computer Science & Engineering. I previously worked as a Quantitative Research Consultant at WorldQuant and am now deeply interested in Web3, focusing on building user centric decentralized applications that solve real world problems.",
  avatarUrl: "/my.jpg",
  
  availability: {
    text: "Available - Open to new freelance projects and collaborations",
    color: "green",
    // optional link when clicking the availability badge
    link: "mailto:amankumarr7390@gmail.com",
  },

  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "MongoDB",
    "TailwindCSS",
    "PostgreSQL",
    "Firebase",
    "Docker",
    "AWS",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      company: "WorldQuant",
      href: "https://worldquant.com",
      badges: [],
      location: "Remote",
      title: "Research Consultant",
      logoUrl: "/worldquant_logo.jpg",
      start: "May 2025",
      end: "Oct 2025",
      description: "Specialized in alpha development for US. markets, conceptualizing and building market-neutral strategies through rigorous quantitative research. Developed and optimized long-short alphas across U.S, global, Asia, markets using diversified datasets to enhance performance and stability.",
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
      title: "CoinPulse",
      href: "https://coin-pulse-flame.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Built **CoinPulse** a real-time cryptocurrency tracker and wallet dashboard with live market data integration and a responsive React-based UI.",
      technologies: [
        "React.js",
        "JavaScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://coin-pulse-flame.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amank1412/CoinPulse",
          icon: <Icons.github className="size-3" />,
        },
      ],
  image: "/coinpulse.jpg",
  video: "",
      
    },
    {
      title: "Xcode",
      href: "https://xcode-navy.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Built **Xcode** a 3D interactive landing page using Spline and React with smooth animations and responsive design.",


      technologies: [
        "React.js",
        "JavaScript",
        "TailwindCSS",
      
       
      ],
      links: [
        {
          type: "Website",
          href: "https://xcode-navy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amank1412/Xcode",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/code.jpg",
  video: "",
     
    },
    {
      title: "Nexora",
      href: "https://nexora-yz8g.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Built **Nexora**, a modern and responsive web app using React, Vite, and Tailwind CSS with a clean UI and fast performance.",

      technologies: [
         "React.js",
        "JavaScript",
        "TailwindCSS",
       
      
      ],
      links: [
        {
          type: "Website",
          href: "https://nexora-yz8g.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amank1412/Nexora",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nexora.jpg",
  video: "",
      
    },
    {
      title: "Sewna",
      href: "https://intern-assignment-six-weld.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Built a Custom Request page for **SEWNA** with React and Tailwind, allowing users to upload outfit inspirations.",

      technologies: [
         "React.js",
        "TypeScript",
        "TailwindCSS",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://intern-assignment-six-weld.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amank1412/InternAssignment",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/swena.jpg",
  video: "",
      
       
    },
  ],
} as const;
