import Reveal from "@/components/Reveal";

const leadershipRoles = [
  {
    role: "President",
    organization: "Bridges International at USF",
    outcomes: [
      "Led a six-person team coordinating programs for more than 200 students; attendance grew from 60 to 200.",
      "Built Python automation that reduced weekly manual work from three hours to 30 minutes.",
    ],
  },
  {
    role: "Instructor",
    organization: "Girls Who Code at USF",
    outcomes: [
      "Taught object-oriented programming and algorithms to 40 students.",
      "Helped grow attendance by 60%.",
    ],
  },
  {
    role: "Logistics Director",
    organization: "SHPE at USF",
    outcomes: ["Coordinated logistics for student organization events and supported smooth event-day execution."],
  },
];

const LeadershipSection = () => (
  <section id="leadership" className="scroll-mt-16 py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <Reveal className="grid gap-6 md:grid-cols-[0.8fr_2fr]">
        <div>
          <p className="section-label">Leadership &amp; community</p>
          <h2 className="section-title">Building stronger teams beyond the code.</h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {leadershipRoles.map((item, index) => (
            <Reveal as="article" key={item.organization} delay={index === 0 ? 1 : index === 1 ? 2 : 3} className="grid gap-4 py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8">
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{item.organization}</p>
              </div>
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {item.outcomes.map((outcome) => (
                  <li key={outcome} className="relative pl-4 before:absolute before:left-0 before:top-[0.65rem] before:h-1 before:w-1 before:rounded-full before:bg-primary">
                    {outcome}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default LeadershipSection;