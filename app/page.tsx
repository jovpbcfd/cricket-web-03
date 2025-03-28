import Image from "next/image";
import Partners from "@/components/partners";
import Matches from "@/components/matches";
import AboutUs from "@/components/about-us";
import Players from "@/components/players";

export default function Home() {
  return (
    <>
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

      <section>
        <div className="max-w-7xl mx-auto px-4 my-10">
          <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight text-center">Players</h2>
          <Players />
        </div>
      </section>
    </>
  );
}
