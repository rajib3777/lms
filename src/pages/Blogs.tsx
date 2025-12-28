import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import AnimatedButton from "../components/AnimatedButton";
import { blogPosts } from "../data/siteData";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export default function Blogs(){
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if(!t) return blogPosts;
    return blogPosts.filter(p => (p.title + " " + p.tag).toLowerCase().includes(t));
  }, [q]);

  return (
    <Container className="py-14">
      <SectionTitle
        kicker="Blogs"
        title="Practical Guides & Trend Updates"
        desc="e-কমার্স, ডিজিটাল মার্কেটিং, গ্রাফিক্স ডিজাইন, ওয়েব ডেভেলপমেন্ট—সব কিছু নিয়ে নিয়মিত আপডেট।"
      />

      <div className="glass rounded-xl2 p-4 flex items-center gap-3">
        <Search size={18} className="text-[var(--muted)]"/>
        <input
          className="w-full bg-transparent outline-none text-sm"
          placeholder="Search blogs…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {filtered.map((b, idx) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .45, delay: idx * .05 }}
            className="glass rounded-xl2 p-6 shadow-soft hover:shadow-glow transition"
          >
            <div className="text-xs font-bold text-[var(--muted)]">{b.tag} • {b.date}</div>
            <div className="mt-2 font-display text-lg font-extrabold">{b.title}</div>
            <p className="mt-2 text-sm text-[var(--muted)]">{b.excerpt}</p>
            <div className="mt-5">
              <AnimatedButton variant="soft" className="w-full">Open</AnimatedButton>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
