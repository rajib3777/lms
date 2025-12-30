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

  // ✅ Added missing states
  const [isDhaka16, setIsDhaka16] = useState("");
  const [dhaka16Area, setDhaka16Area] = useState("");

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
            type="email"
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
            <option>Digital marketing</option>
            <option>Entrepreneurship</option>
            <option>Didgital Pro Pack</option>
          </select>
        </label>

        {/* DHAKA-16 VOTER */}
        <label className="block mt-5">
          <div className="mb-2 text-sm font-semibold flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--grad-c)]"></span>
            Are you a Dhaka-16 voter?
          </div>

          <select
            className="
              w-full
              rounded-xl2
              border border-[var(--border)]
              bg-[color-mix(in_srgb,var(--bg2)_85%,transparent)]
              px-4 py-3
              text-sm font-medium
              focus-ring
              transition
              hover:shadow-soft
            "
            value={isDhaka16}
            onChange={(e) => setIsDhaka16(e.target.value)}
            required
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        {/* DHAKA-16 AREA (ONLY IF YES) */}
        {isDhaka16 === "yes" && (
          <label className="block">
            <div className="mb-2 text-sm font-semibold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--grad-c)]"></span>
              Dhaka-16 Area (English)
            </div>
            <input
              className="w-full rounded-xl2 border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg2)_85%,transparent)] px-4 py-3 text-sm focus-ring transition hover:shadow-soft"
              placeholder="e.g. Pallabi, Rupnagar, Ward No 2"
              value={dhaka16Area}
              onChange={(e)=>setDhaka16Area(e.target.value)}
              required
            />
          </label>
        )}

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
