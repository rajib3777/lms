import AuthShell from "../components/AuthShell";
import AnimatedButton from "../components/AnimatedButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Signup(){
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("Pro");
  const [ok, setOk] = useState(false);

  function onSubmit(e: React.FormEvent){
    e.preventDefault();
    setOk(true);
    setTimeout(() => setOk(false), 1600);
  }

  return (
    <AuthShell title="Enroll / Signup" subtitle="আপনার তথ্য দিন—আমরা দ্রুত কনফার্মেশন পাঠাবো।">
      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <div className="text-sm font-semibold">Full Name</div>
          <input
            className="mt-2 w-full rounded-xl2 border border-[var(--border)] bg-[var(--bg2)] px-4 py-3 text-sm focus-ring"
            placeholder="আপনার নাম"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </label>

        <label className="block">
          <div className="text-sm font-semibold">Phone</div>
          <input
            className="mt-2 w-full rounded-xl2 border border-[var(--border)] bg-[var(--bg2)] px-4 py-3 text-sm focus-ring"
            placeholder="01XXXXXXXXX"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            required
          />
        </label>

        <label className="block">
          <div className="text-sm font-semibold">Email</div>
          <input
            className="mt-2 w-full rounded-xl2 border border-[var(--border)] bg-[var(--bg2)] px-4 py-3 text-sm focus-ring"
            placeholder="you@email.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </label>

        <label className="block">
          <div className="text-sm font-semibold">Plan</div>
          <select
            className="mt-2 w-full rounded-xl2 border border-[var(--border)] bg-[var(--bg2)] px-4 py-3 text-sm focus-ring"
            value={plan}
            onChange={(e)=>setPlan(e.target.value)}
          >
            <option>Starter</option>
            <option>Pro</option>
            <option>Career+</option>
          </select>
        </label>

        <AnimatedButton className="w-full">Confirm Enrollment</AnimatedButton>

        <div className="text-sm text-[var(--muted)]">
          Already have an account? <Link className="font-semibold hover:underline" to="/login">Login</Link>
        </div>

        {ok ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-xl2 p-3 text-sm flex items-center gap-2"
          >
            <CheckCircle2 size={18}/>
            <span>Enrollment submitted! (Demo)</span>
          </motion.div>
        ) : null}
      </form>
    </AuthShell>
  );
}
