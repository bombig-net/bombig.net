// source: https://www.hover.dev/components/navigation#flyout-navbar

import React, { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
    useMotionValueEvent,
    AnimatePresence,
    useScroll,
    motion,
} from "framer-motion";
import useMeasure from "react-use-measure";

const Example = () => {
    return (
        <>
            <FlyoutNav />
            <div
                className="relative min-h-screen"
                style={{
                    backgroundImage: "url(/imgs/random/12.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="z-0 absolute inset-0 bg-gradient-to-b from-neutral-950/90 to-neutral-950/0" />
            </div>
            <div className="bg-neutral-50 h-screen" />
        </>
    );
};

const FlyoutNav = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 250 ? true : false);
    });

    return (
        <nav
            className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${scrolled
                    ? "bg-neutral-950 py-3 shadow-xl"
                    : "bg-neutral-950/0 py-6 shadow-none"
                }`}
        >
            <div className="flex justify-between items-center mx-auto max-w-7xl">
                <Logo />
                <div className="lg:flex gap-6 hidden">
                    <Links />
                    <CTAs />
                </div>
                <MobileMenu />
            </div>
        </nav>
    );
};

const Logo = ({ color = "white" }: { color?: string }) => {
    // Temp logo from https://logoipsum.com/
    return (
        <div className="flex items-center gap-2">
            <span className="font-bold text-2xl" style={{ color }}>
                Placeholder
            </span>
            <svg
                width="50"
                height="39"
                viewBox="0 0 50 39"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
            >
                <path
                    d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                    stopColor={color}
                ></path>
                <path
                    d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                    stopColor={color}
                ></path>
            </svg>
        </div>
    );
};

const Links = () => {
    return (
        <div className="flex items-center gap-6">
            {LINKS.map((l) => (
                <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
                    {l.text}
                </NavLink>
            ))}
        </div>
    );
};

const NavLink = ({
    children,
    href,
    FlyoutContent,
}: {
    children: React.ReactNode;
    href: string;
    FlyoutContent?: React.ElementType;
}) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
            <a href={href} className="relative">
                {children}
                <span
                    style={{
                        transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="-right-2 -bottom-2 -left-2 absolute bg-indigo-300 rounded-full h-1 origin-left transition-transform duration-300 ease-out scale-x-0"
                />
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="top-12 left-1/2 absolute bg-white text-black"
                    >
                        <div className="-top-6 right-0 left-0 absolute bg-transparent h-6" />
                        <div className="top-0 left-1/2 absolute bg-white w-4 h-4 -translate-x-1/2 -translate-y-1/2 rotate-45" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const CTAs = () => {
    return (
        <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border-2 border-white hover:bg-white px-4 py-2 rounded-lg font-semibold text-white hover:text-black transition-colors">
                <FaUserCircle />
                <span>Sign in</span>
            </button>
            <button className="border-2 border-indigo-300 hover:border-indigo-600 bg-indigo-300 hover:bg-indigo-600 px-4 py-2 rounded-lg font-semibold text-black hover:text-white transition-colors">
                Schedule a Demo
            </button>
        </div>
    );
};

const AboutUsContent = () => {
    return (
        <div className="grid grid-cols-12 shadow-xl lg:shadow-none w-full lg:w-[600px] xl:w-[750px] h-fit lg:h-72">
            <div className="flex flex-col justify-between col-span-12 lg:col-span-4 bg-neutral-950 p-6">
                <div>
                    <h2 className="mb-2 font-semibold text-white text-xl">About us</h2>
                    <p className="mb-6 max-w-xs text-neutral-400 text-sm">
                        Placeholder is the worlds leading placeholder company.
                    </p>
                </div>
                <a
                    href="#"
                    className="flex items-center gap-1 text-indigo-300 text-xs hover:underline"
                >
                    Learn more <FiArrowRight />
                </a>
            </div>
            <div className="gap-3 grid grid-cols-2 grid-rows-2 col-span-12 lg:col-span-8 bg-white p-6">
                <a
                    href="#"
                    className="border-2 border-neutral-200 bg-white hover:bg-neutral-100 p-3 rounded transition-colors"
                >
                    <h3 className="mb-1 font-semibold">Features</h3>
                    <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
                    </p>
                </a>
                <a
                    href="#"
                    className="border-2 border-neutral-200 bg-white hover:bg-neutral-100 p-3 rounded transition-colors"
                >
                    <h3 className="mb-1 font-semibold">Testimonials</h3>
                    <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
                    </p>
                </a>
                <a
                    href="#"
                    className="border-2 border-neutral-200 bg-white hover:bg-neutral-100 p-3 rounded transition-colors"
                >
                    <h3 className="mb-1 font-semibold">Press</h3>
                    <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
                    </p>
                </a>
                <a
                    href="#"
                    className="border-2 border-neutral-200 bg-white hover:bg-neutral-100 p-3 rounded transition-colors"
                >
                    <h3 className="mb-1 font-semibold">Blog</h3>
                    <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
                    </p>
                </a>
            </div>
        </div>
    );
};

const PricingContent = () => {
    return (
        <div className="bg-white shadow-none lg:shadow-xl p-6 w-full lg:w-[250px]">
            <div className="grid grid-cols-2 lg:grid-cols-1">
                <div className="space-y-3 mb-3">
                    <h3 className="font-semibold">For Individuals</h3>
                    <a href="#" className="block text-sm hover:underline">
                        Introduction
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        Pay as you go
                    </a>
                </div>
                <div className="space-y-3 mb-6">
                    <h3 className="font-semibold">For Companies</h3>
                    <a href="#" className="block text-sm hover:underline">
                        Startups
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        SMBs
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        Enterprise
                    </a>
                </div>
            </div>
            <button className="border-2 border-neutral-950 hover:bg-neutral-950 px-4 py-2 rounded-lg w-full font-semibold hover:text-white transition-colors">
                Contact sales
            </button>
        </div>
    );
};

const CareersContent = () => {
    return (
        <div className="grid grid-cols-12 shadow-xl w-full lg:w-[750px]">
            <div className="flex flex-col justify-between col-span-12 lg:col-span-4 bg-indigo-600 p-6">
                <div className="mb-6">
                    <h2 className="mb-2 font-semibold text-white text-xl">Careers</h2>
                    <p className="text-indigo-100 text-sm">
                        Placeholder was rated a top place to work by Placeholder.
                    </p>
                </div>
                <a
                    href="#"
                    className="flex items-center gap-1 text-indigo-200 text-xs hover:underline"
                >
                    Careers site <FiArrowRight />
                </a>
            </div>
            <div className="gap-3 grid grid-cols-2 lg:grid-cols-3 col-span-12 lg:col-span-8 bg-white p-6">
                <div className="space-y-3">
                    <h3 className="font-semibold">Business</h3>
                    <a href="#" className="block text-sm hover:underline">
                        Marketing
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        Finance
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        Legal
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        Sales
                    </a>
                </div>
                <div className="space-y-3">
                    <h3 className="font-semibold">Engineering</h3>
                    <a href="#" className="block text-sm hover:underline">
                        Full stack
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        Dev ops
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        QA
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        Data
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        Machine learning
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        Management
                    </a>
                </div>
                <div className="space-y-3">
                    <h3 className="font-semibold">More</h3>
                    <a href="#" className="block text-sm hover:underline">
                        Support
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        Office
                    </a>
                    <a href="#" className="block text-sm hover:underline">
                        Other
                    </a>
                </div>
            </div>
        </div>
    );
};

const MobileMenuLink = ({
    children,
    href,
    FoldContent,
    setMenuOpen,
}: {
    children: React.ReactNode;
    href: string;
    FoldContent?: React.ElementType;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(false);

    return (
        <div className="relative text-neutral-950">
            {FoldContent ? (
                <div
                    className="flex justify-between items-center border-neutral-300 py-6 border-b w-full font-semibold text-2xl text-start cursor-pointer"
                    onClick={() => setOpen((pv) => !pv)}
                >
                    <a
                        onClick={(e) => {
                            e.stopPropagation();
                            setMenuOpen(false);
                        }}
                        href={href}
                    >
                        {children}
                    </a>
                    <motion.div
                        animate={{ rotate: open ? "180deg" : "0deg" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <FiChevronDown />
                    </motion.div>
                </div>
            ) : (
                <a
                    onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(false);
                    }}
                    href="#"
                    className="flex justify-between items-center border-neutral-300 py-6 border-b w-full font-semibold text-2xl text-start cursor-pointer"
                >
                    <span>{children}</span>
                    <FiArrowRight />
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
                    className="overflow-hidden"
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
            <button onClick={() => setOpen(true)} className="block text-3xl">
                <FiMenu />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100vw" }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="top-0 left-0 fixed flex flex-col bg-white w-full h-screen"
                    >
                        <div className="flex justify-between items-center p-6">
                            <Logo color="black" />
                            <button onClick={() => setOpen(false)}>
                                <FiX className="text-3xl text-neutral-950" />
                            </button>
                        </div>
                        <div className="bg-neutral-100 p-6 h-screen overflow-y-scroll">
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
                        <div className="flex justify-end bg-neutral-950 p-6">
                            <CTAs />
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Example;

const LINKS = [
    {
        text: "About us",
        href: "#",
        component: AboutUsContent,
    },
    {
        text: "Pricing",
        href: "#",
        component: PricingContent,
    },
    {
        text: "Careers",
        href: "#",
        component: CareersContent,
    },
    {
        text: "Documentation",
        href: "#",
    },
];