import styles from './index.module.css';
import Header from '../../components/Header/index.jsx';
import Carousel from '../../components/Carousel/index.jsx';
import logoBalsamiq from '../../assets/images/balsamiq_mockups_macos_bigsur_icon_190357.png';
import logoCss from '../../assets/images/css.png';
import logoFigma from '../../assets/images/figma.png';
import logoFirebase from '../../assets/images/google_firebase_icon-icons.com_61474.png';
import logoGithub from '../../assets/images/github-sign.png';
import logoHtml from '../../assets/images/html-5.png';
import logoJavascript from '../../assets/images/js.png';
import logoMySql from '../../assets/images/mysql.png';
import logoNetlify from '../../assets/images/file_type_netlify_icon_130354.png';
import logoPostgreSql from '../../assets/images/postgre.png';
import logoReact from '../../assets/images/react.png';
import logoStarUml from '../../assets/images/staruml_94078.png';
import logoVScode from '../../assets/images/visual-studio.png';
import logoWix from '../../assets/images/wix.png';
import logoWordpress from '../../assets/images/wordpress-logo.png';
import logoChatGpt from '../../assets/images/chatgpt-icon.png';

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
                  • Référent digital / certifications Wordpress & méthodes Agiles.
                  <br /> • Développeur web Java ( niveau 5 ).
                  <br /> • Concepteur développeur d'applications ( niveau 6 ).
                  <br /> • Développeur d'application - JavaScript React ( niveau 6 ).
                </p>
                <p>N'hésitez pas à me contacter pour de plus amples informations.</p>
              </div>
              <div className={styles.containerIcn}>
                <div className={styles.techContainer}>
                  <img src={logoHtml} alt='logo Html' className={styles.logoTech} />
                  <span>Html</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoCss} alt='logo Css' className={styles.logoTech} />
                  <span>Css</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoJavascript} alt='logo Javascript' className={styles.logoTech} />
                  <span>Javascript</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoVScode} alt='logo VScode' className={styles.logoTech} />
                  <span>Visual Studio code</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoReact} alt='logo React' className={styles.logoTech} />
                  <span>React</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoGithub} alt='logo Github' className={styles.logoTech} />
                  <span>Github</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoNetlify} alt='logo Netlify' className={styles.logoTech} />
                  <span>Netlify</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoFirebase} alt='logo Firebase' className={styles.logoTech} />
                  <span>Firebase</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoMySql} alt='logo My Sql' className={styles.logoTech} />
                  <span>MySql</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoPostgreSql} alt='logo Postgre Sql' className={styles.logoTech} />
                  <span>PostgreSql</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoChatGpt} alt='logo Chat Gpt' className={styles.logoTech} />
                  <span>Chat GPT</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoBalsamiq} alt='logo Balsamiq' className={styles.logoTech} />
                  <span>Balsamiq</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoFigma} alt='logo Figma' className={styles.logoTech} />
                  <span>Figma</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoStarUml} alt='logo Star Uml' className={styles.logoTech} />
                  <span>Star Uml</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoWordpress} alt='logo Wordpress' className={styles.logoTech} />
                  <span>Wordpress</span>
                </div>
                <div className={styles.techContainer}>
                  <img src={logoWix} alt='logo Wix' className={styles.logoTech} />
                  <span>Wix</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
