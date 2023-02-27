import React from 'react'
import classNames from 'classnames'
import styles from './home.module.scss'
import { GiChefToque } from 'react-icons/gi'
import { Autoplay, Pagination } from 'swiper'
import { AiOutlineCheck } from 'react-icons/ai'
import { animate, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaCookieBite, FaHamburger, FaWineGlassAlt } from 'react-icons/fa'
import {
  IoFastFoodOutline,
  IoRestaurantOutline,
  IoPizzaOutline,
} from 'react-icons/io5'
// import required modules

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

import { Chef } from '../../models'
import {
  Button,
  CardIcon,
  Hero,
  BadgeCount,
  Testimonials,
  Eyebrow,
  Heading,
  Paragraph,
} from '../../components'

interface Props { }

const AnimatedCounter: React.FC<{ from: number, to: number }> = ({ from, to }) => {
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

AnimatedCounter.defaultProps = {
  from: 0,
  to: 0
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
    <div className={styles.home}>
      <Hero />

      <div className={styles.content}>
        <section className={classNames(styles.aboutUs, 'grid', 'container', 'mx-auto')}>
          <motion.div
            initial={{ transform: "translateX(-100px)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            viewport={{ once: true }}
            className="col-6_sm-12 pr-md-15 mb-5 mb-md-0"
          >
            <Eyebrow>About Us</Eyebrow>
            <Heading level={3} color="white" className="mb-4">
              <b className="highlight">We</b> Create the best foody product
            </Heading>

            <Paragraph color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
              sit eu velit in consequat.
            </Paragraph>

            <div className="mt-4 mb-4">
              <div className="mb-3">
                <AiOutlineCheck className="mr-1" />
                <Paragraph as="span" color="white">Lacus nisi, et ac dapibus sit eu velit in consequat.</Paragraph>
              </div>

              <div className="mb-3">
                <AiOutlineCheck className="mr-1" />
                <Paragraph as="span" color="white">Quisque diam pellentesque bibendum non dui volutpat fringilla</Paragraph>
              </div>

              <div>
                <AiOutlineCheck className="mr-1" />
                <Paragraph as="span" color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Paragraph>
              </div>
            </div>

            <Button fullWidth={false} circular>Read More</Button>
          </motion.div>

          <div className="col-6_sm-12 grid">
            <motion.img
              initial={{ transform: "translateY(-100px)", opacity: 0 }}
              whileInView={{ transform: "translateX(0)", opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.25 }}
              viewport={{ once: true }}
              src={AboutImageOne}
              className="col-12"
              alt="About One"
            />
            <motion.img
              initial={{ transform: "translateX(-100px)", opacity: 0 }}
              whileInView={{ transform: "translateX(0)", opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.25 }}
              viewport={{ once: true }}
              src={AboutImageTwo}
              className="col-6"
              alt="About Two"
            />
            <motion.img
              initial={{ transform: "translateX(100px)", opacity: 0 }}
              whileInView={{ transform: "translateX(0)", opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.25 }}
              viewport={{ once: true }}
              src={AboutImageThree}
              className="col-6"
              alt="About Three"
            />
          </div>
        </section>

        <section className={classNames(styles.foodCategory, 'container', 'mx-auto', 'text-center')}>
          <motion.div
            initial={{ transform: "translateY(-100px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            viewport={{ once: true }}
          >
            <Eyebrow>Food Category</Eyebrow>
            <Heading level={3} color="white" className="mb-7"><b className="highlight">Ch</b>oose Food Iteam</Heading>
          </motion.div>

          <div className="grid">
            <motion.img
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              src={FoodCategoryOne}
              className="col"
              alt="Food Category One"
            />
            <motion.img
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              src={FoodCategoryTwo}
              className="col"
              alt="Food Category Two"
            />
            <motion.img
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              src={FoodCategoryThree}
              className="col"
              alt="Food Category One"
            />
            <motion.img
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              src={FoodCategoryFour}
              className="col"
              alt="Food Category Four"
            />
          </div>
        </section>

        <section className={classNames(styles.whoChoseUs, 'grid', 'container', 'mx-auto')}>
          <motion.div
            initial={{ transform: "translateX(-100px)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            viewport={{ once: true }}
            className="col-6_sm-12"
          >
            <img src={WhyChoseUsImage} alt="Why Chose Us" />
          </motion.div>

          <motion.div
            initial={{ transform: "translateX(100px)", opacity: 0 }}
            whileInView={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            viewport={{ once: true }}
            className="col-6_sm-12 pl-md-15 mt-8"
          >
            <Eyebrow>Why Choose us</Eyebrow>
            <Heading level={3} color="white">
              <b className="highlight">Ex</b>ta ordinary taste And Experienced
            </Heading>
            <Paragraph color="white" className="mb-4 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
              augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
              sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </Paragraph>

            <div className="d--f mb-4">
              <CardIcon
                horientation="vertical"
                containerClassName="mr-4"
                icon={FaHamburger}
                description={<span className="text-center mt-1">Fast Food</span>}
              />
              <CardIcon
                horientation="vertical"
                containerClassName="mr-4"
                icon={FaCookieBite}
                description={<span className="text-center mt-1">Lunch</span>}
              />
              <CardIcon
                horientation="vertical"
                icon={FaWineGlassAlt}
                description={<span className="text-center mt-1">Dinner</span>}
              />
            </div>

            <BadgeCount count={30} message={<em>Years of<br /><b>Experienced</b></em>} />
          </motion.div>
        </section>

        <section className={classNames(styles.clients, 'd--f', 'jc--sa', 'pt-10', 'pb-10')}>
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

        <section className={classNames(styles.meetOur, 'container', 'mx-auto', 'text-center')}>
          <motion.div
            initial={{ transform: "translateY(-100px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            viewport={{ once: true }}
          >
            <Eyebrow>Chef</Eyebrow>
            <Heading level={3} color="white" className="mb-7">
              <b className="highlight">Me</b>et Our Chef
            </Heading>
          </motion.div>

          <motion.div
            initial={{ transform: "translateY(100px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            viewport={{ once: true }
          }>
            <Swiper
              wrapperClass={`${styles.chefSlider} mb-8`}
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
                768: {
                  slidesPerView: 2,
                  enabled: false,
                },
                1024: {
                  spaceBetween: 24,
                  slidesPerView: 4,
                }
              }}
            >
              {chefs.map((chef, index) => (
                <SwiperSlide key={index} className={styles.card}>
                  <img src={chef.avatar} alt={chef.name} />

                  <div className={styles.caption}>
                    <strong>{chef.name}</strong><br />
                    <span>{chef.position}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div
            initial={{ transform: "translateY(-100px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            viewport={{ once: true }}
          >
            <Button
              fullWidth={false}
              transparent
              circular
              className="mt-2 mt-md-7"
            >
              See More
            </Button>
          </motion.div>
        </section>

        <Testimonials headingColor="white" />

        <section className={styles.restraind}>
          <div className="container d--f jc--fe">
            <div className={classNames(styles.box, 'pt-10', 'pb-10')}>
              <Eyebrow>Restaurant Active Process</Eyebrow>
              <Heading level={4} color="white" className="mb-4">
                <b className="highlight">We</b> Document Every Food Bean Process untile it is saved
              </Heading>
              <Paragraph color="white" className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
              </Paragraph>
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
