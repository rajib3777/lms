import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import AnimatedButton from "../components/AnimatedButton";
import { motion } from "framer-motion";
import { Award, Briefcase, Rocket, Sparkles, Trophy, Wand2 } from "lucide-react";
import { bestStudents, companyConnections, testimonials } from "../data/siteData";
import LogoPills from "../components/LogoPills";

const stories = [
  { name: "Shirin", title: "Home-based entrepreneur", text: "নিজের পেজ থেকে নিয়মিত অর্ডার পাই। কন্টেন্ট প্ল্যান + অ্যাড সেটআপ শিখে টার্নওভার বেড়েছে।" },
  { name: "Riad", title: "Junior Digital Marketer", text: "পোর্টফোলিও বানিয়ে ১ম জব পাই। ইন্টারভিউ প্র্যাকটিস অনেক হেল্প করেছে।" },
  { name: "Nusrat", title: "Freelance Designer", text: "Canva/Design workflow শিখে ফাইভার গিগ optimize করি। এখন নিয়মিত ক্লায়েন্ট।" },
];

function Metric({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }){
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass rounded-xl2 p-5 shadow-soft hover:shadow-glow transition"
    >
      <div className="h-11 w-11 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white">{icon}</div>
      <div className="mt-3 text-2xl font-extrabold">{value}</div>
      <div className="text-sm text-[var(--muted)]">{label}</div>
    </motion.div>
  );
}

export default function Success(){
  return (
    <Container className="py-14">
      <SectionTitle
        kicker="Success"
        title="Real Outcomes, Real People"
        desc="ডেমো কনটেন্ট—আপনার বাস্তব স্টুডেন্ট ডেটা/ফটো/ভিডিও দিয়ে আপডেট করলেই সম্পূর্ণ প্রোডাকশন রেডি।"
      />

      <div className="grid gap-5 md:grid-cols-3">
        <Metric label="Students Guided" value="800+" icon={<Sparkles size={18}/>}/>
        <Metric label="Projects Completed" value="1500+" icon={<Wand2 size={18}/>}/>
        <Metric label="Placement Support" value="Job/Client" icon={<Briefcase size={18}/>}/>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {stories.map((s, idx) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .45, delay: idx * .05 }}
            whileHover={{ y: -4 }}
            className="glass rounded-xl2 p-6 shadow-soft hover:shadow-glow transition"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white font-extrabold">
                <Rocket size={18}/>
              </div>
              <div>
                <div className="font-bold">{s.name}</div>
                <div className="text-sm text-[var(--muted)]">{s.title}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">“{s.text}”</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14">
        <SectionTitle
          kicker="Top Students"
          title="Best Students"
          desc="আমাদের স্টুডেন্টদের মধ্যে যারা অসাধারণ ফলাফল করেছে।"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {bestStudents.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .45, delay: idx * .05 }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl2 p-6 shadow-soft hover:shadow-glow transition relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full btn-grad opacity-18 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white">
                  <Trophy size={18}/>
                </div>
                <div>
                  <div className="font-display text-lg font-extrabold">{s.name}</div>
                  <div className="text-sm text-[var(--muted)]">{s.title}</div>
                </div>
              </div>
              <div className="mt-4 rounded-xl2 border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_86%,transparent)] p-4">
                <div className="text-xs font-bold text-[var(--muted)]">Result</div>
                <div className="mt-1 text-xl font-extrabold gradient-text">{s.result}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{s.note}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <SectionTitle
          kicker="Connections"
          title="Company Connections"
          desc="Internship slot / project brief / collaboration—এই জিনিসগুলো success rate বাড়ায়।"
        />
        <LogoPills items={companyConnections} />
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {[
          { icon: <Briefcase size={18}/>, title: "Job Track", desc: "CV + Interview + Internship roadmap" },
          { icon: <Award size={18}/>, title: "Certification", desc: "Skill proof certificate after completion" },
          { icon: <Rocket size={18}/>, title: "Business Growth", desc: "Offer + Funnel + Scaling framework" }
        ].map((x, idx) => (
          <motion.div
            key={x.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .45, delay: idx * .05 }}
            whileHover={{ y: -4 }}
            className="glass rounded-xl2 p-6 shadow-soft"
          >
            <div className="h-12 w-12 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white">{x.icon}</div>
            <div className="mt-3 font-display text-lg font-extrabold">{x.title}</div>
            <div className="mt-1 text-sm text-[var(--muted)]">{x.desc}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 glass rounded-xl2 p-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <div className="font-display text-xl font-extrabold">আপনিও Success Story হতে পারেন</div>
          <div className="text-sm text-[var(--muted)]">Enrollment করে mentorship + roadmap নিন।</div>
        </div>
        <div className="flex gap-3 flex-col sm:flex-row">
          <AnimatedButton className="sm:w-auto">Submit Your Success Story</AnimatedButton>
          <AnimatedButton variant="ghost" className="sm:w-auto">See All Reviews</AnimatedButton>
        </div>
      </div>
    </Container>
  );
}
