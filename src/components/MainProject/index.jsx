import style from './index.module.css';
import TextSectionMain from '../TextSectionMain';
import Image1 from '../../assets/images/ecran1.png';
import Image2 from '../../assets/images/ecran2.png';

export default function MainProject() {
  return (
    <>
      <div className={style.cardLabel} data-label='In Progress'>
        <div className={style.layout}>
          <h2 className={style.h2Layout}>Projet incluant les best practices d'entreprise</h2>
          <div className={style.globalContent}>
            <TextSectionMain />
            <div className={style.rightBox}>
              <div className={style.imgBox}>
                <img src={Image1} alt='website ecran 1' className={style.imgMainProject} />
                <img src={Image2} alt='website ecran 2' className={style.imgMainProject} />
              </div>
              <div className={style.btnBox}>
                <a
                  href='https://github.com/ayns789/crazee-burger'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className={'button'}>Voir le code</button>
                </a>
                <a
                  href='https://github.com/ayns789/crazee-burger/pulls?q=is%3Apr+is%3Aclosed'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className={'button'}>Voir les PR</button>
                </a>
                <a
                  href='https://ayns-build-crazee-burger.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className={'button'}>Visiter le site</button>
                </a>
              </div>
            </div>
          </div>
          <div className={style.rightSection}></div>
        </div>
      </div>
    </>
  );
}
