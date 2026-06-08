const About = () => {
  return (
        <section className="py-24 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Prasenjit Aluni
        </h1>

        <p className="text-cyan-400 text-xl md:text-2xl mt-4 font-medium">
            Senior Full Stack Developer | MERN Stack | Cloud & DevOps
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-slate-300 leading-relaxed text-base md:text-lg">
            15+ years of experience in website development, scalable web
            applications, REST APIs, cloud-native deployments, fintech,
            healthcare, SaaS and e-commerce.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
            {/* AWS */}
            <a
            href="https://amplify-main.d3pnc5v5s4imgn.amplifyapp.com/"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition"
            >
            AWS Services
            </a>

            {/* GCP (current) */}
            <a
            href="#"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/40 hover:bg-blue-500/30 transition"
            >
            GCP Services
            </a>

            {/* Azure */}
            <a
            href="https://happy-dune-08b101900.7.azurestaticapps.net/"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl border border-sky-500/40 text-sky-400 hover:bg-sky-500/10 transition"
            >
            Azure Services
            </a>

            {/* Portfolio - GCP Cloud Run */}
            <a
            href="https://j4t3c8u9u1.execute-api.us-east-1.amazonaws.com/"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 transition font-medium"
            >
            Portfolio
            </a>

            {/* GitHub */}
            <a
            href="https://github.com/prasenjit1011"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition"
            >
            GitHub Repo
            </a>

        </div>
        </section>
  );
};

export default About;