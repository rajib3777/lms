import Container from "../components/Container";
import AnimatedButton from "../components/AnimatedButton";
import SectionTitle from "../components/SectionTitle";
import Rocket from "../components/Rocket";
import LogoPills from "../components/LogoPills";
import RocketTimeline from "../components/RocketTimeline";
import { motion } from "framer-motion";
import childEduImg from "../assets/cut_04.jpeg";
import Dhaka16MissionSection from "../sections/Dhaka16MissionSection";
import coordinatorImg from "../assets/coordinatorImg.png";
import aminul1 from "../assets/aminul_01.jpeg";
import aminul2 from "../assets/aminul_02.jpeg";
import aminul3 from "../assets/aminul_03.jpeg";
import { useState, useEffect } from "react";
import pos_01 from "../assets/cut_01.jpeg";
import pos_02 from "../assets/cut_02.jpeg";
import pos_03 from "../assets/cut_05.jpeg";
import womenImg from "../assets/cut_03.jpeg";



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
                  px-2 py-1
                  text-center
                  font-display font-extrabold
                  gradient-text
                  text-[clamp(20px,3.2vw,52px)]
                  leading-[1.15]
                  tracking-[0.01em]
                  drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]
                  mx-auto
                  max-w-6xl
                  whitespace-normal lg:whitespace-nowrap
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

          {/* 🔥 DHAKA-16 MISSION SECTION */}
          <Dhaka16MissionSection />


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


      <section className="relative py-10 sm:py-14 overflow-x-hidden">
        <div className="container mx-auto px-4">

          <div className="grid gap-6 lg:grid-cols-2 items-center">

            {/* 🔹 LEFT: Image */}
            <div className="glass rounded-xl2 p-4 shadow-glow">
              <img
                src={pos_03}
                alt="Training Announcement"
                className="w-full rounded-xl2 object-cover"
              />
            </div>

            {/* 🔹 RIGHT: Speech / Announcement */}
            <div className="glass rounded-xl2 p-5 sm:p-6">

              <div className="font-display text-xl font-extrabold mb-4">
                আসসালামু আলাইকুম।
              </div>

              <div className="text-left max-w-4xl space-y-4">

                <p className="text-white/90 leading-relaxed text-[clamp(14px,1.15vw,16px)]">
                  আমি <span className="font-semibold text-white">আমিনুল হক</span>,
                  আসন্ন জাতীয় সংসদ নির্বাচনে ঢাকা-১৬ আসনে
                  <span className="font-semibold text-white">
                    {" "}বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)
                  </span>{" "}
                  মনোনীত প্রার্থী।
                </p>

                <p className="text-white/85 leading-relaxed text-[clamp(14px,1.15vw,16px)]">
                  বাংলাদেশ জাতীয়তাবাদী দলের ঘোষিত
                  <span className="font-semibold text-white">
                    {" "}৩১ দফা নির্বাচনী ইশতেহারের
                  </span>{" "}
                  ২০ নম্বর দফায় যুবসমাজ ও কর্মসংস্থানের বিষয়ে
                  আমাদের সুস্পষ্ট অঙ্গীকার তুলে ধরা হয়েছে।
                  তরুণ প্রজন্মের আশা-আকাঙ্ক্ষাকে ধারণ করে
                  যুগোপযোগী জাতীয় যুবনীতি প্রণয়নের কথাও সেখানে বলা হয়েছে।
                </p>

                <p className="text-white/85 leading-relaxed text-[clamp(14px,1.15vw,16px)]">
                  একইসাথে বেকার যুবকদের জন্য
                  <span className="font-semibold text-white">
                    {" "}কর্মসংস্থান নিশ্চিত না হওয়া পর্যন্ত বেকার ভাতা,
                  </span>{" "}
                  প্রযুক্তি-ভিত্তিক বাস্তবসম্মত উদ্যোগের মাধ্যমে
                  বেকারত্ব দূর করা এবং তরুণদের
                  <span className="font-semibold text-white">
                    {" "}দক্ষ ও উৎপাদনশীল সম্পদে রূপান্তর
                  </span>{" "}
                  করার অঙ্গীকার করা হয়েছে।
                </p>

                {/* Highlight Box */}
                <div className="mt-5 rounded-xl border border-white/15 bg-white/5 p-4 shadow-soft">
                  <p className="text-white font-semibold leading-relaxed
                                text-[clamp(15px,1.2vw,18px)]">
                    আগামী <span className="font-extrabold text-white">
                      ২২ জানুয়ারি ২০২৬
                    </span>{" "}
                    থেকে ঢাকা-১৬ (পল্লবী–রূপনগর) এলাকার যুবক-যুবতীদের জন্য
                    আমার নিজস্ব আইটি প্রতিষ্ঠানের মাধ্যমে
                    <span className="font-extrabold text-white">
                      {" "}সম্পূর্ণ বিনামূল্যে আইটি প্রশিক্ষণ
                    </span>{" "}
                    কার্যক্রম আনুষ্ঠানিকভাবে শুরু হতে যাচ্ছে।
                  </p>
                </div>

                {/* Skills List */}
                <div className="mt-6">
                  <div className="text-white font-bold mb-3
                                  text-[clamp(15px,1.25vw,18px)]">
                    এই প্রশিক্ষণের আওতায় যুবক-যুবতীরা বিনামূল্যে শিখতে পারবে—
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-3
                                text-white/90
                                text-[clamp(14px,1.1vw,16px)]">
                    {[
                      "গ্রাফিক ডিজাইন",
                      "ডিজিটাল মার্কেটিং",
                      "ওয়েব ডিজাইন ও ডেভেলপমেন্ট",
                      "ভিডিও এডিটিং",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-white/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-6 flex gap-3 flex-col sm:flex-row">
                <Link to="/about">
                  <AnimatedButton variant="ghost">
                    Institute Info
                  </AnimatedButton>
                </Link>
                <a href="#enroll">
                  <AnimatedButton>
                    Enroll
                  </AnimatedButton>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>




      
      <div className="px-4 sm:px-8 lg:px-12 mt-6 sm:mt-10">
        <div className="relative max-w-6xl mx-auto">

          {/* ✅ Mobile: Image first */}
          <div className="lg:hidden overflow-hidden rounded-3xl shadow-soft ring-1 ring-white/10 mb-4">
            <img
              src={pos_01}
              alt="Training Support"
              className="w-full h-[clamp(260px,60vw,380px)] object-cover"
            />
          </div>

          {/* ✅ Speech Card */}
          <div
            className="
              relative
              rounded-3xl
              border border-white/15
              bg-white/5
              shadow-soft        /* 🔻 glow → soft */
              overflow-visible
              p-6 sm:p-8
              lg:pr-[380px]      /* 🔺 more space for bigger image */
              lg:min-h-[620px]
            "
          >
            {/* header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 grid place-items-center text-white text-3xl shrink-0">
                ❝
              </div>
              <div>
                <div className="text-white font-extrabold text-[clamp(14px,1.1vw,16px)] tracking-wide">
                  আমার বার্তা
                </div>
                <div className="text-[var(--muted)] text-[clamp(12px,1vw,14px)]">
                  ঢাকা-১৬ যুবসমাজের জন্য
                </div>
              </div>
            </div>

            {/* speech */}
            <div className="text-left max-w-3xl">
              <p className="text-white font-semibold italic leading-[1.35] text-[clamp(15px,1.5vw,25px)]">
                আমি বিশ্বাস করি—রাজনীতি মানে শুধু প্রতিশ্রুতি নয়, রাজনীতি মানে কাজ।
                আর সেই বিশ্বাস থেকেই আমি আমার নির্বাচনী প্রচারণা শুরু করছি কথা দিয়ে নয়, কাজ দিয়ে।
                <span className="block mt-2 text-white font-extrabold not-italic">
                  আমি স্পষ্ট করে বলতে চাই—
                  আমি নির্বাচিত জয়ী হলে, ঢাকা-১৬ পল্লবী-রূপনগরের মানুষের প্রতি আমার প্রতিটি প্রতিশ্রুতি আমি বাস্তবায়ন করবো।
                  কারণ এটি কোনো নির্বাচনী স্টান্ট নয়, এটি আমার দায়িত্ববোধের প্রকাশ।
                </span>
              </p>

              <p className="mt-5 text-white/90 italic leading-[1.6] text-[clamp(14px,1.25vw,18px)]">
                একই সঙ্গে যারা প্রশিক্ষণভিত্তিক নতুন আইডিয়া নিয়ে উদ্যোক্তা হতে চায়,
                প্রজেক্ট ডেভেলপ করতে চায়—তাদের জন্য দেশ-বিদেশের বিভিন্ন প্রতিষ্ঠান ও
                বিনিয়োগকারীদের সঙ্গে সংযোগ স্থাপন করা হবে, যাতে তারা বিনিয়োগ পায়
                এবং স্বাবলম্বী হতে পারে।
              </p>

              {/* signature */}
              <div className="mt-8 pt-5 border-t border-white/15">
                <div className="text-white font-extrabold text-[clamp(14px,1.15vw,18px)]">
                  — ক্যাপ্টেন আমিনুল হক
                </div>
                <div className="text-[var(--muted)] text-[clamp(12px,1vw,14px)]">
                  প্রতিষ্ঠাতা ও অনুপ্রেরণা
                </div>
              </div>
            </div>

            {/* ✅ Desktop: Bigger Overlap Image */}
            <div className="hidden lg:block absolute right-0 bottom-0 translate-x-10 translate-y-10">
              <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-white/10
                              w-[420px] h-[520px]">
                <img
                  src={pos_02}
                  alt="Training Support"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>


      <section id="women-empowerment" className="mt-4 relative overflow-x-hidden py-10 sm:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

            {/* ✅ Mobile first: Image */}
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-3xl shadow-glow ring-1 ring-white/10">
                <img
                  src={womenImg}
                  alt="নারীর ক্ষমতায়ন"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <p className="mt-3 text-center text-sm text-[var(--muted)]">
                দক্ষতা, আত্মবিশ্বাস, ও সুযোগ—এটাই নারীর এগিয়ে যাওয়ার শক্তি।
              </p>
            </div>

            {/* ✅ Content */}
            <div className="order-2 lg:order-1">
              <div className="glass rounded-3xl p-6 sm:p-8 shadow-soft ring-1 ring-white/10">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/90">
                  নারীর ক্ষমতায়ন
                </div>

                <h2 className="mt-4 font-display font-extrabold text-white leading-[1.15]
                              text-[clamp(24px,3.2vw,44px)]">
                  দক্ষ নারী মানেই শক্তিশালী পরিবার, শক্তিশালী সমাজ
                </h2>

                <p className="mt-4 text-white/85 leading-relaxed text-[clamp(14px,1.15vw,16px)]">
                  আমরা বিশ্বাস করি—নারীর ক্ষমতায়ন মানে শুধু বক্তব্য নয়; মানে শিক্ষা, দক্ষতা,
                  নিরাপদ কর্মপরিবেশ এবং বাস্তব সুযোগ তৈরি করা। ঢাকা-১৬ এলাকার নারীদের জন্য
                  এমন একটি পথ তৈরি করতে চাই, যেখানে তারা স্বাবলম্বী হয়ে নিজস্ব ক্যারিয়ার গড়তে পারে।
                </p>

                {/* ✅ Points */}
                <div className="mt-6 grid gap-3">
                  {[
                    "নারীদের জন্য দক্ষতা-ভিত্তিক প্রশিক্ষণ: গ্রাফিক ডিজাইন, ডিজিটাল মার্কেটিং, ওয়েব, ভিডিও এডিটিং",
                    "ঘরে বসে আয়ের সুযোগ: ফ্রিল্যান্সিং ও অনলাইন সার্ভিস",
                    "ক্যারিয়ার গাইডলাইন ও মেন্টরশিপ—শুধু শেখানো নয়, হাতে-কলমে সাপোর্ট",
                    "উদ্যোক্তা হতে সহায়তা: প্রজেক্ট, নেটওয়ার্কিং, ও বাস্তব দিকনির্দেশনা",
                    "সম্মানজনক ও নিরাপদ পরিবেশ—নারীদের আত্মবিশ্বাসই আমাদের অগ্রাধিকার",
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-white/70 shrink-0" />
                        <p className="text-white/90 leading-relaxed">{t}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ✅ Small highlight line */}
                <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white font-semibold leading-relaxed">
                    লক্ষ্য একটাই—নারীরা চাকরি খুঁজবে না, <span className="font-extrabold">দক্ষতা অর্জন করে সুযোগ তৈরি করবে</span>।
                  </p>
                  <p className="mt-1 text-[var(--muted)] text-sm">
                    একটি নারীর সাফল্য মানেই একটি পরিবারের ভবিষ্যৎ আরও আলোকিত।
                  </p>
                </div>

                {/* ✅ Optional: simple buttons (no icons) */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a href="#enroll" className="w-full sm:w-auto">
                    <AnimatedButton className="w-full sm:w-auto">
                      রেজিস্ট্রেশন করুন
                    </AnimatedButton>
                  </a>
                  <a href="#demo" className="w-full sm:w-auto">
                    <AnimatedButton variant="ghost" className="w-full sm:w-auto">
                      ডেমো ক্লাস দেখুন
                    </AnimatedButton>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>



      
      <section className="mt-4 relative overflow-x-hidden py-8 sm:py-12">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

            {/* 🔹 LEFT: Training Card + Speech */}
            <div className="flex justify-start">
              <div className="max-w-xl w-full">

                {/* Training Card */}
                <div className="glass rounded-xl2 p-4 shadow-soft">
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

                {/* Speech / Quote */}
                <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-7 shadow-glow">
                  <div className="flex gap-4 items-start">

                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 
                                    grid place-items-center text-white text-3xl shrink-0">
                      ❝
                    </div>

                    <div className="text-left">
                      <p className="text-white italic font-medium leading-relaxed
                                    text-[clamp(15px,1.4vw,20px)]">
                        আমি চাই—এই এলাকার যুবসমাজ চাকরি খুঁজবে না,
                        <span className="block mt-1 font-semibold text-white">
                          চাকরি তৈরি করবে।
                        </span>
                      </p>

                      <p className="mt-4 text-white/90 italic leading-relaxed
                                    text-[clamp(14px,1.25vw,18px)]">
                        আমি চাই—ঢাকা-১৬ হোক দক্ষতা, কর্মসংস্থান এবং
                        <span className="block mt-1">
                          সম্ভাবনার একটি রোল মডেল।
                        </span>
                      </p>

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

            {/* 🔹 RIGHT: Image */}
            <div className="w-full">
              <div className="overflow-hidden rounded-2xl shadow-glow">
                <img
                  src={pos_01}
                  alt="Training & Inspiration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>



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
              <div className="font-display text-xl font-extrabold">ফ্রি ব্যাচে এনরোল!</div>
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
            kicker="Class"
            title="Class Schedule"
            desc="ক্লাস—কোর্সের স্টাইল, কন্টেন্ট এবং সাপোর্ট বুঝে নাও।"
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

      {/* ✅ Key Highlights */}
      <div className="px-4 mt-10 sm:mt-12">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
          "
        >
          {heroBullets.slice(0, 4).map((t, i) => (
            <div
              key={t}
              className="
                relative
                glass
                rounded-2xl
                p-5
                shadow-soft
                hover:shadow-glow
                transition
                duration-300
              "
            >
              {/* soft accent */}
              <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-white/5 blur-2xl" />

              <div className="flex items-start gap-3">
                {/* icon */}
                <div className="
                  h-9 w-9
                  rounded-xl2
                  bg-white/10
                  grid place-items-center
                  shrink-0
                ">
                  <CheckCircle2 size={18} className="text-white/90" />
                </div>

                {/* text */}
                <div>
                  <div
                    className="
                      text-[clamp(14px,1.15vw,16px)]
                      font-semibold
                      text-white
                      leading-relaxed
                    "
                  >
                    {t}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



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
            title="Step-by-step Course Journey"
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
            desc="শুরু করো, তারপর তোমার লক্ষ্য অনুযায়ী প্ল্যান সিলেক্ট করো।"
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
