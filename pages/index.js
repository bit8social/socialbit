import style from './style/module/index.module.css';
import Header from './component/Header';
import Linked from './component/Linked'

import Head from 'next/head';

export default function SocialBit() {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="https://github.com/bit8social/socialbit/blob/main/pages/assets/fav.png?raw=true" type="image/x-icon" />
                <title>SocialBit</title>
            </Head>

            <main className={style.mainapp}>
                <Header />
                <Linked />
            </main>
        </>
    );
}
