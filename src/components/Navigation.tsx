import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Leadership", href: "#leadership" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const sections = navItems.flatMap((item) => {
      const element = document.getElementById(item.href.slice(1));
      return element ? [{ href: item.href, element }] : [];
    });
    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      const marker = Math.max(80, window.innerHeight * 0.35);
      let nextHref = "";
      for (const section of sections) {
        if (section.element.getBoundingClientRect().top <= marker) {
          nextHref = section.href;
        }
      }
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        const anchorSection = sections.find((section) => section.href === window.location.hash);
        const anchorTop = anchorSection?.element.getBoundingClientRect().top;
        nextHref = anchorSection && anchorTop !== undefined && anchorTop >= 0 && anchorTop < window.innerHeight
          ? anchorSection.href
          : sections[sections.length - 1]?.href ?? nextHref;
      }
      setActiveHref(nextHref);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
        <a href="#home" className="font-playfair text-xl font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Alissa Josy
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} aria-current={activeHref === item.href ? "location" : undefined} className="section-nav-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {item.name}
            </a>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {isOpen && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} aria-current={activeHref === item.href ? "location" : undefined} onClick={() => setIsOpen(false)} className="section-nav-link rounded-sm px-3 py-3 text-sm font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;