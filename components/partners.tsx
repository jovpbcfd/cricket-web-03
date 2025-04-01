'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const officialPartnerLogos = [
    'partners/campa.webp',
    'partners/dazller.webp',
    'partners/highland.webp',
    'partners/dream11.webp',
    'partners/neo.webp',
    'partners/amul.webp',
    'partners/big-fm-logo.webp',
    'partners/district.webp',
    'partners/kingfisher.webp',
    'partners/real-cricket.webp',
    'partners/spinner.webp',
    'partners/t10.webp',
    'partners/tour-on.webp',
]
const principalPartnerLogos = [
    'principal-partners/all-seasons.webp',
    'principal-partners/avon.webp',
    'principal-partners/bkt.webp',
    'principal-partners/freemans.webp',
    'principal-partners/jio.webp',
    'principal-partners/kshema.webp',
    'principal-partners/valvoline.webp',
]

export default function Partners() {
    const marqueeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!marqueeRef.current) return
        const marquee = marqueeRef.current
        let start = Date.now()

        function animate() {
            const elapsed = Date.now() - start
            marquee.style.transform = `translateX(${-elapsed * 0.05}px)`
            if (elapsed * 0.05 > marquee.scrollWidth / 2) {
                start = Date.now()
            }
            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return (
        <div className="overflow-hidden relative w-full bg-white py-4">
            <div
                ref={marqueeRef}
                className="flex whitespace-nowrap gap-8"
                style={{ willChange: 'transform' }}
            >
                {[...officialPartnerLogos, ...principalPartnerLogos].map((logo, index) => (
                    <Image
                        key={index}
                        src={`/img/${logo}`}
                        alt="logo"
                        className="h-12 w-auto opacity-80 filter grayscale contrast-50"
                        width={155}
                        height={50}
                    />
                ))}
            </div>
        </div>
    )
}