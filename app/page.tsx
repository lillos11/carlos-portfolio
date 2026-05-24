const projects = [
  {
    title: "Data Quality Command Center",
    category: "Data Analytics / AI Tool",
    problem:
      "Business teams often make decisions from messy datasets with missing values, duplicates, invalid entries, and outliers.",
    solution:
      "Built a tool concept that profiles datasets, flags common data quality issues, and helps users clean data before analysis.",
    tools: ["Python", "Pandas", "FastAPI", "Data Validation", "Business Reporting"],
    value:
      "Helps users catch bad data before it affects dashboards, reports, forecasts, or business recommendations.",
  },
  {
    title: "Customer Churn Analysis Dashboard",
    category: "Business Analytics / Power BI",
    problem:
      "Financial Charm Bank needed to understand the characteristics of customers who left the institution.",
    solution:
      "Analyzed churned customer data across credit score, salary, geography, gender, and age to identify patterns and retention risks.",
    tools: ["Power BI", "Excel", "Data Cleaning", "Dashboard Design"],
    value:
      "Gives leadership a clearer view of customer risk factors and supports stronger retention decisions.",
  },
  {
    title: "Fulfillment Operations Performance Dashboard",
    category: "Operations Analytics",
    problem:
      "Operations leaders need fast visibility into productivity, staffing, quality, and bottlenecks during high-volume shifts.",
    solution:
      "Designed a dashboard concept using fulfillment-style sample data to track productivity trends and labor allocation needs.",
    tools: ["Excel", "Power Query", "Power BI", "KPI Tracking"],
    value:
      "Supports faster decisions around staffing, coaching, escalation, and daily performance management.",
  },
  {
    title: "Career Central AI Platform",
    category: "AI Product / Career Tech",
    problem:
      "Students and working professionals often manage resumes, applications, interview prep, school work, and skill growth across too many disconnected tools.",
    solution:
      "Designed an AI-powered career command center that organizes career planning, school deliverables, resumes, interview stories, and projects in one place.",
    tools: ["React", "AI Workflows", "Product Strategy", "UX Planning"],
    value:
      "Creates one system for career growth, academic progress, and professional development.",
  },
  {
    title: "IoT Innovation Strategy for Connected Vehicles",
    category: "Business Strategy / Innovation",
    problem:
      "A vehicle manufacturer needed a practical innovation strategy for adding IoT features while responding to competitive pressure.",
    solution:
      "Evaluated innovation approaches, cross-functional execution, and stakeholder concerns to recommend a structured process for IoT implementation.",
    tools: ["RWW Framework", "Stage-Gate", "Agile", "Lean", "Business Strategy"],
    value:
      "Connects innovation planning to market pressure, organizational capability, and execution.",
  },
];

const skills = [
  "Power BI",
  "Excel",
  "Power Query",
  "Data Cleaning",
  "Dashboard Design",
  "Business Reporting",
  "Operations Management",
  "Process Improvement",
  "KPI Tracking",
  "AI Tools",
  "React",
  "Python",
  "FastAPI",
  "GitHub",
  "Vercel",
  "Business Strategy",
];

const strengths = [
  {
    title: "Data Analytics",
    text: "I turn raw data into clear insights using dashboards, data cleaning, Excel, Power BI, and business reporting.",
  },
  {
    title: "Operations Leadership",
    text: "I bring real experience leading people, solving problems, tracking performance, and improving processes in fast-paced operations.",
  },
  {
    title: "AI-Enabled Business Solutions",
    text: "I design tools that use AI, automation, and structured thinking to improve data quality, career growth, and decision-making.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="border-b border-zinc-800 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_30%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Carlos McCain
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Turning operational problems into data-driven business solutions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            I am a Data Analytics and Business Administration student with hands-on operations leadership experience at Amazon. My work sits at the intersection of analytics, process improvement, AI tools, and business strategy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              View Projects
            </a>
            <a
              href="mailto:carlosmccain78@gmail.com"
              className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-800"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-400">
            <span>Kansas City, MO</span>
            <span>carlosmccain78@gmail.com</span>
            <span>Data Analytics | Operations Leadership | AI Solutions</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((item) => (
            <div key={item.title} className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/35">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">About</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Built from real operations experience, not just classroom theory.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-zinc-300">
            <p>
              I am studying Data Analytics and Business Administration while working in operations leadership at Amazon. That background gives me a practical view of how data, people, process, and execution connect.
            </p>
            <p>
              My portfolio focuses on business problems that matter: customer churn, data quality, operations performance, AI-enabled career systems, and innovation strategy. Each project is designed to show how I think through a problem, structure the work, and connect the final output to business value.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Featured Work</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Projects that show analysis, execution, and business impact.
          </h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-zinc-600 md:p-8">
              <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-sm font-medium text-blue-300">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 text-sm leading-6 text-zinc-300">
                  <p><span className="font-semibold text-zinc-100">Problem:</span> {project.problem}</p>
                  <p><span className="font-semibold text-zinc-100">Solution:</span> {project.solution}</p>
                  <p><span className="font-semibold text-zinc-100">Business value:</span> {project.value}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/35">
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
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Let’s connect around analytics, operations, AI tools, or business strategy.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
            I am open to internships, analyst roles, operations leadership opportunities, project collaborations, and business-focused AI work.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:carlosmccain78@gmail.com"
              className="rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Email Me
            </a>
            <a
              href="#projects"
              className="rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-800"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
