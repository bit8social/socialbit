import style from '../../style/module/hero.module.css';
import Link from "next/link";

export default function Box({ titleProps, labelBox, idLabelBox, IconBox, idIcon, idBox, URLRoute }) {
  return (
      <Link className={style.box_single} id={idBox} href={URLRoute || "www.github.com"} title={titleProps || "Socialbit 'Links'"}>
        <IconBox className={style.iconbox} id={idIcon} />
        <div className={style.labels}>
          <span className={style.label_}>{labelBox || "####Label Não definido"}</span>
          <span className={style.labelbox}>{idLabelBox || ''}</span>
        </div>
      </Link>
  );
}