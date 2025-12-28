import React from "react";
import Container from "./Container";
import Rocket from "./Rocket";

export default function AuthShell({ title, subtitle, children }: React.PropsWithChildren<{title: string; subtitle: string}>){
  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full btn-grad opacity-20 blur-3xl" />
        <div className="absolute -right-24 bottom-24 h-64 w-64 rounded-full btn-grad opacity-20 blur-3xl" />
      </div>

      <Container className="py-14">
        <div className="mx-auto max-w-4xl grid gap-6 lg:grid-cols-2 items-center">
          <div className="hidden lg:block">
            <Rocket className="h-36 w-36" />
            <div className="mt-6 font-display text-3xl font-extrabold">
              <span className="gradient-text">{title}</span>
            </div>
            <p className="mt-3 text-[var(--muted)]">{subtitle}</p>
            <div className="mt-6 glass rounded-xl2 p-5 text-sm text-[var(--muted)]">
              Tip: Use your institute-provided email for registration to access all features.
            </div>
          </div>

          <div className="glass rounded-xl2 p-6 shadow-glow">
            <div className="font-display text-2xl font-extrabold gradient-text lg:hidden">{title}</div>
            <p className="mt-2 text-sm text-[var(--muted)] lg:hidden">{subtitle}</p>
            <div className="mt-6">{children}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
