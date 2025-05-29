import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
    className?: string;
    scrollTo?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
    className = "",
    scrollTo = "form"
}) => {
    return (
        <>
            <Link
                href={`#${scrollTo}`}
                className={`btn-cta relative overflow-hidden group p-4 rounded-lg text-lg font-bold tracking-wider ${className}`}
                onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(scrollTo);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        // Add UTM tracking or analytics event here
                    }
                }}
            >
                <span className="relative flex items-center justify-center gap-3 text-white">
                    QUERO MINHA VAGA
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1.5 group-hover:scale-110"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </span>
                {/* Shimmer effect - ensured opacity-0 is default, and transition is on opacity only */}
                <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 animate-shimmer-effect"></span>
            </Link>
            <style jsx global>{`
              @keyframes shimmer-frames {
                0% {
                  transform: translateX(-100%) skewX(-12deg);
                }
                100% {
                  transform: translateX(100%) skewX(-12deg);
                }
              }
              .animate-shimmer-effect {
                animation: shimmer-frames 2s infinite linear;
              }
            `}</style>
        </>
    );
}; 