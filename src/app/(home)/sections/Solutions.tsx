"use client";

import React from "react";
import Section from "@/components/elements/Section";
import CardStack from "@/components/elements/CardStack";
import { IconType } from "react-icons";
import { FaGoogle, FaShoppingCart, FaUsers, FaBriefcase } from "react-icons/fa";
import { Card, CardHeader, CardContent } from "@/components/elements/Card";

interface ProcessCardProps {
    title: string;
    description: string;
}

const ProcessCard = ({ title, description }: ProcessCardProps) => (
    <Card className="bg-jordy-950">
        <CardHeader>
            <h4 className="font-euclid text-jordy-100 text-lg">{title}</h4>
        </CardHeader>
        <CardContent className="flex flex-col justify-between">
            <p className="text-jordy-200/70">{description}</p>
        </CardContent>
    </Card>
);

const solutions = [
    {
        title: "Starting Fresh: Building Your First Website",
        description: "We help businesses establish their online presence from scratch with a comprehensive web development solution tailored to your needs.",
        process: [
            {
                title: "Initial Consultation",
                description: "We discuss your business goals, target audience, and specific requirements to create a strategic roadmap."
            },
            {
                title: "Planning & Architecture",
                description: "Our team develops a detailed site structure and user flow to ensure optimal navigation and experience."
            },
            {
                title: "Design Mockups",
                description: "We create visual designs that align with your brand identity and appeal to your target audience."
            },
            {
                title: "Development & Testing",
                description: "Our developers bring the designs to life while ensuring functionality across all devices and browsers."
            },
            {
                title: "Launch & Support",
                description: "We handle the deployment process and provide ongoing maintenance and support services."
            }
        ]
    },
    {
        title: "Modernizing Your Existing Website",
        description: "Transform your outdated website into a modern, high-performing digital asset that drives real business results.",
        process: [
            {
                title: "Site Audit",
                description: "We analyze your current website's performance, content, and user experience to identify improvement areas."
            },
            {
                title: "Strategy Development",
                description: "Based on the audit, we create a comprehensive plan for modernization and enhancement."
            },
            {
                title: "Content Restructuring",
                description: "We optimize your content architecture for better user engagement and search engine visibility."
            },
            {
                title: "Technical Updates",
                description: "Implementation of modern technologies and features while maintaining existing functionality."
            },
            {
                title: "Performance Optimization",
                description: "Final tweaks to ensure fast loading times and smooth operation across all platforms."
            }
        ]
    },
    {
        title: "E-Commerce Solutions",
        description: "Build a powerful online store that provides seamless shopping experiences and drives sales growth.",
        process: [
            {
                title: "Business Analysis",
                description: "We evaluate your product lineup and sales goals to determine the best e-commerce approach."
            },
            {
                title: "Platform Selection",
                description: "We help choose and configure the right e-commerce platform for your specific needs."
            },
            {
                title: "Store Setup",
                description: "Implementation of product catalogs, payment gateways, and essential e-commerce features."
            },
            {
                title: "Security Implementation",
                description: "We ensure your store meets all security standards to protect customer data and transactions."
            },
            {
                title: "Analytics Integration",
                description: "Setup of tracking tools to monitor sales, customer behavior, and store performance."
            }
        ]
    }
];

interface SolutionRowProps {
    title: string;
    description: string;
    process: Array<{ title: string; description: string; }>;
}

const SolutionRow = ({ title, description, process }: SolutionRowProps) => (
    <div className="flex lg:flex-row flex-col gap-8 lg:gap-16">
        <div className="flex flex-col justify-center lg:w-1/3">
            <div className="flex items-start gap-4">
                <div>
                    <h3 className="mb-4 font-euclid text-jordy-100 text-lg lg:text-xl">{title}</h3>
                    <p className="text-base text-jordy-200/70">{description}</p>
                </div>
            </div>
        </div>
        <CardStack
            className="lg:w-2/3"
            cards={process.map((step) => (
                <ProcessCard key={step.title} {...step} />
            ))}
        />
    </div>
);

export default function Solutions() {
    return (
        <Section className="overflow-hidden">
            <h2 className="mb-16 font-euclid text-jordy-100 text-lg lg:text-3xl">
                Welche Herrausforderungen hast du<br />
                gerade mit deiner Webseite?
            </h2>
            <div className="flex flex-col gap-32">
                {solutions.map((solution, index) => (
                    <SolutionRow key={index} {...solution} />
                ))}
            </div>
        </Section>
    );
} 