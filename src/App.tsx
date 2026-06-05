import "./App.css";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto p-6">

        {/* Hero */}
<section className="py-24 text-center px-4">
  {/* Name */}
  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
    Prasenjit Aluni
  </h1>

  {/* Role */}
  <p className="text-cyan-400 text-xl md:text-2xl mt-4 font-medium">
    Senior Full Stack Developer | MERN Stack | Cloud & DevOps
  </p>

  {/* Description */}
  <p className="mt-6 max-w-3xl mx-auto text-slate-300 leading-relaxed text-base md:text-lg">
    15+ years of experience in website development, scalable web
    applications, REST APIs, cloud-native deployments, fintech,
    healthcare, SaaS and e-commerce.
  </p>

  {/* Buttons */}
  <div className="mt-10 flex flex-wrap justify-center gap-4">

    <a
      href="https://aws.amazon.com/"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-3 rounded-xl border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition-all duration-200 shadow-sm hover:shadow-orange-500/20"
    >
      AWS Services
    </a>

    <a
      href="https://cloud.google.com/"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-3 rounded-xl border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 transition-all duration-200 shadow-sm hover:shadow-blue-500/20"
    >
      GCP Services
    </a>

    <a
      href="https://azure.microsoft.com/"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-3 rounded-xl border border-sky-500/40 text-sky-400 hover:bg-sky-500/10 transition-all duration-200 shadow-sm hover:shadow-sky-500/20"
    >
      Azure Services
    </a>

    <a
      href="https://github.com/prasenjit1011"
      target="_blank"
      rel="noreferrer"
      className="px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-all duration-200 shadow-md"
    >
      GitHub Repo
    </a>

  </div>
</section>



        <section className="py-20 text-center">
          <h1 className="text-6xl font-bold">
            Prasenjit Aluni
          </h1>

          <p className="text-cyan-400 text-2xl mt-4">
            Senior Full Stack Developer | MERN Stack | Cloud & DevOps
          </p>

          <p className="mt-6 max-w-4xl mx-auto text-slate-300">
            15+ years of experience in website development, scalable web
            applications, REST APIs, cloud-native deployments, fintech,
            healthcare, SaaS and e-commerce.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://github.com/prasenjit1011"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-slate-700 rounded-lg hover:bg-slate-900 transition"
            >
              GitHub
            </a>

            <a
              href="https://prasenjit1011.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600 transition"
            >
              Portfolio
            </a>            
          </div>
        </section>

        {/* Stats */}
        

        

        {/* Skills */}


<section className="glass rounded-3xl p-8 md:p-10 mb-8 hover-card">

  {/* Header */}
  <div className="flex items-center gap-4 mb-10">
    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-3xl">
      ⚡
    </div>

    <div>
      <h2 className="text-4xl font-bold">
        Technical Skills
      </h2>
      <p className="text-slate-400">
        Full Stack Development, Cloud Engineering & Enterprise Solutions
      </p>
    </div>
  </div>

  {/* Quick Stats */}
  <div className="grid md:grid-cols-4 gap-4 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
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

  {/* Skill Categories */}
  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

    {/* Frontend */}


    {/* Backend */}
    <div className="bg-gradient-to-br from-emerald-500/10 to-slate-900 border border-emerald-500/20 rounded-2xl p-6 hover-card">

      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">🎨</span>
        <h3 className="font-bold text-xl text-cyan-400">
          Frontend
        </h3>
      </div>

    <ul className="space-y-2   text-cyan-400">
      <li>React.js</li>
      <li>Next.js</li>
      <li>Redux</li>
      <li>TypeScript</li>
      <li>JavaScript</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Bootstrap</li>
    </ul>

    </div>








    {/* Backend */}
    <div className="bg-gradient-to-br from-emerald-500/10 to-slate-900 border border-emerald-500/20 rounded-2xl p-6 hover-card">

      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">⚙️</span>
        <h3 className="font-bold text-xl text-emerald-400">
          Backend
        </h3>
      </div>

    <ul className="space-y-2 text-emerald-300">
      <li>Node.js</li>
      <li>Express.js</li>
      <li>NestJS</li>
      <li>FastAPI</li>
      <li>Laravel</li>
      <li>REST APIs</li>
    </ul>

    </div>

 



    {/* Database */}
    <div className="bg-gradient-to-br from-orange-500/10 to-slate-900 border border-orange-500/20 rounded-2xl p-6 hover-card">

      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">🗄️</span>
        <h3 className="font-bold text-xl text-orange-400">
          Database
        </h3>
      </div>

      
      <ul className="space-y-2 text-orange-400">
        {[
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
          "Prisma ORM",
        ].map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 rounded-full text-sm text-orange-300"
          >
            {skill}
          </li>
        ))}
      </ul>

    </div>

    {/* Security */}
    <div className="bg-gradient-to-br from-purple-500/10 to-slate-900 border border-purple-500/20 rounded-2xl p-6 hover-card">

      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">🔒</span>
        <h3 className="font-bold text-xl text-purple-400">
          Security
        </h3>
      </div>

      <ul className="space-y-2 text-purple-400">
        {[
          "JWT",
          "OAuth 2.0",
          "RBAC",
          "Authentication",
          "Authorization",
          "API Security",
        ].map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 rounded-full text-sm text-purple-300"
          >
            {skill}
          </li>
        ))}
      </ul>

    </div>

  </div>

  {/* Additional Skills */}
  <div className="mt-10 pt-8 border-t border-slate-800">

    <h3 className="text-xl font-semibold mb-5 text-cyan-400">
      Additional Expertise
    </h3>

    <div className="flex flex-wrap gap-3">
      {[
        "AWS",
        "Terraform",
        "GitHub Actions",
        "CI/CD",
        "Docker",
        "System Design",
        "Microservices",
        "Kafka",
        "Redis",
        "Event-Driven Architecture",
        "AI Tools",
        "GitHub Copilot",
        "Claude AI",
        "Cursor AI",
      ].map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition"
        >
          {skill}
        </span>
      ))}
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

<Portfolio />
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
        <footer className="text-center py-10 text-slate-400">
          © 2026 Prasenjit Aluni
        </footer>

      </div>
    </div>
  );
}

export default App;