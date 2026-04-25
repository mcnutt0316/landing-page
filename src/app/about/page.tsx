import Image from 'next/image';
import { Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/about/SectionHeader';

const SKILLS = [
  'TypeScript', 'JavaScript', 'C#', 'ASP.NET Core', 'React', 'Next.js',
  'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Supabase', 'Neon',
  'Claude AI', 'Git', 'GitHub',
];

const TIMELINE = [
  {
    year: '2021',
    dot: 'plain' as const,
    title: 'Commercial truck driver',
    desc: 'Started running local auto hauling routes. Learned discipline, logistics, and how to stay calm when everything goes sideways.',
  },
  {
    year: '2023',
    dot: 'accent' as const,
    title: 'Started teaching myself to code',
    desc: 'TypeScript, React, Next.js — learning in the margins. Built small projects to understand the fundamentals.',
  },
  {
    year: '2024',
    dot: 'accent' as const,
    title: 'Shipped Car Hauler Platform',
    desc: 'Full-stack logistics app. Solo project that evolved into a hackathon entry — and won 2nd place competing against experienced teams.',
  },
  {
    year: '2025 – now',
    dot: 'gold' as const,
    title: 'Building in public, looking for a team',
    desc: 'Shipping Height Table, iterating on the portfolio, and actively looking for my first professional dev role.',
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-[780px] mx-auto px-8 pt-[100px] pb-20">
      {/* Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_160px] gap-10 items-start pb-14 mb-14 border-b border-foreground/10">
        <div>
          <div className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-accent mb-4">
            // about me
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5">
            From the open road to the terminal.
          </h1>
          <p className="text-[17px] leading-[1.75] text-foreground/70">
            I&apos;m <strong className="text-foreground font-semibold">Corey</strong> — a self-taught software developer based in the US. I spent years driving commercial auto haulers before teaching myself to code. Now I build the kind of software I wished existed when I was out on the road.
          </p>
        </div>
        <div className="relative justify-self-start lg:justify-self-end">
          <Image
            src="/profile-picture.jpg"
            alt="Corey"
            width={160}
            height={160}
            className="w-[160px] h-[160px] rounded-2xl object-cover border border-foreground/20"
          />
          <div
            className="absolute bottom-[-10px] right-[-10px] rounded-[10px] px-2.5 py-1.5 font-mono text-[11px] font-medium whitespace-nowrap"
            style={{
              background: 'oklch(0.18 0.08 240)',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'oklch(0.34 0.12 240)',
              color: 'oklch(0.76 0.10 240)',
            }}
          >
            🟢 Open to work
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-px bg-foreground/10 rounded-xl overflow-hidden mb-14">
        {[
          { num: '3', suffix: '+', label: 'years on the road' },
          { num: '2', suffix: 'nd', label: 'hackathon finish' },
          { num: '5', suffix: '+', label: 'shipped projects' },
        ].map((s) => (
          <div key={s.label} className="bg-background px-6 py-5 text-center">
            <div className="text-[28px] font-bold font-mono leading-none mb-1">
              {s.num}
              <span className="text-accent">{s.suffix}</span>
            </div>
            <div className="text-[12px] font-mono tracking-[0.04em] text-foreground/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Backstory */}
      <section className="mb-14">
        <SectionHeader icon="🚛" title="The backstory" />
        <p className="text-base leading-[1.8] text-foreground/70">
          I drove car haulers locally — 18-wheelers loaded with 7–9 cars, running routes in and around my area. More loads per day, tighter turnarounds, and logistics problems that nobody had built good software for. I started teaching myself to code because I wanted to solve those problems myself.
        </p>
        <p className="text-base leading-[1.8] text-foreground/70 mt-4">
          What started as curiosity turned into obsession. I spent nights and weekends learning TypeScript, React, and Next.js. I built my first real project — <strong className="text-foreground font-semibold">Car Hauler Platform</strong> — to prove I could ship something real. Then I took it to a hackathon, got assigned a team, and we won 2nd place.
        </p>
        <div
          className="bg-accent/15 border border-accent/35 rounded-xl px-6 py-5 text-[15px] leading-[1.7] mt-6"
          style={{ color: 'oklch(0.82 0.06 240)' }}
        >
          <strong className="text-white font-semibold">The domain expertise is real.</strong> I didn&apos;t build a generic logistics app from a tutorial. I built software I understood from the inside — the kind of load planning, safety compliance, and operational constraints that don&apos;t show up in any spec doc unless you&apos;ve lived them. That&apos;s a different kind of developer.
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-14">
        <SectionHeader icon="📍" title="How I got here" />
        <div className="relative pl-7 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-foreground/10">
          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={i < TIMELINE.length - 1 ? 'mb-8 relative' : 'relative'}
            >
              <div
                className={`absolute left-[-24px] top-1 w-3.5 h-3.5 rounded-full bg-background border-2 flex items-center justify-center ${
                  item.dot === 'gold'
                    ? 'border-gold'
                    : item.dot === 'accent'
                    ? 'border-accent'
                    : 'border-foreground/20'
                }`}
              >
                {item.dot === 'gold' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                )}
                {item.dot === 'accent' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                )}
              </div>
              <div className="font-mono text-[11px] text-foreground/50 tracking-[0.06em] mb-1">
                {item.year}
              </div>
              <div className="text-[15px] font-semibold mb-1">{item.title}</div>
              <div className="text-sm text-foreground/50 leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-foreground/10 my-14" />

      {/* BJJ */}
      <section className="mb-14">
        <SectionHeader icon="🥋" title="Off the mat, on the keyboard" />
        <div className="flex items-center gap-4 px-5 py-4 bg-foreground/5 border border-foreground/10 rounded-xl my-5">
          <div
            className="relative w-20 h-[18px] rounded-sm overflow-hidden flex-shrink-0"
            style={{ background: '#1a0a00' }}
          >
            <div
              className="absolute right-0 top-0 bottom-0 w-3.5"
              style={{ background: '#d4af37' }}
            />
          </div>
          <div>
            <div className="text-sm font-semibold font-mono">
              Brazilian Jiu-Jitsu — Black Belt
            </div>
            <div className="text-xs text-foreground/50">10+ years training</div>
          </div>
        </div>
        <p className="text-base leading-[1.8] text-foreground/70">
          BJJ has a saying: <em className="italic">&ldquo;A black belt is a white belt who never quit.&rdquo;</em> I think about that a lot when I&apos;m debugging something I don&apos;t understand yet. The mat taught me that patience isn&apos;t passive — it&apos;s the discipline to keep showing up and grinding through problems that don&apos;t have quick answers.
        </p>
        <p className="text-base leading-[1.8] text-foreground/70 mt-4">
          Rolling with higher belts when you&apos;re a beginner is humbling in exactly the right way. You learn to be comfortable not knowing, to fail fast, and to always ask <em className="italic">why</em> something didn&apos;t work. That&apos;s the same mindset I bring to code.
        </p>
      </section>

      <hr className="border-t border-foreground/10 my-14" />

      {/* Skills */}
      <section className="mb-14">
        <SectionHeader icon="⚙️" title="What I work with" />
        <p className="text-base leading-[1.8] text-foreground/70 mb-4">
          I lean into <strong className="text-foreground font-semibold">AI tools</strong> to move faster — Claude, Cursor, and whatever helps me ship better work. It&apos;s changed how I prototype and debug.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-md text-xs font-mono"
              style={{
                background: 'oklch(0.16 0.03 240)',
                color: 'oklch(0.72 0.08 240)',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'oklch(0.26 0.05 240)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Availability bar */}
      <div
        className="flex items-start gap-3 px-5 py-4 rounded-xl mt-12"
        style={{
          background: 'oklch(0.13 0.04 145 / 0.3)',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'oklch(0.35 0.10 145 / 0.4)',
        }}
      >
        <div className="text-sm" style={{ color: 'oklch(0.80 0.10 145)' }}>
          <span className="inline-flex items-center gap-2 font-semibold text-white">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block flex-shrink-0" />
            Available for new opportunities.
          </span>
          {' '}Looking for a team that builds real things and isn&apos;t afraid of someone who came up a different way.
        </div>
      </div>

      {/* CTAs */}
      <div className="flex gap-3 flex-wrap mt-5">
        <Button href="/Corey_McNutt_Resume.pdf" variant="primary" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </Button>
        <Button href="/projects" variant="secondary" size="sm">
          View My Projects →
        </Button>
      </div>
    </main>
  );
}
