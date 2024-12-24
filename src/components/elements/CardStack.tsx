"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface CardStackProps {
    cards: Array<React.ReactNode>;
    className?: string;
}

export default function CardStack({ cards, className = "" }: CardStackProps) {
    const [position, setPosition] = useState(0);

    const shiftLeft = () => {
        if (position > 0) {
            setPosition(prev => prev - 1);
        }
    };

    const shiftRight = () => {
        if (position < cards.length - 1) {
            setPosition(prev => prev + 1);
        }
    };

    return (
        <div className={className}>
            <div className="flex justify-end gap-4 mb-8">
                <div className="flex gap-2">
                    <button
                        className="bg-jordy-900/50 hover:bg-jordy-800/50 p-3 rounded-lg h-fit text-base text-jordy-100 transition-colors"
                        onClick={shiftLeft}
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        className="bg-jordy-900/50 hover:bg-jordy-800/50 p-3 rounded-lg h-fit text-base text-jordy-100 transition-colors"
                        onClick={shiftRight}
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="flex gap-6">
                    {cards.map((card, index) => {
                        const translateAmt =
                            position >= index ? index * 100 : index * 100 - 100 * (index - position);

                        return (
                            <motion.div
                                key={index}
                                animate={{ x: `${-translateAmt}%` }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.35,
                                }}
                                className="relative w-full max-w-md min-h-[200px] shrink-0"
                            >
                                {card}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
} 