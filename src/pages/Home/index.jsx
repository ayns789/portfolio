import styles from './index.module.css';
import Header from '../../components/Header/index.jsx';
import Carousel from '../../components/Carousel/index.jsx';
import logoBalsamiq from '../../assets/images/balsamiq_mockups_macos_bigsur_icon_190357.png';
import logoCss from '../../assets/images/css.png';
import logoFigma from '../../assets/images/figma.png';
import logoFirebase from '../../assets/images/firebase_logo_icon_168209.png';
import logoGithub from '../../assets/images/github-sign.png';
import logoHtml from '../../assets/images/html-5.png';
import logoJavascript from '../../assets/images/js.png';
import logoMySql from '../../assets/images/mysql.png';
import logoNetlify from '../../assets/images/netlify_logo_icon_169924.png';
import logoPostgreSql from '../../assets/images/postgre.png';
import logoReact from '../../assets/images/react.png';
import logoStarUml from '../../assets/images/staruml_94078.png';
import logoVScode from '../../assets/images/visual-studio.png';
import logoWix from '../../assets/images/wix.png';
import logoWordpress from '../../assets/images/wordpress-logo.png';

const Home = () => {
  return (
    <>
      <div className={styles.contentHome}>
        <Header />
        <section className={styles.contentDownSection}>
          <div className={styles.boxDown}>
            <div className={styles.partSlide}>
              <Carousel />
            </div>
            <div className={styles.partText}>
              {/* <div className={styles.popup}>
                <img src={logoTech} alt='' className={styles.partTextImg} />
              </div> */}
              <h2>À propos</h2>
              <div className={styles.boxText}>
                <p>
                  Après m’être adonné à différentes disciplines dans ma vie active, j'ai porté un
                  intérêt accru à l'univers du numérique en 2017.
                </p>

                <p>
                  Depuis lors, j'ai approfondi mes connaissances dans ce domaine à travers un
                  programme de formation spécialisé comprenant les éléments suivants :
                </p>

                <p>
                  • Référent digital / certifications Wordpress & méthodes Agiles
                  <br /> • Développeur web Java ( niveau 5 )<br /> • Concepteur développeur
                  d'applications ( niveau 6 )<br /> • Développeur d'application - JavaScript React (
                  niveau 6 )
                </p>
                <p>N'hésitez pas à me contacter pour de plus amples informations.</p>
              </div>
              <div className={styles.popup}>
                {/* <img src={logoTech} alt='' className={styles.partTextImg} /> */}
                <img src={logoHtml} alt='logo Html' className={styles.logoTech} />
                <img src={logoCss} alt='logo Css' className={styles.logoTech} />
                <img src={logoJavascript} alt='logo Javascript' className={styles.logoTech} />
                <img src={logoVScode} alt='logo VScode' className={styles.logoTech} />
                <img src={logoReact} alt='logo React' className={styles.logoTech} />
                <img src={logoGithub} alt='logo Github' className={styles.logoTech} />
                <img src={logoNetlify} alt='logo Netlify' className={styles.logoTech} />
                <img src={logoFirebase} alt='logo Firebase' className={styles.logoTech} />
                <img src={logoMySql} alt='logo MySql' className={styles.logoTech} />
                <img src={logoPostgreSql} alt='logo PostgreSql' className={styles.logoTech} />
                <img src={logoBalsamiq} alt='logo Balsamiq' className={styles.logoTech} />
                <img src={logoFigma} alt='logo Figma' className={styles.logoTech} />
                <img src={logoStarUml} alt='logo StarUml' className={styles.logoTech} />
                <img src={logoWordpress} alt='logo Wordpress' className={styles.logoTech} />
                <img src={logoWix} alt='logo Wix' className={styles.logoTech} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
