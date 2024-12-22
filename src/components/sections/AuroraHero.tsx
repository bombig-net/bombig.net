"use client";

import React from "react";
import { AuroraBackground } from "@/components/elements/AuroraBackground";
import Section from "@/components/elements/Section";
import BadgeFrosted from "@/components/elements/BadgeFrosted";

export function AuroraHero({ className, badge, headline, paragraph }: { className?: string, badge: string, headline: string, paragraph: string }) {
    return (
        <AuroraBackground className={className}>
            <Section className="z-10 flex flex-col justify-end items-start my-0">
                <BadgeFrosted className="mb-4 lg:mb-8">
                    <span>{badge}</span>
                </BadgeFrosted>
                <h1 className="bg-[repeating-linear-gradient(_100deg,_rgba(139,_92,_246,_0.1)_10%,_rgba(232,_62,_140,_0.1)_15%,_rgba(233,_72,_236,_0.1)_20%,_rgba(232,_62,_140,_0.1)_25%,_rgba(139,_92,_246,_0.1)_30%_),_repeating-linear-gradient(_100deg,_rgba(241,_245,_249,_1)_0%,_/*_Light_slate_tone_*/_rgba(241,_245,_249,_1)_7%,_/*_Light_slate_tone_*/_rgba(0,_0,_0,_0)_10%,_/*_Transparent_*/_rgba(0,_0,_0,_0)_12%,_/*_Transparent_*/_rgba(241,_245,_249,_1)_16%_/*_Light_slate_tone_*/_),_repeating-linear-gradient(_100deg,_rgba(17,_24,_39,_0.7)_0%,_/*_Dark_slate_tone_*/_rgba(17,_24,_39,_0.7)_7%,_/*_Dark_slate_tone_*/_rgba(0,_0,_0,_0)_10%,_/*_Transparent_*/_rgba(0,_0,_0,_0)_12%,_/*_Transparent_*/_rgba(17,_24,_39,_0.7)_16%_/*_Dark_slate_tone_*/_),_linear-gradient(to_right,_var(--slate-800),_var(--slate-500),_var(--slate-50),_var(--slate-500),_var(--slate-800))] bg-[50%_50%] bg-clip-text bg-fixed opacity-90 mb-4 lg:w-1/2 font-euclid text-3xl text-transparent md:text-5xl animate-[aurora_60s_linear_infinite] [background-size:200%_100%] mix-blend-screen">
                    {headline}
                </h1>
                <p className="mb-16 lg:w-5/12 text-jordy-500/70 text-left">
                    {paragraph}
                </p>
            </Section>
        </AuroraBackground>
    );
}
