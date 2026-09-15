import { Container } from "@/components/craft";
// import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/site.config";
import Link from "next/link";
import Image from "next/image";
import { InstagramIcon } from "../icons/InstagramIcon";
import { FacebookIcon } from "../icons/FacebookIcon";

export function Footer() {
  return (
    <footer>
      <div className="max-w-[90%] mx-auto mt-12">
        <hr />
      </div>
      <div className="max-w-6xl mx-auto flex flex-row h-24 gap-2 justify-between items-center px-4 md:px-0 py-4">
        <div>
          <div className="flex items-center gap-4">
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
            </Link>
          </div>
        </div>
        <div className="items-center gap-5 flex justify-end border-gray-200">
          <a
            href="https://www.facebook.com/habershamrealestate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon width={32} height={32} />
          </a>
          <a
            href="https://www.instagram.com/habershamrealestate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon width={32} height={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}
