'use client'
import { MeshBackgroundHeader } from "@/components/MeshBackground";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [headerIsVisible, setHeaderIsVisible] = useState(true);
    const [lastClientY, setLastClientY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const controlNavbar = (evt) => {
        if (typeof window !== 'undefined') {
            setLastClientY(evt.clientY);
            setLastScrollY(window.scrollY)

            setIsVisible(false);
            setHeaderIsVisible(false)

            if ((lastScrollY >= 200 && lastClientY >= 100) || (lastScrollY >= 200 && lastClientY === undefined)) {
                // Hide navbar when mouse is below the top of the screen
                setIsVisible(false);
                setHeaderIsVisible(false)
            } else {
                // Show navbar when mouse is at the top of the screen
                setIsVisible(true);
            }

            // Make sure header scrolls with window when user is at the top of the page
            if (lastScrollY < 500) {
                setHeaderIsVisible(true)
            }
            else {
                setHeaderIsVisible(false)
            }

        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            window.addEventListener('mousemove', controlNavbar);

            return () => {
                window.addEventListener('scroll', controlNavbar);
                window.removeEventListener('mousemove', controlNavbar);
            };
        }
    }, [controlNavbar]);

    return (
        <>
            <MeshBackgroundHeader />

            <header className={`flex w-full items-center justify-center 
                ${isVisible ? 'translate-y-0' : '-translate-y-full ease-out duration-900'} 
                ${headerIsVisible ? 'h-60' : 'top-10 sticky h-35'} 
                group`}
            >
                < nav
                    className={`h-22 w-[80%] motion-reduce:duration-0 items-center justify-between shadow-white/10 shadow-lg bg-white/50 backdrop-blur-lg rounded-full 
                    ${headerIsVisible ? 'transition-none' : isVisible ? 'top-0 translate-y-0' : '-translate-y-full'} 
                    transition-transform transition-discrete ease-in-out duration-900`}
                >
                    <Link className="text-teal-600 dark:text-teal-600" href={""}>
                        <span className="sr-only">Home</span>
                    </Link>
                </nav>
            </header >
        </>
    );
}