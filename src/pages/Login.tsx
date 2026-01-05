import AuthShell from "../components/AuthShell";
import AnimatedButton from "../components/AnimatedButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Login(){
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [ok, setOk] = useState(false);

  function onSubmit(e: React.FormEvent){
    e.preventDefault();
    setOk(true);
    setTimeout(() => setOk(false), 1600);
  }

  return (
    <AuthShell title="Login" subtitle="Student Dashboard-এ ঢুকতে লগইন করুন।">
      <form onSubmit={onSubmit} className="space-y-4">
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
          <div className="text-sm font-semibold">Password</div>
          <input
            className="mt-2 w-full rounded-xl2 border border-[var(--border)] bg-[var(--bg2)] px-4 py-3 text-sm focus-ring"
            placeholder="••••••••"
            type="password"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            required
          />
        </label>

        <AnimatedButton className="w-full">Login</AnimatedButton>

        <div className="text-sm text-[var(--muted)]">
          New here? <Link className="font-semibold hover:underline" to="/signup">Create an account</Link>
        </div>

        {ok ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-xl2 p-3 text-sm flex items-center gap-2"
          >
            <CheckCircle2 size={18}/>
            <span>login success!</span>
          </motion.div>
        ) : null}
      </form>
    </AuthShell>
  );
}
