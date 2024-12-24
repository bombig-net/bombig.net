"use client";

import React from "react";
import Section from "@/components/elements/Section";
import BadgeFrosted from "@/components/elements/BadgeFrosted";
import Image from "next/image";

export default function CallToAction() {
    return (
        <Section>
            <div className="flex lg:flex-row flex-col gap-16">
                {/* Left Column - Rocket Image */}
                <div className="lg:w-1/2">
                    <Image
                        src="/placeholder.png"
                        alt=""
                        width={400}
                        height={400}
                        className="opacity-80 w-full"
                        aria-hidden="true"
                    />
                </div>

                {/* Right Column - Content */}
                <div className="flex flex-col gap-16 lg:w-1/2">
                    {/* Top Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <BadgeFrosted>Full Service Website Agentur</BadgeFrosted>
                        <h2 className="mt-4 font-euclid text-jordy-100 text-xl lg:text-2xl">
                            Vereinbare einen<br />
                            unverbindlichen Call<br />
                            zum Kennenlernen
                        </h2>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-8">
                        {/* Contact Person */}
                        <div className="flex items-center gap-4">
                            <Image
                                src="/team/deniz.jpg"
                                alt=""
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                            <div>
                                <span className="text-jordy-200/70 text-sm">Ansprechpartner</span>
                                <p className="font-medium text-jordy-100">Deniz Binay</p>
                            </div>
                        </div>

                        {/* Contact Links */}
                        <div className="flex flex-col gap-2">
                            <a
                                href="tel:+49-151-645-880-39"
                                className="text-jordy-100 hover:text-jordy-200 transition-colors"
                                aria-label="Rufen Sie uns an unter 0151-645 880 39"
                            >
                                <span aria-hidden="true">Tel: </span>0151-645 880 39
                            </a>
                            <a
                                href="mailto:info@bombig.net"
                                className="text-jordy-100 hover:text-jordy-200 transition-colors"
                                aria-label="Schreiben Sie uns eine E-Mail an info@bombig.net"
                            >
                                <span aria-hidden="true">Email: </span>info@bombig.net
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
} 