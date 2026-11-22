interface Props {
  video: string;
  poster?: string;
  className?: string;
}

/**
 * The hero loop, played as-is. Visitors who prefer reduced motion get the
 * still poster instead of an autoplaying video.
 */
export function HeroVideo({video, poster, className = ''}: Props) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      {reduced && poster ? (
        <img src={poster} alt="" className="absolute inset-0 h-full w-full object-contain" />
      ) : (
        <video
          key={video}
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-contain"
        />
      )}
    </div>
  );
}
