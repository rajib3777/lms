import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import AnimatedButton from "../components/AnimatedButton";
import { courses } from "../data/siteData";
import { CheckCircle2, Flame, Layers3, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function Products(){
  return (
    <Container className="py-14">
      <SectionTitle
        kicker="Products"
        title="Courses & Bundles"
        desc="আমি চাই—এই এলাকার যুবসমাজ চাকরি খুঁজবে না, চাকরি তৈরি করবে।
              আমি চাই—ঢাকা-১৬ হোক দক্ষতা, কর্মসংস্থান এবং সম্ভাবনার একটি রোল মডেল।"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2 grid gap-5 md:grid-cols-2">
          {courses.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .45, delay: idx * .05 }}
              className="glass rounded-xl2 p-6 shadow-soft hover:shadow-glow transition"
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-[var(--muted)]">{c.level} • {c.duration}</div>
                <div className="text-xs font-semibold">{c.seats}</div>
              </div>
              <div className="mt-2 font-display text-xl font-extrabold">{c.title}</div>
              <div className="text-sm text-[var(--muted)]">{c.subtitle}</div>

              <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {c.includes.map(x => (
                  <div key={x} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5"/>
                    <span>{x}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <AnimatedButton className="flex-1">Enroll</AnimatedButton>
                <AnimatedButton variant="ghost" className="flex-1">Syllabus</AnimatedButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
