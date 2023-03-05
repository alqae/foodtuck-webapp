import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import styles from './footer.module.scss'
import { useForm } from 'react-hook-form'
import { RxCountdownTimer } from 'react-icons/rx'
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

import ImageCardPlaceholder from '../../assets/images/card-image-placeholder.png'

import { ButtonIcon } from '../ButtonIcon'
import { Paragraph } from '../Paragraph'
import { CardIcon } from '../CardIcon'
import { Heading } from '../Heading'

interface Props {}

interface SubscriteForm {
  emailToSubscribe: string
}

const Footer: React.FC<Props> = () => {
  const { register, handleSubmit } = useForm<SubscriteForm>();

  const onSubmit = (data: SubscriteForm) => {
    console.log(data)
    // TODO: Integrate with BE
  };

  const year = new Date().getFullYear()

  return (
    <footer>
      <div className={styles.supportAndAbout}>
        <div className="container">
          <div className={classNames(styles.support, 'mr-md-10', 'ml-md-10', 'd--f', 'jc--sb', 'ai--fs')}>
            <div>
              <Heading level={4} color="white" className="mb-2">
                <b className="highlight">St</b>ill You Need Our Support ?
              </Heading>
              <Paragraph color="white">Don't wait make a smart & logical quote here. Its pretty easy.</Paragraph>
            </div>

            <form className={classNames(styles.suscribeField, 'mt-4', 'mt-md-0')} onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                id="emailToSubscribe"
                placeholder="Enter Your Email"
                {...register('emailToSubscribe')}
              />
              <button type="submit">Subscribe Now</button>
            </form>
          </div>

          <div className={classNames(styles.about, 'pt-7', 'pb-7', 'grid')}>
            <div className={classNames(styles.aboutInfo, 'col-4_sm-6')}>
              <Heading className="mb-4" color="white" size="xs">About Us.</Heading>

              <Paragraph className="mb-3" color="white">
                orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe,
                and professional chauffeured carservice in major cities across World.
              </Paragraph>

              <CardIcon
                icon={RxCountdownTimer}
                horientation="horizontal"
                description={
                  <React.Fragment>
                    <Paragraph color="white">Opening Houres</Paragraph>
                    <Paragraph color="white" size="sm">Mon - Sat (8:00 AM - 6:00 PM)</Paragraph>
                    <Paragraph color="white" size="sm">Sunday - Closed</Paragraph>
                  </React.Fragment>
                }
              />
            </div>

            <div className={classNames(styles.usefulLinks, 'col-2_sm-6')}>
              <Heading className="mb-4" color="white" size="xs">Useful Links</Heading>
              <ul>
                <Paragraph as="li" color="white"><Link to="/">About</Link></Paragraph>
                <Paragraph as="li" color="white"><Link to="/">News</Link></Paragraph>
                <Paragraph as="li" color="white"><Link to="/">Patners</Link></Paragraph>
                <Paragraph as="li" color="white"><Link to="/">Team</Link></Paragraph>
                <Paragraph as="li" color="white"><Link to="/">Menu</Link></Paragraph>
                <Paragraph as="li" color="white"><Link to="/">Contact</Link></Paragraph>
              </ul>
            </div>

            <div className={classNames(styles.help, 'col-2_sm-6')}>
              <Heading className="mb-4" color="white" size="xs">Help?</Heading>
              <ul>
                <Paragraph as="li" color="white"><Link to="/">FAQ</Link></Paragraph>
                <Paragraph as="li" color="white"><Link to="/">Term & Condition</Link></Paragraph>
                <Paragraph as="li" color="white"><Link to="/">Reporting</Link></Paragraph>
                <Paragraph as="li" color="white"><Link to="/">Documentation</Link></Paragraph>
                <Paragraph as="li" color="white"><Link to="/">Support Policy</Link></Paragraph>
                <Paragraph as="li" color="white"><Link to="/">Privacy</Link></Paragraph>
              </ul>
            </div>

            <div className={classNames(styles.recentPost, 'xs-hidden', 'col-3')}>
              <Heading className="mb-4" color="white" size="xs">Recent Post</Heading>

              <div>
                <div className={styles.card}>
                  <img src={ImageCardPlaceholder} className="mr-2" alt="placeholder" />

                  <div>
                    <Paragraph color="gray" size="sm">20 Feb 2022</Paragraph>
                    <Paragraph color="white">Keep Your Business</Paragraph>
                  </div>
                </div>

                <div className={styles.card}>
                  <img src={ImageCardPlaceholder} className="mr-2" alt="placeholder" />

                  <div>
                    <Paragraph color="gray" size="sm">20 Feb 2022</Paragraph>
                    <Paragraph color="white">Keep Your Business</Paragraph>
                  </div>
                </div>

                <div className={styles.card}>
                  <img src={ImageCardPlaceholder} className="mr-2" alt="placeholder" />

                  <div>
                    <Paragraph color="gray" size="sm">20 Feb 2022</Paragraph>
                    <Paragraph color="white">Keep Your Business</Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classNames(styles.copyRightAndSocial, 'pt-4', 'pb-4')}>
        <div className="container d--f jc--sb ai--c">
          <Paragraph color="white">Copyright ©{year} by Ayeman. All Rights Reserved.</Paragraph>

          <div className="social d--f ai--c">
            <ButtonIcon
              size={16}
              color="secondary"
              icon={FaFacebookF}
              className={classNames(styles.iconButton, 'mr-2', styles.facebook)}
            />
            <ButtonIcon
              size={16}
              color="secondary"
              icon={FaTwitter}
              className={classNames(styles.iconButton, 'mr-2', styles.twitter)}
            />
            <ButtonIcon
              size={16}
              color="secondary"
              icon={FaInstagram}
              className={classNames(styles.iconButton, 'mr-2', styles.instagram)}
            />
            <ButtonIcon
              size={16}
              color="secondary"
              icon={FaYoutube}
              className={classNames(styles.iconButton, 'mr-2', styles.youtube)}
            />
            <ButtonIcon
              size={16}
              color="secondary"
              icon={FaPinterest}
              className={classNames(styles.iconButton, styles.pinterest)}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {}

export default Footer
