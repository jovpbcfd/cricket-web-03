import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
// import Image from "next/image";

const Content = () => {
    return (
        <>
            <div
                className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 md:p-10 rounded-3xl mb-4"
            >
                <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        Title
                    </span>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque excepturi blanditiis culpa maiores eligendi libero.
                </p>
            </div>
        </>
    );
};

const data = [
    {
        category: "Featured news",
        title: "Title",
        src: "/img/news/news1.webp",
        content: <Content />,
    },
    {
        category: "News",
        title: "Title",
        src: "/img/news/news2.webp",
        content: <Content />,
    },
    {
        category: "News",
        title: "Title",
        src: "/img/news/news3.webp",
        content: <Content />,
    },

    {
        category: "News",
        title: "Title",
        src: "/img/news/news4.webp",
        content: <Content />,
    },

];


export default function LatestNews() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));
    return (
        <div className="w-full h-full">
            <Carousel items={cards} />
        </div>
    )
}