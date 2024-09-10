import Link from 'next/link';

export default function Hero({ blok }) {
    return (
        <section className="w-full bg-blue p-16 flex flex-col items-center mb-16"> {/* Added mb-16 */}
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-5xl font-bold text-black mb-4">{blok?.headline}</h1>
                <p className="text-xl text-gray-500 mb-6">{blok?.desc}</p>
                {blok?.button_link_url?.cached_url ? (
                    <Link href={`/${blok.button_link_url.cached_url}`}>
                        <button className="px-6 py-2 bg-white text-black border border-black rounded-none mb-6 transition-colors duration-300 hover:bg-black hover:text-white">
                            {blok?.button_text || "Shop all!"}
                        </button>
                    </Link>
                ) : (
                    <button className="px-6 py-2 bg-white text-black border border-black rounded-none mb-6">
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
