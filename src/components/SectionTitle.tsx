import React from "react";
import { motion } from "framer-motion";
import Badge from "./Badge";

export default function SectionTitle({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }){
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      {kicker ? <Badge className="mb-3">{kicker}</Badge> : null}
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      {desc ? <p className="mt-3 max-w-2xl text-[var(--muted)]">{desc}</p> : null}
    </motion.div>
  );
}
