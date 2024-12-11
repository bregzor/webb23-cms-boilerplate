import Link from 'next/link';

export default function ImageBanner({ blok }) {
    // Access the URL from banner_button
    const buttonUrl = blok?.banner_button?.cached_url;

    return (
        <section className="relative w-full">
            {/* Banner Image */}
            <img
                src={blok.image_banner.filename}
                alt={blok.image_banner.alt || "Banner Image"}
                className="w-full h-auto max-h-[60vh] object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                <h1 className="text-white text-4xl font-bold mb-4">
                    {blok?.banner_title || "Your Banner Headline"}
                </h1>

                {buttonUrl ? (
                    <Link href={`/${buttonUrl}`}>
                        <button className="px-6 py-2 bg-white text-black border border-black rounded-none mb-6 shadow-[0_0_0_3px_white] transition-colors duration-300 hover:bg-black hover:text-white">
                            {blok?.button_text || "Click Here"}
                        </button>
                    </Link>
                ) : (
                    <button className="px-6 py-2 bg-white text-black border-2 border-black rounded-none mb-6 shadow-[0_0_0_4px_white]">
                        {blok?.banner_button_text || "Click Here"}
                    </button>
                )}
            </div>
        </section>
    );
}
