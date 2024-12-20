import React from 'react'
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({
    children,
    className
}) => {
    return (
        <section className={cn("mx-auto px-4 py-8 max-w-7xl container", className)}>
            {children}
        </section>
    );
}

export default Section;

