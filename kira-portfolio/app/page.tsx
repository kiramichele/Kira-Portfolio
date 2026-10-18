
"use client";
import React, { useState } from "react";

// Kira Shinn — personal dev + curriculum portfolio
// Playful & warm: cream base, baby-pink + baby-butter accents, rounded everything.
// Drop into a Next.js app (e.g. app/page.jsx with "use client"), or render directly.

const PALETTE = {
  cream: "#FDF8F0",
  creamDeep: "#F7EEDF",
  pink: "#F8C8D8",
  pinkSoft: "#FBE0E8",
  butter: "#FCEFC0",
  butterSoft: "#FDF6DC",
  ink: "#5A4A48",
  inkSoft: "#8A7775",
  rose: "#E59AB0",
};

const DEV = [
  {
    group: "Full-stack platforms",
    items: [
      {
        name: "Commit",
        blurb: "AP CSP learning platform with in-browser Python execution, AI hints, and a teacher dashboard.",
        stack: ["Next.js", "FastAPI", "Supabase", "Judge0", "Anthropic API"],
        link: "https://committocode.netlify.app",
      },
      {
        name: "Stardrop",
        blurb: "Custom LMS for game design classes — rubrics, bulk grading, analytics, calendar, notifications.",
        stack: ["Next.js", "Supabase", "Resend"],
        link: "https://stardrop.studio",
      },
      {
        name: "ServiceHub",
        blurb: "CRM with job boards for managing clients and work pipelines.",
        stack: ["React", "Supabase"],
        link: "https://crm-portfolio-project.vercel.app/",
      },
      {
        name: "Sprig",
        blurb: "Pod-based friend matching with structured video first-calls — realtime chat, DMs, and safety-first design.",
        stack: ["Next.js", "FastAPI", "Supabase", "Daily.co"],
        link: "https://sprigmeet.com",
      },
    ],
  },
  {
    group: "AI-powered apps",
    items: [
      {
        name: "AgentFlow",
        blurb: "Real-time AI customer support chat.",
        stack: ["React", "Anthropic API"],
        link: "https://agentflow-ten-bice.vercel.app/",
      },
      {
        name: "Patient Portal Demo",
        blurb: "HIPAA-equivalent architecture with Anthropic-powered PDF parsing.",
        stack: ["Next.js", "Anthropic API"],
        link: "https://patient-portal-demo-hpmktixvi-kira-shinn.vercel.app",
      },
      {
        name: "Business Valuation Tool",
        blurb: "Claude-powered valuation calculator built for BE Financial.",
        stack: ["Express", "Railway", "Resend"],
      },
    ],
  },
  {
    group: "Mobile",
    items: [
      {
        name: "Night Call",
        blurb: "FrogWatch field-logging app — currently in Play Store review.",
        stack: ["React Native", "Expo"],
      },
      {
        name: "Meeting Recall",
        blurb: "Calendar-aware audio recording and recall app.",
        stack: ["React Native", "Google Calendar API"],
      },
    ],
  },
  {
    group: "Client sites",
    items: [
      {
        name: "Crack'd Auto Glass",
        blurb: "Client business site.",
        stack: ["Next.js", "React"],
        link: "https://crackdautoglass.com",
      },
      {
        name: "Real Estate Site",
        blurb: "IDX-integrated real estate site for client John.",
        stack: ["WP Engine", "Elementor", "Showcase IDX"],
        link: "https://thefppartners.com",
      },
      {
        name: "Northbridge Strategies",
        blurb: "17-page WordPress deployment for Doug Royal.",
        stack: ["WordPress"],
        link: "https://www.northbridgestrategies.org/",
      },
      {
        name: "Shiro Studio",
        blurb: "Ceramics brand site.",
        stack: ["WordPress"],
      },
    ],
  },
];

const CURRICULUM = [
  {
    group: "Interactive courses",
    items: [
      {
        name: "PyPath",
        blurb: "Interactive Python curriculum — 37 files across 5 units.",
        stack: ["Python", "HTML"],
        link: "https://pypath.netlify.app/",
      },
      {
        name: "Personal Finance Fundamentals",
        blurb: "Full HTML course, 28 files spanning Units 0–6.",
        stack: ["HTML", "CSS"],
      },
      {
        name: "Precalculus Curriculum",
        blurb: "Client course covering the full precalc sequence.",
        stack: ["Curriculum design"],
      },
      {
        name: "JavaScript Fundamentals Interactive Coding Activity",
        blurb: "A self-grading, in-browser JavaScript coding activity with instant feedback and error-specific debugging hints. Covers variables, math operations, strings, and print statements. No setup required.",
        stack: ["JavaScript", "HTML"],
        link: "https://javascriptbeginnerlessons.netlify.app/",
      },
      {
        name: "Build It Right — Game Design Branching Scenario",
        blurb: "A scenario-based learning activity for game design students. Learners navigate three real Unity project decisions with immediate feedback and design principle reinforcement on every choice.",
        stack: ["Instructional Design", "Unity"],
        link: "https://kirashinnportfolio.com/branching-scenario",
      },
    ],
  },
  {
    group: "Programs & prep",
    items: [
      {
        name: "AP CSP — Complete Python Curriculum",
        blurb: "A full 102-day AP Computer Science Principles curriculum. Includes interactive slide decks, HTML lessons for all 6 units, a 10-tool exam prep suite, and a Create PT scaffold with a live rubric quality checker.",
        stack: ["Python", "Curriculum design"],
        link: "https://shinneducation.com/product/ap-computer-science-principles-complete-python-curriculum-bundle-102-days/",
      },
      {
        name: "IST — Complete Interactive Curriculum",
        blurb: "A full-semester Introduction to Software Technology curriculum across 9 units with 18 browser-based activities including a desktop simulator, PC builder, CSS playground, and a 5-room escape room.",
        stack: ["HTML", "Curriculum design"],
        link: "https://shinneducation.com/product/introduction-to-software-technology-complete-interactive-curriculum-9-units/",
      },
      {
        name: "UCA Game Developer Prep",
        blurb: "Exam-prep suite for the Unity Certified Associate pathway.",
        stack: ["Unity", "C#"],
        link: "https://ucagamedev.com",
      },
      {
        name: "Writing Monitor",
        blurb: "Chrome extension + React teacher dashboard for tracking student writing.",
        stack: ["Chrome Extension", "React", "Supabase"],
      },
      {
        name: "Training Needs Analysis Report",
        blurb: "A formal Training Needs Analysis based on real student performance data from Georgia Cyber Academy. Includes a full Kirkpatrick Level 1–4 evaluation plan with measurable success criteria.",
        stack: ["Instructional Design", "Kirkpatrick Model"],
        link: "/downloads/needs-analysis-final.docx",
      },
    ],
  },
];

const MATH = [
  {
    group: "Data science",
    items: [
      {
        name: "Steam Farming & Life Sim Market Analysis",
        blurb: "End-to-end data science project analyzing 3,680 Steam games. Covers API scraping, data cleaning, and statistical testing — including a one-sample t-test confirming Stardew Valley as a genre outlier (t = −41.91, p < 0.001).",
        stack: ["Python", "Statistics", "Data Viz"],
        link: "https://steam-analysis-dashboard.netlify.app/",
        github: "https://github.com/kiramichele/steam-analysis",
      },
      {
        name: "US Education Outcomes: What Predicts Student Success?",
        blurb: "Interactive Tableau dashboard analyzing NAEP scores across all 50 states. Finds poverty rate explains 68% of score variation (R² = 0.68) — nearly 5× more than per-pupil spending alone.",
        stack: ["Tableau", "Regression", "Data Viz"],
        link: "https://public.tableau.com/app/profile/kira.shinn3500/viz/USEducationOutcomesAnalysis/USEducationOutcomesWhatActuallyPredictsStudentSuccess",
      },
      {
        name: "Customer Churn Predictor",
        blurb: "End-to-end ML pipeline on 7,032 real telecom customers. Compares Logistic Regression vs Random Forest, identifies top churn drivers via feature importance analysis, and deploys as a live interactive prediction tool. ROC-AUC: 0.835.",
        stack: ["Python", "scikit-learn", "Streamlit"],
        link: "https://kiramichele-customer-churn-predictor.streamlit.app/",
        github: "https://github.com/kiramichele/churn-simulator",
      },
    ],
  },
];

type Item = {
  name: string;
  blurb: string;
  stack: string[];
  link?: string;
  github?: string;
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: "0.72rem",
        padding: "0.2rem 0.6rem",
        borderRadius: "999px",
        background: PALETTE.butterSoft,
        border: `1px solid ${PALETTE.butter}`,
        color: PALETTE.inkSoft,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function Card({ item, i }: { item: Item; i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#FFFFFF",
        borderRadius: "28px",
        padding: "1.6rem 1.7rem",
        border: `1.5px solid ${hover ? PALETTE.pink : PALETTE.creamDeep}`,
        boxShadow: hover
          ? `0 16px 34px -16px ${PALETTE.rose}66`
          : `0 8px 20px -14px ${PALETTE.inkSoft}33`,
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.28s cubic-bezier(.2,.7,.3,1)",
        animation: `rise 0.5s ease both`,
        animationDelay: `${i * 0.05}s`,
        cursor: item.link ? "pointer" : "default",
      }}
      onClick={() => item.link && window.open(item.link, "_blank")}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <h3 style={{ margin: 0, fontSize: "1.18rem", color: PALETTE.ink, fontWeight: 700 }}>
          {item.name}
        </h3>
        {item.link && (
          <span style={{ fontSize: "0.8rem", color: PALETTE.rose }}>↗</span>
        )}
      </div>
      <p style={{ margin: "0.55rem 0 1rem", color: PALETTE.inkSoft, fontSize: "0.95rem", lineHeight: 1.5 }}>
        {item.blurb}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {item.stack.map((s: string) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
      {item.github && (
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "inline-block",
            marginTop: "0.9rem",
            fontSize: "0.85rem",
            fontWeight: 700,
            color: PALETTE.rose,
            textDecoration: "none",
          }}
        >
          GitHub ↗
        </a>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState("dev");
  const data =
    tab === "dev" ? DEV : tab === "curriculum" ? CURRICULUM : MATH;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `radial-gradient(circle at 18% 12%, ${PALETTE.pinkSoft} 0%, transparent 42%), radial-gradient(circle at 86% 8%, ${PALETTE.butterSoft} 0%, transparent 40%), ${PALETTE.cream}`,
        fontFamily: "'Nunito', ui-rounded, 'Segoe UI', sans-serif",
        color: PALETTE.ink,
        padding: "0 1.2rem 5rem",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Nunito:wght@400;600;700&display=swap');
        @keyframes rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Intro */}
      <header style={{ maxWidth: 880, margin: "0 auto", paddingTop: "4.5rem", textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            padding: "0.35rem 1rem",
            borderRadius: "999px",
            background: PALETTE.pinkSoft,
            color: PALETTE.rose,
            fontSize: "0.82rem",
            fontWeight: 700,
            marginBottom: "1.4rem",
          }}
        >
          ✿ Kira Shinn
        </div>
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.4rem, 6vw, 3.8rem)",
            lineHeight: 1.08,
            margin: "0 0 1rem",
            fontWeight: 700,
          }}
        >
          STEM teacher &{" "}
          <span style={{ color: PALETTE.rose }}>full-stack</span> builder.
        </h1>
        <p style={{ fontSize: "1.1rem", color: PALETTE.inkSoft, maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
          I build learning platforms, AI-powered apps, and curriculum that
          actually gets used in classrooms. Next.js, FastAPI, Python, and a lot
          of care for how people learn.
        </p>
      </header>

      {/* Toggle */}
      <div style={{ display: "flex", justifyContent: "center", margin: "3rem 0 2.5rem" }}>
        <div
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            background: PALETTE.creamDeep,
            borderRadius: "26px",
            padding: "0.35rem",
            border: `1.5px solid #fff`,
            boxShadow: `inset 0 1px 4px ${PALETTE.inkSoft}22`,
          }}
        >
          {[
            ["dev", "Development"],
            ["curriculum", "Curriculum"],
            ["math", "Math & Data"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              style={{
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: "clamp(0.88rem, 2.6vw, 0.98rem)",
                padding: "0.65rem clamp(1rem, 3vw, 1.6rem)",
                borderRadius: "999px",
                color: tab === key ? PALETTE.ink : PALETTE.inkSoft,
                background: tab === key ? "#fff" : "transparent",
                boxShadow: tab === key ? `0 6px 16px -8px ${PALETTE.rose}77` : "none",
                transition: "all 0.25s ease",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <main style={{ maxWidth: 1040, margin: "0 auto" }}>
        {data.map((section) => (
          <section key={section.group} style={{ marginBottom: "2.8rem" }}>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "1.3rem",
                color: PALETTE.ink,
                margin: "0 0 1.1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: PALETTE.pink,
                  boxShadow: `0 0 0 4px ${PALETTE.pinkSoft}`,
                }}
              />
              {section.group}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.2rem",
              }}
            >
              {section.items.map((item, i) => (
                <Card key={item.name} item={item} i={i} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Contact */}
      <section
        style={{
          maxWidth: 720,
          margin: "4.5rem auto 0",
          textAlign: "center",
          background: "#fff",
          borderRadius: "32px",
          padding: "2.8rem 2rem",
          border: `1.5px solid ${PALETTE.creamDeep}`,
          boxShadow: `0 14px 34px -20px ${PALETTE.rose}55`,
        }}
      >
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "1.9rem",
            margin: "0 0 0.6rem",
            color: PALETTE.ink,
          }}
        >
          Let's build something ✿
        </h2>
        <p style={{ color: PALETTE.inkSoft, margin: "0 0 1.8rem", fontSize: "1rem" }}>
          Open to freelance dev and curriculum work. Text is the fastest way to reach me.
        </p>
        <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="sms:+13047920970"
            style={{
              textDecoration: "none",
              fontWeight: 700,
              padding: "0.8rem 1.6rem",
              borderRadius: "999px",
              background: PALETTE.pink,
              color: PALETTE.ink,
              boxShadow: `0 8px 18px -10px ${PALETTE.rose}`,
            }}
          >
            ✉ Text me
          </a>
          <a
            href="mailto:kiramicheleshinn@gmail.com"
            style={{
              textDecoration: "none",
              fontWeight: 700,
              padding: "0.8rem 1.6rem",
              borderRadius: "999px",
              background: PALETTE.butter,
              color: PALETTE.ink,
              boxShadow: `0 8px 18px -10px ${PALETTE.inkSoft}66`,
            }}
          >
            ✦ Email me
          </a>
          <a
            href="https://github.com/kiramichele"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              fontWeight: 700,
              padding: "0.8rem 1.6rem",
              borderRadius: "999px",
              background: "#fff",
              color: PALETTE.ink,
              border: `1.5px solid ${PALETTE.creamDeep}`,
            }}
          >
            ⎇ GitHub
          </a>
        </div>
        <p style={{ color: PALETTE.inkSoft, marginTop: "1.6rem", fontSize: "0.88rem" }}>
          kiramicheleshinn@gmail.com · Wilmington, NC
        </p>
      </section>

      <footer style={{ textAlign: "center", marginTop: "4rem", color: PALETTE.inkSoft, fontSize: "0.85rem" }}>
        Made with cream, pink & butter ✿
      </footer>
    </div>
  );
}