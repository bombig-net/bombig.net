import React from "react";
import { cn } from "@/lib/utils";

interface BadgeFrostedProps {
    children: React.ReactNode;
    className?: string;
}

const BadgeFrosted: React.FC<BadgeFrostedProps> = ({ children, className }) => {
    return (
        <div
            className={cn("relative border-jordy-500/20 bg-jordy-300/10 opacity-80 backdrop-blur-sm px-2 lg:px-4 py-1.5 lg:py-2 border rounded-full text-center text-jordy-200/70 text-xs lg:text-sm uppercase tracking-wider lg:tracking-widest", className)}
        >
            {children}
            <div className="-bottom-px absolute inset-x-0 bg-gradient-to-r from-transparent via-jordy-500/50 to-transparent mx-auto w-3/4 h-px" />
            <div className="-top-px absolute inset-x-0 bg-gradient-to-r from-transparent via-jordy-500/50 to-transparent mx-auto w-3/4 h-px" />
        </div>
    );
};

export default BadgeFrosted;