import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Prasenjit Aluni</h1>
        <h2>Senior Full Stack Software Engineer | MERN Stack</h2>

        <div className="contact">
          <p>📧 prasenjit10112@gmail.com</p>
          <p>📱 90514-95239</p>
          <p>📍 Kolkata, India</p>
          <p>🌐 https://prasenjit1011.netlify.app</p>
        </div>
      </header>

      <section>
        <h3>Professional Summary</h3>
        <p>
          Senior Full Stack Developer with 10+ years of experience in MERN
          Stack, cloud-native applications, scalable APIs, and DevOps.
          Experienced in FinTech, Healthcare, SaaS, E-Commerce, and Government
          projects.
        </p>
      </section>

      <section>
        <h3>Technical Skills</h3>

        <div className="grid">
          <div>
            <h4>Frontend</h4>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>TypeScript</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div>
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>NestJS</li>
              <li>FastAPI</li>
              <li>Laravel</li>
            </ul>
          </div>

          <div>
            <h4>Database</h4>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Prisma ORM</li>
            </ul>
          </div>

          <div>
            <h4>Cloud & DevOps</h4>
            <ul>
              <li>AWS Amplify</li>
              <li>Lambda</li>
              <li>API Gateway</li>
              <li>Step Functions</li>
              <li>Terraform</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3>Featured Projects</h3>

        <div className="card">
          <h4>Banglar Shiksha</h4>
          <p>
            ReactJS, NodeJS, FastAPI, PostgreSQL – School Management System for
            West Bengal Government.
          </p>
        </div>

        <div className="card">
          <h4>Creditt+</h4>
          <p>
            Digital Lending Platform with automated credit scoring and loan
            processing.
          </p>
        </div>

        <div className="card">
          <h4>ScanOFe</h4>
          <p>
            Healthcare platform for fetal growth analysis and medical reporting.
          </p>
        </div>

        <div className="card">
          <h4>Bid For Sale</h4>
          <p>
            Luxury pre-owned marketplace built using ReactJS, NestJS and
            PostgreSQL.
          </p>
        </div>
      </section>

      <section>
        <h3>Experience</h3>

        <div className="card">
          <h4>Netprophets Cyberworks Pvt Ltd</h4>
          <p>Senior Full Stack Developer (2025 - Present)</p>
        </div>

        <div className="card">
          <h4>Criss Financial Limited</h4>
          <p>Senior Full Stack Engineer (2024 - 2025)</p>
        </div>

        <div className="card">
          <h4>Codecloud IT Solutions</h4>
          <p>Senior Software Developer (2020 - 2024)</p>
        </div>

        <div className="card">
          <h4>Tulips Ambiance Furnishing LLC</h4>
          <p>Senior Full Stack Developer (2017 - 2020)</p>
        </div>
      </section>

      <div className="card">
        <button onClick={() => window.open('https://prasenjit1011.netlify.app/', '_blank')} style={{ color:'blue', border: '1px solid blue',
          backgroundColor: 'white',padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Go To Portfolio Page
        </button>        
      </div>

      <footer>
        <p>© 2026 Prasenjit Aluni</p>
      </footer>
    </div>
  );
}

export default App;