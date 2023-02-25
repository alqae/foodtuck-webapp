import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.scss'
import { useForm } from 'react-hook-form'
import { RxCountdownTimer } from 'react-icons/rx'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import ImageCardPlaceholder from '../../assets/images/card-image-placeholder.png'

import { CardIcon } from '../CardIcon'

interface Props {
}

const Footer: React.FC<Props> = () => {
  const { register, handleSubmit } = useForm<{ emailToSubscribe: string }>();
  const onSubmit = (data: { emailToSubscribe: string }) => {
    console.log(data)
    // TODO: Integrate with BE
  };

  const year = new Date().getFullYear()

  return (
    <footer>
      <div className={styles.supportAndAbout}>
        <div className="container">
          <div className={`${styles.support} d--f jc--sb ai--fs`}>
            <div className={styles.supportHalf}>
              <h4><b>St</b>ill You Need Our Support ?</h4>
              <p>Don't wait make a smart & logical quote here. Its pretty easy.</p>
            </div>

            <form className={styles.suscribeField} onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                id="emailToSubscribe"
                placeholder="Enter Your Email"
                {...register('emailToSubscribe')}
              />
              <button type="submit">Subscribe Now</button>
            </form>
          </div>

          <div className={`${styles.about} grid`}>
            <div className={`${styles.aboutInfo} col-4_sm-6`}>
              <span>About Us.</span>

              <p>
                orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe,
                and professional chauffeured carservice in major cities across World.
              </p>

              <div className={`mt-3 d--f`}>
                <CardIcon
                  icon={<RxCountdownTimer />}
                  horientation="horizontal"
                  description={
                    <React.Fragment>
                      <span>Opening Houres</span>
                      <span>Mon - Sat(8.00 - 6.00)</span>
                      <span>Sunday - Closed</span>
                    </React.Fragment>
                  }
                />
              </div>
            </div>

            <div className={`${styles.usefulLinks} col-2_sm-6`}>
              <span>Useful Links</span>
              <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">News</Link></li>
                <li><Link to="/">Patners</Link></li>
                <li><Link to="/">Team</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
            </div>

            <div className={`${styles.help} col-2_sm-6`}>
              <span>Help?</span>
              <ul>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Term & Condition</Link></li>
                <li><Link to="/">Reporting</Link></li>
                <li><Link to="/">Documentation</Link></li>
                <li><Link to="/">Support Policy</Link></li>
                <li><Link to="/">Privacy</Link></li>
              </ul>
            </div>

            <div className={`${styles.recentPost} xs-hidden col-3`}>
              <span>Recent Post</span>

              <div>
                <div className={styles.card}>
                  <img src={ImageCardPlaceholder} className="mr-2" alt="placeholder" />

                  <div>
                    <span>20 Feb 2022</span>
                    <p>Keep Your Business</p>
                  </div>
                </div>

                <div className={styles.card}>
                  <img src={ImageCardPlaceholder} className="mr-2" alt="placeholder" />

                  <div>
                    <span>20 Feb 2022</span>
                    <p>Keep Your Business</p>
                  </div>
                </div>

                <div className={styles.card}>
                  <img src={ImageCardPlaceholder} className="mr-2" alt="placeholder" />

                  <div>
                    <span>20 Feb 2022</span>
                    <p>Keep Your Business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyRightAndSocial}>
        <div className="container d--f jc--sb ai--c">
          <span>{`Copyright © ${year} by Ayeman. All Rights Reserved.`}</span>

          <div className="social d--f ai--c">
            <a href="/" className={`${styles.iconButton} ${styles.facebook}`}>
              <FaFacebookF />
              {/* <img src={IconFacebook} alt="Facebook" /> */}
            </a>

            <a href="/" className={`${styles.iconButton} ${styles.twitter}`}>
              <FaTwitter />
              {/* <img src={IconTwitter} alt="Twitter" /> */}
            </a>

            <a href="/" className={`${styles.iconButton} ${styles.instagram}`}>
              <FaInstagram />
              {/* <img src={IconInstagram} alt="Instagram" /> */}
            </a>

            <a href="/" className={`${styles.iconButton} ${styles.youtube}`}>
              <FaYoutube />
              {/* <img src={IconYouTube} alt="YouTube" /> */}
            </a>

            <a href="/" className={`${styles.iconButton} ${styles.pinterest}`}>
              <FaPinterest />
              {/* <img src={IconPinterest} alt="Pinterest" /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {}

export default Footer
