'use client'

import { MeshBackgroundHeader } from "@/components/meshBackground";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const navItems = ['home', 'experience', 'skills', 'projects', 'about', 'contact me']


export default function Header() {
    // Header + Navbar Styling
    const [headerIsVisible, setHeaderIsVisible] = useState(true);
    const [isHidden, setIsHidden] = useState(false)
    const [isVisible, setIsVisible] = useState(true);
    const lastClientYRef = useRef(0);

    // Navbar
    const [navbarHeight, setNavbarHeight] = useState(0)
    const [navbarWidth, setNavbarWidth] = useState(0)
    const [navItemHeight, setNavItemHeight] = useState(0)
    const [navItemWidth, setNavItemWidth] = useState(0)
    const navbarRef = useRef(null)

    const linkStyling = `flex justify-center text-nowrap rounded-full border 
    border-transparent
    `


    useLayoutEffect(() => {
        if (navbarRef.current) {
            let navbarHeight = navbarRef.current.offsetHeight
            let navbarWidth = navbarRef.current.offsetWidth

            setNavbarHeight(navbarHeight)
            setNavItemHeight(Math.ceil(navbarHeight / 2.8))

            setNavbarWidth(navbarWidth)
            setNavItemWidth(Math.ceil(navbarWidth / (navItems.length + 2)))
        }
    }, [navItemWidth])

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

            <header className={`flex w-full place-items-center justify-center 
                ${isVisible ? 'translate-y-0' : '-translate-y-full ease-out duration-900'} 
                ${headerIsVisible ? 'h-60' : isHidden ? 'invisible' : 'top-0 sticky h-35'} 
                group`}
            >
                < nav
                    id='navbar'
                    className={`flex justify-between align-center h-22 w-[80%] motion-reduce:duration-0 items-center justify-between shadow-lg bg-white/5 backdrop-blur-lg rounded-full 
                    ${headerIsVisible ? 'transition-none shadow-(--mesh-navy)/10' : isVisible ? 'top-0 translate-y-0 shadow-white/10' : '-translate-y-full'} 
                    transition-transform transition-discrete ease-in-out duration-900`}
                    ref={navbarRef}
                >
                    <div
                        className={`flex w-30 ml-10 items-center justify-center text-center text-sm border`}
                        style={{
                            height: navItemHeight,
                            padding: navItemHeight,
                            width: navItemHeight
                        }}
                    >
                        <Link
                            href={"/"}
                        >
                            Icon Image Here
                        </Link>
                    </div>

                    <div className="flex justify-self-end justify-evenly">
                        {
                            navItems.map((item, idx) => {
                                if (idx !== navItems.length - 1) {
                                    return <Link
                                        className={`navItem ${linkStyling}`} href={idx === 0 ? '/' : `/#${item} `}
                                        key={item}
                                        id={`${item}Item`}
                                        style={{
                                            padding: navItemHeight,
                                            width: navItemWidth,
                                            margin: '0 10px'
                                        }}
                                    >
                                        <span className="capitalize">
                                            {item}
                                        </span>
                                    </Link>
                                }

                                return <Link
                                    className={`navItem ${linkStyling} `} href={`#${item} `}
                                    key={item}
                                    id={`${item} Item`}
                                    style={{
                                        padding: navItemHeight,
                                        width: navItemWidth,
                                        margin: '0 0 0 10px'
                                    }}
                                >
                                    <span className="capitalize">
                                        {item}
                                    </span>
                                </Link>
                            })
                        }
                    </div>
                </nav>
            </header >
        </>
    );
}