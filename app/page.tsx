const projects = [
  {
    title: "DevForge",
    category: "AI Learning Platform / Software Development",
    status: "Flagship Product Concept",
    problem:
      "Programming learners often bounce between tutorials, coding challenge sites, documentation, and AI tools without a clear system for building real skill.",
    solution:
      "Designed DevForge as a next-generation programming learning platform that combines structured learning paths, AI coaching, project-based practice, debugging support, portfolio projects, and career preparation.",
    tools: [
      "React",
      "Next.js",
      "AI Workflows",
      "Product Strategy",
      "UX Planning",
      "Developer Education",
    ],
    value:
      "Helps learners move beyond memorizing syntax by building real projects, practicing problem-solving, receiving guided feedback, and developing a portfolio that supports job readiness.",
    liveUrl: "https://devforge-zeta-blush.vercel.app/#/command-center",
  },
  {
    title: "Career Central AI Platform",
    category: "AI Product / Career Tech",
    status: "Product Strategy Concept",
    problem:
      "Students and working professionals often manage resumes, applications, interview prep, school work, skill growth, and projects across disconnected tools.",
    solution:
      "Designed an AI-powered career command center that organizes career planning, school deliverables, resumes, interview stories, project tracking, and skill development in one place.",
    tools: ["React", "AI Workflows", "Product Strategy", "UX Planning"],
    value:
      "Creates one system for career growth, academic progress, and professional development while helping users turn scattered goals into structured execution.",
    liveUrl: "#contact",
  },
  {
    title: "Amazon Interview Preparation App",
    category: "AI Career Tool",
    status: "Technical Project",
    problem:
      "Candidates often struggle to structure interview stories, connect examples to leadership principles, and avoid over-explaining.",
    solution:
      "Built an AI-powered tool concept for STAR story development, leadership principle practice, and interview response scoring.",
    tools: ["Python", "OpenAI Codex", "Prompt Engineering", "AI Evaluation"],
    value:
      "Helps candidates build sharper interview responses with better structure, stronger proof, and clearer business impact.",
    liveUrl: "https://interview-bar-raiser.space/",
  },
  {
    title: "IoT Innovation Strategy for Connected Vehicles",
    category: "Business Strategy / Innovation",
    status: "MBA Strategy Case Study",
    problem:
      "A vehicle manufacturer needed a practical innovation strategy for adding IoT features while responding to competitive pressure.",
    solution:
      "Evaluated innovation approaches, cross-functional execution, and stakeholder concerns to recommend a structured process for IoT implementation.",
    tools: ["RWW Framework", "Stage-Gate", "Agile", "Lean", "Business Strategy"],
    value:
      "Connects innovation planning to market pressure, organizational capability, stakeholder alignment, and execution discipline.",
    liveUrl: "#contact",
  },
];

const strengths = [
  {
    title: "Operations Leadership",
    text: "Lead high-volume fulfillment operations with focus on labor flow, quality, safety, productivity, escalation routines, and daily execution.",
  },
  {
    title: "Business Analytics",
    text: "Use KPIs, dashboards, root cause analysis, data visualization, and reporting to identify gaps and support better decisions.",
  },
  {
    title: "AI-Enabled Process Improvement",
    text: "Design AI-enabled tools and workflows for learning, career growth, data quality, interview preparation, and productivity.",
  },
];

const impactMetrics = [
  {
    metric: "6+ Years",
    label: "operations and fulfillment experience",
  },
  {
    metric: "700K–800K+",
    label: "monthly units supported in fulfillment operations",
  },
  {
    metric: "104%–113%",
    label: "department performance sustained against plan",
  },
  {
    metric: "35%",
    label: "DPMO reduction through root cause analysis and standardization",
  },
];

const skills = [
  "Power BI",
  "Excel",
  "Power Query",
  "PivotTables",
  "VBA",
  "Python",
  "SQL",
  "Tableau",
  "Data Cleaning",
  "Dashboard Design",
  "KPI Development",
  "Root Cause Analysis",
  "Predictive Analytics",
  "Labor Planning",
  "Process Improvement",
  "Performance Management",
  "Prompt Engineering",
  "Model Evaluation",
  "OpenAI Codex",
  "Lean Tools",
  "GitHub",
  "Vercel",
  "Next.js",
  "React",
];

const certifications = [
  "Google Data Analytics",
  "Google Project Management",
  "Google Business Intelligence",
  "Google IT Support",
  "Lean Six Sigma Yellow Belt - Amazon",
];

const targetRoles = [
  "Business Analyst",
  "Data Analyst",
  "Operations Analyst",
  "Process Improvement Analyst",
  "AI Operations Specialist",
  "Business Intelligence Analyst",
  "Area Manager",
  "Project Coordinator",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="text-sm font-bold tracking-wide text-white">
            Carlos McCain
          </a>
          <div className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section className="border-b border-zinc-800 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_30%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Carlos McCain
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Turning operational problems into measurable business results.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            I am an operations leader and MBA candidate in Business Analytics with 6+ years of experience improving fulfillment performance, safety, quality, productivity, and workforce execution. I combine hands-on leadership with analytics, process improvement, AI tools, and product thinking to solve practical business problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              View Featured Work
            </a>
            <a
              href="#experience"
              className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-800"
            >
              View Career Profile
            </a>
            <a
              href="mailto:carlosmccain78@gmail.com"
              className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-800"
            >
              Contact Me
            </a>
            <a
              href="https://devforge-zeta-blush.vercel.app/#/command-center"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-800"
            >
              Launch DevForge
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-400">
            <span>Kansas City, MO</span>
            <span>carlosmccain78@gmail.com</span>
            <a href="https://linkedin.com/in/carlosm125" className="transition hover:text-white">
              linkedin.com/in/carlosm125
            </a>
            <span>Operations Leader | Business Analytics | AI-Enabled Process Improvement</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid gap-5 md:grid-cols-4">
          {impactMetrics.map((item) => (
            <div key={item.metric} className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
              <p className="text-3xl font-bold text-white">{item.metric}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((item) => (
            <div key={item.title} className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-zinc-800 bg-zinc-900/35">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">About</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              A career profile built around operations, analytics, and execution.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-zinc-300">
            <p>
              I am an operations leader and MBA candidate in Business Analytics with experience improving fulfillment performance, workforce execution, safety, quality, and productivity in Amazon operations. My work has centered on leading daily outbound execution, supporting high-volume fulfillment, and using performance data to identify gaps before they become larger operational problems.
            </p>
            <p>
              My background connects frontline leadership with data-driven decision-making. I have supported 700K–800K+ monthly units, directed labor flow for 150+ associates, improved safety compliance, reduced defects, increased pack rate performance, and helped develop frontline leadership talent. That experience shapes how I approach analytics and AI: the output has to be useful, practical, and tied to measurable business results.
            </p>
            <p>
              This portfolio reflects the direction I am building toward: business analytics, operations analytics, AI-enabled process improvement, and product-focused problem-solving. The projects show how I think through problems, structure solutions, use technical tools, and connect the final output to execution, decision-making, and business value.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Experience</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Work experience built around leadership, execution, and measurable improvement.
          </h2>
        </div>

        <div className="space-y-6">
          <article className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold text-white">Process Assistant Level 3 - Lead Associate</h3>
                <p className="mt-1 text-blue-300">Amazon Fulfillment Center</p>
              </div>
              <p className="text-sm text-zinc-400">Nov 2019 - Present | Kansas City, KS</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-300">
              <li>• Lead daily outbound fulfillment operations across multiple shifts, directing 150+ associates and supporting 700K–800K+ monthly units.</li>
              <li>• Improved safety compliance from 71.4% to 83.5% by reinforcing standard work, identifying workstation risks, and removing recurring safety barriers.</li>
              <li>• Reduced DPMO by 35% through root cause analysis, quality monitoring, associate coaching, and stronger process standardization.</li>
              <li>• Increased pack rate performance from 80% to 110% of plan by using real-time production tracking and aligning labor placement with daily volume needs.</li>
              <li>• Sustained department performance at 104%–113% of plan through labor allocation, escalation routines, and shift-to-shift communication.</li>
              <li>• Developed 5 Process Guides, 4 of whom later promoted to Process Assistant, strengthening leadership coverage and shift execution.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold text-white">AI Trainer</h3>
                <p className="mt-1 text-blue-300">Handshake AI</p>
              </div>
              <p className="text-sm text-zinc-400">Nov 2025 - Present | Remote</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-300">
              <li>• Evaluated 200+ AI-generated responses for accuracy, reasoning quality, instruction following, formatting, and alignment with user intent.</li>
              <li>• Identified recurring model issues, including hallucinated details, incomplete reasoning, weak structure, and inconsistent task execution.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold text-white">Stadium Operations - Utility Maintenance</h3>
                <p className="mt-1 text-blue-300">Kansas City Chiefs</p>
              </div>
              <p className="text-sm text-zinc-400">Aug 2014 - Sep 2019 | Kansas City, MO</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-300">
              <li>• Supported stadium and facility operations for Arrowhead Stadium and team practice facilities.</li>
              <li>• Assisted with game-day operations for events with 76,000+ attendees while maintaining facility readiness, safety standards, and guest experience.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="projects" className="border-y border-zinc-800 bg-zinc-900/35">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Featured Work</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Projects that show product thinking, execution, and business impact.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
              Each project is structured around a problem, the audience, the solution, and the business value. The focus is not just what was built, but why it matters.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <article key={project.title} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-600 md:p-8">
                <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm font-medium text-blue-300">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-zinc-500">{project.status}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 text-sm leading-6 text-zinc-300">
                    <p><span className="font-semibold text-zinc-100">Problem:</span> {project.problem}</p>
                    <p><span className="font-semibold text-zinc-100">Solution:</span> {project.solution}</p>
                    <p><span className="font-semibold text-zinc-100">Business value:</span> {project.value}</p>
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                      rel={project.liveUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-2 font-semibold text-zinc-100 transition hover:bg-zinc-800"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Impact</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Proof that the work connects to operational results.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
            <p className="text-3xl font-bold text-white">21%</p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Productivity increase within 90 days by improving visibility into performance trends, workflow constraints, staffing, and coaching decisions.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
            <p className="text-3xl font-bold text-white">80% → 110%</p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Pack rate improvement against plan through real-time tracking, gap identification, and better labor placement.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
            <p className="text-3xl font-bold text-white">5 → 4</p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Developed 5 Process Guides, with 4 later promoted to Process Assistant, strengthening leadership coverage and bench depth.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-zinc-800 bg-zinc-900/35">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Skills</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Technical and business skills in one profile.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-zinc-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Education</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Academic foundation in business analytics and data-driven decision-making.
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
                <h3 className="text-xl font-semibold text-white">MBA, Business Analytics</h3>
                <p className="mt-2 text-sm text-zinc-400">Southern New Hampshire University | Expected May 2027</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Certifications</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Certifications aligned with analytics, business intelligence, and process improvement.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span key={cert} className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/35">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Career Direction</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Target roles where data, execution, and leadership connect.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {targetRoles.map((role) => (
              <span key={role} className="rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-zinc-200">
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Open to analytics, operations, AI, and leadership opportunities.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
            I am open to internships, analyst roles, operations leadership opportunities, project collaborations, and business-focused AI work. The best opportunities for me are roles where data, execution, and problem-solving come together.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="mailto:carlosmccain78@gmail.com" className="rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400">
              Email Me
            </a>
            <a href="https://linkedin.com/in/carlosm125" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-800">
              LinkedIn
            </a>
            <a href="#projects" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-800">
              View Projects
            </a>
            <a href="https://devforge-zeta-blush.vercel.app/#/command-center" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-800">
              Launch DevForge
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
