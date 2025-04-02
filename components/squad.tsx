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

export default function SquadDetails({ players }: { players: PlayerDetail }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border border-[#f5f5f5] shadow-lg">
                <thead className="bg-[#460607] text-white border-b-4 border-[#FFDEAD]">
                    <tr>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-center">M</th>
                        <th className="p-3 hidden md:table-cell">R</th>
                        <th className="p-3 hidden md:table-cell">Batting Avg</th>
                        <th className="p-3 hidden md:table-cell">W</th>
                        <th className="p-3 hidden md:table-cell">E/R</th>
                    </tr>
                </thead>
                <tbody>
                    {players?.squads?.map((player) => (
                        <tr key={player.name} className="border-b border-gray-200 hover:bg-[#5A0000]/53 hover:text-white">
                            <td className="p-3 flex items-center space-x-2">
                                <span>{player.name}</span>
                            </td>
                            <td className="p-3 text-center hidden md:table-cell">{player.M}</td>
                            <td className="p-3 text-center hidden md:table-cell">{player.R}</td>
                            <td className="p-3 text-center hidden md:table-cell">{player.BattingAvg}</td>
                            <td className="p-3 text-center hidden md:table-cell">{player.W}</td>
                            <td className="p-3 text-center hidden md:table-cell">{player.ER}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
} 