import Link from 'next/link';

import logoImg from '@/assets/logo.png';

export default function MainHeader() {
    return <header>
        <Link href="/">
        <img src={logoImg.src} alt="a place with food on it" />
        nextLevel Food
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href="/meals">
                    Browse Meals
                    </Link>
                </li>
               
                <li>
                    <Link href="/community">
                   Foodies Community
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}