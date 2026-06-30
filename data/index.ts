import { Github, Linkedin, Youtube, BookOpen } from "lucide-react";

import derivStrategies from "@/public/projects-imgs/deriv--strategy.png";
import realEstate from "@/public/projects-imgs/real-estate.png";
import wordpressConfigurator from "@/public/projects-imgs/3d--wordpress--config.png";
import portfolioSite from "@/public/imgs/website.png";

const data = {
  home: {
    name: "Abhuluimen Destiny",
    description:
      "I Build & Ship #Full-Stack Websites and Apps with #Next.js, #FastAPI & #Supabase, powered by #AI", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "#contact",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/DDstar1",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/destiny-abhuluimen-20bb3726a",
        icon: Linkedin,
      },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "Deriv Strategies",
        description:
          "Trading strategy marketplace and web app for Nigerian Deriv traders. Users submit and discover strategies, while bots automate execution on real/demo accounts with public leaderboards showing verifiable win rates, drawdown, and P&L. \n\n Technologies Used: Next.js, FastAPI, Supabase, Deriv API.",
        image: derivStrategies,
        previewLink: "https://www.deriv-strategies.com.ng/",
        githubLink: "https://github.com/DDstar1/deriv_strategy_tester",
      },
      {
        id: 2,
        title: "Real Estate Platform",
        description:
          "Community-driven property web app turning every user into a paid referral agent. Agents earn commission on listings, with property tagging via junction tables powering an interactive server/client filter UI. \n\n Technologies Used: Next.js, Supabase, Paystack.",
        image: realEstate,
        previewLink: "https://real-estate-apps.vercel.app",
        githubLink: "https://github.com/DDstar1/REAL_ESTATE_APPS",
      },
      {
        id: 3,
        title: "3D Product Configurator",
        description:
          "Interactive 3D product configurator embedded into a WordPress/WooCommerce e-commerce site, letting customers visualise interior doors and windows in real time before purchase. \n\n Technologies Used: Three.js, WordPress, WooCommerce.",
        image: wordpressConfigurator,
        previewLink:
          "https://innentuerenshop.paultec.de/produkt/elegant-alba-4-weisslack-inkl-lichtoeffnung-loe-3571-v-056-herholz-innentueren-3d/",
        githubLink: "https://github.com/DDstar1/door_3d_configurator_nextJS",
      },
      {
        id: 4,
        title: "Personal Portfolio Website",
        description:
          "An AI-powered personal portfolio website with an interactive chat assistant, code-typing animations, and a contact form, built to showcase my work to clients and employers. \n\n Technologies Used: Next.js, React.js, Tailwind CSS.",
        image: portfolioSite,
        previewLink: "https://abhuluimendestiny.site/",
        githubLink: "https://github.com/DDstar1/my-portfolio",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "postgresql",
        src: "/skills/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 9,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 11,
        name: "docker",
        src: "/skills/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 12,
        name: "figma",
        src: "/skills/figma.svg",
        link: "https://en.wikipedia.org/wiki/Figma",
      },
      {
        id: 13,
        name: "firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 14,
        name: "markdown",
        src: "/skills/markdown.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
      },
      {
        id: 15,
        name: "mongoDB",
        src: "/skills/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
    ],
  },
  contact: {
    email: "abhuluimendestiny@gmail.com",
    name: "Abhuluimen Destiny",
  },
};

export default data;
