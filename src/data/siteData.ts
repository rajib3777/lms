export type Course = {
  id: string;
  title: string;
  subtitle: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  seats: string;
  includes: string[];
  priceTag: string;
};

export const slogan = {
  headline: "দক্ষতা উন্নয়নের মাধ্যমে কর্মসংস্থান, কর্মসংস্থানের মাধ্যমে শক্তিশালী ঢাকা-১৬",
  sub: "Digital Marketing & Entrepreneurship-এর জন্য একদম ইন্ডাস্ট্রি-রেডি বুটক্যাম্প। লাইভ ক্লাস, ক্লাস, সাপোর্ট, গাইডলাইন—সব একসাথে।"
};

export const heroBullets = [
  "ফ্রি ক্লাস + লাইভ কন্সেপচুয়াল শেখানো",
  "রিয়েল প্রজেক্ট-ভিত্তিক শেখা (Portfolio Ready)",
  "ইন্টার্নশিপ/জব প্রিপ + CV/Interview সাপোর্ট",
  "নারীদের জন্য স্পেশাল উদ্যোক্তা ট্র্যাক"
];

export const quickFacts = [
  { label: "Live Support", value: "24/7" },
  { label: "Projects", value: "30+" },
  { label: "Career Track", value: "Job" },
  { label: "Community", value: "Mentors" },
];

export const courses: Course[] = [
  {
    id: "dm",
    title: "Digital Marketing Mastery",
    subtitle: "Facebook Ads • Google Ads • SEO • Analytics",
    level: "Beginner",
    duration: "6 month",
    seats: "Limited Seats",
    includes: ["Ad Campaign Strategy", "SEO Fundamentals", "Tracking & Pixel Setup", "Client Hunting Basics", "Creative Testing Framework"],
    priceTag: "Free Batch"
  },
  {
    id: "ecom",
    title: "Entrepreneurship & E-Commerce",
    subtitle: "Branding • Product • Marketplace • Fulfillment",
    level: "Beginner",
    duration: "6 month",
    seats: "Limited Seats",
    includes: ["Business Model Canvas", "Store Setup", "Content Plan", "Sales Funnel", "Delivery & Customer Care SOP"],
    priceTag: "Free Batch"
  },
  
];

export const teachers = [
  {
    name: "Instructor Ayesha",
    role: "Performance Marketing Specialist",
    bio: "FB/Google Ads-এ ৫+ বছরের বাস্তব অভিজ্ঞতা। ROI-কেন্দ্রিক ক্যাম্পেইন ডিজাইন।"
  },
  {
    name: "Mentor Rafi",
    role: "E-Commerce Consultant",
    bio: "Local/Global marketplace এবং D2C ব্র্যান্ড গ্রোথ নিয়ে কাজ করেন।"
  },
  {
    name: "Coach Nabil",
    role: "Creative Director",
    bio: "Ad creative, branding এবং content strategy—সব এক জায়গায় সাজিয়ে দেন।"
  }
];

export const demoClasses = [
  { title: "Class 01: Ad Funnel Basics", date: "10 Jun, 2026", time: "8:30 PM", topic: "Funnel + Audience + Creative" },
  { title: "Class 02: SEO Quick Wins", date: "12 Jun, 2026", time: "8:30 PM", topic: "On-page + Keyword + Content" },
  { title: "Class 03: Business Model Setup", date: "14 Jun, 2026", time: "8:30 PM", topic: "Offer + Pricing + Delivery" }
];

export const plans = [
  {
    name: "Digital marketing Bootcamp (DM)",
    price: "৳ 0",
    tag: "ফ্রি class",
    points: ["ক্লাস অ্যাক্সেস", "কোর্স আউটলাইন", "কমিউনিটি ইন্ট্রো", "ক্যারিয়ার রোডম্যাপ"],
    accent: "from-[var(--grad-a)] to-[var(--grad-b)]"
  },
  {
    name: "Entrepreneurship Bootcamp (Ecom)",
    price: "৳ 0",
    tag: "Most Popular",
    points: ["লাইভ ব্যাচ", "প্রজেক্ট + ফিডব্যাক", "সাপোর্ট চ্যাট", "সার্টিফিকেট", "সাপ্তাহিক রিভিউ কল"],
    accent: "from-[var(--grad-b)] to-[var(--grad-c)]"
  },
];

export const testimonials = [
  {
    name: "Sadia",
    role: "Freelancer",
    quote: "২ সপ্তাহের ভিতরেই আমি Facebook Ads-এ প্রথম ক্লায়েন্ট পাই। ক্লাস + গাইডলাইন টপ! Captain Aminul Haque It Institute কে ধন্যবাদ।"
  },
  {
    name: "Tanvir",
    role: "E-commerce Seller",
    quote: "Captain Aminul Haque It Institute থেকে শুরু করে , Digital marketying and sales funnel—সব একসাথে বুঝে গেছি। আমার সেল ৩x হয়েছে।"
  },
  {
    name: "Mim",
    role: "Job Seeker",
    quote: "CV, interview practice, portfolio—সব সাপোর্ট পাই। এখন আমি junior marketer হিসেবে কাজ করছি। ধন্যবাদ Captain Aminul Haque It Institute !"
  }
];

export const bestStudents = [
  {
    name: "Raihan",
    title: "Top Performer (Ads)",
    result: "অনুসরণ",
    note: "আমরা গভীর কৃতজ্ঞতা ও শ্রদ্ধার সঙ্গে স্মরণ করছি আমিনুল হক স্যারকে, যিনি আমাদের জন্য এত সুন্দর ও মূল্যবান উদ্যোগ গ্রহণ করেছেন। তাঁর দূরদৃষ্টি, নিষ্ঠা ও আন্তরিক প্রচেষ্টার ফলেই আমরা আজ নতুন সুযোগ ও সম্ভাবনার মুখোমুখি হতে পেরেছি।"
  },
  {
    name: "Jannat",
    title: "Women Entrepreneur Track",
    result: "স্বপ্ন",
    note: "আমাদের স্বপ্নকে নিজের স্বপ্নের মতো করে আগলে রাখার জন্য আমিনুল হক স্যারকে আন্তরিক কৃতজ্ঞতা ও ভালোবাসা"
  },
  {
    name: "Mahin",
    title: "Portfolio Winner",
    result: "কৃতজ্ঞতা",
    note: "কথায় নয়, কাজে বুঝিয়ে দেওয়া একজন মানুষ—আমিনুল হক স্যার। কৃতজ্ঞতা শব্দটি তাঁর জন্যও ছোট মনে হয়।"
  }
];

export const companyConnections = [
  { name: "Agency Partner", tag: "Internship Slot" },
  { name: "E-commerce Brand", tag: "Project Brief" },
  { name: "Media House", tag: "Creative Work" },
  { name: "Marketplace Seller", tag: "Growth Sprint" },
  { name: "Local Startup", tag: "Campaign Run" }
];

export const rocketSteps = [
  {
    step: "Step 01",
    title: "Orientation + Goal Setup",
    desc: "Skill roadmap, time plan, tools setup, learning system."
  },
  {
    step: "Step 02",
    title: "Foundation + Quick Wins",
    desc: "Ads/SEO/Content-এর core concepts—তারপর ছোট ছোট task."
  },
  {
    step: "Step 03",
    title: "200 Course Credit",
    desc: "Real project: campaign, store, creative set—mentor review সহ।"
  },
  {
    step: "Step 04",
    title: "Two meet up in one month",
    desc: "Analytics, A/B test, budget plan, retention—growth tactics."
  },
  {
    step: "Step 05",
    title: "Certification in 160 Credit",
    desc: "ertification after 160 credit and oppurtunity to go for job placement."
  },
  {
    step: "Step 05",
    title: "Career / Business Launch",
    desc: "Portfolio, CV, client hunting, offer crafting, interview prep."
  }
];

export const blogPosts = [
  { id: "b1", title: "২০২৬ এ ডিজিটাল মার্কেটিং-এর ৭টা ট্রেন্ড", date: "29 Dec, 2025", excerpt: "AI content, creative testing, first-party data—কীভাবে আপডেট থাকবে?", tag: "Marketing" },
  { id: "b2", title: "ফেসবুক অ্যাডস ক্রিয়েটিভ: ১০ সেকেন্ডে হুক বানাও", date: "20 Dec, 2025", excerpt: "Hook, proof, offer—এই ৩টা থাকলে ads কাজ করবেই।", tag: "Ads" },
  { id: "b3", title: "E-commerce-এ লাভ বাড়ানোর ফর্মুলা", date: "10 Dec, 2025", excerpt: "Product selection, pricing, delivery—স্মার্টভাবে optimize করো।", tag: "Business" }
];
