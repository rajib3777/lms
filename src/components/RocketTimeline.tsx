import { motion } from "framer-motion";
import poster from "../assets/cut_04.jpeg";

export default function RocketTimeline({
  steps,
}: {
  steps: { step: string; title: string; desc: string }[];
}) {
  return (
    <div className="glass rounded-xl2 p-6 relative overflow-hidden">
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full btn-grad opacity-15 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full btn-grad opacity-15 blur-3xl" />

      {/* ✅ IMPORTANT: items-stretch = right side full height with steps */}
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] items-stretch">
        {/* ✅ STEPS (UNCHANGED) */}
        <div className="space-y-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-xl2 border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_86%,transparent)] p-4 hover:shadow-soft transition"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white text-xs font-extrabold">
                  {idx + 1}
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--muted)]">{s.step}</div>
                  <div className="font-display text-lg font-extrabold">{s.title}</div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{s.desc}</div>
                </div>
              </div>

              <div className="mt-3 h-1.5 w-full rounded-full bg-[color-mix(in_srgb,var(--text)_10%,transparent)] overflow-hidden">
                <motion.div
                  className="h-full rounded-full btn-grad"
                  style={{
                    width: `${Math.max(
                      25,
                      Math.min(100, ((idx + 1) / steps.length) * 100)
                    )}%`,
                  }}
                  initial={{ x: "-60%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ RIGHT: Image full width + full height + slogans */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            w-full h-full
            rounded-xl2
            border border-[var(--border)]
            bg-[color-mix(in_srgb,var(--card)_80%,transparent)]
            overflow-hidden
            shadow-soft
            flex flex-col
          "
        >
          {/* ✅ Image takes remaining height (not giant, but full height in column) */}
          <div className="relative flex-1 min-h-[240px]">
            <img
              src={poster}
              alt="Slogan Poster"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* soft overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* ✅ Slogans (fixed bottom, bold, সুন্দর) */}
          <div className="p-5 text-center">
            <div className="font-display text-base sm:text-lg font-extrabold leading-tight">
              দেশ গড়ার পরিকল্পনা রূপ নেবে যাদের শক্তি ও অংশগ্রহণে,
              <br />
              <span className="gradient-text">সবার আগে বাংলাদেশ</span>
            </div>

            <div className="mt-2 text-xs sm:text-sm text-[var(--muted)]">
              আপনার স্বপ্ন • আপনার শক্তি • আপনার অংশগ্রহণ
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
