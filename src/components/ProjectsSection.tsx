import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import projectKvstore from "@/assets/project-kvstore.png";
import projectCollabpad from "@/assets/project-collabpad.png";
import projectLlmEarnings from "@/assets/project-llm-earnings.png";

const featuredProjects = [
  {
    number: "01",
    title: "Distributed Key-Value Store",
    description: "A Redis-compatible Go store designed around distributed routing, persistence, and replication across a three-node cluster.",
    impact: [
      "Routed 10,000+ keys through 150 virtual nodes, reducing reshuffling from 75% to 25%.",
      "Added AOF persistence and async replication; benchmarked 10,101 SET and 21,707 GET operations per second.",
    ],
    tech: "Go · TCP · RESP · Consistent hashing · Docker",
    image: projectKvstore,
    repo: "https://github.com/123Alissaa/key-value-store",
  },
  {
    number: "02",
    title: "CollabPad",
    description: "A real-time collaborative editor built to keep code, cursors, and presence responsive under concurrent use.",
    impact: [
      "Supported 25+ concurrent users with sub-50ms keystroke latency.",
      "Cut p99 message latency 73%, from 45ms to 12ms, while load-testing 3,500+ messages per minute.",
    ],
    tech: "FastAPI · WebSockets · PostgreSQL · Next.js · Monaco",
    image: projectCollabpad,
    repo: "https://github.com/123Alissaa/collab-pad",
  },
  {
    number: "03",
    title: "LLM-Powered Financial Data Analyzer",
    description: "An earnings-transcript pipeline that structures financial signals for faster, evidence-based review.",
    impact: [
      "Extracted metrics, risks, and sentiment across four companies, then compared the outputs with subsequent stock movements.",
      "Reduced transcript analysis time from four hours to 10 seconds.",
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
      <Reveal className="mb-8 grid gap-4 border-b border-border pb-8 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="section-label">Selected work</p>
          <h2 className="section-title">Systems built for speed, scale, and clarity.</h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-muted-foreground md:justify-self-end">
          A focused selection of backend, distributed systems, and applied AI projects.
        </p>
      </Reveal>

      <div>
        {featuredProjects.map((project, index) => (
          <Reveal as="article" key={project.number} className="project-row grid gap-8 border-b border-border py-12 first:pt-8 md:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.4fr)] md:items-center md:gap-14 lg:gap-20">
            <div className={`relative mx-auto w-full max-w-[260px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <span aria-hidden="true" className="absolute -left-5 -top-8 -z-10 font-playfair text-[7rem] leading-none text-accent md:-left-10 md:text-[9rem]">{project.number}</span>
              <div className="aspect-square overflow-hidden rounded-full border border-border bg-background p-2">
                <img src={project.image} alt="" className="h-full w-full rounded-full object-cover" />
              </div>
            </div>
            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <p className="text-xs font-semibold uppercase text-primary">Featured project {project.number}</p>
              <h3 className="mt-2 font-playfair text-3xl font-semibold leading-tight text-foreground md:text-4xl">{project.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{project.description}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-foreground">
                {project.impact.map((line) => <li key={line} className="border-l-2 border-primary pl-4">{line}</li>)}
              </ul>
              <p className="mt-6 text-xs font-semibold uppercase leading-5 text-muted-foreground">{project.tech}</p>
              <a href={project.repo} target="_blank" rel="noreferrer" className="story-link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                View project on GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
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
                <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default ProjectsSection;