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
        desc="আপনি আলাদা কোর্স নিতে পারবেন অথবা একসাথে বাণ্ডল নিতে পারবেন—যেটা আপনার লক্ষ্য পূরণ করবে।"
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

        <div className="glass rounded-xl2 p-6 shadow-soft">
          <div className="font-display text-2xl font-extrabold">Bundle: Business Growth Pack</div>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Digital Marketing + E-commerce + Creative—সব এক প্যাকেজে। যারা দ্রুত আয় ও গ্রোথ করতে চান তাদের জন্য।
          </p>

          <div className="mt-5 space-y-3 text-sm text-[var(--muted)]">
            <div className="flex items-start gap-2"><Target size={18} className="mt-0.5"/> ROI-centric campaign roadmap</div>
            <div className="flex items-start gap-2"><Layers3 size={18} className="mt-0.5"/> Ready-to-use templates & checklists</div>
            <div className="flex items-start gap-2"><Flame size={18} className="mt-0.5"/> Weekly growth sprints + review</div>
          </div>

          <div className="mt-6 glass rounded-xl2 p-4">
            <div className="text-xs font-bold text-[var(--muted)]">Special Offer</div>
            <div className="mt-1 text-3xl font-extrabold gradient-text">৳ 9,999</div>
            <div className="text-xs text-[var(--muted)]">Installment available (demo)</div>
          </div>

          <div className="mt-6">
            <AnimatedButton className="w-full">Get Bundle</AnimatedButton>
            <AnimatedButton variant="ghost" className="w-full mt-3">Talk to Support</AnimatedButton>
          </div>
        </div>
      </div>
    </Container>
  );
}
