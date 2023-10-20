import style from '../style/module/header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className={style.headerapp}>
                <nav className={style.navbar}>
                    <Link title="SocialBit" className={style.box} href="https://github.com/bit8social">
                        <div className={style.imgLogoCanal}></div>
                    </Link>

                    <h3 className={style.logoapp}>
                        S<span style={{ color: "#FDF300" }}>0</span>cialB<span style={{ color: "#FDF300" }}>1</span>t
                    </h3>

                    <h3 className={style.logomobile}>
                        <span>01</span>
                    </h3>

                    <Link title="Luan" className={style.box} href="https://github.com/Luan16p">
                        <div className={style.imgLogoPessoal}></div>
                    </Link>
                </nav>
            </header>
        </>
    );
}