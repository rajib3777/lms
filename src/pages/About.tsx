import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import AnimatedButton from "../components/AnimatedButton";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, GraduationCap, Users } from "lucide-react";
import ph from "../assets/ph-home-screenshot.png";

export default function About(){
  return (
    <Container className="py-14">
      <SectionTitle
        kicker="About"
        title="Captain Aminul Haque IT Institute"
        desc="আমাদের লক্ষ্য—বেকারত্ব কমাতে বাস্তব স্কিল শেখানো, এবং শিক্ষার্থীদের কাজ/ব্যবসার পথে গাইড করা।"
      />

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="glass rounded-xl2 p-6 shadow-soft"
        >
          <div className="grid gap-4">
            {[
              { icon: <GraduationCap size={18}/>, title: "Practical Training", desc: "প্রজেক্ট, টাস্ক, ও রিভিউ দিয়ে হাতে-কলমে শেখা।" },
              { icon: <Users size={18}/>, title: "Community Support", desc: "এক্টিভ কমিউনিটি + মেন্টর সাপোর্ট।" },
              { icon: <Globe size={18}/>, title: "Career & Entrepreneurship", desc: "ফ্রিল্যান্সিং/জব/ব্যবসা—যেটাই লক্ষ্য, সেই রোডম্যাপ।" }
            ].map((x) => (
              <div key={x.title} className="flex gap-3">
                <div className="h-10 w-10 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white">{x.icon}</div>
                <div>
                  <div className="font-bold">{x.title}</div>
                  <div className="text-sm text-[var(--muted)]">{x.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 text-sm text-[var(--muted)]">
            {[
              "কোর্স শেষে সার্টিফিকেট প্রদান",
              "কাজের ব্যবস্থা করতে গাইডলাইন",
              "জব প্লেসমেন্ট প্রস্তুতি",
              "ঘরে বসেই শেখার সুযোগ (অনলাইন)"
            ].map(t => (
              <div key={t} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5"/>
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3 flex-col sm:flex-row">
            <AnimatedButton className="flex-1">Contact: +8801581620802</AnimatedButton>
            <AnimatedButton variant="ghost" className="flex-1">Download Brochure</AnimatedButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="glass rounded-xl2 p-4 shadow-glow"
        >
          <img src={ph} className="w-full rounded-xl2 object-cover" alt="UI inspiration screenshot" />
          <p className="mt-3 text-xs text-[var(--muted)]">
            Screenshot of our institute's homepage.
          </p>
        </motion.div>
      </div>
    </Container>
  );
}
