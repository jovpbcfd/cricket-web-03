import Image from 'next/image'

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

export default function MatchesItem({ matches }: {
    matches: Matches
}) {
    return (
        <div className="bg-[#460607] px-4 py-8 m-2 rounded-lg border-4 border-[#FFDEAD] md:max-w-7xl md:mx-auto">
            <div className="flex flex-col items-center m-2 gap-2 md:gap-4 md:mx-2 justify-center">
                <div className='border-b-1 border-[#FFDEAD] pb-2'>
                    <p className='uppercase text-xs text-white'>{matches?.venue}</p>
                </div>
                <div className='flex items-center justify-center gap-3 text-white md:gap-20'>
                    <div>
                        <Image src={`${matches?.teams[0].banner}`} width={100} height={100} alt='Team one' className='mx-auto' />
                        <p className='text-center leading-5 md:text-md md:uppercase'>
                            <span className='block'>{matches?.teams[0].name.split(' ')[0]}</span>
                            <span>{matches?.teams[0].name.split(' ')[1]}</span>
                        </p>
                    </div>
                    <div>
                        <Image src="/img/vs-gold.webp" width={80} height={80} alt='versus' />
                    </div>
                    <div>
                        <Image src={`${matches?.teams[1].banner}`} width={100} height={100} alt='Team two' className='mx-auto' />
                        <p className='text-center leading-5 md:text-md md:uppercase'>
                            <span className='block'>{matches?.teams[1].name.split(' ')[0]}</span>
                            <span>{matches?.teams[1].name.split(' ')[1]}</span>
                        </p>
                    </div>
                </div>
                <div className="mt-5 text-[#000] text-center bg-[#FFDEAD] p-2 rounded-md md:p-4 md:mt-10">
                    <p className={`uppercase tracking-tight fonb-bold`}>Match begins at</p>
                    <p>{matches?.startTime}</p>
                </div>
            </div>
        </div>
    )
}