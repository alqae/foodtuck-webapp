import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import styles from './footer.module.scss'
import ImageCardPlaceholder from '../../assets/images/card-image-placeholder.png'
import IconFacebook from '../../assets/icons/facebook.svg'
import IconTwitter from '../../assets/icons/twitter.svg'
import IconInstagram from '../../assets/icons/instagram.svg'
import IconYouTube from '../../assets/icons/youtube.svg'
import IconPinterest from '../../assets/icons/pinterest.svg'
import IconClockWise from '../../assets/icons/clocwise.svg'

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

              <div className={`${styles.schedule} d--f`}>
                <div className={`${styles.iconBox} d--f jc--c ai--c`}>
                  <img src={IconClockWise} alt="ClockWise" />
                </div>

                <div className={styles.hoursAndPlace}>
                  <span>Opening Houres</span>
                  <span>Mon - Sat(8.00 - 6.00)</span>
                  <span>Sunday - Closed</span>
                </div>
              </div>
            </div>

            <div className={`${styles.usefulLinks} col-2_sm-6`}>
              <span>Useful Links</span>
              <ul>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/">News</NavLink></li>
                <li><NavLink to="/">Patners</NavLink></li>
                <li><NavLink to="/">Team</NavLink></li>
                <li><NavLink to="/">Menu</NavLink></li>
                <li><NavLink to="/">Contact</NavLink></li>
              </ul>
            </div>

            <div className={`${styles.help} col-2_sm-6`}>
              <span>Help?</span>
              <ul>
                <li><NavLink to="/">FAQ</NavLink></li>
                <li><NavLink to="/">Term & Condition</NavLink></li>
                <li><NavLink to="/">Reporting</NavLink></li>
                <li><NavLink to="/">Documentation</NavLink></li>
                <li><NavLink to="/">Support Policy</NavLink></li>
                <li><NavLink to="/">Privacy</NavLink></li>
              </ul>
            </div>

            <div className={`${styles.recentPost} xs-hidden col-3`}>
              <span>Recent Post</span>

              <div>
                <div className={styles.card}>
                  <img src={ImageCardPlaceholder} alt="placeholder" />

                  <div>
                    <span>Is fastfood good for your body?</span>
                    <p>February 28,2022</p>
                  </div>
                </div>

                <div className={styles.card}>
                  <img src={ImageCardPlaceholder} alt="placeholder" />

                  <div>
                    <span>Change your food habit With organic food</span>
                    <p>February 28,2022</p>
                  </div>
                </div>

                <div className={styles.card}>
                  <img src={ImageCardPlaceholder} alt="placeholder" />

                  <div>
                    <span>Do you like fastfood for your life?</span>
                    <p>February 28,2022</p>
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
              <img src={IconFacebook} alt="Facebook" />
            </a>

            <a href="/" className={`${styles.iconButton} ${styles.twitter}`}>
              <img src={IconTwitter} alt="Twitter" />
            </a>

            <a href="/" className={`${styles.iconButton} ${styles.instagram}`}>
              <img src={IconInstagram} alt="Instagram" />
            </a>

            <a href="/" className={`${styles.iconButton} ${styles.youtube}`}>
              <img src={IconYouTube} alt="YouTube" />
            </a>

            <a href="/" className={`${styles.iconButton} ${styles.pinterest}`}>
              <img src={IconPinterest} alt="Pinterest" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {}

export default Footer
