import {useState} from 'react';
import {HeroVideo} from './components/HeroVideo';
import {Sections} from './components/Sections';
import {brand, ctas, headline, lede, media, nav} from './content';
import {useFitText} from './hooks/useFitText';

/** A pixel rabbit head on an 11×11 grid: tall ears, eyes and nose punched out. */
function Mark() {
  return (
    <svg viewBox="0 0 11 11" shapeRendering="crispEdges" className="h-[26px] w-auto" aria-hidden>
      <path
        className="fill-ink"
        d="M2 0h2v5H2zM7 0h2v5H7zM1 5h9v1H1zM0 6h11v1H0zM0 7h3v1H0zM4 7h3v1H4zM8 7h3v1H8zM0 8h11v1H0zM0 9h5v1H0zM6 9h5v1H6zM1 10h9v1H1z"
      />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20 flex items-center justify-between px-[clamp(20px,2.6vw,40px)] pt-[clamp(20px,3.8vh,40px)]">
      <a href="#" className="flex items-center gap-3" aria-label={`${brand} home`}>
        <Mark />
      </a>
      <div className="flex items-center gap-[clamp(20px,2.4vw,36px)]">
        <nav aria-label="Main">
          <ul className="hidden items-center gap-[clamp(20px,2.4vw,36px)] text-ui md:flex">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="underline-offset-4 hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="text-ui md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
          {open && (
            <ul
              id="mobile-nav"
              className="absolute inset-x-[20px] top-full mt-3 flex flex-col gap-4 bg-ink p-5 text-ui text-page md:hidden"
            >
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  const title = useFitText<HTMLHeadingElement>();

  return (
    <div className="bg-page text-ink">
    <div className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <Header />

      {/* Desktop: the video owns the right 60%, under the nav. Phone: a square between headline and copy. */}
      <HeroVideo
        video={media.video}
        poster={media.poster}
        className="edge-fade order-2 aspect-square w-full md:absolute md:top-[11vh] md:right-0 md:bottom-0 md:aspect-auto md:w-[60%]"
      />

      <main className="contents md:relative md:z-10 md:flex md:flex-1 md:flex-col md:px-[clamp(20px,2.6vw,40px)] md:pt-[17vh] md:pb-[12vh]">
        <div className="order-1 w-full px-[20px] pt-[9vh] pb-6 md:w-[38%] md:p-0">
          <h1 ref={title} className="pixel inline-block whitespace-nowrap text-hero rise">
            {headline[0]}
            <br />
            {headline[1]}
          </h1>
        </div>

        <div className="order-3 px-[20px] pt-6 pb-[8vh] md:mt-auto md:p-0">
          <p className="max-w-[34ch] text-lede rise [animation-delay:120ms]">{lede}</p>
          <div className="mt-[clamp(28px,5vh,52px)] flex items-center gap-[clamp(18px,1.6vw,26px)] rise [animation-delay:220ms]">
            <a
              href={ctas.primary.href}
              className="inline-flex h-[clamp(40px,4.4vh,46px)] items-center bg-ink px-[clamp(18px,1.6vw,24px)] text-ui text-page transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {ctas.primary.label}
            </a>
            <a href={ctas.secondary.href} className="group inline-flex items-center gap-2 text-ui">
              {ctas.secondary.label}
              <svg viewBox="0 0 6 10" className="h-[0.8em] w-auto transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M1 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
    <Sections />
    </div>
  );
}
