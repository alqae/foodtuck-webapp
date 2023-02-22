import styles from './nomatch.module.scss'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

interface Props { }

export default ({ }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <span className={styles.title}>404</span>
        <span className={styles.subtitle}>Oops! Look likes something going wrong</span>
        <p>Page Cannot be found! we’ll have it figured out in no time. Menwhile, cheek out these fresh ideas:</p>
        <Link to="/"><Button>Go to home</Button></Link>
      </div>
    </div>
  )
}
