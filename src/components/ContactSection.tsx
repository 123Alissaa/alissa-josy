import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <footer id="contact" className="scroll-mt-16 bg-foreground py-16 text-background md:py-20">
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase text-background/70">Contact</p>
          <h2 className="mt-3 max-w-2xl font-playfair text-4xl font-semibold leading-tight md:text-5xl">Let’s build something reliable.</h2>
          <p className="mt-5 max-w-xl leading-7 text-background/75">I’m interested in software engineering opportunities across backend systems, platform engineering, and applied AI.</p>
          <Button asChild variant="secondary" size="lg" className="mt-7">
            <a href="mailto:alissaannjosy@gmail.com"><Mail /> alissaannjosy@gmail.com</a>
          </Button>
        </div>
        <div className="flex flex-col gap-3 border-t border-background/20 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <a href="https://linkedin.com/in/alissaannjosy" target="_blank" rel="noreferrer" className="flex items-center justify-between py-2 text-background transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background">
            <span className="inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</span><ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="https://github.com/123Alissaa" target="_blank" rel="noreferrer" className="flex items-center justify-between py-2 text-background transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background">
            <span className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</span><ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-2 border-t border-background/20 pt-6 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Alissa Ann Josy</p>
        <p>Built with React and intention.</p>
      </div>
    </div>
  </footer>
);

export default ContactSection;