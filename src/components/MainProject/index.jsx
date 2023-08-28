import style from './index.module.css';
import TextSectionMain from '../TextSectionMain';

export default function MainProject() {
  return (
    <>
      <div className={style.layout}>
        <div className='leftSection'>
          <h2>Projet développé dans les conditions d'entreprise</h2>
          <TextSectionMain />
        </div>
        <div className='rightSection'></div>
      </div>
    </>
  );
}
