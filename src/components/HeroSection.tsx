import { ArrowDownRight, Download, FileText, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/alissa-headshot.jpg";
import resume from "@/assets/alissa-resume.pdf.asset.json";

const HeroSection = () => (
  <section id="home" className="border-b border-border">
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_320px] md:items-center md:px-8 md:py-24 lg:gap-20">
      <div>
        <p className="mb-5 text-sm font-semibold uppercase text-primary">Software Engineer</p>
        <h1 className="max-w-3xl font-playfair text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl md:text-7xl">
          Alissa Ann Josy
        </h1>
        <p className="mt-7 max-w-2xl font-playfair text-2xl leading-snug text-foreground md:text-3xl">
          Software engineer building reliable backend and AI systems.
        </p>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
          Computer Science senior at the University of South Florida, graduating May 2027. Interested in distributed systems, applied AI, and production engineering.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#work">View work <ArrowDownRight /></a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={resume.url} target="_blank" rel="noreferrer"><FileText /> View résumé</a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href={resume.url} download="Alissa-Josy-Resume.pdf"><Download /> Download</a>
          </Button>
        </div>

        <div className="mt-7 flex items-center gap-5" aria-label="Social links">
          <a href="https://github.com/123Alissaa" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/alissaannjosy/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>

      <div className="order-first mx-auto w-full max-w-[280px] md:order-none md:max-w-none">
        <div className="aspect-square overflow-hidden rounded-full border border-border bg-muted p-2 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
          <img src={profilePhoto} alt="Alissa Ann Josy" className="h-full w-full rounded-full object-cover object-center" />
        </div>
        <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">B.S. Computer Science · GPA 3.8 · May 2027</p>
      </div>
    </div>
  </section>
);

export default HeroSection;