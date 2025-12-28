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
  headline: "স্কিল নাও, আয় করো—উদ্যোক্তা হও!",
  sub: "Digital Marketing & Entrepreneurship-এর জন্য একদম ইন্ডাস্ট্রি-রেডি বুটক্যাম্প। লাইভ ক্লাস, ডেমো ক্লাস, সাপোর্ট, গাইডলাইন—সব একসাথে।"
};

export const heroBullets = [
  "ফ্রি ডেমো ক্লাস + লাইভ কন্সেপচুয়াল শেখানো",
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
    duration: "8 Weeks",
    seats: "Limited Seats",
    includes: ["Ad Campaign Strategy", "SEO Fundamentals", "Tracking & Pixel Setup", "Client Hunting Basics", "Creative Testing Framework"],
    priceTag: "Free Demo + Paid Batch"
  },
  {
    id: "ecom",
    title: "Online Business & E-Commerce",
    subtitle: "Branding • Product • Marketplace • Fulfillment",
    level: "Beginner",
    duration: "6 Weeks",
    seats: "Limited Seats",
    includes: ["Business Model Canvas", "Store Setup", "Content Plan", "Sales Funnel", "Delivery & Customer Care SOP"],
    priceTag: "Free Demo + Paid Batch"
  },
  {
    id: "gd",
    title: "Graphic Design for Business",
    subtitle: "Canva • Photoshop Basics • Brand Kit",
    level: "Beginner",
    duration: "5 Weeks",
    seats: "Limited Seats",
    includes: ["Social Media Kit", "Ad Creative", "Brand Consistency", "Export & Delivery", "Design Feedback & Iteration"],
    priceTag: "Free Demo + Paid Batch"
  },
  {
    id: "ve",
    title: "Video Editing for Ads",
    subtitle: "Shorts/Reels • Motion Basics • Hooks",
    level: "Intermediate",
    duration: "6 Weeks",
    seats: "Limited Seats",
    includes: ["Reels Template", "Sound & Beat", "Caption Workflow", "Ad-Ready Export", "Hook & Storyboard Practice"],
    priceTag: "Free Demo + Paid Batch"
  }
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
  { title: "Demo Class 01: Ad Funnel Basics", date: "10 Jun, 2026", time: "8:30 PM", topic: "Funnel + Audience + Creative" },
  { title: "Demo Class 02: SEO Quick Wins", date: "12 Jun, 2026", time: "8:30 PM", topic: "On-page + Keyword + Content" },
  { title: "Demo Class 03: Business Model Setup", date: "14 Jun, 2026", time: "8:30 PM", topic: "Offer + Pricing + Delivery" }
];

export const plans = [
  {
    name: "Starter",
    price: "৳ 0",
    tag: "ফ্রি ডেমো",
    points: ["ডেমো ক্লাস অ্যাক্সেস", "কোর্স আউটলাইন", "কমিউনিটি ইন্ট্রো", "ক্যারিয়ার রোডম্যাপ"],
    accent: "from-[var(--grad-a)] to-[var(--grad-b)]"
  },
  {
    name: "Pro",
    price: "৳ 3,999",
    tag: "Most Popular",
    points: ["লাইভ ব্যাচ", "প্রজেক্ট + ফিডব্যাক", "সাপোর্ট চ্যাট", "সার্টিফিকেট", "সাপ্তাহিক রিভিউ কল"],
    accent: "from-[var(--grad-b)] to-[var(--grad-c)]"
  },
  {
    name: "Career+",
    price: "৳ 7,999",
    tag: "Job/Client Ready",
    points: ["সব Pro সুবিধা", "CV/Portfolio", "Mock Interview", "Client Hunting Playbook", "ইন্টার্নশিপ গাইডলাইন"],
    accent: "from-[var(--grad-c)] to-[var(--grad-d)]"
  }
];

export const testimonials = [
  {
    name: "Sadia",
    role: "Freelancer",
    quote: "২ সপ্তাহের ভিতরেই আমি Facebook Ads-এ প্রথম ক্লায়েন্ট পাই। ক্লাস + গাইডলাইন টপ!"
  },
  {
    name: "Tanvir",
    role: "E-commerce Seller",
    quote: "Branding থেকে শুরু করে sales funnel—সব একসাথে বুঝে গেছি। আমার সেল ৩x হয়েছে।"
  },
  {
    name: "Mim",
    role: "Job Seeker",
    quote: "CV, interview practice, portfolio—সব সাপোর্ট পাই। এখন আমি junior marketer হিসেবে কাজ করছি।"
  }
];

export const bestStudents = [
  {
    name: "Raihan",
    title: "Top Performer (Ads)",
    result: "১ মাসে ৪টা ক্লায়েন্ট",
    note: "Creative testing + pixel tracking পারফেক্ট করেছে।"
  },
  {
    name: "Jannat",
    title: "Women Entrepreneur Track",
    result: "নিজের পেজে ২০০+ অর্ডার",
    note: "Content plan + offer design দিয়ে ব্যবসা স্কেল করেছে।"
  },
  {
    name: "Mahin",
    title: "Portfolio Winner",
    result: "Junior Marketer (Job)",
    note: "Portfolio + mock interview দিয়ে চাকরি পেয়েছে।"
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
    title: "Project Sprint",
    desc: "Real project: campaign, store, creative set—mentor review সহ।"
  },
  {
    step: "Step 04",
    title: "Optimization + Scaling",
    desc: "Analytics, A/B test, budget plan, retention—growth tactics."
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
