import styles from './index.module.css';
import Header from '../../components/Header/index.jsx';
import Carousel from '../../components/Carousel/index.jsx';
// import TextScramble from '../../utils/TextScramble.js';
import logoTech from '../../assets/images/logoTech.png';

const Home = () => {
  // ——————————————————————————————————————————————————
  // TextScramble
  // ——————————————————————————————————————————————————

  //   const [textScramble, setTextScramble] = useState('');
  //   let chars = '!<>-_\\/[]{}—=+*^?#________';
  //   const phrases = [
  //     'Balsamiq / Marvel App / Figma',
  //     'Star Uml / Power Amc',
  //     'Wix / Wordpress',
  //     'HTML / CSS / Javascript',
  //     'React / Redux Toolkit',
  //     'CryptoJs / Recharts',
  //     'Firebase / Netlify',
  //     'MySql Workbench / PostgreSql',
  //   ];

  //   function scrambleText() {
  //     let phraseIndex = 0;
  //     let charIndex = 0;
  //     let newText = '';

  //     const scrambleInterval = setInterval(() => {
  //       newText = phrases[phraseIndex].slice(0, charIndex);
  //       for (let i = charIndex; i < phrases[phraseIndex].length; i++) {
  //         newText += chars[Math.floor(Math.random() * chars.length)];
  //       }
  //       setTextScramble(newText);

  //       charIndex++;
  //       if (charIndex > phrases[phraseIndex].length) {
  //         phraseIndex++;
  //         charIndex = 0;
  //         if (phraseIndex >= phrases.length) {
  //           clearInterval(scrambleInterval);
  //           setTextScramble(phrases[phrases.length - 1]);
  //         }
  //       }
  //     }, 50);
  //   }

  //   useEffect(() => {
  //     scrambleText();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   function scrambleText() {
  //     let phraseIndex = 0;
  //     let charIndex = 0;
  //     let newText = '';

  //     const scrambleInterval = setInterval(() => {
  //       newText = phrases[phraseIndex].slice(0, charIndex);
  //       for (let i = charIndex; i < phrases[phraseIndex].length; i++) {
  //         newText += chars[Math.floor(Math.random() * chars.length)];
  //       }
  //       setTextScramble(newText);

  //       charIndex++;
  //       if (charIndex > phrases[phraseIndex].length) {
  //         clearInterval(scrambleInterval);
  //         setTimeout(() => {
  //           const unscrambleInterval = setInterval(() => {
  //             newText = phrases[phraseIndex].slice(0, charIndex);
  //             setTextScramble(newText);

  //             charIndex--;
  //             if (charIndex < 0) {
  //               clearInterval(unscrambleInterval);
  //               phraseIndex++;
  //               if (phraseIndex >= phrases.length) {
  //                 phraseIndex = 0;
  //               }
  //               setTimeout(() => {
  //                 scrambleText();
  //               }, 3000);
  //             }
  //           }, 30);
  //         }, 1000);
  //       }
  //     }, 30);
  //   }

  //   useEffect(() => {
  //     scrambleText();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  // //  setTimeout(() => {
  //   document.addEventListener('DOMContentLoaded', function () {
  //     const popup = document.querySelector('.popup');
  //     const image = document.querySelector('.partTextImg');

  //     image.addEventListener('click', function () {
  //       popup.classList.add('show');
  //     });

  //     popup.addEventListener('click', function (event) {
  //       if (event.target === popup) {
  //         popup.classList.remove('show');
  //       }
  //     });
  //   });
  // // }, 80);

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
                <img src={logoTech} alt='' className={styles.partTextImg} />
              </div>
              {/* <div className={styles.container}>
                <div className={styles.textEffect}>{textScramble} </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
