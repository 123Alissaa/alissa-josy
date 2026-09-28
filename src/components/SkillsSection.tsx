const skillGroups = [
  { label: "Languages", items: "Python, Java, Go, C, C++, C#, JavaScript, TypeScript, SQL, HTML/CSS" },
  { label: "Backend & systems", items: ".NET, FastAPI, Node.js, Kafka, WebSockets, PostgreSQL, SQL Server, RESP" },
  { label: "AI & data", items: "Pandas, NumPy, Gemini, Groq, Ollama, Mistral, Vertex AI" },
  { label: "Web & tools", items: "React, Next.js, Git, GitHub, Docker, Azure DevOps, Jupyter" },
];

const SkillsSection = () => (
  <section className="py-16 md:py-20" aria-labelledby="skills-heading">
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="grid gap-8 md:grid-cols-[0.8fr_2fr]">
        <div>
          <p className="section-label">Technical toolkit</p>
          <h2 id="skills-heading" className="font-playfair text-3xl font-semibold text-foreground">Skills</h2>
        </div>
        <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <dt className="text-sm font-semibold text-foreground">{group.label}</dt>
              <dd className="mt-2 text-sm leading-6 text-muted-foreground">{group.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default SkillsSection;