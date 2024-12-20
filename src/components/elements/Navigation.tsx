'use client'

import React, { useState } from "react";
import { Menu, X, ChevronDown } from 'lucide-react';
import { RainbowButton } from "@/components/elements/RainbowButton";
import Image from "next/image";
import {
    useMotionValueEvent,
    AnimatePresence,
    useScroll,
    motion,
} from "framer-motion";
import useMeasure from "react-use-measure";

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 250 ? true : false);
    });

    return (
        <>
            <div className={`top-0 z-50 fixed w-full ${scrolled ? 'bg-gradient-to-b from-jordy-950/90 to-transparent backdrop-blur-lg backdrop-saturate-[80%] backdrop-brightness-125' : ''}`}>
                <nav className={`mx-auto max-w-7xl px-4 container transition-all duration-300 ease-out ${scrolled ? 'py-4' : 'lg:py-8 py-4'}`}>
                    <div className="flex justify-between items-center mx-auto w-full">
                        <Logo />
                        <div className="lg:flex gap-10 hidden">
                            <Links />
                            <CTA />
                        </div>
                        <MobileMenu />
                    </div>
                </nav>
            </div>
            <MobileCTA />
        </>
    );
};

const MobileCTA = () => {
    return (
        <div className="right-0 bottom-0 left-0 z-40 fixed flex justify-center lg:hidden">
            <RainbowButton className="rounded-none w-full h-14">Kostenlose Beratung</RainbowButton>
        </div>
    );
}

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <Image src="/bombig-logo.svg" className="w-36 lg:w-40" width={160} height={60} alt="Logo" />
        </div>
    );
};

const Links = () => {
    return (
        <div className="flex items-center gap-10">
            {LINKS.map((l) => (
                <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
                    {l.text}
                </NavLink>
            ))}
        </div>
    );
};

const NavLink = ({ children, href, FlyoutContent }: { children: React.ReactNode, href?: string, FlyoutContent?: React.ComponentType }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
            {href ? (
                <a href={href} className="relative">
                    {children}
                    <span
                        style={{
                            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                        }}
                        className="-right-2 -bottom-2 -left-2 absolute bg-jordy-800 rounded-full h-1 origin-left transition-transform duration-300 ease-out scale-x-0"
                    />
                </a>
            ) : (
                <div className="relative">
                    {children}
                    <span
                        style={{
                            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                        }}
                        className="-right-2 -bottom-2 -left-2 absolute bg-jordy-800 rounded-full h-1 origin-left transition-transform duration-300 ease-out scale-x-0"
                    />
                </div>
            )}
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="top-12 left-1/2 absolute bg-jordy-900"
                    >
                        <div className="-top-6 right-0 left-0 absolute bg-transparent h-6" />
                        <div className="top-0 left-1/2 absolute bg-jordy-950 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rotate-45" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const CTA = () => {
    return (
        <div className="flex items-center">
            <RainbowButton>Kostenlose Beratung</RainbowButton>
        </div>
    );
};

const SpecializationsContent = () => {
    return (
        <div className="shadow-none lg:shadow-xl p-4 w-full lg:w-[250px]">
            <div className="flex flex-col gap-4">
                <a href="#" className="block hover:underline">
                    Introduction
                </a>
                <a href="#" className="block hover:underline">
                    Pay as you go
                </a>
            </div>
        </div>
    );
};

const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen }: { children: React.ReactNode, href?: string, FoldContent?: React.ComponentType, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            {FoldContent ? (
                <div
                    className="flex justify-between items-center border-slate-300 py-6 border-b w-full text-lg text-start cursor-pointer"
                    onClick={() => setOpen((pv) => !pv)}
                >
                    {href ? (
                        <a
                            onClick={(e) => {
                                e.stopPropagation();
                                setMenuOpen(false);
                            }}
                            href={href}
                        >
                            {children}
                        </a>
                    ) : (
                        <div>
                            {children}
                        </div>
                    )}
                    <motion.div
                        animate={{ rotate: open ? "180deg" : "0deg" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </div>
            ) : (
                <a
                    onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(false);
                    }}
                    href="#"
                    className="flex justify-between items-center border-slate-300 py-6 border-b w-full text-lg text-start cursor-pointer"
                >
                    <span>{children}</span>
                </a>
            )}
            {FoldContent && (
                <motion.div
                    initial={false}
                    animate={{
                        height: open ? height : "0px",
                        marginBottom: open ? "24px" : "0px",
                        marginTop: open ? "12px" : "0px",
                    }}
                    className="text-lg overflow-hidden"
                >
                    <div ref={ref}>
                        <FoldContent />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="block lg:hidden">

            <div className="flex flex-row">
                <button onClick={() => setOpen(true)} className="block">
                    <Menu size={36} />
                </button>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100vw" }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="top-0 left-0 fixed flex flex-col bg-jordy-950 w-full h-screen"
                    >
                        <div className="flex justify-between items-center p-4">
                            <Logo />
                            <button onClick={() => setOpen(false)}>
                                <X size={36} />
                            </button>
                        </div>
                        <div className="bg-slate-950 p-4 h-screen overflow-y-scroll">
                            {LINKS.map((l) => (
                                <MobileMenuLink
                                    key={l.text}
                                    href={l.href}
                                    FoldContent={l.component}
                                    setMenuOpen={setOpen}
                                >
                                    {l.text}
                                </MobileMenuLink>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div >
    );
};

const LINKS = [
    {
        text: "Home",
        href: "#",
    },
    {
        text: "Schwerpunkte",
        component: SpecializationsContent,
    },
    {
        text: "Standorte",
        component: SpecializationsContent,
    },
    {
        text: "About",
        href: "#",
    },
    {
        text: "Pricing",
        href: "#",
    },
];
