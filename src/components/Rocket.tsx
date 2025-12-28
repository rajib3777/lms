import React from "react";
import { motion } from "framer-motion";

export default function Rocket({ className="" }: { className?: string }){
  return (
    <motion.svg
      className={className}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: 0, rotate: -6 }}
      animate={{ y: [0, -10, 0], rotate: [-6, 0, -6] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="rg" x1="24" y1="24" x2="220" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--grad-a)" />
          <stop offset="0.45" stopColor="var(--grad-b)" />
          <stop offset="1" stopColor="var(--grad-c)" />
        </linearGradient>
      </defs>
      <path d="M138 30c37 16 55 52 56 92 0 41-19 78-56 96-37-18-56-55-56-96 1-40 19-76 56-92Z" fill="url(#rg)" opacity="0.92"/>
      <path d="M138 44c27 13 41 41 42 72 0 32-15 61-42 75-27-14-42-43-42-75 1-31 15-59 42-72Z" fill="rgba(255,255,255,.12)"/>
      <circle cx="138" cy="118" r="18" fill="rgba(255,255,255,.18)" stroke="rgba(255,255,255,.22)"/>
      <path d="M96 150c-22 8-36 25-41 52 28-6 44-20 56-39l-15-13Z" fill="rgba(0,232,135,.18)"/>
      <path d="M180 150c22 8 36 25 41 52-28-6-44-20-56-39l15-13Z" fill="rgba(0,209,255,.18)"/>
      <path d="M138 186c-8 0-16-2-22-6 2 22 10 34 22 50 12-16 20-28 22-50-6 4-14 6-22 6Z" fill="rgba(255,255,255,.16)"/>
      <path d="M120 206c6 7 11 14 18 24 7-10 12-17 18-24" stroke="rgba(255,255,255,.22)" strokeWidth="3" strokeLinecap="round"/>
    </motion.svg>
  );
}
