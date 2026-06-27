'use client'
import { MeshBackgroundHeader } from "@/components/MeshBackground";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [headerIsVisible, setHeaderIsVisible] = useState(true);
    const [isHidden, setIsHidden] = useState(false)
    const [isVisible, setIsVisible] = useState(true);
    const lastClientYRef = useRef(0);

    useEffect(() => {
        const controlNavbar = (evt) => {
            const scrollY = window.scrollY;
            const clientY = evt.clientY ?? lastClientYRef.current;
            lastClientYRef.current = clientY;

            const newHeaderIsVisible = scrollY < 200;

            const shouldHideNav =
                (scrollY >= 200 && clientY >= 150) ||
                (scrollY >= 200 && evt.clientY === undefined);

            setHeaderIsVisible(newHeaderIsVisible);
            setIsVisible(!shouldHideNav);
            setIsHidden(!newHeaderIsVisible && shouldHideNav)
        };

        window.addEventListener('scroll', controlNavbar);
        window.addEventListener('mousemove', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
            window.removeEventListener('mousemove', controlNavbar);
        };
    }, []);

    return (
        <>
            <MeshBackgroundHeader />

            <header className={`flex w-full items-center justify-center 
                ${isVisible ? 'translate-y-0' : '-translate-y-full ease-out duration-900'} 
                ${headerIsVisible ? 'h-60' : isHidden ? 'invisible' : 'top-0 sticky h-35'} 
                group`}
            >
                < nav
                    className={`h-22 w-[80%] motion-reduce:duration-0 items-center justify-between shadow-lg bg-white/5 backdrop-blur-lg rounded-full 
                    ${headerIsVisible ? 'transition-none shadow-(--mesh-navy)/10' : isVisible ? 'top-0 translate-y-0 shadow-white/10' : '-translate-y-full'} 
                    transition-transform transition-discrete ease-in-out duration-900`}
                >
                    <Link className="" href={""}>
                        <span className="">Home</span>
                    </Link>
                </nav>
            </header >
        </>
    );
}