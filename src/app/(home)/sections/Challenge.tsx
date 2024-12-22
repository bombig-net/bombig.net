"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import BadgeFrosted from "@/components/elements/BadgeFrosted";
import Section from "@/components/elements/Section";

const Badge = forwardRef<
    HTMLDivElement,
    { children?: React.ReactNode }
>(({ children }, ref) => {
    return (
        <div ref={ref}>
            <BadgeFrosted className="z-10 opacity-100 m-0 normal-case">
                {children}
            </BadgeFrosted>
        </div>
    );
});

Badge.displayName = "Badge";

export default function Challenge() {
    const containerRef = useRef<HTMLDivElement>(null);
    const col1Ref1 = useRef<HTMLDivElement>(null);
    const col1Ref2 = useRef<HTMLDivElement>(null);
    const col1Ref3 = useRef<HTMLDivElement>(null);
    const col2Ref1 = useRef<HTMLDivElement>(null);
    const col3Ref1 = useRef<HTMLDivElement>(null);
    const col3Ref2 = useRef<HTMLDivElement>(null);
    const col3Ref3 = useRef<HTMLDivElement>(null);

    return (
        <Section>
            <h2 className="lg:mb-8 font-euclid text-center text-jordy-100 text-lg lg:text-3xl">Lass dich nicht von Oberfläche blenden. Moderne Webseiten sind hochkomplex.</h2>
            <div
                className="relative flex justify-center items-center p-10 w-full overflow-hidden"
                ref={containerRef}
            >
                <div className="flex lg:flex-row flex-col justify-between items-center gap-4 lg:gap-16 size-full">
                    <div className="flex flex-col items-center gap-4 lg:gap-16 w-full">
                        <div ref={col1Ref1} className="lg:self-end self-start">
                            <Badge>
                                <p className="text-sm lg:text-base">Suchmaschinenoptimierung</p>
                            </Badge>
                        </div>
                        <div ref={col1Ref2} className="self-end">
                            <Badge>
                                <p className="text-sm lg:text-base">User Testing</p>
                            </Badge>
                        </div>
                        <div ref={col1Ref3} className="lg:self-end self-start">
                            <Badge>
                                <p className="text-sm lg:text-base">Conversionoptimierung</p>
                            </Badge>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <div ref={col2Ref1}>
                            <Badge>
                                <p className="p-2 font-bold text-jordy-50 text-lg">Erfolgreiche Webseiten</p>
                            </Badge>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 lg:gap-16 w-full">
                        <div ref={col3Ref1} className="lg:self-start self-end">
                            <Badge>
                                <p className="text-sm lg:text-base">Responsive Design</p>
                            </Badge>
                        </div>
                        <div ref={col3Ref2} className="self-start">
                            <Badge>
                                <p className="text-sm lg:text-base">Performance Optimierung</p>
                            </Badge>
                        </div>
                        <div ref={col3Ref3} className="lg:self-start self-end">
                            <Badge>
                                <p className="text-sm lg:text-base">Content Erstellung</p>
                            </Badge>
                        </div>
                    </div>
                </div>

                {<AnimatedBeam
                    containerRef={containerRef}
                    fromRef={col1Ref1}
                    toRef={col2Ref1}
                />}

                {<AnimatedBeam
                    containerRef={containerRef}
                    fromRef={col1Ref2}
                    toRef={col2Ref1}
                />}

                {<AnimatedBeam
                    containerRef={containerRef}
                    fromRef={col1Ref3}
                    toRef={col2Ref1}
                />}

                {<AnimatedBeam
                    containerRef={containerRef}
                    fromRef={col3Ref1}
                    toRef={col2Ref1}
                    reverse
                />}

                {<AnimatedBeam
                    containerRef={containerRef}
                    fromRef={col3Ref2}
                    toRef={col2Ref1}
                    reverse
                />}

                {<AnimatedBeam
                    containerRef={containerRef}
                    fromRef={col3Ref3}
                    toRef={col2Ref1}
                    reverse
                />}
            </div>
        </Section>
    );
}
