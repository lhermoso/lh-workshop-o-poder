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
        <Link
            href={`#${scrollTo}`}
            className={`btn-cta ${className}`}
            onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(scrollTo);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Add UTM tracking or analytics event here
                }
            }}
        >
            QUERO MINHA VAGA
        </Link>
    );
}; 