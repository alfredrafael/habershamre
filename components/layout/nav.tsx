"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MobileNav } from "@/components/nav/mobile-nav";
import { mainMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";

interface NavProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function Nav({ className, children, id }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10); // adjust threshold if you want
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // #contact only exists on the home page, so scroll directly when already there
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b bg-background",
        "transition-[background-color,backdrop-filter,box-shadow] duration-1000 ease-in-out",
        scrolled && "bg-background/50 backdrop-blur-md shadow-sm",
        className,
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="mx-auto flex max-w-6xl items-center justify-between py-4 px-6 sm:px-8"
      >
        <Link
          className="flex items-center gap-4 transition-all hover:opacity-75"
          href="/"
        >
          <Image
            src="https://www.alfredorafael.com/wp-content/uploads/2026/09/HabershamRE_logo-scaled.png"
            alt="Site Logo"
            width={100}
            height={100}
          />
          <h2 className="hidden text-sm">{siteConfig.site_name}</h2>
        </Link>

        {children}

        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {Object.entries(mainMenu).map(([key, item]) =>
              typeof item === "string" ? (
                <Button key={key} asChild variant="ghost" size="sm">
                  <Link href={item}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                </Button>
              ) : (
                <DropdownMenu key={key}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.items.map((sub) => (
                      <DropdownMenuItem key={sub.href} asChild>
                        <Link href={sub.href}>{sub.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ),
            )}
          </div>

          <Button
            asChild
            className="hidden sm:flex bg-[#1D283F] dark:text-white  dark:border-white"
          >
            <a href="/#contact" onClick={handleContactClick}>
              Contact
            </a>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
