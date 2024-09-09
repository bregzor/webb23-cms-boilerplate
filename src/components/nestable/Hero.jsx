export default function Hero({ blok }) {
    console.log("anything?", blok)
    return (
        <section className="w-full bg-blue">
            <h1>{blok?.headline}</h1>
            <p>{blok?.desc}</p>
        </section>
    )
}