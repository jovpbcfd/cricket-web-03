import { liveMatches } from '@/data/matches'
import MatchesItem from '@/components/matches-item'
import MatchesItemTab from '@/components/matches-item-tab'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const matches = liveMatches.find((match) => match.id === id)
    return (
        <>
            <section>
                <MatchesItem matches={matches} />
            </section>
            <section>
                <MatchesItemTab matches={matches} />
            </section>
        </>
    )
}