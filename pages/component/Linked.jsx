// Icons 
import { AiFillYoutube, AiFillRead, AiFillGithub } from 'react-icons/ai'
import { GiGalaxy } from 'react-icons/gi'
import { BsMailbox2, BsDiscord } from 'react-icons/bs'
//

import style from '../../style/module/hero.module.css';
import s from '../../style/module/animations/hoverfile.module.css'
import Box from './subcomponent/Box'

export default function Hero() {
    return (
        <>
            <div className={style.categoria}>
                <div className={style.title}><h3>Mídias sociais</h3></div>
                <Box labelBox={"Youtube"} titleProps={"Youtube - Socialbit"} idLabelBox={"@bit8social"} IconBox={AiFillYoutube} idBox={s.boxyt} idIcon={s.iconyt} URLRoute={'https://www.youtube.com/@bit8social'}/>
                <Box labelBox={"Github"} titleProps={"Github - Socialbit"} idLabelBox={"/bit8social"} IconBox={AiFillGithub} idBox={s.boxgit} idIcon={s.icongithub} URLRoute={'https://github.com/bit8social'}/>
                <Box labelBox={"Discord"} titleProps={"Discord - Socialbit"} idLabelBox={"SocialBit"} IconBox={BsDiscord} idBox={s.boxdc} idIcon={s.icondc} URLRoute={'https://discord.gg/sbPsHkfd2s'}/>
            </div>

            <div className={style.categoria}>
                <div className={style.title}><h3>Livros & Artigos</h3></div>
                <Box labelBox={"The Development of C"} titleProps={"The Development of the C Language"} IconBox={AiFillRead} idIcon={s.icon_c} idBox={s.boxClang} URLRoute={'https://www.bell-labs.com/usr/dmr/www/chist.pdf'}/>
                <Box labelBox={"C for Dummies"} titleProps={"C para Idiotas"} IconBox={GiGalaxy} idIcon={s.icon_cleancode}  idBox={s.boxCleanCode} URLRoute={'https://www.cl72.org/070documents/C/For%20Dummies%20-%20C.pdf'}/>
                <Box labelBox={"Clean Code"} titleProps={"Clean Code"} IconBox={GiGalaxy} idIcon={s.icon_cleancode}  idBox={s.boxCleanCode} URLRoute={'/'}/>
                <Box labelBox={"Clean Code"} titleProps={"Clean Code"} IconBox={GiGalaxy} idIcon={s.icon_cleancode}  idBox={s.boxCleanCode} URLRoute={'/'}/>
                <Box labelBox={"Clean Code"} titleProps={"Clean Code"} IconBox={GiGalaxy} idIcon={s.icon_cleancode}  idBox={s.boxCleanCode} URLRoute={'/'}/>
            </div>

            <div className={style.categoria}>
                <div className={style.title}><h3>Contato</h3></div>
                <Box labelBox={"E-mail | SocialBit"} titleProps={"bit8social@gmail.com"} IconBox={BsMailbox2} idIcon={s.icon_email} idBox={s.email} URLRoute={'mailto:bit8social@gmail.com'}/>
                <Box labelBox={"E-mail | Pessoal"} titleProps={"bit8social@gmail.com"} IconBox={BsMailbox2} idIcon={s.icon_email} idBox={s.email} URLRoute={'mailto:bit8social@gmail.com'}/>
            </div>
        </>
    );
}