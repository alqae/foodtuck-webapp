import React from 'react'
import classNames from 'classnames'
import Rating from 'react-star-review'
import { FaQuoteRight } from 'react-icons/fa'
import { Autoplay, Pagination } from 'swiper'
import styles from './testimonials.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import TestimonialUserPlaceholder from '../../assets/images/testimonial.png'

import { Eyebrow } from '../Eyebrow'
import { Heading } from '../Heading'

interface Props {
  headingColor?: 'black' | 'white'
}

const Testimonials: React.FC<Props> = ({ headingColor }) => {
  const testimonials = [
    {
      id: 1,
      avatar: TestimonialUserPlaceholder,
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      rating: 4.5,
      name: 'Alamin Hasan',
      designation: 'Food Specialist'
    },
    {
      id: 2,
      avatar: TestimonialUserPlaceholder,
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      rating: 4.5,
      name: 'Alamin Hasan',
      designation: 'Food Specialist'
    },
    {
      id: 3,
      avatar: TestimonialUserPlaceholder,
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      rating: 4.5,
      name: 'Alamin Hasan',
      designation: 'Food Specialist'
    },
    {
      id: 4,
      avatar: TestimonialUserPlaceholder,
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
      rating: 4.5,
      name: 'Alamin Hasan',
      designation: 'Food Specialist'
    },
  ]

  return (
    <section className={classNames(styles.testimonials, 'container', 'mx-auto')}>
      <Eyebrow>Testimonials</Eyebrow>
      <Heading level={3} size="xl" color={headingColor} className="mb-10">What our client are saying</Heading>
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
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div
              className={classNames(
                styles.slide,
                'mt-8', 'mb-8', 'd--f', 'ai--c', 'fd--c', 'pb-4', 'pl-12', 'pr-12', 'text-center',
              )}
            >
              <img className="mb-4" src={testimonial.avatar} alt="Avatar" />
              <FaQuoteRight className="mb-4" size="50px" />
              <p className="mb-4">{testimonial.quote}</p>
              <div className="mb-4">
                <Rating rating={testimonial.rating} />
              </div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.designation}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

Testimonials.defaultProps = {
  headingColor: 'black'
}

export default Testimonials
