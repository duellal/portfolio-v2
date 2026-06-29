'use client'

import TypeIt from "typeit-react";


export default function HomeHero() {

    return (
        <div className="flex flex-wrap content-start mb-70">
            <div className="w-full">
                <h1
                    className="w-full name text-8xl tracking-wide font-bold bg-gradient-to-r from-purple-700 via-indigo-500 to-blue-700 bg-clip-text text-transparent"
                >
                    Alexandria Duell
                </h1>

                <h2
                    className="career w-full my-10 text-light-indigo text-5xl font-semibold tracking-wide"
                >
                    Software Engineer
                </h2>
            </div>

            <div className="sm-blurb w-full mt-30 justify-items-end text-justify text-xl">
                <TypeIt
                    as={'p'}
                    className="w-[60%]"
                    options={{
                        lifeLike: true,
                        speed: 40,
                        strings: 'Specializes in full-stack development while embracing opportunities to learn new technologies and encourage new ways of thinking.',
                        waitUntilVisible: true,
                        cursor: {
                            animation: {
                                options: {
                                    iterations: 3
                                }
                            }
                        },
                        afterComplete: inst => {
                            setTimeout(() => {
                                return inst.destroy()
                            }, 3000)
                        }
                    }}
                />
            </div>
        </div>
    );
}