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
    title: 'Behind the wheel',
    desc: 'Running local car hauling routes — up to 9 vehicles per load, tight logistics, zero margin for error. Got very good at staying calm under pressure.',
  },
  {
    year: '2023',
    dot: 'accent' as const,
    title: 'First line of code',
    desc: 'Opened a tutorial on a Friday night out of frustration. Closed it and started building instead. Learned TypeScript, React, and Next.js by shipping things that broke, then fixing them.',
  },
  {
    year: '2024',
    dot: 'accent' as const,
    title: '2nd place — hackathon',
    desc: 'Took Car Hauler Platform to a hackathon with a team I’d never met. We competed against teams with years of professional experience and finished 2nd.',
  },
  {
    year: '2025 – now',
    dot: 'belt' as const,
    title: 'Shipping and looking for a team',
    desc: 'Building Height Table, refining the portfolio, and looking for a team that wants someone with genuine grit and real-world domain depth.',
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-[780px] mx-auto px-8 pt-[100px] pb-20">
      {/* Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_160px] gap-10 items-start pb-14 mb-14 border-b border-foreground/10">
        <div>
          <div className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-accent mb-4">
            {'// about me'}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5">
            Truck driver.
            <br />
            Black belt.
            <br />
            Developer.
          </h1>
          <p className="text-[17px] leading-[1.75] text-foreground/70">
            I&apos;m <strong className="text-foreground font-semibold">Corey</strong> — self-taught, no CS degree, no bootcamp. I drove 18-wheelers loaded with cars for years, started coding at night because I was frustrated with software that didn&apos;t understand the job, and never stopped. Now I build things that actually solve problems — because I&apos;ve lived the problems.
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
          Car hauling is not a relaxed gig. You&apos;re moving 7–9 vehicles on a single rig, managing load order by weight and delivery sequence, navigating height clearances on unfamiliar routes, and communicating with dealers who need real-time updates while you&apos;re doing 65 on the highway. It&apos;s a logistics problem that never stops.
        </p>
        <p className="text-base leading-[1.8] text-foreground/70 mt-4">
          The software available to drivers was, charitably, bad. So I started learning to code — not because I wanted a career change, but because I wanted to fix something broken. Nights, weekends, whenever. TypeScript, React, Next.js. I built <strong className="text-foreground font-semibold">Car Hauler Platform</strong> — not as a portfolio piece, but as a real tool. Then I took it to a hackathon, got assigned a team of strangers, and we finished 2nd place.
        </p>
        <div className="bg-accent/15 border border-accent/35 rounded-xl px-6 py-5 text-[15px] leading-[1.7] mt-6 text-foreground/80">
          <strong className="text-foreground font-semibold">This isn&apos;t a pivot story — it&apos;s an obsession story.</strong> I didn&apos;t decide to become a developer. I became one because I couldn&apos;t stop building. The domain expertise isn&apos;t a footnote; it&apos;s the whole point. I know what the software needs to do because I was the person it failed.
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
                  item.dot === 'belt'
                    ? 'border-belt'
                    : item.dot === 'accent'
                    ? 'border-accent'
                    : 'border-foreground/20'
                }`}
              >
                {item.dot === 'belt' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-belt" />
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
            <div className="absolute right-0 top-0 bottom-0 w-3.5 bg-belt" />
          </div>
          <div>
            <div className="text-sm font-semibold font-mono">
              Brazilian Jiu-Jitsu — Black Belt
            </div>
            <div className="text-xs text-foreground/50">10+ years training</div>
          </div>
        </div>
        <p className="text-base leading-[1.8] text-foreground/70">
          A black belt in BJJ means 10+ years of showing up to get submitted by people better than you, learning why it happened, and coming back tomorrow. There&apos;s no shortcut. You can&apos;t memorize your way through a live opponent — you have to actually understand the problem.
        </p>
        <p className="text-base leading-[1.8] text-foreground/70 mt-4">
          That&apos;s exactly what debugging feels like. The mat trained me to stay calm when I don&apos;t understand what&apos;s happening, to be methodical under pressure, and to treat every loss as data. I&apos;ve been doing that for a decade. It carries over in ways that are hard to fake — and hard to teach in a bootcamp.
        </p>
      </section>

      <hr className="border-t border-foreground/10 my-14" />

      {/* Skills */}
      <section className="mb-14">
        <SectionHeader icon="⚙️" title="What I work with" />
        <p className="text-base leading-[1.8] text-foreground/70 mb-4">
          I use <strong className="text-foreground font-semibold">AI tools</strong> aggressively — Claude, Cursor, and whatever helps me ship faster and think clearer. Not as a crutch. As a force multiplier. A self-taught developer who knows how to leverage AI is not a junior developer — that&apos;s a different category entirely.
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
        <div className="text-sm text-foreground/80">
          <span className="inline-flex items-center gap-2 font-semibold text-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block flex-shrink-0" />
            Available for new opportunities.
          </span>
          {' '}Looking for a team that ships real things and can appreciate someone who built a work ethic long before they wrote their first line of code.
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
