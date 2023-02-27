import React from 'react'
import { motion } from 'framer-motion'

import { ExpansionPanel, Heading, Paragraph } from '../../components'

interface Props { }

const Faq: React.FC<Props> = () => {
  return (
    <section className="container">
      <motion.div
        className="text-center mb-7"
        initial={{ transform: "translateY(-100px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        viewport={{ once: true }}
      >
        <Heading level={1 }>Questions Looks Here</Heading>
        <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </Paragraph>
      </motion.div>

      <div className="grid">
        <motion.div
          className="col-6_sm-12"
          initial={{ transform: "translateX(-100px)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          viewport={{ once: true }}
        >
          <ExpansionPanel title="How we serve food?">
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nisi quis modi ullam amet debitis libero veritatis enim
              repellat optio natus eum delectus deserunt, odit expedita
              eos molestiae ipsa totam quidem?
            </Paragraph>
          </ExpansionPanel>
        </motion.div>

        <motion.div
          className="col-6_sm-12"
          initial={{ transform: "translateX(100px)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          viewport={{ once: true }}
        >
          Hola
        </motion.div>
      </div>
    </section>
  )
}

Faq.defaultProps = {}

export default Faq
