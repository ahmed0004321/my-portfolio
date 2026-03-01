"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/tech-marquee";
import { SkillsGrid } from "@/components/skills-grid";
import { SecurityInsights } from "@/components/security-insights";
import { ProjectCard } from "@/components/project-card";
import { GsapReveal, GsapStaggerReveal, GsapParallax } from "@/components/gsap-reveal";

const projects = [
  {
    title: "Local Chef Bazaar",
    description: "Local Chef Bazaar is a full-stack MERN marketplace that connects home chefs with local customers. Developed with a focus on security and scalability, it features role-based dashboards, Stripe payment integration, and JWT-secured routes. The platform empowers local entrepreneurs by providing them with the tools to manage a digital food business efficiently.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Firebase", "Framer Motion", "Tanstack Query"],
    status: "Latest",
    images: [
      "/projects/chef-1.png",
      "/projects/chef-2.png",
      "/projects/chef-3.png",
      "/projects/chef-4.png",
      "/projects/chef-5.png",
    ],
    liveLink: "https://local-chef-bazaar-client.vercel.app/",
    repoLink: "https://github.com/ahmed0004321/local-chef-bazaar-client?tab=readme-ov-file",
  },
  {
    title: "My Tools",
    description: "My Tools is a high-performance React-based utility dashboard designed for developers. It centralizes essential tools like JSON formatters, secure password generators, and image compressors into a single, lightning-fast SPA. Built with Vite and Tailwind CSS, the project emphasizes client-side data privacy and seamless UX through modular architecture and responsive design.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Lucide React", "React Router", "LocalStorage API", "Firebase", "JWT"],
    status: "Latest",
    images: [
      "/projects/mytools-1.png",
      "/projects/mytools-2.png",
      "/projects/mytools-3.png",
      "/projects/mytools-4.png",
      "/projects/mytools-5.png",
    ],
    liveLink: "https://peoject-my-tools.vercel.app/",
    repoLink: "https://github.com/ahmed0004321/peoject-myTools?tab=readme-ov-file",
  },
  {
    title: "VSCode Portfolio",
    description: "Personal portfolio website inspired by VSCode's design, focusing on responsiveness and high-quality animations.",
    tags: ["Next.js", "Tailwind", "GSAP", "Lenis"],
    status: "Active",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-foreground selection:text-background relative">
      <Navbar />

      <Hero />

      <TechMarquee />

      {/* Projects Section */}
      <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
        <GsapReveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-2xl opacity-50 font-mono">{">_"}</span>
            <h2 className="text-3xl font-bold tracking-tight">Recent Projects</h2>
          </div>
        </GsapReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <GsapReveal key={project.title} delay={i * 0.15}>
              <ProjectCard {...project} />
            </GsapReveal>
          ))}
        </div>
      </section>

      <SkillsGrid />

      <SecurityInsights />

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <GsapReveal className="flex justify-center">
            <GsapParallax speed={0.4} className="relative group w-full max-w-sm">
              <div
                className="aspect-square rounded-full overflow-hidden shadow-2xl relative"
                style={{
                  maskImage: 'radial-gradient(circle, black 45%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 45%, transparent 80%)'
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Oasif Ahmed Rikto"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Subtle decorative glow ring */}
              <div className="absolute -inset-4 border border-foreground/5 rounded-full -z-10 group-hover:scale-110 transition-transform duration-1000 opacity-20" />
            </GsapParallax>
          </GsapReveal>

          <GsapReveal delay={0.2}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl">☕️</span>
                <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              </div>

              <p className="text-lg text-muted mb-6 leading-relaxed">
                I am a passionate <span className="text-foreground font-semibold">Full Stack Developer</span> focused on building scalable, user-centric applications.
              </p>

              <p className="text-muted leading-relaxed mb-10">
                I specialize in modern web technologies and have a strong interest in architecture and performance optimization. I love turning complex problems into elegant, efficient solutions.
              </p>

              <button className="px-8 py-3 rounded-full bg-foreground text-background font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                Download Resume
              </button>
            </div>
          </GsapReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <GsapReveal>
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s work together.</h2>
            <p className="text-muted text-lg mb-10 max-w-md mx-auto">
              Have a project in mind? Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:oasifrikto@gmail.com"
                className="px-8 py-3 rounded-full bg-foreground text-background font-bold hover:opacity-90 transition-opacity"
              >
                Send an email
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("oasifrikto@gmail.com");
                  alert("Email copied to clipboard!");
                }}
                className="px-8 py-3 rounded-full glass font-semibold hover:opacity-80 transition-opacity"
              >
                Copy email address
              </button>
            </div>
          </div>
        </section>
      </GsapReveal>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border text-center text-muted text-sm">
        <p>© 2026 Oasif Ahmed Rikto. All rights reserved.</p>
        <div className="flex items-center justify-center gap-6 mt-4">
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a
            href="https://www.linkedin.com/in/oasif-ahmed-rikto-30610b354/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
