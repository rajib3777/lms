import Container from "../components/Container";
import AnimatedButton from "../components/AnimatedButton";
import SectionTitle from "../components/SectionTitle";
import Rocket from "../components/Rocket";
import LogoPills from "../components/LogoPills";
import RocketTimeline from "../components/RocketTimeline";
import { motion } from "framer-motion";
import banner from "../assets/banner.jpeg";
import poster from "../assets/poster.jpeg";
import Dhaka16MissionSection from "../sections/Dhaka16MissionSection";
import coordinatorImg from "../assets/coordinatorImg.png";
import aminul1 from "../assets/aminul_01.jpeg";
import aminul2 from "../assets/aminul_02.jpeg";
import aminul3 from "../assets/aminul_03.jpeg";
import { useState, useEffect } from "react";
import pos_01 from "../assets/cut_01.jpeg";

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
  const images = [aminul1, aminul2, aminul3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      
    
      {/* HERO */}
      <section className="relative overflow-x-hidden">
        <Container className="pt-3 pb-10 sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-5xl"
          >
            {/* ✅ TEXT CENTER */}
            <div className="text-center px-1 sm:px-0">
              <h1
                className="
                  mt-0
                  mb-2 sm:mb-3
                  px-2
                  py-1
                  text-center font-display font-extrabold
                  text-white
                  text-[clamp(22px,3.9vw,58px)]
                  leading-[1.15]
                  tracking-[0.01em]
                  drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]
                  mx-auto max-w-full
                  whitespace-nowrap
                  text-ellipsis
                  select-none
                "
              >
                ক্যাপ্টেন আমিনুল হক আইটি ইনস্টিটিউট
              </h1>



              {/* ✅ Poster/Banner (responsive) */}
              <div className="mt-4 sm:mt-0 shadow-glow overflow-hidden w-full">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {images.map((img, i) => (
                    <div key={i} className="min-w-full">
                      <img
                        src={img}
                        alt={`Banner ${i + 1}`}
                        className="w-full h-[clamp(200px,32vw,420px)] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>


              
              <h1 className="mt-2 sm:mt-2 pt-3 pb-2 font-display font-extrabold tracking-tight mx-auto overflow-visible [text-wrap:balance] leading-[1.35] sm:leading-[1.3]">
                <span className="gradient-text inline-block text-[clamp(26px,4.2vw,60px)]">
                  {slogan.headline}
                </span>
              </h1>


              {/* ✅ Subheading responsive */}
              <p className="mt-3 sm:mt-4 text-[var(--muted)] mx-auto max-w-3xl text-[clamp(14px,1.6vw,20px)] leading-relaxed">
                {slogan.sub}
              </p>

              {/* CTA responsive */}
              <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row justify-center gap-3">
                <a href="#enroll" className="w-full sm:w-auto">
                  <AnimatedButton className="w-full sm:w-auto">
                    Explore Now <ArrowRight size={18} />
                  </AnimatedButton>
                </a>
                <a href="#demo" className="w-full sm:w-auto">
                  <AnimatedButton variant="ghost" className="w-full sm:w-auto">
                    Class দেখুন <PlayCircle size={18} />
                  </AnimatedButton>
                </a>
              </div>
            </div>

            {/* ✅ 4 sections responsive (no overflow) */}
            <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {heroBullets.slice(0, 4).map((t) => (
                <div key={t} className="glass rounded-xl2 p-4 sm:p-4 lg:p-5 text-left">
                  <div className="flex items-start gap-2 text-[clamp(13px,1.1vw,15px)] text-[var(--muted)]">
                    <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
                    <span className="text-[var(--text)] font-semibold leading-relaxed">
                      {t}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            
            

            {/* ✅ Training card responsive */}
            <div className="mt-6 sm:mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                {/* 🔹 LEFT: Training Card + Quote */}
                <div className="flex justify-start">
                  <div className="max-w-xl w-full">

                    {/* Training Card */}
                    <div className="glass rounded-xl2 p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white font-extrabold shrink-0">
                          ✓
                        </div>
                        <div>
                          <div className="font-bold text-[clamp(14px,1.3vw,16px)]">
                            Training শেষে
                          </div>
                          <div className="text-[clamp(12px,1.1vw,14px)] text-[var(--muted)]">
                            কাজের ব্যবস্থা + জব প্লেসমেন্ট গাইডলাইন
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ✅ Quote (under training card) */}
                    <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-7 shadow-glow">
                      <div className="flex gap-4 items-start">

                        {/* Quote icon */}
                        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 
                                        grid place-items-center text-white text-3xl shrink-0">
                          ❝
                        </div>

                        <div className="text-left">
                          <p className="text-white italic font-medium
                                        leading-relaxed
                                        text-[clamp(15px,1.4vw,20px)]">
                            আমি চাই—এই এলাকার যুবসমাজ চাকরি খুঁজবে না,
                            <span className="block mt-1 font-semibold text-white">
                              চাকরি তৈরি করবে।
                            </span>
                          </p>

                          <p className="mt-4 text-white/90 italic
                                        leading-relaxed
                                        text-[clamp(14px,1.25vw,18px)]">
                            আমি চাই—ঢাকা-১৬ হোক দক্ষতা, কর্মসংস্থান এবং
                            <span className="block mt-1">
                              সম্ভাবনার একটি রোল মডেল।
                            </span>
                          </p>

                          {/* Signature */}
                          <div className="mt-5 pt-4 border-t border-white/15">
                            <div className="text-sm sm:text-base font-bold text-white">
                              — ক্যাপ্টেন আমিনুল হক
                            </div>
                            <div className="text-xs sm:text-sm text-[var(--muted)]">
                              প্রতিষ্ঠাতা ও অনুপ্রেরণা
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>


                  </div>
                </div>

                {/* 🔹 RIGHT: Big Image */}
                <div className="w-full">
                  <div className="overflow-hidden rounded-2xl shadow-glow">
                    <img
                      src={pos_01}
                      alt="Training Support"
                      className="w-full h-[clamp(260px,40vw,420px)] object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>




            {/* ✅ Remaining bullets (responsive) */}
            {heroBullets.length > 4 && (
              <div className="mt-7 sm:mt-8 grid gap-3 sm:grid-cols-2 max-w-3xl mx-auto text-left">
                {heroBullets.slice(4).map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-2 text-[clamp(12px,1.1vw,14px)] text-[var(--muted)]"
                  >
                    <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
                    <span className="leading-relaxed">{t}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Company connections strip (keep as-is) */}
          <div className="mt-10 sm:mt-12">
            <SectionTitle
              kicker="Connections"
              title="Company / Community Connections"
              desc="Real-world brief, internship slot, এবং project-based mentorship—সবকিছু একসাথে।"
            />
            <LogoPills items={companyConnections} />
          </div>
        </Container>
      </section>




      {/* 🔥 DHAKA-16 MISSION SECTION */}
      <Dhaka16MissionSection />


      {/* COORDINATOR SHOWCASE SECTION */}
      <section className="relative overflow-x-hidden py-4 sm:py-6">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

            {/* ✅ CENTER – COORDINATOR CARD (Mobile first, Desktop middle) */}
            <div className="flex justify-center order-1 lg:order-2">
              <div
                className="
                  rounded-2xl overflow-hidden shadow-glow
                  bg-black/20 ring-2 ring-purple-400/40
                  w-[400px] max-w-[560px]
                "
              >
                <div className="w-full h-[clamp(260px,40vw,380px)]">
                  <img
                    src={coordinatorImg}
                    alt="মো: জাহিদ পারভেজ চৌধুরী"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-3 sm:p-4 text-center">
                  <div className="text-lg sm:text-xl font-extrabold leading-snug">
                    মো: জাহিদ পারভেজ চৌধুরী
                  </div>
                  <div className="mt-1 text-sm text-[var(--muted)]">
                    কোর্স কো-অর্ডিনেটর
                  </div>

                  <div className="mt-3 text-[clamp(14px,1.35vw,17px)] text-[var(--muted)] leading-relaxed">
                    “স্বপ্ন যদি সত্যি করতে চাও, তাহলে ভয়ের সীমানা পার হও”
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ LEFT ROADMAP – COURSE MODULE (Mobile second, Desktop left) */}
            <div className="mt-6 lg:mt-16 order-2 lg:order-1">
              <div className="glass rounded-xl2 p-4">
                <div className="font-extrabold mb-4 text-center">
                  Course Module
                </div>

                <div className="relative pl-4 space-y-4">
                  <div className="absolute left-1 top-0 bottom-0 w-px bg-white/20" />

                  {[
                    "Marketing Fundamentals",
                    "Social Media Marketing",
                    "200 Course Credit",
                    "Certification in 160 Credit",
                    "Analytics & Reporting",
                    "Onlien Based Class",
                    "Two meet up in one month",
                    "Duration 6 month",
                  ].map((step, i) => (
                    <div key={i} className="relative flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400" />
                      <span className="text-sm text-[var(--muted)]">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ✅ RIGHT ROADMAP – ENTREPRENEURSHIP (Mobile third, Desktop right) */}
            <div className="mt-6 lg:mt-16 order-3 lg:order-3">
              <div className="glass rounded-xl2 p-4">
                <div className="font-extrabold mb-4 text-center">
                  Entrepreneurship Roadmap
                </div>

                <div className="relative pl-4 space-y-4">
                  <div className="absolute left-1 top-0 bottom-0 w-px bg-white/20" />

                  {[
                    "Idea Validation",
                    "Market Research",
                    "Office Management",
                    "Client Hunting",
                    "Business Model Design",
                    "Brand & Sales Strategy",
                    "Scaling & Growth",
                    "product sourcing",
                    "investor presentation",
                    "Duration 6 month",
                  ].map((step, i) => (
                    <div key={i} className="relative flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400" />
                      <span className="text-sm text-[var(--muted)]">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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
                আমাদের ইনস্টিটিউটের বিশেষত্ব হলো banner-based learning approach। প্রতিটি মডিউল এমনভাবে ডিজাইন করা হয়েছে যাতে শিক্ষার্থীরা বাস্তব জীবনের প্রজেক্টে কাজ করার মাধ্যমে দক্ষতা অর্জন করতে পারে। এই পদ্ধতিতে, শিক্ষার্থীরা কেবল তাত্ত্বিক জ্ঞানই নয়, বরং বাস্তব অভিজ্ঞতাও লাভ করে, যা তাদের ক্যারিয়ার গঠনে সহায়ক হয়।
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
            desc="আমরা আমাদের শিক্ষার্থীদের সঙ্গে আজীবন যুক্ত থাকার প্রতিশ্রুতিতে বদ্ধপরিকর —তাদের সাফল্যই আমাদের গর্ব।"
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
            desc="আপনার চাহিদা অনুযায়ী স্টেপ-বাই-স্টেপ কোর্স ফ্লো—রকেট জার্নির মতো।"
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
                <div className="text-sm text-[var(--muted)]">যোগাযোগ: 01335590137</div>
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
