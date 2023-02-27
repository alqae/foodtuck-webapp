import React from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import styles from './about.module.scss'
import { SlGraduation } from 'react-icons/sl'
import { IoBodyOutline } from 'react-icons/io5'
import { AiOutlineCoffee } from 'react-icons/ai'

import WhyChoseUsImage from '../../assets/images/why-chose-us-banner.png'
import TeamMemberImage from '../../assets/images/team-member.png'
import AboutImage from '../../assets/images/about.png'

import { Button, Eyebrow, Heading, Paragraph, Testimonials } from '../../components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'

interface Props { }

const About: React.FC<Props> = () => {
  const members = [
    {
      name: 'John Doe',
      position: 'Chef',
    },
    {
      name: 'John Doe',
      position: 'Chef',
    },
    {
      name: 'John Doe',
      position: 'Chef',
    },
    {
      name: 'John Doe',
      position: 'Chef',
    }
  ]

  return (
    <React.Fragment>
      <motion.section
        viewport={{ once: true }}
        initial={{ transform: 'translateY(100px)', opacity: 0 }}
        whileInView={{ transform: 'translateY(0)', opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.25 }}
        className="grid container"
      >
        <div className="col-6_sm-12">
          <img src={AboutImage} alt="About" />
        </div>

        <div className="col-6_sm-12 pl-md-15 pr-md-0">
          <Eyebrow className="mb-1">About us</Eyebrow>
          <Heading level={3} size="xl" className="mb-2">Food is an important part Of a balanced Diet</Heading>
          <Paragraph className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </Paragraph>
          <Button soft rounded fullWidth={false}>Show more</Button>
        </div>
      </motion.section>

      <section className="container">
        <motion.div
          viewport={{ once: true }}
          initial={{ transform: 'translateY(100px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.25 }}
        >
          <div className="text-center mb-7">
            <Heading level={3} size="xl">Why Choose us</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </Paragraph>
          </div>

          <img src={WhyChoseUsImage} alt="Why Choose us" className="mb-7" />
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delai: 0.25, duration: 0.5 }}
          className="mb-md-7 grid jc--sb"
        >
          <div className="text-center col-3_sm-12 mb-3 mb-md-0">
            <SlGraduation size="80" className="mb-3"></SlGraduation>
            <Heading size="sm" className="mb-2">Best Chef</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            </Paragraph>
          </div>

          <div className="text-center col-3_sm-12 mb-3 mb-md-0">
            <AiOutlineCoffee size="80" className="mb-3"></AiOutlineCoffee>
            <Heading size="sm" className="mb-2">Best Chef</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            </Paragraph>
          </div>

          <div className="text-center col-3_sm-12 mb-3 mb-md-0">
            <IoBodyOutline size="80" className="mb-3"></IoBodyOutline>
            <Heading size="sm" className="mb-2">Best Chef</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            </Paragraph>
          </div>
        </motion.div>
      </section>

      <section className={styles.teamMembers}>
        <motion.div
          viewport={{ once: true }}
          initial={{ transform: 'translateY(-100px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className={styles.content}
        >
          <div className="text-center mb-7 pt-15 container">
            <Heading color="white" level={3} size="xl">Team Member</Heading>
            <Paragraph color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Varius sed pharetra dictum neque massa congue
            </Paragraph>
          </div>

          <Swiper
              wrapperClass={classNames(styles.chefSlider, 'container', 'mb-8')}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
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
              {members.map((member, index) => (
                <SwiperSlide
                  key={index}
                  className={styles.card}
                >
                    <img src={TeamMemberImage} alt="Team Member" />
                    <div className={classNames(styles.caption, 'pt-2', 'pb-2', 'text-center')}>
                      <Heading level={5} size="xs">{member.name}</Heading>
                      <Paragraph>{member.position}</Paragraph>
                    </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </motion.div>
      </section>

      <Testimonials />
    </React.Fragment>
  )
}

About.defaultProps = {}

export default About
