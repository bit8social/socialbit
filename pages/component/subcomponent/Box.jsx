import style from '../../style/module/hero.module.css';
import Link from "next/link";

export default function Box({ titleProps = "Socialbit 'Links'", labelBox = "####Label Não definido", idLabelBox, IconBox, idIcon, idBox, URLRoute }) {
  return (
    <>
      <Link className={style.box_single} id={idBox} href={URLRoute || "www.github.com"} title={titleProps}>
        <IconBox className={style.iconbox} id={idIcon} />
        <div className={style.labels}>
          <span className={style.label_}>{labelBox}</span>
          <span className={style.labelbox}>{idLabelBox || null}</span>
        </div>
      </Link>
    </>
  );
}