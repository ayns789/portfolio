import style from './index.module.css';
import { TiInputChecked } from 'react-icons/ti';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

export default function TextSectionMain() {
  return (
    <div>
      <p className={style.parag}>
        <span className={style.titleParag}>Écosystème : </span>
        <br />
        <span className={style.icnArrow}>
          <HiOutlineArrowSmRight />
          React
        </span>
        <span className={style.icnArrow}>
          <HiOutlineArrowSmRight />
          Context
        </span>
        <span className={style.icnArrow}>
          <HiOutlineArrowSmRight />
          React router
        </span>
        <span className={style.icnArrow}>
          <HiOutlineArrowSmRight />
          Styled components
        </span>
      </p>
      <p>
        <span className={style.titleParag}>Inclus : </span>
        <br />
        <span className={style.icnCheck}>
          <TiInputChecked />
          Utilisation de Trello / Figma.
        </span>
        <span className={style.icnCheck}>
          <TiInputChecked />
          Réalisation selon maquette / tickets respectés.
        </span>
        <span className={style.icnCheck}>
          <TiInputChecked />
          Création d'un design system pour utilisation avec Styled Components.
        </span>
        <span className={style.icnCheck}>
          <TiInputChecked />
          Git versionning professionnel ( git --amend, git log, git diff, git rebase interractive,
          git stash / git reset ... ).
        </span>
        <span className={style.icnCheck}>
          <TiInputChecked />
          Composants réutilisables.
        </span>
        <span className={style.icnCheck}>
          <TiInputChecked />
          Clean code / refactor.
        </span>
        <span className={style.icnCheck}>
          <TiInputChecked />
          Rendu des liens PR et build sur les tickets Trello.
        </span>
        <span className={style.icnCheck}>
          <TiInputChecked />
          Process de validation / intégration, après vérification maquette et règles métiers.
        </span>
      </p>
    </div>
  );
}
