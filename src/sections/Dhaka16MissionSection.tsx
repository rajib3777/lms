import { motion } from "framer-motion";
import portrait from "../assets/nav_log.png";

const pop = (d = 0) => ({
  initial: { opacity: 0, y: 14, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-120px" },
  transition: { duration: 0.55, ease: "easeOut", delay: d },
});

const float = (d = 0) => ({
  animate: { y: [0, -6, 0] },
  transition: { duration: 4.4 + d, repeat: Infinity, ease: "easeInOut" },
});

function PromiseCard({
  title,
  desc,
  delay,
}: {
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div {...pop(delay)}>
      <motion.div variants={float(delay)} animate="animate" transition={float(delay).transition}
        className="glass rounded-xl2 p-5 border border-[color-mix(in_srgb,var(--border)_65%,transparent)] shadow-soft hover:shadow-glow transition"
      >
        <div className="text-xs font-bold text-[var(--muted)]">Dhaka-16 Promise</div>
        <div className="mt-1 font-display text-lg font-extrabold">
          <span className="gradient-text">{title}</span>
        </div>
        <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Dhaka16MissionSection() {
  return (
    <section className="relative overflow-hidden">
      {/* BG glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full btn-grad opacity-15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full btn-grad opacity-15 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <motion.div {...pop(0)} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-[var(--grad-c)]" />
            ঢাকা-১৬ (পল্লবী–রূপনগর)
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold leading-[1.3] sm:leading-[1.22]">
            <span className="gradient-text inline-block pb-[2px]">
              ঢাকা-১৬ মানুষের জন্য আমিনুল হকের অঙ্গীকার
            </span>
          </h2>

          <p className="mt-3 text-[var(--muted)]">
            ফ্রি স্কিল ট্রেনিং, চাকরির প্রস্তুতি, উদ্যোক্তা/ই-কমার্স সাপোর্ট, এবং নারীদের বিশেষ উদ্যোগ—একটি স্কিল-বেইসড সমাজ।
          </p>
        </motion.div>

        {/* =========================
            DESKTOP/TABLET (NO OVERLAP GRID + CONNECTORS)
           ========================= */}
        <div className="mt-10 hidden lg:block">
          <div className="relative">
            {/* Connector lines behind content */}
            <svg className="pointer-events-none absolute inset-0 -z-10" viewBox="0 0 1200 520" preserveAspectRatio="none">
              {/* Left card -> center */}
              <path d="M 290 150 C 430 180, 500 220, 600 260" stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" />
              {/* Top-right card -> center */}
              <path d="M 910 110 C 780 150, 720 210, 610 250" stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" />
              {/* Bottom-right card -> center */}
              <path d="M 920 360 C 780 330, 720 300, 610 275" stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" />
              {/* Bottom-left card -> center */}
              <path d="M 310 390 C 450 350, 500 310, 600 280" stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" />

              {/* Dots */}
              <circle cx="600" cy="260" r="4" fill="rgba(180,255,220,0.9)" />
              <circle cx="290" cy="150" r="4" fill="rgba(180,255,220,0.9)" />
              <circle cx="910" cy="110" r="4" fill="rgba(180,255,220,0.9)" />
              <circle cx="920" cy="360" r="4" fill="rgba(180,255,220,0.9)" />
              <circle cx="310" cy="390" r="4" fill="rgba(180,255,220,0.9)" />
            </svg>

            {/* 3-column grid to prevent overlap */}
            <div className="grid grid-cols-[1fr_420px_1fr] gap-6 items-center">
              {/* LEFT column (top + bottom) */}
              <div className="space-y-6">
                <PromiseCard
                  delay={0.06}
                  title="ফ্রি স্কিল ট্রেনিং"
                  desc="ঢাকা-১৬ এলাকার তরুণ-তরুণীদের জন্য ডিজিটাল স্কিল ট্রেনিং—যাতে ঘরে বসে আয় ও কর্মসংস্থানের সুযোগ তৈরি হয়।"
                />
                <PromiseCard
                  delay={0.12}
                  title="ঢাকা-১৬ স্কিল + কর্মসংস্থান উদ্যোগ"
                  desc="এলাকাভিত্তিক ব্যাচ, অনলাইন/অফলাইন সাপোর্ট, এবং ধারাবাহিক গাইডলাইন—স্কিল থেকে আয়ে রূপান্তর নিশ্চিত করা।"
                />
              </div>

              {/* CENTER portrait (always visible, never covered) */}
              <motion.div variants={float(0.2)} animate="animate" transition={float(0.2).transition}
                className="mx-auto"
              >
                <div className="glass rounded-3xl p-5 shadow-glow border border-[color-mix(in_srgb,var(--border)_60%,transparent)]">
                  <div className="rounded-3xl overflow-hidden bg-[color-mix(in_srgb,var(--card)_70%,transparent)]">
                    <img src={portrait} alt="Aminul Haque" className="w-full h-auto object-contain" />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-display text-xl font-extrabold">আমিনুল হক</div>
                    <div className="text-sm text-[var(--muted)]">ঢাকা-১৬ • পল্লবী–রূপনগর</div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT column (top + bottom) */}
              <div className="space-y-10 lg:-mt-8">
                <PromiseCard
                  delay={0.09}
                  title="জব/ইন্টার্নশিপ কানেকশন"
                  desc="CV/ইন্টারভিউ প্রস্তুতি, ইন্টার্নশিপ গাইডলাইন ও জব প্লেসমেন্ট সাপোর্ট—লোকাল সুযোগে কানেক্ট করা।"
                />
                <PromiseCard
                  delay={0.15}
                  title="নারীদের জন্য বিশেষ উদ্যোগ"
                  desc="নারীদের জন্য আলাদা ট্র্যাক—স্কিল শেখানো, সাপোর্ট কমিউনিটি, এবং ঘরে বসে কাজ/ব্যবসার বাস্তব রোডম্যাপ।"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            MOBILE (STACKED, NO LINES, FULL RESPONSIVE)
           ========================= */}
        <div className="mt-10 lg:hidden">
          <motion.div {...pop(0.06)} className="mx-auto max-w-md">
            <div className="glass rounded-3xl p-4 shadow-glow border border-[color-mix(in_srgb,var(--border)_60%,transparent)]">
              <div className="rounded-3xl overflow-hidden bg-[color-mix(in_srgb,var(--card)_70%,transparent)]">
                <img src={portrait} alt="Aminul Haque" className="w-full h-auto object-contain" />
              </div>
              <div className="mt-4 text-center">
                <div className="font-display text-xl font-extrabold">আমিনুল হক</div>
                <div className="text-sm text-[var(--muted)]">ঢাকা-১৬ • পল্লবী–রূপনগর</div>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 grid gap-4">
            <PromiseCard
              delay={0.08}
              title="ফ্রি স্কিল ট্রেনিং"
              desc="ঢাকা-১৬ এলাকার তরুণ-তরুণীদের জন্য ডিজিটাল স্কিল ট্রেনিং—যাতে ঘরে বসে আয় ও কর্মসংস্থানের সুযোগ তৈরি হয়।"
            />
            <PromiseCard
              delay={0.12}
              title="জব/ইন্টার্নশিপ কানেকশন"
              desc="CV/ইন্টারভিউ প্রস্তুতি, ইন্টার্নশিপ গাইডলাইন ও জব প্লেসমেন্ট সাপোর্ট—লোকাল সুযোগে কানেক্ট করা।"
            />
            <PromiseCard
              delay={0.16}
              title="নারীদের জন্য বিশেষ উদ্যোগ"
              desc="নারীদের জন্য আলাদা ট্র্যাক—স্কিল শেখানো, সাপোর্ট কমিউনিটি, এবং ঘরে বসে কাজ/ব্যবসার বাস্তব রোডম্যাপ।"
            />
            <PromiseCard
              delay={0.20}
              title="ঢাকা-১৬ স্কিল + কর্মসংস্থান উদ্যোগ"
              desc="এলাকাভিত্তিক ব্যাচ, অনলাইন/অফলাইন সাপোর্ট, এবং ধারাবাহিক গাইডলাইন—স্কিল থেকে আয়ে রূপান্তর নিশ্চিত করা।"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
