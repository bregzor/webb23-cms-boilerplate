import Link from 'next/link';
import "../../styles/global.css"

export default function Header({ config }) {
    if (!config) return null;

    const configContent = config.content;
    const logotype = configContent?.logotype?.filename;

    return (
        <header className="header">
            {logotype && <img src={logotype} alt="Logo" className="logo" />}
            <nav className="nav">
                {configContent?.nav?.map((storylink, index) => (
                    <Link key={index} href={`/${storylink.link.story.slug}`}>
                        <p className="nav-link"> {storylink.link.story.name}</p>
                    </Link>
                ))}
            </nav>
        </header>
    );
}
