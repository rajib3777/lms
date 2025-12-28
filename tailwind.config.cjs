/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "Noto Sans Bengali", "Noto Sans", "sans-serif"],
        body: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "Noto Sans Bengali", "Noto Sans", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        glow: "0 10px 40px rgba(0,0,0,0.12)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "100% 50%" } },
        pop: { "0%": { transform: "scale(.98)" }, "100%": { transform: "scale(1)" } }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 6s ease infinite",
        pop: "pop .18s ease-out"
      }
    }
  },
  plugins: []
}
