import Image from "next/image";

import { liveMatches } from "@/data/matches";

export default function Matches() {
    return (
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5'>
            {liveMatches.map((match) => (
                <div key={match.matchNumber} className="shadow-md bg-[#fff] overflow-hidden rounded-md">
                    <div className="bg-[#ED1C24] flex items-center text-white justify-between p-1 md:p-2">
                        <p className="font-bold">{match.date}</p>
                        <p className="font-bold">Recent</p>
                    </div>
                    <div className="text-center md:py-2">
                        <div className="my-2">
                            <span className="mr-1">April 01</span>|<span className="ml-1">20:04 IST</span>
                            <p>{match.venue}</p>
                        </div>
                        <div className="flex items-center justify-between p-[15px] md:justify-center md:gap-10">
                            <div className="text-center flex flex-col items-center">
                                <div className="bg-[#f4f4f4] w-[70px] h-[70px] rounded-full flex items-center justify-center">
                                    <Image src={`${match.teams[0].banner}`} width={50} height={50} alt={match.teams[0].name} className='mx-auto' />
                                </div>
                                <p className='text-center leading-5 md:mt-2 md:text-md md:uppercase'>
                                    <span className='block'>{match.teams[0].name.split(' ')[0]}</span>
                                    <span>{match.teams[0].name.split(' ')[1]}</span>
                                </p>
                            </div>
                            <div className="relative flex items-center">
                                <div className="w-px h-16 bg-gray-300"></div>
                                <span className="absolute left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">VS</span>
                            </div>
                            <div className="text-center flex flex-col items-center">
                                <div className="bg-[#f4f4f4] w-[70px] h-[70px] rounded-full flex items-center justify-center">
                                    <Image src={`${match.teams[1].banner}`} width={50} height={50} alt={match.teams[1].name} className='mx-auto' />
                                </div>
                                <p className='text-center leading-5 md:mt-2 md:text-md md:uppercase'>
                                    <span className='block'>{match.teams[1].name.split(' ')[0]}</span>
                                    <span>{match.teams[1].name.split(' ')[1]}</span>
                                </p>
                            </div>
                        </div>
                        <div className="p-[15px] ">
                            <div className="border-t-1 border-gray-200">
                                <p className="py-2 md:py-3">Match begins at {match.startTime}</p>
                            </div>
                            <button className="w-full border border-gray-200 py-2 cursor-pointer duration-300 ease-in hover:text-white hover:bg-red-500 md:w-[70%]">
                                Match center
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}