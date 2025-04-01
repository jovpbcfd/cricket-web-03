import Image from "next/image";

export default function Standings() {
    const teams = [
        { pos: 1, name: "Royal Challengers Bengaluru", logo: "/img/teams/rcb.webp", pld: 2, netRR: '+2.226', },
        { pos: 2, name: "Delhi Capitals", logo: "/img/teams/delhi-capitals.webp", pld: 1, netRR: '+1.320' },
        { pos: 3, name: "Lucknow Super Giants", logo: "/img/teams/lucknow-super-giants.webp", pld: 3, netRR: '+0.963' },
        { pos: 4, name: "Gujarat Titans", logo: "/img/teams/gujarat-titans.webp", pld: 3, netRR: '+0.625' },
        { pos: 5, name: "Punjab Kings", logo: "/img/teams/punjab-kings.webp", pld: 3, netRR: '+0.550' },
        { pos: 6, name: "Mumbai Indians", logo: "/img/teams/mumbai-indians.webp", pld: 3, netRR: '+0.309' },
        { pos: 7, name: "Chennai Super Kings", logo: "/img/teams/chennai-super-kings.webp", pld: 2, netRR: '+0.771' },
        { pos: 8, name: "Sunrisers Hyderabad", logo: "/img/teams/sun-risers.webp", pld: 2, netRR: '-0.871' },
        { pos: 9, name: "Rajasthan Royals", logo: "/img/teams/rajasthan-royals.webp", pld: 2, netRR: '-1.112' },
        { pos: 10, name: "Kolkata Knight Riders", logo: "/img/teams/knight-riders.webp", pld: 2, netRR: '-1.428' },
    ];

    return (
        <div className="overflow-x-auto md:p-4">
            <table className="w-full border border-[#f5f5f5] shadow-lg">
                <thead className="bg-[#5A0000] text-white border-b-4 border-[#f3dc8a]">
                    <tr>
                        <th className="p-3">Pos</th>
                        <th className="p-3 text-left">Teams</th>
                        <th className="p-3 hidden md:table-cell">PLD</th>
                        <th className="p-3 hidden md:table-cell">NET RR</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.pos} className="border-b border-gray-200 hover:bg-[#5A0000]/53 hover:text-white">
                            <td className="p-3 text-center">{team.pos}</td>
                            <td className="p-3 flex items-center space-x-2">
                                <Image src={team.logo} alt={team.name} width={30} height={30} className="w-auto h-auto" />
                                <span>{team.name}</span>
                            </td>
                            <td className="p-3 text-center hidden md:table-cell">{team.pld}</td>
                            <td className="p-3 text-center hidden md:table-cell">{team.netRR}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}