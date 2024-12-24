"use client";

import React from "react";
import Section from "@/components/elements/Section";
import { ArrowRight, Users, Rocket, Target, Zap } from "lucide-react";
import Image from "next/image";

const benefits = [
    {
        title: "Unsere Seiten funktionieren weil wir von Anfang bis Ende denken",
        description: "Unser Fokus ist eindeutig: Wir berücksichtigen alles, was für den Erfolg einer Website entscheidend ist. Nicht mehr, nicht weniger.",
        cta: "Erfahre mehr über uns",
        ctaHref: "#",
        image: "/illustrations/benefits.png"
    }
];

const features = [
    {
        icon: Users,
        label: "Professionelles",
        title: "Experten-Team"
    },
    {
        icon: Rocket,
        label: "Schnelle",
        title: "Umsetzung"
    },
    {
        icon: Target,
        label: "Zielgerichtete",
        title: "Strategie"
    },
    {
        icon: Zap,
        label: "Innovative",
        title: "Technologien"
    }
];

export default function Benefits() {
    return (
        <Section>
            <div className="flex lg:flex-row flex-col justify-between items-center gap-16">
                <div className="flex flex-col gap-8 lg:gap-16 lg:w-1/2">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col gap-6">
                            <h2 className="font-euclid text-jordy-100 text-lg lg:text-2xl">
                                {benefit.title}
                            </h2>
                            <p className="text-base text-jordy-200/70 lg:text-lg">
                                {benefit.description}
                            </p>
                            <a
                                href={benefit.ctaHref}
                                className="flex items-center gap-2 text-jordy-100 hover:text-jordy-200 transition-colors"
                            >
                                {benefit.cta} <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
                <div className="lg:w-1/2">
                    <Image
                        src={benefits[0].image}
                        alt="Benefits illustration"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </div>
            </div>

            <div>
                <h3 className="mb-8 lg:mb-8 text-base text-jordy-200/70">
                    Warum du mit uns arbeiten solltest:
                </h3>
                <div className="gap-8 grid grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center gap-4"
                        >
                            <div className="bg-jordy-900/50 p-4 rounded-full">
                                <feature.icon className="w-8 h-8 text-jordy-100" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-jordy-200/70 text-sm">
                                    {feature.label}
                                </span>
                                <span className="font-medium text-jordy-100">
                                    {feature.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
} 