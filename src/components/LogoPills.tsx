import { motion } from "framer-motion";

export default function LogoPills({ items }: { items: {name: string; tag: string}[] }){
  return (
    <div className="glass rounded-xl2 p-5 overflow-hidden">
      <motion.div
        className="flex gap-3"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((x, i) => (
          <div
            key={`${x.name}-${i}`}
            className="shrink-0 rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_85%,transparent)] px-4 py-2 text-sm font-semibold"
          >
            <span className="gradient-text">{x.name}</span>
            <span className="text-[var(--muted)]"> • {x.tag}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
