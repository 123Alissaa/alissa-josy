import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectKvstore from "@/assets/project-kvstore.png";
import projectCollabpad from "@/assets/project-collabpad.png";
import projectLlmEarnings from "@/assets/project-llm-earnings.png";

const featuredProjects = [
  {
    number: "01",
    title: "Distributed Key-Value Store",
    description: "A Redis-compatible distributed store built in Go, with RESP support and a three-node cluster routing more than 10,000 keys.",
    impact: [
      "150 virtual nodes reduced key reshuffling from 75% to 25%.",
      "AOF persistence and async replication; benchmarked at 10,101 SET and 21,707 GET operations per second.",
    ],
    tech: "Go · TCP · RESP · Consistent hashing · Docker",
    image: projectKvstore,
    repo: "https://github.com/123Alissaa/key-value-store",
  },
  {
    number: "02",
    title: "CollabPad",
    description: "A multiplayer code editor built with FastAPI, WebSockets, PostgreSQL, Next.js, and Monaco Editor.",
    impact: [
      "Supported 25+ simultaneous users with sub-50ms keystroke latency.",
      "Improved p99 message latency 73%, from 45ms to 12ms; load-tested at 3,500+ messages per minute.",
    ],
    tech: "FastAPI · WebSockets · PostgreSQL · Next.js · Monaco",
    image: projectCollabpad,
    repo: "https://github.com/123Alissaa/collab-pad",
  },
  {
    number: "03",
    title: "LLM-Powered Financial Data Analyzer",
    description: "A pipeline that analyzes earnings transcripts across four companies, extracting financial metrics, risks, and sentiment before validating results against market movements.",
    impact: [
      "Structured transcript analysis with Python, Pandas, SQL, and Groq.",
      "Reduced analysis time from four hours to 10 seconds per transcript.",
    ],
    tech: "Python · Pandas · SQL · Groq",
    image: projectLlmEarnings,
    repo: "https://github.com/123Alissaa/llm-earnings-analyzer",
  },
];

const additionalProjects = [
  { title: "C++ Limit Order Book Engine", detail: "Price-time priority matching for limit, market, IOC, and fill-or-kill orders.", tech: "C++17 · C", repo: "https://github.com/123Alissaa/orderbook" },
  { title: "E-Commerce Store", detail: "Full-stack commerce workflows with typed APIs, product search, and cart state.", tech: "Next.js · TypeScript · GraphQL · PostgreSQL", repo: null },
  { title: "AI Interview Coach", detail: "Private, local-LLM interview practice with structured communication feedback.", tech: "Python · Streamlit · Ollama · Mistral", repo: "https://github.com/123Alissaa/ai-interview-coach" },
];

const ProjectsSection = () => (
  <section id="work" className="scroll-mt-16 py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="mb-10 grid gap-4 border-b border-border pb-8 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="section-label">Selected work</p>
          <h2 className="section-title">Systems built for speed, scale, and clarity.</h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-muted-foreground md:justify-self-end">
          A focused selection of backend, distributed systems, and applied AI projects. All core outcomes remain visible without interaction.
        </p>
      </div>

      <div className="space-y-6">
        {featuredProjects.map((project) => (
          <article key={project.number} className="grid overflow-hidden rounded-md border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-md md:grid-cols-[300px_1fr]">
            <div className="flex items-center justify-center bg-muted p-8 md:min-h-[310px]">
              <div className="aspect-square w-full max-w-[220px] overflow-hidden rounded-full border border-border bg-card p-2 shadow-sm">
                <img src={project.image} alt="" className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col p-6 md:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold text-primary">PROJECT {project.number}</p>
                  <h3 className="mt-2 font-playfair text-3xl font-semibold leading-tight text-foreground">{project.title}</h3>
                </div>
                <Button asChild variant="ghost" size="icon" className="shrink-0 rounded-full" aria-label={`View ${project.title} on GitHub`}>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{project.description}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-foreground">
                {project.impact.map((line) => <li key={line} className="border-l-2 border-primary pl-4">{line}</li>)}
              </ul>
              <p className="mt-auto pt-7 text-xs font-semibold uppercase text-muted-foreground">{project.tech}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="font-playfair text-2xl font-semibold text-foreground">Additional work</h3>
        <div className="mt-5 divide-y divide-border border-y border-border">
          {additionalProjects.map((project) => (
            <article key={project.title} className="grid gap-2 py-5 sm:grid-cols-[1fr_1.4fr_auto] sm:items-center sm:gap-8">
              <div>
                <h4 className="font-semibold text-foreground">{project.title}</h4>
                <p className="mt-1 text-xs font-medium text-primary">{project.tech}</p>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{project.detail}</p>
              {project.repo && (
                <Button asChild variant="ghost" size="icon" className="rounded-full" aria-label={`View ${project.title} on GitHub`}>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;