export default function Hero({ blok }) {
  console.log(blok);
  return (
    <section className="flex flex-col max-w-screen-xl md:flex-row items-center justify-between py-12 px-6 md:px-16 ">
      <div className="md:w-1/2 mr-5">
        <h1 className="text-4xl font-bold mb-5">{blok.heading}</h1>
        <p className="text-lg text-gray-600 mb-6">{blok.description}</p>
        <button className="inline-block mb-10 bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors">
          {blok.button}
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center">
        {blok.image && (
          <img
            src={blok.image.filename}
            alt={blok.image.alt || "Image"}
            className="w-full max-w-md h-auto"
          />
        )}
      </div>
    </section>
  );
}
