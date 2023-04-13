// import slideVideo1 from '../../assets/videos/Animals_Puppiness.mp4';
import slideVideo1 from '../../assets/videos/marie_website-screenVideo.mp4';
import slideVideo2 from '../../assets/videos/retouche_kasa.mp4';
import slideVideo3 from '../../assets/videos/retouche_sportsee.mp4';
import slideVideo4 from '../../assets/videos/retouche_petits_plats.mp4';
import slideVideo5 from '../../assets/videos/retouche_fisheye_resize.mp4';
import slideVideo6 from '../../assets/videos/retouche_ohmyfood.mp4';

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Carousel = () => {
  return (
    <>
      <div className='body-carousel'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          initialSlide={1}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper_container'
          // autoplay={{ delay: 3000 }}
        >
          <div className='slide-content'>
            <div className='card-wrapper swiper-wrapper'>
              <SwiperSlide className='card swiper-slide'>
                <div className='contentCover'>
                  <h2 className='heading'>
                    <span>P</span>
                    <span>o</span>
                    <span>r</span>
                    <span>t</span>
                    <span>f</span>
                    <span>o</span>
                    <span>l</span>
                    <span>i</span>
                    <span>o</span>
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className='card swiper-slide'>
                <div className='image-content'>
                  <span className='overlay'></span>
                  {/* ---- video ---- */}
                  <div className='card-image'>
                    <video className='card-img' controls loop>
                      <source src={slideVideo1} className='videoSrc' />
                    </video>
                  </div>
                  {/*  */}
                  {/* <div className='card-image'>
                    <img src={slideImg1} alt='' className='card-img' />
                  </div> */}
                </div>

                <div className='card-content'>
                  <h2 className='name'>Projet réel : portfolio</h2>
                  <p className='description'>
                    React / Redux Toolkit. <br />
                    Base de données Firebase. <br />
                    La Connexion via Google permet l'accès aux fonctionnalités de gestion. <br />
                    Page sécurisée accessible aux visiteurs avec un mot de passe crypté.
                  </p>

                  <a
                    href='https://marie-ponceau.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='button'>Voir le site</button>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide className='card swiper-slide'>
                <div className='image-content'>
                  <span className='overlay'></span>

                  <div className='card-image'>
                    <video className='card-img' controls loop>
                      <source src={slideVideo2} />
                    </video>
                  </div>
                </div>

                <div className='card-content'>
                  <h2 className='name'>Projet de formation : site immobilier</h2>
                  <p className='description'>
                    React / react router / props. <br />
                    Utilisation du context de l'API. <br />
                    Url dynamiques selon des id produits. <br />
                    Database Json. <br />
                  </p>

                  <div className='containerBtn'>
                    <a
                      href='https://github.com/ayns789/kasa'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='button buttonGrey'>Voir le code</button>
                    </a>
                    <a
                      href='https://kasa-exo.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='button'>Voir le site</button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='card swiper-slide'>
                <div className='image-content'>
                  <span className='overlay'></span>

                  <div className='card-image'>
                    <video className='card-img' controls loop>
                      <source src={slideVideo3} />
                    </video>
                  </div>
                </div>

                <div className='card-content'>
                  <h2 className='name'>Projet de formation : Dashboard</h2>
                  <p className='description'>
                    React / react router / props. <br />
                    Utilisation de Recharts, implémentation et personnalisation des graphiques selon
                    une maquette Figma.
                  </p>

                  <a
                    href='https://github.com/ayns789/SportSee_front'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='button buttonGrey'>Voir le code</button>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide className='card swiper-slide'>
                <div className='image-content'>
                  <span className='overlay'></span>

                  <div className='card-image'>
                    <video className='card-img' controls loop>
                      <source src={slideVideo4} />
                    </video>
                  </div>
                </div>

                <div className='card-content'>
                  <h2 className='name'>Projet de formation : site de reçettes</h2>
                  <p className='description'>
                    Versioning sur github.
                    <br />
                    Synchronisation de multiples algorythmes.
                    <br />
                    Utilisation de Jsben.ch pour assurer la fluidité du moteur de recherche.
                  </p>

                  <div className='containerBtn'>
                    <a
                      href='https://github.com/ayns789/les_petits_plats'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='button buttonGrey'>Voir le code</button>
                    </a>
                    <a
                      href='https://petits-plats-exo.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='button'>Voir le site</button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='card swiper-slide'>
                <div className='image-content'>
                  <span className='overlay'></span>

                  <div className='card-image'>
                    <video className='card-img' controls loop>
                      <source src={slideVideo5} />
                    </video>
                  </div>
                </div>

                <div className='card-content'>
                  <h2 className='name'>Projet de formation : portfolio de photographes</h2>
                  <p className='description'>
                    Accent sur l'accessibilité / Aria. <br />
                    Utilisation esLint pour la robustesse du code. <br />
                    Design pattern Factory / Constructor. <br />
                    Réalisation d'une lightbox.
                  </p>

                  <div className='containerBtn'>
                    <a
                      href='https://github.com/ayns789/Front-End-Fisheye'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='button buttonGrey'>Voir le code</button>
                    </a>
                    <a
                      href='https://frontend-fisheye-exo.netlify.app/index.html'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='button'>Voir le site</button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='card swiper-slide'>
                <div className='image-content'>
                  <span className='overlay'></span>

                  <div className='card-image'>
                    <video className='card-img' controls loop>
                      <source src={slideVideo6} />
                    </video>
                  </div>
                </div>

                <div className='card-content'>
                  <h2 className='name'>Projet de formation : site de restaurants</h2>
                  <p className='description'>
                    HTML en méthodologie BEM.
                    <br />
                    CSS Sass & Nesting.
                    <br />
                    Animations CSS.
                    <br />
                    Réalisation d'un loading spinner.
                  </p>

                  <div className='containerBtn'>
                    <a
                      href='https://github.com/ayns789/ohmyfood'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='button buttonGrey'>Voir le code</button>
                    </a>
                    <a
                      href='https://ohmyfood-exo.netlify.app/index.html'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='button'>Voir le site</button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
          <div className='slider-controler'>
            <div className='swiper-button-prev slider-arrow'>
              <ion-icon name='arrow-back-outline'></ion-icon>
            </div>
            <div className='swiper-button-next slider-arrow'>
              <ion-icon name='arrow-forward-outline'></ion-icon>
            </div>
            {/* <div className='swiper-pagination'></div> */}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
