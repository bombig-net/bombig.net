"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <main>
            <div
                className={cn(
                    "relative flex flex-col justify-end items-center bg-jordy-950 min-h-screen transition-bg",
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        //   I'm sorry but this is what peak developer performance looks like // trigger warning
                        className={cn(
                            `after:[background-attachment:fixed] absolute after:absolute -inset-[10px] after:inset-0 after:content-[""] opacity-50 blur-[10px] [--aurora:repeating-linear-gradient(100deg,var(--violet-600)_10%,var(--fuchsia-400)_15%,var(--pink-500)_20%,var(--amber-300)_25%,var(--yellow-200)_30%)] invert-0 will-change-transform after:animate-aurora pointer-events-none after:[background-size:200%,_100%] after:[background-image:var(--dark-gradient),var(--aurora)] after:mix-blend-difference [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [background-image:var(--dark-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%] filter`,

                            showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                        )}
                    ></div>
                </div>
                {children}
            </div>
        </main>
    );
};
