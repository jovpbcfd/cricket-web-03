'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from './breadcrumb'

function Menu() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

function Close() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header className="bg-[#ED1C24] shadow-md">
                <div className="max-w-7xl mx-auto py-2 px-2 md:px-0">
                    <div className="flex items-center justify-between md:justify-normal md:gap-10">
                        <Link href="/">
                            <Image src="/img/logo.webp" height={80} width={80} alt="Logo" />
                        </Link>
                        <nav className="hidden md:self-end md:my-2 md:flex md:w-full md:justify-between">
                            <div className="flex space-x-6">
                                <Link href="/" className="text-white hover:text-white/50">
                                    Home
                                </Link>
                                <Link href="/news" className="text-white hover:text-white/50">
                                    News
                                </Link>
                                <Link href="/matches" className="text-white hover:text-white/50">
                                    Matches
                                </Link>
                            </div>
                            <div className="text-[#FFDEAD]">
                                <button>Sign Up</button>
                                <span className="mx-2">|</span>
                                <button>Log In</button>
                            </div>
                        </nav>

                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
                            {isOpen ? <Close /> : <Menu />}
                        </button>
                    </div>
                    {isOpen && (
                        <nav className="md:hidden bg-[#ED1C24] border-b-8 border-[#FFDEAD] shadow-md absolute w-full left-0 top-26 flex flex-col space-y-4 p-4 z-1">
                            <Link
                                href="/"
                                className="text-white hover:text-white/50"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/news"
                                className="text-white hover:text-white/50"
                                onClick={() => setIsOpen(false)}
                            >
                                News
                            </Link>
                            <Link
                                href="/matches"
                                className="text-white hover:text-white/50"
                                onClick={() => setIsOpen(false)}
                            >
                                Matches
                            </Link>
                        </nav>
                    )}
                </div>
                <div className='h-2 w-full md:block md:bg-[#FFDEAD]'></div>
            </header>
            <Breadcrumb />
        </>
    )
}