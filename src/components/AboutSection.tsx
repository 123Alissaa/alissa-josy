const AboutSection = () => (
  <section id="about" className="scroll-mt-16 border-t border-border py-20 md:py-28">
    <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_2fr] md:px-8">
      <div>
        <p className="section-label">About</p>
        <h2 className="section-title">Engineer, student, maker.</h2>
      </div>
      <div className="max-w-3xl">
        <p className="font-playfair text-2xl leading-relaxed text-foreground md:text-3xl">
          I’m a Computer Science senior at the University of South Florida, graduating in May 2027 with a 3.78 GPA.
        </p>
        <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
          I enjoy turning complex system problems into dependable, measurable software. Away from the keyboard, I’m usually crocheting or cooking.
        </p>
        <div className="mt-8 grid gap-6 border-t border-border pt-7 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase text-primary">Education</p>
            <p className="mt-2 font-medium text-foreground">B.S. Computer Science</p>
            <p className="mt-1 text-sm text-muted-foreground">University of South Florida</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-primary">Focus</p>
            <p className="mt-2 font-medium text-foreground">Backend, distributed systems, applied AI</p>
            <p className="mt-1 text-sm text-muted-foreground">Seeking software engineering opportunities</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;