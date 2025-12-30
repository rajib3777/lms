import Container from "./Container";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_70%,transparent)]">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-xl font-extrabold gradient-text">Captain Aminul Haque IT Institute</div>
            <p className="mt-3 text-[var(--muted)] max-w-md">
              ডিজিটাল মার্কেটিং, গ্রাফিক্স, ভিডিও এডিটিং, ওয়েব ডেভেলপমেন্ট ও অনলাইন বিজনেস—সব এক জায়গায়।
              লক্ষ্য একটাই: স্কিল + ক্যারিয়ার + উদ্যোক্তা হয়ে ওঠা।
            </p>
          </div>

          <div>
            <div className="font-bold">Quick Links</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[var(--muted)]">
              <Link className="hover:text-[var(--text)]" to="/products">Products</Link>
              <Link className="hover:text-[var(--text)]" to="/about">About</Link>
              <Link className="hover:text-[var(--text)]" to="/success">Success</Link>
              <Link className="hover:text-[var(--text)]" to="/blogs">Blogs</Link>
            </div>
          </div>

          <div>
            <div className="font-bold">Support</div>
            <div className="mt-3 text-sm text-[var(--muted)] space-y-2">
              <div>☎️ +8801581620802</div>
              <div>🕒 Daily: 10:00 AM – 10:00 PM</div>
              <div>📍 Dhaka-16 (Shawrapara,Mirpur)</div>
              <div className="flex items-center gap-3 pt-2">
                <a className="hover:text-[var(--text)]" href="#" aria-label="Facebook"><Facebook size={18}/></a>
                <a className="hover:text-[var(--text)]" href="#" aria-label="Instagram"><Instagram size={18}/></a>
                <a className="hover:text-[var(--text)]" href="#" aria-label="YouTube"><Youtube size={18}/></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-[var(--muted)]">
          <div>© {new Date().getFullYear()} Captain Aminul Haque IT Institute. All rights reserved.</div>
          <div>Built By MD.Rajibul Islam Shuvo</div>
        </div>
      </Container>
    </footer>
  );
}
