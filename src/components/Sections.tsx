import type {ReactNode} from 'react';
import {about, beyond, contact, projects, services, skills} from '../content';

const gutter = 'px-[clamp(20px,2.6vw,40px)]';

function Section({id, title, children}: {id: string; title: string; children: ReactNode}) {
  return (
    <section id={id} className={`${gutter} border-t border-ink/20 py-[clamp(56px,10vh,112px)]`}>
      <h2 className="pixel mb-[clamp(28px,5vh,56px)] text-[clamp(28px,4.4vw,64px)] leading-none">{title}</h2>
      {children}
    </section>
  );
}

const arrow = (
  <svg viewBox="0 0 6 10" className="h-[0.8em] w-auto" aria-hidden>
    <path d="M1 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export function Sections() {
  return (
    <>
      <Section id="about" title={about.title}>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="max-w-[56ch] space-y-5 text-lede">
            {about.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="space-y-3 text-ui md:self-start">
            <div className="border border-ink/20 p-5">
              <dt className="mb-3 opacity-60">Now</dt>
              <dd className="space-y-2 text-lede">
                <p>{about.now.role}</p>
                <p>{about.now.company}</p>
                <p className="opacity-60">{about.now.period}</p>
                <p className="opacity-60">{about.now.place}</p>
              </dd>
            </div>
          </dl>
        </div>

        <h3 className="pixel mt-[clamp(40px,7vh,80px)] mb-6 text-[clamp(16px,1.6vw,22px)]">{skills.title}</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {skills.groups.map((g) => (
            <div key={g.label}>
              <p className="mb-3 text-ui opacity-60">{g.label}</p>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="border border-ink/30 px-3 py-2 text-ui">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="work" title={projects.title}>
        <ul className="grid gap-px border border-ink/20 bg-ink/20 md:grid-cols-3">
          {projects.items.map((p, i) => (
            <li key={p.name} className="flex flex-col bg-page p-6">
              <span className="text-ui opacity-60">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="pixel mt-6 text-[clamp(18px,1.7vw,24px)] leading-tight">{p.name}</h3>
              <p className="mt-2 text-ui opacity-60">{p.tag}</p>
              <p className="mt-5 text-lede">{p.body}</p>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group mt-auto inline-flex items-center gap-2 pt-8 text-ui underline-offset-4 hover:underline"
              >
                View on GitHub {arrow}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="services" title={services.title}>
        <p className="mb-8 max-w-[44ch] text-lede">{services.intro}</p>
        <ul className="grid gap-px border border-ink/20 bg-ink/20 md:grid-cols-3">
          {services.items.map((s) => (
            <li key={s.name} className="bg-page p-6">
              <h3 className="pixel text-[clamp(16px,1.5vw,20px)]">{s.name}</h3>
              <p className="mt-4 text-lede">{s.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="beyond" title={beyond.title}>
        <ul className="grid grid-cols-2 gap-px border border-ink/20 bg-ink/20 md:grid-cols-3">
          {beyond.items.map((b) => (
            <li key={b.name} className="bg-page p-6">
              <p className="pixel text-[clamp(14px,1.3vw,18px)]">{b.name}</p>
              <p className="mt-3 text-ui opacity-60">{b.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title={contact.title}>
        <p className="mb-8 max-w-[44ch] text-lede">{contact.lede}</p>
        <a
          href={`mailto:${contact.email}`}
          className="inline-block break-all text-[clamp(18px,3vw,40px)] underline underline-offset-8"
        >
          {contact.email}
        </a>
        <ul className="mt-10 flex gap-8 text-ui">
          {contact.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
                {l.label} {arrow}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <footer className={`${gutter} border-t border-ink/20 py-8 text-ui opacity-60`}>
        © {new Date().getFullYear()} Pavan Sai Vellanki · Hyderabad
      </footer>
    </>
  );
}
