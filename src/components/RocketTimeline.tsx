import { motion } from "framer-motion";
import Rocket from "./Rocket";

export default function RocketTimeline({ steps }: { steps: {step: string; title: string; desc: string}[] }){
  return (
    <div className="glass rounded-xl2 p-6 relative overflow-hidden">
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full btn-grad opacity-15 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full btn-grad opacity-15 blur-3xl" />

      <div className="grid gap-6 lg:grid-cols-[1fr_360px] items-center">
        <div className="space-y-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .45, delay: idx * .05 }}
              className="rounded-xl2 border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_86%,transparent)] p-4 hover:shadow-soft transition"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white text-xs font-extrabold">
                  {idx+1}
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
                  style={{ width: `${Math.max(25, Math.min(100, (idx+1) / steps.length * 100))}%` }}
                  initial={{ x: "-60%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <motion.div
            className="mx-auto w-full max-w-[360px] aspect-square rounded-xl2 border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_80%,transparent)] grid place-items-center overflow-hidden"
            initial={{ opacity: 0, scale: .98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(232,85,222,.22), transparent 40%)," +
                  "radial-gradient(circle at 70% 30%, rgba(84,0,238,.20), transparent 45%)," +
                  "radial-gradient(circle at 50% 75%, rgba(0,209,255,.18), transparent 45%)"
              }}
            />
            <motion.div
              initial={{ y: 12, rotate: -10 }}
              animate={{ y: [12, -16, 12], rotate: [-10, 4, -10] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Rocket className="h-40 w-40 drop-shadow-2xl" />
            </motion.div>

            {/* orbit dots */}
            <motion.div
              className="absolute inset-0"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute left-1/2 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--grad-c)_70%,white)]" />
              <div className="absolute right-5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[color-mix(in_srgb,var(--grad-a)_70%,white)]" />
              <div className="absolute left-8 bottom-10 h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--grad-d)_70%,white)]" />
            </motion.div>
          </motion.div>

          <div className="mt-4 text-center text-sm text-[var(--muted)]">
            Your journey to becoming a digital marketing pro starts here!
          </div>
        </div>
      </div>
    </div>
  );
}
