import React from "react";
import Section from "@/components/elements/Section";
import { Pickaxe } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";


import { Card, CardContent } from "@/components/elements/Card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

export default function Reward() {
    return <Section>
        <h2 className="mb-4 lg:mb-8 font-euclid text-center text-jordy-100 text-lg lg:text-3xl">Wer diese Komplexität meistert, kann auf Ergebnisse zählen</h2>
        <Carousel className="w-full" opts={{
            startIndex: 1,
            breakpoints: {
                '(min-width: 768px)': { active: false }
            }
        }}>
            <CarouselContent className="mx-auto w-[80%] md:w-full">
                <CarouselItem className="md:basis-[28%]">
                    <div className="md:mt-20 p-1">
                        <Card className="border-celery-500/20 bg-celery-900/40">
                            <CardContent className="flex flex-col justify-center items-center gap-8 md:gap-10 p-8 md:p-10">
                                <h3 className="font-euclid text-center text-xl md:text-lg">Bei Google ganz oben stehen</h3>
                                <FaGoogle className="text-purple-500 md:size-24 size-32" />
                            </CardContent>
                            <div className="z-10 absolute -inset-1 bg-gradient-to-b from-transparent to-jordy-950" />
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-[44%]">
                    <div className="p-1">
                        <Card className="border-purple-500/20 bg-purple-900/40">
                            <CardContent color="red" className="flex flex-col justify-center items-center gap-8 md:gap-16 p-8 md:p-16">
                                <h3 className="font-euclid text-center text-xl md:text-2xl">Aus Besuchern Kunden machen</h3>
                                <FaMoneyBillTrendUp className="text-purple-500 md:size-48 size-32" />
                            </CardContent>
                            <div className="z-10 absolute -inset-1 bg-gradient-to-b from-transparent to-jordy-950" />
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-[28%]">
                    <div className="md:mt-20 p-1">
                        <Card className="border-apricot-500/20 bg-apricot-900/40">
                            <CardContent className="flex flex-col justify-center items-center gap-8 md:gap-10 p-8 md:p-10">
                                <h3 className="font-euclid text-center text-xl md:text-lg">Mehr Bewerbungen erhalten</h3>
                                <Pickaxe className="text-purple-500 md:size-24 size-32" />
                            </CardContent>
                            <div className="z-10 absolute -inset-1 bg-gradient-to-b from-transparent to-jordy-950" />
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    </Section>
};