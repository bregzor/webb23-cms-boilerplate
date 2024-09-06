import Link from 'next/link';
import Header from '../nestable/Header';

export default function Layout({ config, children }) {
    return (
        <>  
            <Header config={config} />
            <main>{children}</main>
        </>
    );
}
