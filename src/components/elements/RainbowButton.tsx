import React from "react";
import { cn } from "@/lib/utils";

export function RainbowButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex relative justify-center items-center border-0 bg-[length:200%] disabled:opacity-50 px-8 py-2 [border:calc(0.08*1rem)_solid_transparent] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] rounded-xl focus-visible:ring-1 focus-visible:ring-zinc-950 h-11 font-medium text-jordy-950 transition-colors animate-rainbow cursor-pointer disabled:pointer-events-none focus-visible:outline-none group",

        // before styles
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:[filter:blur(calc(0.8*1rem))]",

        // Gradient styles
        "bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
