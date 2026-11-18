
import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "PC Jeweller",
    image: "/PCJ.png",
    category: "E-commerce · Jewellery",
    url: "https://www.pcjeweller.com/",
    theme: "jewellery",
  },
  {
    number: "02",
    name: "JUICE Salons",
    image: "/JUICE.png",
    category: "Business · Beauty",
    url: "https://www.juicesalons.com/",
    theme: "salon",
  },
  {
    number: "03",
    name: "Brilliant Earth",
    image: "/brilliant-earth.png",
    category: "E-commerce · Luxury",
    url: "https://www.brilliantearth.com/",
    theme: "earth",
  },
  {
    number: "04",
    name: "Petto AI",
    image: "/petto.png",
    category: "AI · Web application",
    url: "https://pettoai.netlify.app/",
    theme: "petto",
  },
  {
    number: "05",
    name: "Elvana",
    image: "/elvana.png",
    category: "Startup · AI & habits",
    url: "https://elvana.in/",
    theme: "elvana",
  },
];

const services = [
  ["01", "Website design & development", "Distinctive, responsive websites built around your business."],
  ["02", "Business & corporate websites", "A clear, credible online presence that earns trust."],
  ["03", "E-commerce development", "Product-led storefronts that make browsing and buying simple."],
  ["04", "Landing pages", "Focused pages designed to turn attention into action."],
  ["05", "AI-powered web applications", "Useful web products that bring AI into real workflows."],
  ["06", "Redesign, optimization & support", "Improve what exists and keep your website running smoothly."],
];

const stack = [
  {
    title: "FRONTEND",
    items: ["HTML & CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    items: ["Node.js", "Python", "FastAPI"],
  },
  {
    title: "DATABASE & SERVICES",
    items: ["Firebase", "Supabase", "PostgreSQL"],
  },
  {
    title: "TOOLS & DEPLOYMENT",
    items: ["Git & GitHub", "Vercel", "Netlify", "AI coding tools"],
  },
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <nav className="nav">
        <a className="wordmark" href="#top" aria-label="Dhvanit home">
          DV<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#services">SERVICES</a>
          <a href="#about">ABOUT</a>
        </div>

        <a className="nav-contact" href="#contact">
          LET&apos;S TALK <Arrow />
        </a>
      </nav>

      {/* HERO */}
      <section className="hero section-pad" id="top">
        <div className="hero-topline">
          <span>INDEPENDENT WEB DEVELOPER</span>

          <span className="availability">
            <i /> AVAILABLE FOR PROJECTS
          </span>
        </div>

        <div className="hero-main">
          <h1>
            I TURN IDEAS
            <br />
            INTO DIGITAL
            <br />
            <span>EXPERIENCES.</span>
          </h1>

          <div className="hero-portrait">
            <Image
              src="/dhvanit.png"
              alt="Dhvanit Vaghela"
              width={1024}
              height={1536}
              priority
              sizes="(max-width: 768px) 70vw, 28vw"
              className="portrait-image"
            />

            <span className="portrait-caption">
              DHVANIT VAGHELA / WEB DEVELOPER
            </span>
          </div>
        </div>

        <div className="hero-bottom">
          <p className="hero-copy">
            I design, develop and launch modern websites that help businesses
            stand out, connect with customers and grow online.
          </p>

          <a
            className="circle-link"
            href="#work"
            aria-label="Explore selected work"
          >
            ↓
          </a>

          <p className="hero-location">
            BASED IN INDIA
            <br />
            WORKING EVERYWHERE
          </p>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="work section-pad" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2>
              GOOD IDEAS.
              <br />
              <em>BUILT WELL.</em>
            </h2>
          </div>

          <p>
            A selection of digital experiences I&apos;ve worked on — from
            business websites to AI-powered products.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.theme}`}
              key={project.number}
            >
              <a
                className="project-visual"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} website screenshot`}
                  width={1200}
                  height={800}
                  className="project-screenshot"
                />

                <span className="project-image-arrow">↗</span>
              </a>

              <div className="project-meta">
                <div>
                  <span className="project-number">
                    {project.number} /
                  </span>
                  <h3>{project.name}</h3>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW WEBSITE <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / WHAT I DO</span>
            <h2>
              FROM FIRST
              <br />
              <em>THOUGHT TO LIVE.</em>
            </h2>
          </div>

          <p>
            One person. The whole process. I take projects from an early idea
            through design, development and launch.
          </p>
        </div>

        <div className="service-list">
          {services.map(([number, title, description]) => (
            <div className="service-row" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-plus">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="stack-section section-pad">
        <div className="section-heading stack-heading">
          <div>
            <span className="eyebrow">03 / THE TOOLKIT</span>
            <h2>
              TOOLS THAT
              <br />
              <em>MAKE IT REAL.</em>
            </h2>
          </div>

          <p>
            The right tools for the job — chosen to build fast, reliable and
            maintainable digital products.
          </p>
        </div>

        <div className="stack-grid">
          {stack.map((group) => (
            <div className="stack-group" key={group.title}>
              <span>{group.title}</span>

              <div>
                {group.items.map((item) => (
                  <b key={item}>{item}</b>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section-pad" id="about">
        <span className="eyebrow">04 / A LITTLE ABOUT ME</span>

        <div className="about-content">
          <h2>
            HEY, I&apos;M
            <br />
            <em>DHVANIT.</em>
          </h2>

          <div>
            <p className="about-lead">
              I&apos;m an independent web developer who enjoys turning ideas
              into useful, thoughtful digital experiences.
            </p>

            <p>
              I work across the full process — understanding the goal, shaping
              the experience, building the product and getting it live.
              Whether you need a simple landing page or a more involved web
              application, I bring the pieces together from start to finish.
            </p>

            <a
              className="text-link"
              href="mailto:dvntonway@gmail.com?subject=Website%20Project%20Inquiry"
            >
              HAVE A PROJECT IN MIND? <Arrow />
            </a>
          </div>
        </div>

        <div className="about-bottom">
          <span>CURIOUS BY NATURE.</span>
          <span>BUILT WITH INTENTION.</span>
          <span>ALWAYS LEARNING.</span>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section-pad" id="contact">
        <span className="eyebrow">05 / HAVE A GOOD ONE IN MIND?</span>

        <h2>
          LET&apos;S BUILD
          <br />
          <em>SOMETHING.</em>
        </h2>

        <div className="contact-bottom">
          <p>
            Have an idea, a business that needs a better website, or a project
            you want to bring to life? Let&apos;s talk.
          </p>

          <a href="mailto:dvntonway@gmail.com?subject=Website%20Project%20Inquiry">
            LET&apos;S BUILD SOMETHING <Arrow />
          </a>
        </div>

        <div className="contact-details">
          <a href="mailto:dvntonway@gmail.com">
            dvntonway@gmail.com
          </a>

          <a href="tel:+919537566396">
            +91 95375 66396
          </a>

          <a
            href="https://www.instagram.com/dhvanit.builds/"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM <Arrow />
          </a>

          <a
            href="https://wa.me/919537566396"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHATSAPP <Arrow />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a className="wordmark" href="#top">
          DV<span>.</span>
        </a>

        <span>© {new Date().getFullYear()} DHVANIT VAGHELA</span>

        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
