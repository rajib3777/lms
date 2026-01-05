export default function NewsVideo({ videoId, title, sub }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl shadow-glow bg-black/20 ring-1 ring-white/10">
      {/* responsive 16:9 */}
      <div className="relative w-full pt-[56.25%]">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* ✅ News lower-third (overlay) */}
      <div className="pointer-events-none">
        <div className="bg-black/75 text-white px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-xs font-extrabold">
              BREAKING
            </span>
            <div className="font-extrabold text-[clamp(13px,1.2vw,18px)] leading-snug">
              {title}
            </div>
          </div>

          {sub ? (
            <div className="mt-1 text-white/80 text-[clamp(12px,1.05vw,14px)]">
              {sub}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
