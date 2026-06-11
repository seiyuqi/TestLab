import { useState, type ReactNode } from "react";
import anxietyImage from "@/assets/anxiety.png";
import challengeImage from "@/assets/challenge.png";
import digitalMockupImage from "@/assets/digitalmockup.png";
import dm1Image from "@/assets/dm1.png";
import dm2Image from "@/assets/dm2.png";
import dm3Image from "@/assets/dm3.png";
import dm4Image from "@/assets/dm4.png";
import dm5Image from "@/assets/dm5.png";
import dm6Image from "@/assets/dm6.png";
import ideationImage from "@/assets/ideation.png";
import longImage from "@/assets/long.png";
import mateoImage from "@/assets/mateo.png";
import meetingImage from "@/assets/meeting.png";
import paperProtoImage from "@/assets/paperproto.png";
import peterImage from "@/assets/peter.png";
import posterImage from "@/assets/poster.png";
import testlabLogo from "@/assets/testlab-logo.png";

const NAV_ITEMS = [
  { label: "Problem", id: "problem" },
  { label: "Video", id: "concept-video" },
  { label: "Solution", id: "solution" },
  { label: "Research", id: "research" },
  { label: "Process", id: "process" },
  { label: "Final Design", id: "final-design" },
  { label: "Team", id: "team" },
];

const TIMELINE_STEPS = [
  "Ideation",
  "User Research",
  "Task Analysis",
  "Concept Design",
  "Prototyping",
  "Evaluation & Final Design",
];

const RESEARCH_CARDS = [
  {
    title: "Mentorship is Critical",
    description:
      "Participants consistently relied on mentors, teammates, and coworkers when documentation was unclear, incomplete, or lacked context.",
  },
  {
    title: 'Understanding the "Why" Matters',
    description:
      "Many new hires could complete onboarding tasks but struggled to understand how tools and processes connected to the larger company workflow.",
  },
  {
    title: "Hands-On Experience Builds Confidence",
    description:
      "Practical exposure to realistic work scenarios was repeatedly described as more valuable than reading documentation alone.",
  },
];

const PROCESS_ARTIFACTS = [
  { label: "Ideation", image: ideationImage, alt: "Ideation artifact" },
  { label: "Paper Prototype", image: paperProtoImage, alt: "Paper prototype" },
  { label: "Digital Mockup", image: digitalMockupImage, alt: "Digital mockup" },
  { label: "Poster", image: posterImage, alt: "Poster artifact" },
];

const FINAL_DESIGN_IMAGES = [
  {
    image: dm1Image,
    alt: "Final design mockup 1",
    title: "Starting Screen",
    description: "This is the starting screen for the application.",
  },
  {
    image: dm2Image,
    alt: "Final design mockup 2",
    title: "Instructions Screen",
    description: "This is the instructions page illustrating a real world task with what tools they will be working with and are available to them.",
  },
  {
    image: dm3Image,
    alt: "Final design mockup 3",
    title: "Codex Screen",
    description: "This simulates an IDE environment where users can interact with to complete the task at hand.",
  },
  {
    image: dm4Image,
    alt: "Final design mockup 4",
    title: "Documentation Screen",
    description: "This is the documentation screen providing users with relevant information about the application.",
  },
  {
    image: dm5Image,
    alt: "Final design mockup 5",
    title: "Version Control Screen",
    description: "This is the version control screen where users can manage and track changes to the application.",
  },
  {
    image: dm6Image,
    alt: "Final design mockup 6",
    title: "Test Results Screen",
    description: "This is the test results screen where users can view the outcomes of their tests.",
  },
];

const TEAM_MEMBERS = [
  {
    image: longImage,
    alt: "Long team photo",
    name: "Long Vu",
    role: "Team-Lead",
  },
  {
    image: peterImage,
    alt: "Peter team photo",
    name: "Peter Pan",
    role: "Yippy Yapper / Editor",
  },
  {
    image: mateoImage,
    alt: "Mateo team photo",
    name: "Mateo da_robinson",
    role: "idk",
  },
];

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{children}</p>
  );
}

function SectionTitle({
  id,
  title,
  subtitle,
  showEyebrow = true,
  eyebrowText,
}: {
  id: string;
  title: string;
  subtitle?: string;
  showEyebrow?: boolean;
  eyebrowText?: string;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      {showEyebrow ? <SectionEyebrow>{eyebrowText ?? title}</SectionEyebrow> : null}
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-foreground md:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ButtonLink({
  children,
  variant = "solid",
  href = "#",
}: {
  children: ReactNode;
  variant?: "solid" | "outline";
  href?: string;
}) {
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:brightness-105"
      : "border border-border bg-white text-foreground hover:border-primary hover:text-primary";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </a>
  );
}

function PlaceholderPanel({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[220px] items-center justify-center rounded-[2rem] border border-border bg-card px-6 py-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground ${className}`}
    >
      {label}
    </div>
  );
}

function DividerSection({ children }: { children: ReactNode }) {
  return (
    <section className="relative border-b border-border px-6 py-20 lg:px-10 lg:py-28">
      {children}
    </section>
  );
}

export function UiWebKit() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="lg:flex">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <HeroSection />
          <ProblemSection />
          <ConceptVideoSection />
          <SolutionSection />
          <ResearchSection />
          <ProcessSection />
          <FinalDesignSection />
          <TeamSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-dark-accent backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={testlabLogo}
            alt="TestLab logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <p className="text-lg font-semibold text-foreground">TestLab</p>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="transition hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r border-border bg-[var(--sidebar-bg)] lg:block">
      <nav className="sticky top-[73px] flex flex-col gap-1 px-5 py-6">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#top"
          className="mt-4 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:brightness-105"
        >
          Back to Top
        </a>
      </nav>
    </aside>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center border-b border-border px-6 py-12 lg:px-10 lg:py-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top_left,var(--color-primary-soft),transparent_42%),radial-gradient(circle_at_top_right,var(--color-secondary-soft),transparent_38%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-[#FFFFFF] sm:text-6xl lg:text-8xl">
            TestLab
          </h1>
          <p className="mt-6 max-w-xl text-2xl leading-tight text-[#A8B3C7]">
            Bridging the gap between onboarding and real work.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#D1D8E5]">
            A CSE 440 Project.
          </p>
          <div className="mt-10">
            <ButtonLink href="#concept-video">Watch Concept Video</ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-10 rounded-[2.5rem] bg-dark-accent/8 blur-3xl" />
          <div className="relative flex min-h-[34rem] items-center justify-center rounded-[2.5rem] border border-border bg-card px-6 py-8">
            <img
              src={testlabLogo}
              alt="TestLab logo"
              className="hero-logo-float w-full max-w-[28rem] object-contain drop-shadow-[0_24px_40px_rgba(16,32,48,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <DividerSection>
      <div className="mx-auto max-w-7xl">
        <div
          id="problem"
          className="grid gap-6 border-b border-border/70 pb-10 scroll-mt-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              The Challenge
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-foreground md:text-6xl">
              Problem Statement
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex min-h-[28rem] items-center justify-center rounded-[2rem] border border-border bg-card/90 px-6 py-8 shadow-[0_20px_50px_rgba(16,32,48,0.08)]">
            <img
              src={anxietyImage}
              alt="Anxiety illustration"
              className="h-full max-h-[24rem] w-full object-contain"
            />
          </div>
          <div className="rounded-[2rem] border border-border bg-card/90 p-8 shadow-[0_20px_50px_rgba(16,32,48,0.08)] lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              The Challenge
            </p>
            <h3 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl">
              Onboarding explains the system, but it rarely simulates the pressure of using it.
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              Many new hires complete onboarding successfully but still struggle when transitioning to real work. Common challenges include unfamiliar tools, workflows, incomplete or unclear documentation, and uncertainty about when or who to ask for help. These obstacles can slow productivity and reduce confidence, especially when mistakes in production environments may have costly consequences. As a result, new hires often hesitate to experiment, limiting opportunities to learn through experience and develop the confidence needed to become effective contributors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-border bg-card px-4 py-2 text-muted-foreground">
                Unclear workflows
              </span>
              <span className="rounded-full border border-border bg-card px-4 py-2 text-muted-foreground">
                Fear of mistakes
              </span>
              <span className="rounded-full border border-border bg-card px-4 py-2 text-muted-foreground">
                Low confidence
              </span>
            </div>
          </div>
        </div>
      </div>
    </DividerSection>
  );
}

function ConceptVideoSection() {
  return (
    <DividerSection>
      <div className="mx-auto max-w-6xl text-center">
        <div id="concept-video" className="scroll-mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            See It In Action
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-foreground md:text-6xl">
            Concept Video
          </h2>
        </div>
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-card shadow-[0_20px_60px_rgba(16,32,48,0.06)]">
            <iframe
              className="aspect-video w-full"
              src="https://youtu.be/Q_Pp8TqVGf8"
              title="Concept Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            A fun video to demonstrate our idea!
          </p>
        </div>
      </div>
    </DividerSection>
  );
}

function SolutionSection() {
  return (
    <DividerSection>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="solution"
          title="Solution Statement"
          eyebrowText="The Response"
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
          <div className="flex min-h-[34rem] items-center justify-center rounded-[2rem] border border-border bg-card/90 px-6 py-8 shadow-[0_20px_50px_rgba(16,32,48,0.08)]">
            <img
              src={challengeImage}
              alt="Challenge illustration"
              className="h-full max-h-[30rem] w-full object-contain"
            />
          </div>
          <div className="flex min-h-[34rem] flex-col justify-center rounded-[2rem] border border-border bg-card/90 p-8 shadow-[0_20px_50px_rgba(16,32,48,0.08)] lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              How It Helps
            </p>
            <h3 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl">
              Workflow Sandbox gives new hires a safer way to build confidence before real production work begins.
            </h3>
            <div className="mt-6 max-w-2xl space-y-6 text-base leading-8 text-muted-foreground">
              <p>
                Workflow Sandbox provides new hires with a safe environment to practice realistic workplace tasks before contributing to production systems. Through interactive simulations and feedback, users learn how to navigate common roadblocks, identify appropriate sources of help, and develop the confidence needed to contribute effectively to real company workflows.
              </p>
              <p>
                By reducing the cost of mistakes during early learning, the system encourages experimentation, supports better decision-making, and helps users transition from passive onboarding to active participation.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-border bg-card px-4 py-2 text-muted-foreground">
                Safe practice
              </span>
              <span className="rounded-full border border-border bg-card px-4 py-2 text-muted-foreground">
                Realistic scenarios
              </span>
              <span className="rounded-full border border-border bg-card px-4 py-2 text-muted-foreground">
                Confidence building
              </span>
            </div>
          </div>
        </div>
      </div>
    </DividerSection>
  );
}

function ResearchSection() {
  return (
    <DividerSection>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="research"
          title="User Research"
          subtitle="Interviews and directed storytelling with software engineering interns and new hires revealed recurring challenges during onboarding and the transition to real company work."
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex min-h-[28rem] flex-col items-center justify-center rounded-[2rem] border border-border bg-card px-6 py-8 text-center">
            <img
              src={meetingImage}
              alt="User research meeting"
              className="h-full max-h-[24rem] w-full object-contain"
            />
          </div>
          <div className="space-y-4">
            {RESEARCH_CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-border bg-card px-6 py-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Insight
                </p>
                <h3 className="mt-3 text-lg font-medium text-foreground">{card.title}</h3>
                <p className="mt-2 text-base leading-7 text-muted-foreground">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-border bg-card px-6 py-8 text-lg leading-8 text-foreground shadow-[0_12px_36px_rgba(16,32,48,0.04)]">
            “The most helpful part of onboarding was having mentors and teammates available when I
            got stuck.”
          </div>
          <div className="rounded-[1.75rem] border border-border bg-card px-6 py-8 text-lg leading-8 text-foreground shadow-[0_12px_36px_rgba(16,32,48,0.04)]">
            “I could complete the task, but I didn't understand why we were using the tool or how
            it fit into the bigger picture.”
          </div>
        </div>
      </div>
    </DividerSection>
  );
}

function ProcessSection() {
  const [activeArtifactIndex, setActiveArtifactIndex] = useState(0);
  const activeArtifact = PROCESS_ARTIFACTS[activeArtifactIndex];

  function showPreviousArtifact() {
    setActiveArtifactIndex((currentIndex) =>
      currentIndex === 0 ? PROCESS_ARTIFACTS.length - 1 : currentIndex - 1,
    );
  }

  function showNextArtifact() {
    setActiveArtifactIndex((currentIndex) =>
      currentIndex === PROCESS_ARTIFACTS.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <DividerSection>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="process"
          title="Design Process"
          eyebrowText="From Idea to Iteration"
          subtitle="A simple visual timeline followed by lightweight placeholders for artifacts."
        />
        <div className="mt-14 overflow-x-auto pb-4">
          <div className="flex min-w-[64rem] items-center gap-4">
            {TIMELINE_STEPS.map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div className="min-w-40 rounded-full border border-border bg-card px-5 py-4 text-center text-sm font-medium text-foreground">
                  {step}
                </div>
                {index < TIMELINE_STEPS.length - 1 ? <div className="text-xl text-primary">→</div> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-card px-6 py-6 shadow-[0_20px_60px_rgba(16,32,48,0.06)]">
            <div className="absolute inset-y-0 left-4 z-20 flex items-center">
              <button
                type="button"
                onClick={showPreviousArtifact}
                aria-label="Show previous process artifact"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/85 text-xl text-foreground transition hover:border-primary hover:text-primary"
              >
                ←
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 z-20 flex items-center">
              <button
                type="button"
                onClick={showNextArtifact}
                aria-label="Show next process artifact"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/85 text-xl text-foreground transition hover:border-primary hover:text-primary"
              >
                →
              </button>
            </div>
            <div className="relative h-[25rem] sm:h-[31rem]">
              {PROCESS_ARTIFACTS.map((artifact, index) => (
                <img
                  key={artifact.label}
                  src={artifact.image}
                  alt={artifact.alt}
                  className={`absolute inset-0 h-full w-full object-contain px-14 py-4 transition-opacity duration-500 ease-out ${
                    index === activeArtifactIndex ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                {activeArtifact.label}
              </p>
              <div className="flex items-center gap-2">
                {PROCESS_ARTIFACTS.map((artifact, index) => (
                  <button
                    key={artifact.label}
                    type="button"
                    onClick={() => setActiveArtifactIndex(index)}
                    aria-label={`Show ${artifact.label}`}
                    className={`h-2.5 rounded-full transition ${
                      index === activeArtifactIndex ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DividerSection>
  );
}

function FinalDesignSection() {
  return (
    <DividerSection>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="final-design"
          title="Final Design"
          eyebrowText="Digital Mockups"
          subtitle="High-fidelity mockups showcasing our proposed Workflow Sandbox solution."
        />
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-2">
          {FINAL_DESIGN_IMAGES.map((item) => (
            <article key={item.alt} className="rounded-[1.75rem] border border-border bg-card p-5 shadow-[0_16px_40px_rgba(16,32,48,0.06)]">
              <div className="overflow-hidden rounded-[1.25rem] bg-background/10">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="block w-full h-auto"
                />
              </div>
              <h3 className="mt-5 text-lg font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </DividerSection>
  );
}

function TeamSection() {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="team"
          title="Meet The Team"
          eyebrowText="The Crew"
          subtitle="We call ourselves... Fellas in Seattle"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <article key={member.alt} className="rounded-[2rem] border border-border bg-card px-6 py-8 text-center">
              <img
                src={member.image}
                alt={member.alt}
                className="mx-auto h-28 w-28 rounded-full object-cover"
              />
              <h3 className="mt-6 text-xl font-medium text-foreground">{member.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-border bg-card/80 px-6 py-8 shadow-[0_20px_60px_rgba(16,32,48,0.06)] lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={testlabLogo}
              alt="TestLab logo"
              className="h-14 w-14 rounded-full object-cover"
            />
            <p className="text-2xl font-semibold tracking-[-0.04em] text-foreground">TestLab</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
          CSE 440 Spring 2026 · Fellas in Seattle
        </div>
      </div>
    </footer>
  );
}
