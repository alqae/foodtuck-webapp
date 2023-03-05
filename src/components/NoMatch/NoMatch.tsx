import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { Paragraph } from '../Paragraph'
import { Heading } from '../Heading'
import { Button } from '../Button'

interface Props { }

const NoMatch: React.FC<Props> = () => {
  const navigate = useNavigate()

  return (
    <motion.section
      className="text-center container"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.25, duration: 0.5 }}
    >
      <Paragraph color="primary" size="extra-xl" as="span">404</Paragraph>
      <Heading level={3} className="mb-3" size="md">Oops! Look likes something going wrong</Heading>
      <Paragraph className="mb-4">
        Page Cannot be found! we'll have it figured out in no time.<br />
        Menwhile, cheek out these fresh ideas:
      </Paragraph>
      <Button onClick={() => navigate('/', { replace: true })} rounded fullWidth={false}>Go to home</Button>
    </motion.section>
  )
}

NoMatch.defaultProps = {}

export default NoMatch
