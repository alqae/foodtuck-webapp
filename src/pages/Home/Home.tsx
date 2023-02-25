import React from 'react'
import Rating from 'react-star-review'
import { animate } from 'framer-motion'
import styles from './home.module.scss'
import { GiChefToque } from 'react-icons/gi'
import { AiOutlineCheck } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaCookieBite, FaHamburger, FaQuoteRight, FaWineGlassAlt } from 'react-icons/fa'
import { IoFastFoodOutline, IoRestaurantOutline, IoPizzaOutline } from 'react-icons/io5'
// import required modules
import { Autoplay, Pagination } from 'swiper'

import TestimonialUserPlaceholder from '../../assets/images/testimonial.png'
import FoodCategoryThree from '../../assets/images/food-category-3.png'
import FoodCategoryFour from '../../assets/images/food-category-4.png'
import FoodCategoryOne from '../../assets/images/food-category-1.png'
import FoodCategoryTwo from '../../assets/images/food-category-2.png'
import WhyChoseUsImage from '../../assets/images/why-chose-us.png'
import AboutImageThree from '../../assets/images/about-3.png'
import AboutImageTwo from '../../assets/images/about-2.png'
import AboutImageOne from '../../assets/images/about-1.png'
import ChefThree from '../../assets/images/chef-3.png'
import ChefFour from '../../assets/images/chef-4.png'
import ChefTwo from '../../assets/images/chef-2.png'
import ChefOne from '../../assets/images/chef-1.png'

import { Button, CardIcon, Hero, BadgeCount } from '../../components'
import { Chef } from '../../models'

interface Props { }

function AnimatedCounter({ from, to }: { from: number, to: number }) {
  const nodeRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const node = nodeRef.current;

    if (node) {
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
          console.warn(Math.round(value), Math.round(value).toFixed(2));
        }
      });

      return () => controls.stop();
    }
  }, [from, to]);

  return <em ref={nodeRef} />;
}

const Home: React.FC<Props> = () => {
  const chefs: Chef[] = [
    {
      avatar: ChefOne,
      name: 'D.Estwood',
      position: 'Chief Chef',
    },
    {
      avatar: ChefTwo,
      name: 'D.Scoriesh',
      position: 'Assistant Chef',
    },
    {
      avatar: ChefThree,
      name: 'M. William',
      position: 'Advertising Chef',
    },
    {
      avatar: ChefFour,
      name: 'W.Readfroad',
      position: 'Chef',
    }
  ]

  return (
    <div className={styles.home}
    // initial={{ width: 0 }}
    // animate={{ width: "100%" }}
    // transition={{ delay: 0.25, duration: 0.5 }}
    // exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <Hero />

      <div className={styles.content}>
        <section className={`${styles.aboutUs} grid container mx-auto`}>
          <div className="col-6_sm-12 pr-md-15 mb-5 mb-md-0">
            <span className={styles.eyebrow}>About Us</span>
            <h3 className="mb-4">
              <b className="highlight">We</b> Create the best foody product
            </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
              sit eu velit in consequat.
            </p>

            <div className="mt-4 mb-4">
              <div className="mb-3">
                <AiOutlineCheck className="mr-1" />
                <span>Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
              </div>

              <div className="mb-3">
                <AiOutlineCheck className="mr-1" />
                <span>Quisque diam pellentesque bibendum non dui volutpat fringilla</span>
              </div>

              <div>
                <AiOutlineCheck className="mr-1" />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              </div>
            </div>

            <Button fullWidth={false} circular>Read More</Button>
          </div>

          <div className="col-6_sm-12 grid">
            <img src={AboutImageOne} className="col-12" alt="About One" />
            <img src={AboutImageTwo} className="col-6" alt="About Two" />
            <img src={AboutImageThree} className="col-6" alt="About Three" />
          </div>
        </section>

        <section className={`${styles.foodCategory} container mx-auto text-center`}>
          <span className={styles.eyebrow}>Food Category</span>
          <h3 className="mb-7"><b className="highlight">Ch</b>oose Food Iteam</h3>

          <div className="grid">
            <img src={FoodCategoryOne} className="col" alt="Food Category One" />
            <img src={FoodCategoryTwo} className="col" alt="Food Category Two" />
            <img src={FoodCategoryThree} className="col" alt="Food Category One" />
            <img src={FoodCategoryFour} className="col" alt="Food Category Four" />
          </div>
        </section>

        <section className={`${styles.whoChoseUs} grid container mx-auto`}>
          <div className="col-6_sm-12">
            <img src={WhyChoseUsImage} alt="Why Chose Us" />
          </div>

          <div className="col-6_sm-12 pl-md-15 mt-8">
            <span className={styles.eyebrow}>Why Choose us</span>
            <h3><b className="highlight">Ex</b>ta ordinary taste And Experienced</h3>
            <p className="mb-4 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
              augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
              sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>

            <div className="d--f mb-4">
              <CardIcon
                horientation="vertical"
                containerClassName="mr-4"
                icon={<FaHamburger />}
                description={<span className="text-center mt-1">Fast Food</span>}
              />
              <CardIcon
                horientation="vertical"
                containerClassName="mr-4"
                icon={<FaCookieBite />}
                description={<span className="text-center mt-1">Lunch</span>}
              />
              <CardIcon
                horientation="vertical"
                icon={<FaWineGlassAlt />}
                description={<span className="text-center mt-1">Dinner</span>}
              />
            </div>

            <BadgeCount count={30} message={<em>Years of<br /><b>Experienced</b></em>} />
          </div>
        </section>

        <section className={`${styles.clients} d--f jc--sa pt-10 pb-10`}>
          <div className="d--f fd--c ai--c mb-10 mb-md-0">
            <GiChefToque size="7.5" className="mb-3 text-center" />
            <span className="mb-3">Professional Chefs</span>
            <AnimatedCounter from={0} to={420} />
          </div>

          <div className="d--f fd--c ai--c mb-10 mb-md-0">
            <IoFastFoodOutline size="7.5" className="mb-3 text-center" />
            <span className="mb-3">Items Of Food</span>
            <AnimatedCounter from={0} to={320} />
          </div>

          <div className="d--f fd--c ai--c mb-10 mb-md-0">
            <IoRestaurantOutline size="7.5" className="mb-3 text-center" />
            <span className="mb-3">Years Of Experienced</span>
            <AnimatedCounter from={0} to={30} />
          </div>

          <div className="d--f fd--c ai--c">
            <IoPizzaOutline size="7.5" className="mb-3 text-center" />
            <span className="mb-3">Happy Customers</span>
            <AnimatedCounter from={0} to={220} />
          </div>
        </section>

        <section className={`${styles.meetOur} container mx-auto text-center`}>
          <span className={styles.eyebrow}>Chef</span>
          <h3 className="mb-7"><b className="highlight">Me</b>et Our Chef</h3>

          <Swiper
            wrapperClass={styles.chefSlider}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            watchOverflow={false}
            speed={1000}
            spaceBetween={0}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: {
                width: 312,
                slidesPerView: 1,
                enabled: true,
              },
              968: {
                enabled: false,
              }
            }}
          >
            {chefs.map((chef, index) => (
              <SwiperSlide
                key={index}
                className={`${styles.card} mb-8 ${index !== (chefs.length - 1) ? 'mr-3' : ''}`}
              >
                <img src={chef.avatar} alt={chef.name} />

                <div className={`${styles.caption}`}>
                  <strong>{chef.name}</strong><br />
                  <span>{chef.position}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Button
            fullWidth={false}
            transparent
            circular
            className="mt-2 mt-md-7"
            >
            See More
          </Button>
        </section>

        <section className={`${styles.testimonials} container mx-auto`}>
          <span className={styles.eyebrow}>Testimonials</span>
          <h3 className="mb-10">What our client are saying</h3>
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            watchOverflow={false}
            speed={1000}
            modules={[Autoplay, Pagination]}
            className="pl-md-20 pr-md-20 ml-md-8 mr-md-8"
            breakpoints={{
              0: {
                spaceBetween: 100,
              },
              768: {
                spaceBetween: 500,
              }
            }}
          >
            {[0, 1, 2, 3].map((item) => (
              <SwiperSlide>
                <div key={item} className={`${styles.slide} mt-8 mb-8 d--f ai--c fd--c pb-4 pl-12 pr-12 text-center`}>
                  <img className="mb-4" src={TestimonialUserPlaceholder} alt="Avatar" />
                  <FaQuoteRight className="mb-4" size="50px" />
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                    pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                    augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
                    sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                  </p>
                  <div className="mb-4">
                    <Rating rating={4.5} />
                  </div>
                  <strong>Alamin Hasan</strong>
                  <span>Food Specialist</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className={styles.restraind}>
          <div className="container d--f jc--fe">
            <div className={`${styles.box} pt-10 pb-10`}>
              <span className={styles.eyebrow}>Restaurant Active Process</span>
              <h4 className="mb-4">
                <b className="highlight">We</b> Document Every Food Bean Process untile it is saved
              </h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
              </p>
              <Button fullWidth={false} transparent circular>Read More</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

Home.defaultProps = {}

export default Home
