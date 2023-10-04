import style from '../../style/module/hero.module.css';
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            <div className={style.boxes}>
                <Link className={style.box_single} href="/">
                    aaaa
                </Link>
            </div>
        </>
    );
}