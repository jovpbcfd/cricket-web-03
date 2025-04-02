"use client";

import { useEffect, useState } from "react";
import { teamSquad } from "@/data/matches";
import SquadDetails from "./squad";

type Matches = {
    id: string;
    matchNumber: number;
    teams: {
        id: string;
        name: string;
        banner: string;
    }[];
    date: string;
    time: string;
    startTime: string;
    venue: string;
} | undefined

type PlayerDetail = {
    id: string;
    squads: Squad
} | undefined

type Squad = {
    name: string,
    M: number,
    R: number,
    BattingAvg: number,
    W: number,
    ER: number
}[] | undefined

export default function MatchesItemTab({ matches }: {
    matches: Matches
}) {
    const mainTabs = ["Match Info", "Squads",];
    const subTabs = [matches?.teams[0].name, matches?.teams[1].name];

    const [activeMainTab, setActiveMainTab] = useState(1);
    const [activeSubTab, setActiveSubTab] = useState(0);
    const [players, setPlayers] = useState<PlayerDetail>()

    const details = [
        { label: "Match", value: `Match ${matches?.matchNumber}` },
        { label: "Venue", value: matches?.venue },
        { label: "Date & Time", value: `${matches?.date} | ${matches?.time}` },
        { label: "Start Time", value: matches?.startTime },
    ];

    const handlePlayers = (index: number) => {
        const id = matches?.teams[index].id
        const detail = teamSquad.find((team) => team.id === id)

        setPlayers(detail)
        setActiveSubTab(index)
    }

    useEffect(() => {
        function init() {
            const id = matches?.teams[0].id
            const detail = teamSquad.find((team) => team.id === id)
            setPlayers(detail)
        }

        init()

        return () => init()
    }, [])

    return (
        <div className="px-4 py-8 md:max-w-7xl md:mx-auto">
            <div className="flex justify-between bg-gray-100 p-2 rounded-lg">
                {mainTabs.map((tab, index) => (
                    <button
                        key={tab}
                        onClick={() => setActiveMainTab(index)}
                        className={`flex-1 px-4 py-2 text-center text-sm font-semibold transition-all cursor-pointer ${activeMainTab === index
                            ? "bg-[#FFDEAD] text-black rounded-lg"
                            : "text-gray-500"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            {activeMainTab === 1 && (
                <>
                    <div className="flex justify-between mt-4 text-sm font-semibold">
                        {subTabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => handlePlayers(index)}
                                className={`bg-[#460607] text-white p-4 w-[30%]  transition-all cursor-pointer hover:bg-[#460607]/90  ${activeSubTab === index ? "text-black" : "text-gray-500"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="relative mt-1 h-1 bg-gray-300">
                        <div
                            className="absolute h-1 bg-[#FFDEAD] transition-all"
                            style={{
                                width: "50%",
                                transform: `translateX(${activeSubTab * 100}%)`,
                            }}
                        />
                    </div>
                </>
            )}
            <div className="mt-4">
                {activeMainTab === 1 ? (
                    <SquadDetails players={players} />
                ) : (
                    <div className="bg-gray-100 p-4 rounded-md">
                        <table className="w-full border-collapse">
                            <tbody>
                                {details.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-300">
                                        <td className="p-3 font-semibold text-gray-600">{item.label}</td>
                                        <td className="p-3 text-gray-800">{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}