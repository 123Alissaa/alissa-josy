import Reveal from "@/components/Reveal";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Publix Technology",
    period: "May–Aug 2026",
    summary: "Production backend engineering for high-throughput invoice operations.",
    outcomes: [
      "Built Kafka-based C#/.NET invoice pipeline and APIs processing 10,000+ daily invoices in under two seconds.",
      "Designed a three-tier fallback across distributed cache, SQL Server, and external APIs.",
      "Delivered against 22 requirements and seven stories with 84 xUnit/Moq tests.",
    ],
  },
  {
    role: "Software / AI Research Assistant",
    company: "RARE Lab at USF",
    period: "Aug 2025–Jan 2026",
    summary: "Multimodal AI and real-time software for a robotic recommendation system.",
    outcomes: [
      "Built a Python/Gemini multimodal recommendation backend handling 200+ real user requests.",
      "Developed a WebSocket tablet interface with sub-second latency.",
      "Reduced LLM API failure from 20% to under 3% by fixing a concurrency race condition.",
    ],
  },
  {
    role: "Student Assistant",
    company: "Undergraduate Studies at USF",
    period: "Jun 2024–Present",
    summary: "Workflow automation and operational support for university advising.",
    outcomes: [
      "Built a Python/PostgreSQL advisor assignment workflow that reduced processing time 20% and support tickets 40%.",
      "Developed an ETL pipeline for 300+ weekly requests.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="scroll-mt-16 border-y border-border bg-secondary py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <Reveal className="mb-12 max-w-2xl">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Production, research, and operational impact.</h2>
      </Reveal>

      <div className="divide-y divide-border border-y border-border">
        {experiences.map((experience, index) => (
          <Reveal as="article" key={experience.company} delay={index === 0 ? 1 : index === 1 ? 2 : 3} className="grid gap-5 py-8 md:grid-cols-[72px_1fr_1.6fr] md:gap-8 md:py-10">
            <p className="text-sm font-semibold text-primary">0{index + 1}</p>
            <div>
              <h3 className="font-playfair text-2xl font-semibold leading-tight text-foreground">{experience.role}</h3>
              <p className="mt-2 font-medium text-foreground">{experience.company}</p>
              <p className="mt-1 text-sm text-muted-foreground">{experience.period}</p>
            </div>
            <div>
              <p className="font-medium leading-7 text-foreground">{experience.summary}</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {experience.outcomes.map((outcome) => <li key={outcome} className="relative pl-5 before:absolute before:left-0 before:top-[0.65rem] before:h-1 before:w-1 before:rounded-full before:bg-primary">{outcome}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;