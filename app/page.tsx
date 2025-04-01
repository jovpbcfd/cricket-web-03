import Partners from "@/components/partners";
import Matches from "@/components/matches";
import AboutUs from "@/components/about-us";
import Players from "@/components/players";
import LatestNews from "@/components/latest-news";
import Standings from "@/components/standings";

export default function Home() {
  return (
    <>
      <section className="mt-0 mb-2 md:my-5">
        <div className='bg-[url(/img/HERO-BANNER-WEBBP.webp)] bg-center bg-no-repeat w-full flex items-center h-[200px] md:h-[633px] md:items-start'>
          <div className="self-center text-center w-full md:px-8 md:w-[30%]">
            <h1 className="text-white font-[900] text-2xl uppercase md:text-5xl">Hero section title Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 my-10">
        <Partners />
      </section>

      <section className="bg-[#F5F5F5] py-1 md:py-5">
        <div className='max-w-7xl mx-auto px-4 my-10'>
          <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight text-black">Matches</h2>
          <Matches />
        </div>
      </section>

      <section className="py-1 md:py-5">
        <div className="max-w-7xl mx-auto px-4 my-10">
          <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight">About us</h2>
          <AboutUs />
        </div>
      </section>

      <section className="py-1 md:py-5">
        <div className="max-w-7xl mx-auto px-4 my-10">
          <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight">Latest News</h2>
          <LatestNews />
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-1 md:py-5">
        <div className="max-w-7xl mx-auto px-4 my-10">
          <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight text-center">Players</h2>
          <Players />
        </div>
      </section>

      <section className="py-1 md:py-5">
        <div className="max-w-7xl mx-auto px-4 my-10">
          <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight">Standings</h2>
          <Standings />
        </div>
      </section>
    </>
  );
}
