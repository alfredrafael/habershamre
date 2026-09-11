import { Container } from "@/components/craft";
// import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/site.config";
import Link from "next/link";
import Image from "next/image";
import { DAC_Icon } from "../icons/DAC_Icon";
import { InstagramIcon } from "../icons/InstagramIcon";

export function Footer() {
  return (
    <footer>
      <div className="max-w-[90%] mx-auto mt-12">
        <hr />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col h-24 md:flex-row md:gap-2 gap-6 justify-between md:items-center px-4 md:px-0 py-4">
        <div>
          <div className="flex items-center gap-4">
            <Link className="flex items-center gap-2" href="/">
              <h3 className="sr-only">{siteConfig.site_name}</h3>
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
            </Link>
          </div>
        </div>
        <div className="items-center gap-1 hidden sm:flex">
          <span className="text-sm text-mutted">Follow us on</span>
          <a
            href="https://www.instagram.com/dac_architects_llc/"
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
