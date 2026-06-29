import React from "react";

const projects = [
  {
    title: "Creditt+ – Digital Lending Platform",
    link: "https://www.credittnow.com/",
    stack: "Node.js, Express, PostgreSQL",
    desc: "Automated credit scoring and loan processing system.",
    image: "/screenshots/creditt1.png"
  },
  {
    title: "Adda – Video streaming application",
    link: "https://www.addatimes.com/",
    stack: "Node.js, Express, PostgreSQL",
    desc: "Addatimes is a web portal for video streaming.",
    image: "/screenshots/adda.png"
  },
  {
    title: "NowThingsToDo – Travel Booking Platform",
    link: "https://www.nowthingstodo.com",
    stack: "ReactJS, NodeJS, Strapi, MongoDB",
    desc: "Travel booking platform for tours and experiences.",
    image: "/screenshots/nowthingstodo.png"
  },
  {
    title: "Bid For Sale – Marketplace",
    link: "https://www.bidforsale.com/",
    stack: "ReactJS, NodeJS, NestJS, PostgreSQL",
    desc: "Luxury pre-owned reselling & bidding platform.",
    image: "/screenshots/bidforsale1.png"
  },
  {
    title: "Tulio – E-Commerce Platform",
    link: "https://tulio.design/",
    stack: "PHP Laravel, MySQL",
    desc: "Premium made-to-measure curtains & blinds store.",
    image: "/screenshots/tulio.png"
  },
  {
    title: "ScanOFe – Medical Platform",
    link: "https://scanofe.com/",
    stack: "Node.js, NestJS, PostgreSQL",
    desc: "Fetal diagnosis and ultrasound reporting system.",
    image: "/screenshots/scanofe1.png"
  },
  {
    title: "Pego Intranet – DMS",
    link: "https://www.pego.io/",
    stack: "Node.js, Express, MySQL",
    desc: "Enterprise document management system with RBAC.",
    image: "/screenshots/pego.png"
  },
  {
    title: "Greenway Health – EHR System",
    link: "https://www.greenwayhealth.com",
    stack: "Node.js, Express, MySQL",
    desc: "Healthcare practice management platform.",
    image: "/screenshots/greenway.png"
  },
  {
    title: "Banglar Shiksha – Govt Platform",
    link: "https://banglarshiksha.wb.gov.in/",
    stack: "ReactJS, Node.js, FastAPI, PostgreSQL",
    desc: "School management system for West Bengal government.",
    image: "/screenshots/banglarshiksha.png"
  }
];

const Portfolio = () => {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
    
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Key Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              {/* Screenshot */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>

                <p className="text-xs text-gray-400 mt-1">
                  {p.stack}
                </p>

                <p className="text-sm text-gray-300 mt-3">
                  {p.desc}
                </p>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-cyan-400 text-sm hover:underline"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;