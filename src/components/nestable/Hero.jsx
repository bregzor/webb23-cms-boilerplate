import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero({ blok }) {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
    }, []);

    return (
        <section
            className="w-full bg-blue p-16 flex flex-col items-center justify-center mb-16"
            style={{ height: `calc(100vh - ${headerHeight}px)`, paddingBottom: '2rem' }} // Set height to full viewport minus header height and add padding-bottom
        >
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-5xl font-bold text-black mb-2">{blok?.headline}</h1> {/* Reduced margin-bottom */}
                <p className="text-xl text-gray-500 mb-4">{blok?.desc}</p> {/* Reduced margin-bottom */}
                {blok?.button_link_url?.cached_url ? (
                    <Link href={`/${blok.button_link_url.cached_url}`}>
                        <button className="px-6 py-2 bg-white text-black border border-black rounded-none mb-4 transition-colors duration-300 hover:bg-black hover:text-white"> {/* Reduced margin-bottom */}
                            {blok?.button_text || "Shop all!"}
                        </button>
                    </Link>
                ) : (
                    <button className="px-6 py-2 bg-white text-black border border-black rounded-none mb-4"> {/* Reduced margin-bottom */}
                        {blok?.button_text || "Shop all!"}
                    </button>
                )}
            </div>
            {blok?.image?.[0]?.filename && (
                <div className="w-full max-w-4xl mx-auto">
                    <img
                        src={blok.image[0].filename}
                        alt={blok?.image[0].alt || "Hero Image"}
                        className="w-full h-auto max-h-90 object-cover"
                        style={{ aspectRatio: '16 / 9' }}  // Adjust the ratio to fit your needs
                    />
                </div>
            )}
        </section>
    );
}