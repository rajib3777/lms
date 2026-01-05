import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import AnimatedButton from "../components/AnimatedButton";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Users, Globe, Sparkles, Target, Handshake } from "lucide-react";


import aboutHero from "../assets/cut_02.jpeg";     // বড় ছবি
import about1 from "../assets/ku.jpeg";          // ছোট ছবি (optional)
import about2 from "../assets/kuu_01.jpeg";          // ছোট ছবি (optional)

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function InfoCard({ icon, title, desc }: InfoCardProps) {
  return (
    <div className="glass rounded-xl2 p-5 shadow-soft hover:shadow-glow transition">
      <div className="flex items-start gap-3">
        <div className="h-11 w-11 rounded-xl2 btn-grad animate-shimmer grid place-items-center text-white shrink-0">
          {icon}
        </div>
        <div>
          <div className="font-extrabold text-white">{title}</div>
          <div className="mt-1 text-sm text-[var(--muted)] leading-relaxed">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function About() {
  return (
    <section className="relative overflow-x-hidden">
      <Container className="py-14 sm:py-16 lg:py-20">
        <SectionTitle
          kicker="About Us"
          title="ক্যাপ্টেন আমিনুল হক আইটি ইনস্টিটিউট"
          desc="আমাদের লক্ষ্য—শুধু শেখানো নয়; শেখার পরে কাজ, আয়, এবং স্বাবলম্বী হওয়ার বাস্তব পথ দেখানো।"
        />

        {/* ✅ HERO ROW */}
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* LEFT: BIG STORY */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass rounded-3xl p-6 sm:p-8 shadow-soft ring-1 ring-white/10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/90">
              <Sparkles size={16} /> আমাদের পরিচয়
            </div>

            <h2 className="mt-4 font-display font-extrabold text-white leading-[1.12]
                           text-[clamp(24px,3.2vw,44px)]">
              ঢাকা-১৬ এলাকার তরুণ-তরুণীদের জন্য স্কিল, ক্যারিয়ার ও উদ্যোক্তা—এক জায়গায়
            </h2>

            <p className="mt-4 text-white/85 leading-relaxed text-[clamp(14px,1.15vw,16px)]">
              ক্যাপ্টেন আমিনুল হক আইটি ইনস্টিটিউট তৈরি হয়েছে একটি সহজ বিশ্বাস থেকে—শিক্ষা তখনই পূর্ণতা পায়,
              যখন সেটি মানুষকে আত্মনির্ভর করে। আমাদের এখানে শেখার পদ্ধতি শুধু ক্লাসরুমে সীমাবদ্ধ নয়; প্রতিটি
              শিক্ষার্থীকে প্রজেক্ট, টাস্ক, রিভিউ এবং বাস্তব কাজের মতো করে ট্রেনিং দেওয়া হয়—যাতে শেখা জ্ঞান
              বাস্তবে কাজে লাগে।
            </p>

            <p className="mt-4 text-white/85 leading-relaxed text-[clamp(14px,1.15vw,16px)]">
              আমরা চাই—এই এলাকার যুবসমাজ চাকরি খুঁজবে না, বরং দক্ষতা অর্জন করে সুযোগ তৈরি করবে। তাই আমাদের
              কোর্সগুলো ডিজাইন করা হয়েছে “skills → portfolio → earning” এই রোডম্যাপ মাথায় রেখে। আপনি যদি
              জব করতে চান—জব রেডি প্রস্তুতি; আর যদি ফ্রিল্যান্সিং/ব্যবসা করতে চান—সেই অনুযায়ী স্ট্র্যাটেজি,
              গাইডলাইন ও সাপোর্ট।
            </p>

            {/* ✅ Key Promise Strip */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="font-extrabold text-white">
                আমাদের প্রতিশ্রুতি
              </div>
              <div className="mt-2 text-[var(--muted)] text-sm leading-relaxed">
                শেখানো → প্রজেক্ট করানো → ফিডব্যাক → পোর্টফোলিও → কাজ/আয়ের সুযোগ তৈরিতে সহায়তা।
              </div>
            </div>

            {/* ✅ Quick bullets */}
            <div className="mt-6 grid gap-2 text-sm text-[var(--muted)]">
              {[
                "কোর্স শেষে সার্টিফিকেট প্রদান",
                "কাজের ব্যবস্থা করতে গাইডলাইন",
                "জব প্লেসমেন্ট প্রস্তুতি",
                "অনলাইন/অফলাইন শেখার সুযোগ",
                "কমিউনিটি + মেন্টর সাপোর্ট"
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            {/* ✅ CTA */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <AnimatedButton className="flex-1">
                Contact: +8801335590137
              </AnimatedButton>
              <AnimatedButton variant="ghost" className="flex-1">
                রোডম্যাপ ডাউনলোড
              </AnimatedButton>
            </div>
          </motion.div>

          {/* RIGHT: IMAGE + GALLERY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {/* ✅ Big image */}
            <div className="overflow-hidden rounded-3xl shadow-glow ring-1 ring-white/10">
              <img
                src={aboutHero}
                alt="Institute activity"
                className="w-full h-[clamp(300px,42vw,540px)] object-cover object-center"
              />
            </div>

            {/* ✅ small gallery images (optional) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-white/10">
                <img src={about1} alt="Training moment" className="w-full h-[180px] object-cover object-center" />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-white/10">
                <img src={about2} alt="Student activity" className="w-full h-[180px] object-cover object-center" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ✅ VALUES / PILLARS */}
        <div className="mt-10 sm:mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            icon={<Target size={18} />}
            title="বাস্তব লক্ষ্যভিত্তিক ট্রেনিং"
            desc="শুধু থিওরি নয়—প্রজেক্ট, টাস্ক, রিভিউ এবং আউটপুট-ভিত্তিক শেখানো।"
          />
          <InfoCard
            icon={<GraduationCap size={18} />}
            title="ক্যারিয়ার রেডি প্রস্তুতি"
            desc="সিভি/পোর্টফোলিও/ইন্টারভিউ প্র্যাকটিস—যাতে শেখার পরই কাজের জন্য তৈরি থাকা যায়।"
          />
          <InfoCard
            icon={<Globe size={18} />}
            title="ফ্রিল্যান্সিং ও অনলাইন ইনকাম"
            desc="মার্কেটপ্লেস গাইডলাইন, কাজ পাওয়ার স্ট্র্যাটেজি, কমিউনিকেশন—সব এক জায়গায়।"
          />
          <InfoCard
            icon={<Users size={18} />}
            title="কমিউনিটি + মেন্টর সাপোর্ট"
            desc="এক্টিভ কমিউনিটি, নিয়মিত ফিডব্যাক, এবং শেখার ধারাবাহিকতা বজায় রাখার সাপোর্ট।"
          />
          <InfoCard
            icon={<Handshake size={18} />}
            title="কাজের পথে সহায়তা"
            desc="জব প্লেসমেন্ট গাইডলাইন, কানেকশন, এবং বাস্তব সুযোগ তৈরিতে সহযোগিতা।"
          />
          <InfoCard
            icon={<Sparkles size={18} />}
            title="শিক্ষার্থীর উন্নত ভবিষ্যৎ"
            desc="আমাদের লক্ষ্য—শিক্ষার্থী যেন আত্মবিশ্বাস নিয়ে সামনে এগিয়ে যেতে পারে এবং স্বাবলম্বী হয়।"
          />
        </div>
      </Container>
    </section>
  );
}
