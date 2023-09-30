import style from '../style/module/index.module.css'
import Header from './component/Header'
import Head from 'next/head';

export default function SocialBit() {
    return (
        <>
            <Head>
                <title>SocialBit - Links</title>
            </Head>
            <main className={style.mainapp}>
                <Header/>
            </main>
        </>
    );   
}