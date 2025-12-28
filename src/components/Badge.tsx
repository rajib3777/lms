import React from "react";
import clsx from "clsx";

export default function Badge({ children, className }: React.PropsWithChildren<{className?: string}>){
  return (
    <span className={clsx("inline-flex items-center rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_80%,transparent)] px-3 py-1 text-xs font-semibold text-[var(--muted)]", className)}>
      {children}
    </span>
  );
}
