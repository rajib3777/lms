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

  const [isDhaka16, setIsDhaka16] = useState("");
  const [dhaka16Area, setDhaka16Area] = useState("");

  async function onSubmit(e: React.FormEvent){
    e.preventDefault();

    // optional client-side validation (backend তেও আছে)
    if (isDhaka16 !== "yes") {
      alert("Only Dhaka-16 voters can register.");
      return;
    }
    if (!dhaka16Area.trim()) {
      alert("Please enter your Dhaka-16 area (English).");
      return;
    }

    try {
      const API = import.meta.env.VITE_API_BASE || "https://captain-aminul-haque-it-institute.onrender.com";

      const res = await fetch(`${API}/accounts/api/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          plan,
          isDhaka16,
          dhaka16Area,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        alert(data?.error || "Registration failed");
        return;
      }

      setOk(true);
      setTimeout(() => setOk(false), 1600);

    } catch (err) {
      alert("Network error. Please try again.");
    }
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
            <span>Enrollment submitted!</span>
          </motion.div>
        ) : null}
      </form>
    </AuthShell>
  );
}
