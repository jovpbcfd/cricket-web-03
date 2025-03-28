import Image from "next/image"

export default function AboutUs() {
    return (
        <>
            <div className="text-center mx-auto">
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                    <div className="w-full">
                        <p>
                            Pellentesque mollis urna vel semper egestas. Duis ac dictum lacus.
                            Sed sagittis non nunc ac malesuada. Quisque ut eleifend urna. Etiam
                            nec porttitor erat, vel ullamcorper erat.
                        </p>
                        <p>
                            Pellentesque mollis urna vel semper egestas. Duis ac dictum lacus.
                            Sed sagittis non nunc ac malesuada. Quisque ut eleifend urna. Etiam
                            nec porttitor erat, vel ullamcorper erat.
                        </p>
                        <p>
                            Pellentesque mollis urna vel semper egestas. Duis ac dictum lacus.
                            Sed sagittis non nunc ac malesuada. Quisque ut eleifend urna. Etiam
                            nec porttitor erat, vel ullamcorper erat.
                        </p>
                    </div>
                    <div className="w-full">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                            libero placeat quaerat voluptatum deserunt voluptas itaque beatae
                            tempora! Quam ad fugit similique, fugiat ipsum a? Fugiat qui eius
                            doloremque omnis architecto illo dolor suscipit quia ab in. Alias
                            aliquid quasi molestias quibusdam dolore ipsa, vitae laborum cum est
                            ut? Libero?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                            consectetur nihil voluptatem eveniet asperiores dolor sint neque
                            facilis consequuntur! Ipsam obcaecati vitae delectus accusantium
                            earum sunt eveniet cupiditate totam ut minima, quisquam nemo facere,
                            molestias labore incidunt ad laboriosam nam?
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                    <Image
                        src="/img/about-us.webp"
                        alt="Cricket stadium"
                        width={608}
                        height={331}
                        className="w-full rounded-lg shadow-lg"
                    />
                    {/* <button className="absolute inset-0 flex items-center justify-center">
                    </button> */}
                    <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-md">
                        <p className="text-sm font-semibold">"Lorem ipsum, dolor sit"</p>
                        <span className="text-xs text-gray-500">Cricket Stadium</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold">We empower small business owners</h3>
                    <p className="mt-4 text-gray-600">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam.
                    </p>
                    <blockquote className="mt-6 border-l-4 border-yellow-400 pl-4 italic text-gray-700">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore."
                    </blockquote>
                </div>
            </div>
        </>
    )
}