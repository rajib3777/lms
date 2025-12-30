import Container from "../components/Container";
import AnimatedButton from "../components/AnimatedButton";
import SectionTitle from "../components/SectionTitle";
import Rocket from "../components/Rocket";
import LogoPills from "../components/LogoPills";
import RocketTimeline from "../components/RocketTimeline";
import { motion } from "framer-motion";
import banner from "../assets/banner.jpeg";
import poster from "../assets/poster.jpeg";
import {
  blogPosts,
  companyConnections,
  courses,
  demoClasses,
  heroBullets,
  plans,
  quickFacts,
  rocketSteps,
  slogan,
  teachers,
  testimonials,
  bestStudents
} from "../data/siteData";
import { ArrowRight, CalendarDays, CheckCircle2, PlayCircle, Sparkles, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

function Stat({ label, value }: { label: string; value: string }){
  return (
    <div className="glass rounded-xl2 p-4 hover:shadow-soft transition">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-sm text-[var(--muted)]">{label}</div>
    </div>
  );
}

export default function Home(){
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-semibold">
                  <Sparkles size={16} />
                  <span>Captain Aminul Haque IT Institute</span>
                </div>

                <h1 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="gradient-text">{slogan.headline}</span>
                </h1>
                <p className="mt-4 text-[var(--muted)] text-base sm:text-lg max-w-xl">{slogan.sub}</p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="#enroll">
                    <AnimatedButton className="w-full sm:w-auto">
                      Explore Now <ArrowRight size={18}/>
                    </AnimatedButton>
                  </a>
                  <a href="#demo">
                    <AnimatedButton variant="ghost" className="w-full sm:w-auto">
                      Demo Class দেখুন <PlayCircle size={18}/>
                    </AnimatedButton>
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {heroBullets.map((t) => (
                    <div key={t} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                      <CheckCircle2 className="mt-0.5" size={18}/>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {quickFacts.map(s => <Stat key={s.label} label={s.label} value={s.value} />)}
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .6, delay: .1 }}
                className="relative glass rounded-xl2 p-4 shadow-glow"
              >
                <img src={banner} alt="Institute Banner" className="w-full rounded-xl2 object-cover" />
                <div className="absolute -bottom-8 -left-6 hidden sm:block">
                  <Rocket className="h-28 w-28 drop-shadow-xl" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, delay: .2 }}
                className="mt-5 glass rounded-xl2 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white font-extrabold">✓</div>
                  <div>
                    <div className="font-bold">Training শেষে</div>
                    <div className="text-sm text-[var(--muted)]">কাজের ব্যবস্থা + জব প্লেসমেন্ট গাইডলাইন</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Company connections strip */}
          <div className="mt-10">
            <SectionTitle
              kicker="Connections"
              title="Company / Community Connections"
              desc="Real-world brief, internship slot, এবং project-based mentorship—সবকিছু একসাথে।"
            />
            <LogoPills items={companyConnections} />
          </div>
        </Container>
      </section>

      {/* COURSES */}
      <section className="mt-6">
        <Container className="py-14">
          <SectionTitle
            kicker="Our Courses"
            title="Digital Marketing & Entrepreneurship Track"
            desc="শুধু শেখানো নয়—প্রজেক্ট, ফিডব্যাক, এবং রিয়েল-ওয়ার্ল্ড এক্সিকিউশন।"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: idx * .05 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl2 p-5 shadow-soft hover:shadow-glow transition"
              >
                <div className="text-xs font-bold text-[var(--muted)]">{c.level} • {c.duration}</div>
                <div className="mt-2 font-display text-lg font-extrabold">{c.title}</div>
                <div className="text-sm text-[var(--muted)]">{c.subtitle}</div>

                <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {c.includes.slice(0,3).map(x => (
                    <div key={x} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5"/>
                      <span>{x}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs font-semibold text-[var(--muted)]">{c.priceTag}</div>
                  <Link to="/products"><AnimatedButton variant="soft" className="px-3 py-2 text-sm">Details</AnimatedButton></Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Banner strip */}
          <div className="mt-10 glass rounded-xl2 p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div>
              <div className="font-display text-xl font-extrabold">ফ্রি ডেমো থেকে শুরু করো—তারপর ব্যাচে এনরোল!</div>
              <div className="text-sm text-[var(--muted)]">সিট সীমিত। আজই রেজিস্ট্রেশন করো।</div>
            </div>
            <a href="#enroll"><AnimatedButton>Register Now <ArrowRight size={18}/></AnimatedButton></a>
          </div>
        </Container>
      </section>

      {/* DEMO CLASSES */}
      <section id="demo">
        <Container className="py-14">
          <SectionTitle
            kicker="Demo"
            title="Demo Class Schedule"
            desc="৩টা ডেমো ক্লাস—কোর্সের স্টাইল, কন্টেন্ট এবং সাপোর্ট বুঝে নাও।"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {demoClasses.map((d, idx) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: idx * .06 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl2 p-5 relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full btn-grad opacity-30 blur-2xl" />
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CalendarDays size={18}/>
                  <span>{d.date} • {d.time}</span>
                </div>
                <div className="mt-3 font-display text-lg font-extrabold">{d.title}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{d.topic}</div>
                <div className="mt-5">
                  <AnimatedButton variant="ghost" className="w-full">Seat Reserve</AnimatedButton>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* TEACHERS */}
      <section>
        <Container className="py-14">
          <SectionTitle
            kicker="Mentors"
            title="Best Teachers, Real Industry Experience"
            desc="প্রতিটা মডিউল শেখাবেন ইন্ডাস্ট্রিতে কাজ করা মেন্টররা—সাথে থাকবে রিভিউ/ফিডব্যাক।"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {teachers.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: idx * .06 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl2 p-6 shadow-soft hover:shadow-glow transition"
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white font-extrabold">
                    {t.name.split(" ")[0].slice(0,1)}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-[var(--muted)]">{t.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[var(--muted)]">{t.bio}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 items-center">
            <div className="glass rounded-xl2 p-5">
              <div className="font-display text-xl font-extrabold">Banner-based Learning Experience</div>
              <p className="mt-2 text-sm text-[var(--muted)]">
                ডেমো ক্লাস ।
              </p>
              <div className="mt-4 flex gap-3">
                <Link to="/about"><AnimatedButton variant="ghost">Institute Info</AnimatedButton></Link>
                <a href="#enroll"><AnimatedButton>Enroll</AnimatedButton></a>
              </div>
            </div>
            <div className="glass rounded-xl2 p-4 shadow-glow">
              <img src={poster} alt="Poster" className="w-full rounded-xl2 object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* BEST STUDENTS */}
      <section>
        <Container className="py-14">
          <SectionTitle
            kicker="Top Students"
            title="Best Students & Achievements"
            desc="আমরাই আগামী ।"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {bestStudents.map((s, idx) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: idx * .06 }}
                whileHover={{ y: -4, rotate: idx === 1 ? 0.2 : -0.2 }}
                className="glass rounded-xl2 p-6 shadow-soft hover:shadow-glow transition relative overflow-hidden"
              >
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full btn-grad opacity-20 blur-2xl" />
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
        </Container>
      </section>

      {/* REVIEWS */}
      <section>
        <Container className="py-14">
          <SectionTitle
            kicker="Reviews"
            title="Students Love Our Practical Approach"
            desc="রিয়েল কেস স্টাডি, ক্রিয়েটিভ টেস্টিং, আর সেলস ফানেল—সব কিছু হাতে-কলমে।"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((r, idx) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: idx * .06 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl2 p-6 relative overflow-hidden"
              >
                <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full btn-grad opacity-25 blur-2xl" />
                <div className="font-display text-lg font-extrabold">{r.name}</div>
                <div className="text-sm text-[var(--muted)]">{r.role}</div>
                <p className="mt-4 text-sm text-[var(--muted)]">“{r.quote}”</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* COURSE FLOW (ROCKET TIMELINE) */}
      <section>
        <Container className="py-14">
          <SectionTitle
            kicker="Course Flow"
            title="Step-by-step Rocket Journey"
            desc="আপনার ইচ্ছা আমাদের পথ চলা "
          />
          <RocketTimeline steps={rocketSteps} />
        </Container>
      </section>

      {/* ENROLL */}
      <section id="enroll">
        <Container className="py-14">
          <SectionTitle
            kicker="Enrollment"
            title="Choose Your Plan"
            desc="ফ্রি ডেমো দিয়ে শুরু করো, তারপর তোমার লক্ষ্য অনুযায়ী প্ল্যান সিলেক্ট করো।"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: idx * .06 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl2 p-6 shadow-soft hover:shadow-glow transition relative overflow-hidden"
              >
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl`} />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-[var(--muted)]">{p.tag}</div>
                    <div className="font-display text-2xl font-extrabold">{p.name}</div>
                  </div>
                  <div className="text-2xl font-extrabold">{p.price}</div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {p.points.map(x => (
                    <div key={x} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5"/>
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to="/signup"><AnimatedButton className="w-full">Enroll Now</AnimatedButton></Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 glass rounded-xl2 p-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white">
                <Users size={18}/>
              </div>
              <div>
                <div className="font-display text-xl font-extrabold">আজই রেজিস্ট্রেশন করো — আসন সংখ্যা সীমিত!</div>
                <div className="text-sm text-[var(--muted)]">যোগাযোগ: +8801581620802</div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/signup"><AnimatedButton>Registration</AnimatedButton></Link>
              <Link to="/login"><AnimatedButton variant="ghost">Student Login</AnimatedButton></Link>
            </div>
          </div>
        </Container>
      </section>

      {/* BLOG PREVIEW */}
      <section>
        <Container className="py-14">
          <SectionTitle kicker="Blogs" title="Learn, Build, Grow" desc="নতুন ট্রেন্ড, টিপস, আর গ্রোথ স্ট্র্যাটেজি—সব একসাথে।" />
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((b, idx) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: idx * .06 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl2 p-6 shadow-soft hover:shadow-glow transition"
              >
                <div className="text-xs font-bold text-[var(--muted)]">{b.tag} • {b.date}</div>
                <div className="mt-2 font-display text-lg font-extrabold">{b.title}</div>
                <p className="mt-2 text-sm text-[var(--muted)]">{b.excerpt}</p>
                <div className="mt-5">
                  <Link to="/blogs"><AnimatedButton variant="soft" className="w-full">Read More</AnimatedButton></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
