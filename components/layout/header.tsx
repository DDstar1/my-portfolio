"use client";
import useHash from "@/hooks/use-hash";
import { cn } from "@/lib/utils";
import { BookOpen, File, Home, LucideSend, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/imgs/logo.webp";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "#home",
    icon: Home,
  },
  {
    id: 2,
    name: "About",
    path: "#about",
    icon: User,
  },
  {
    id: 3,
    name: "Projects",
    path: "#projects",
    icon: File,
  },
  {
    id: 4,
    name: "Blog",
    path: "https://blog.abhuluimendestiny.site", // replace with your actual blog link
    icon: BookOpen,
  },
  {
    id: 5,
    name: "Contact-Me",
    path: "#contact",
    icon: LucideSend,
    isRight: true,
  },
];

export default function Header() {
  const { hash } = useHash();

  return (
    <div className="w-full h-12 border-b bg-muted flex items-center">
      <div className="w-14 flex items-center justify-center flex-shrink-0 font-bold">
        <Image
          src={logo}
          alt="AK Logo"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-center size-full">
        {navItems.map((item) => {
          const isActive =
            item.path === hash || (item.path === "#home" && hash === "");

          const isExternal = item.path.startsWith("http");

          const linkClasses = cn(
            "relative h-full w-fit md:min-w-40 border-x flex items-center justify-center gap-2 text-muted-foreground hover:bg-background px-4",
            isActive && "text-foreground bg-background hover:bg-background",
            item.isRight && "ml-auto"
          );

          return isExternal ? (
            <a
              key={item.id}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              <item.icon size={20} className="text-primary-foreground" />
              <span className="hidden h-full md:flex items-center justify-center text-sm">
                {item.name}
              </span>
            </a>
          ) : (
            <Link key={item.id} href={item.path} scroll className={linkClasses}>
              <item.icon size={20} className="text-primary-foreground" />
              <span className="hidden h-full md:flex items-center justify-center text-sm">
                {item.name}
              </span>
              {isActive && <BorderActive />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const BorderActive = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
    <div className="absolute -bottom-0.5 left-0 w-full h-1 bg-background" />
  </>
);
