import { Brand } from "./brand";
import { Button } from "./ui/button";
import { NavLink } from "./nav-link";
import { PanelLeftClose } from "lucide-react";
import { Separator } from "./ui/separator";
import { Socials } from "./socials";
import { ToggleTheme } from "./toggle-theme";
import { nav_links } from "@/lib/links";

export function Header() {
  return (
    <header className="w-full max-w-5xl mx-auto bg-background">
      <nav className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8 xl:px-12">
        <div className="block md:hidden">
          <Brand />
        </div>

        <div className="hidden w-full lg:flex lg:items-center lg:justify-center lg:gap-x-4">
          {nav_links.map((link, idx) => {
            return (
              <NavLink key={idx} href={link.href} label={link.label}>
                <link.icon className="mr-2 transition-transform duration-300 rotate-0 size-4 text-muted-foreground fill-muted group-hover:rotate-45" />
              </NavLink>
            );
          })}
          <Separator orientation="vertical" className="w-[2px] h-5 rounded" />
          <Socials />
          <Separator orientation="vertical" className="w-[2px] h-5 rounded" />
          <ToggleTheme />
        </div>

        <div className="flex lg:hidden">
          <Button variant={"ghost"} size={"sm"}>
            <PanelLeftClose className="flex-shrink-0 mr-2 size-4" />
            Menu
          </Button>
        </div>
      </nav>
    </header>
  );
}
