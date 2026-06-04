import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto p-6">

        {/* Hero */}
        <section className="py-20 text-center">
          <h1 className="text-6xl font-bold">
            Prasenjit Aluni
          </h1>

          <p className="text-cyan-400 text-2xl mt-4">
            Senior Full Stack Developer | MERN Stack | Cloud & DevOps
          </p>

          <p className="mt-6 max-w-4xl mx-auto text-slate-300">
            10+ years of experience in website development, scalable web
            applications, REST APIs, cloud-native deployments, fintech,
            healthcare, SaaS and e-commerce.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://prasenjit1011.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600 transition"
            >
              Portfolio
            </a>

            <a
              href="https://github.com/prasenjit1011"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-slate-700 rounded-lg hover:bg-slate-900 transition"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
            <p>Years Experience</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
            <p>Projects</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-cyan-400">Cloud Native</h3>
            <p>AWS, GCP, Azure</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-cyan-400">Full Stack</h3>
            <p>MERN, Laravel, FastAPI</p>
          </div>
        </div>

        {/* Contact */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>

          <div className="space-y-2 text-slate-300">
            <p>📧 prasenjit10112@gmail.com</p>
            <p>📱 90514-95239</p>
            <p>📍 Kolkata, India (Open to Relocate)</p>

            <a
              href="https://prasenjit1011.netlify.app"
              className="block text-cyan-400"
            >
              Portfolio Website
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="font-bold text-cyan-400 mb-3">Frontend</h3>
              <ul className="space-y-2">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Redux</li>
                <li>TypeScript</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-cyan-400 mb-3">Backend</h3>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>NestJS</li>
                <li>FastAPI</li>
                <li>Laravel</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-cyan-400 mb-3">Database</h3>
              <ul className="space-y-2">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Prisma ORM</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-cyan-400 mb-3">Security</h3>
              <ul className="space-y-2">
                <li>JWT</li>
                <li>OAuth 2.0</li>
                <li>REST APIs</li>
                <li>RBAC</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cloud */}
        <section className="glass rounded-3xl p-8 md:p-10 mb-8 hover-card">
  
  {/* Header */}
  <div className="flex items-center gap-4 mb-8">
    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-3xl">
      ☁️
    </div>

    <div>
      <h2 className="text-4xl font-bold">
        Cloud & DevOps
      </h2>
      <p className="text-slate-400 mt-1">
        Building scalable cloud-native architectures and automated deployment pipelines.
      </p>
    </div>
  </div>

  {/* Highlights */}
  <div className="grid md:grid-cols-2 gap-6 mb-10">

    <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/40 transition">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🚀</span>
        <h3 className="text-xl font-semibold text-cyan-400">
          CI/CD Automation
        </h3>
      </div>

      <p className="text-slate-300 leading-relaxed">
        Designed and implemented automated CI/CD pipelines using
        GitHub Actions for build, testing, code quality checks,
        security scanning, and production deployments.
      </p>
    </div>

    <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/40 transition">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🏗️</span>
        <h3 className="text-xl font-semibold text-cyan-400">
          Infrastructure as Code
        </h3>
      </div>

      <p className="text-slate-300 leading-relaxed">
        Provisioned and managed cloud infrastructure using Terraform,
        enabling repeatable, scalable, and cost-efficient deployments
        across AWS, GCP, and Azure platforms.
      </p>
    </div>

  </div>

  {/* Cloud Platforms */}
  <div className="grid lg:grid-cols-3 gap-6">

    {/* Azure */}
    <div className="bg-gradient-to-br from-cyan-500/10 to-slate-900 border border-cyan-500/20 rounded-2xl p-6 hover-card">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">🟦</span>
        <h3 className="text-2xl font-bold text-cyan-400">
          Azure
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          "Virtual Machines",
          "Load Balancer",
          "Blob Storage",
          "Microsoft Entra ID",
        ].map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>


    {/* GCP */}
    <div className="bg-gradient-to-br from-blue-500/10 to-slate-900 border border-blue-500/20 rounded-2xl p-6 hover-card">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">🔵</span>
        <h3 className="text-2xl font-bold text-blue-400">
          GCP
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          "Cloud Functions",
          "Cloud Workflows",
          "Cloud Storage",
          "Compute Engine",
          "Cloud SQL",
          "Load Balancing",
        ].map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>


    {/* AWS */}
    <div className="bg-gradient-to-br from-orange-500/10 to-slate-900 border border-orange-500/20 rounded-2xl p-6 hover-card">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">🟠</span>
        <h3 className="text-2xl font-bold text-orange-400">
          AWS
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          "Amplify",
          "Lambda",
          "API Gateway",
          "Step Functions",
          "S3",
          "SQS",
          "SES",
          "SNS",
          "IAM",
          "EC2",
          "ELB",
          "RDS",
          "EventBridge",
        ].map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-sm rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

  </div>

  {/* Footer Skills */}
  <div className="mt-10 pt-8 border-t border-slate-800">
    <div className="flex flex-wrap gap-3">
      {[
        "GitHub Actions",
        "Terraform",
        "CI/CD",
        "DevOps",
        "Infrastructure as Code",
        "Serverless",
        "Microservices",
        "Cloud Architecture",
      ].map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

</section>

        {/* Projects */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Creditt+ – Digital Lending Platform",
              "NowThingsToDo – Book Tours & Experiences",
              "Bid For Sale – Marketplace",
              "Tulio – Premium Curtains & Blinds",
              "ScanOFe – Fetal Diagnosis Platform",
              "Pego Intranet – DMS",
              "Greenway Health – EHR Platform",
              "Banglar Shiksha – West Bengal Govt Project",
            ].map((project) => (
              <div
                key={project}
                className="border border-slate-800 rounded-xl p-5 hover:border-cyan-500 transition"
              >
                <h3 className="font-semibold text-lg">
                  {project}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Professional Experience
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-cyan-400 font-bold">
                Netprophets Cyberworks Pvt Ltd
              </h3>
              <p>Senior Full Stack Developer (2025 - Present)</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold">
                Criss Financial Limited
              </h3>
              <p>Senior Full Stack Engineer (2024 - 2025)</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold">
                Codecloud IT Solutions
              </h3>
              <p>Senior Software Developer (2020 - 2024)</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold">
                Tulips Ambiance Furnishing LLC
              </h3>
              <p>Senior Full Stack Developer (2017 - 2020)</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold">
                Microsec Health Buddy / Experis IT India
              </h3>
              <p>Software Developer (2014 - 2015)</p>
            </div>
          </div>
        </section>

        <footer className="text-center py-10 text-slate-400">
          © 2026 Prasenjit Aluni
        </footer>

      </div>
    </div>
  );
}

export default App;