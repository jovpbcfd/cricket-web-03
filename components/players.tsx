"use client";

import { Carousel } from "./ui/carousel";

export default function Players() {
    const slideData = [
        {
            name: "Glenn Maxwell",
            role: 'All-rounder',
            button: "Explore Component",
            src: "/img/players/players-bg.webp",
            thumbnail: '/img/players/player1.webp',
            matches: 135,
            runs: 2771,
            wickets: 31
        },
        {
            name: "Shashank Singh",
            role: 'Batter',
            button: "Explore Component",
            src: "/img/players/players-bg.webp",
            thumbnail: '/img/players/player2.webp',
            matches: 25,
            runs: 467,
            wickets: 1,
        },
        {
            name: "Nehal Wadhera",
            role: 'All-rounder',
            button: "Explore Component",
            src: "/img/players/players-bg.webp",
            thumbnail: '/img/players/player3.webp',
            matches: 20,
            runs: 350,
            wickets: 0
        },
        {
            name: "Marco Jansen",
            role: 'All-rounder',
            button: "Explore Component",
            src: "/img/players/players-bg.webp",
            thumbnail: '/img/players/player4.webp',
            matches: 22,
            runs: 66,
            wickets: 21
        },
        {
            name: "Marcus Stoinis",
            role: 'All-rounder',
            button: "Explore Component",
            src: "/img/players/players-bg.webp",
            thumbnail: '/img/players/player5.webp',
            matches: 97,
            runs: 1886,
            wickets: 43
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-2 md:pt-10 md:pb-20">
            <Carousel slides={slideData} />
        </div>
    );
}