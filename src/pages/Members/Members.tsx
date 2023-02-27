import React from 'react'
import { motion } from 'framer-motion'

import { Heading, Paragraph } from '../../components'
import { Member } from '../../models'

interface Props { }

const Members: React.FC<Props> = () => {
  const members: Member[] = [
    {
      id: 1,
      name: 'Tahmina Rumi',
      position: 'Chef',
      avatar: require('../../assets/images/members/tahmina-rumi.png'),
    },
    {
      id: 2,
      name: 'Jorina Begum',
      position: 'Chef',
      avatar: require('../../assets/images/members/jorina-begum.png'),
    },
    {
      id: 3,
      name: 'M.Mohammad',
      position: 'Chef',
      avatar: require('../../assets/images/members/m-mohammad.png'),
    },
    {
      id: 4,
      name: 'Munna Kathy',
      position: 'Chef',
      avatar: require('../../assets/images/members/munna-kathy.png'),
    },
    {
      id: 5,
      name: 'Tahmina Rumi',
      position: 'Chef',
      avatar: require('../../assets/images/members/tahmina-rumi-double.png'),
    },
    {
      id: 6,
      name: 'Bisnu devgon',
      position: 'Chef',
      avatar: require('../../assets/images/members/bisnu-devgon.png'),
    },
    {
      id: 7,
      name: 'Motin Molladsf',
      position: 'Chef',
      avatar: require('../../assets/images/members/motin-molladsf.png'),
    },
      {
      id: 8,
      name: 'William Rumi',
      position: 'Chef',
      avatar: require('../../assets/images/members/william-rumi.png'),
    },
    {
      id: 9,
      name: 'Kets william roy',
      position: 'Chef',
      avatar: require('../../assets/images/members/kets-william-roy.png'),
    },
    {
      id: 10,
      name: 'Mahmud kholil',
      position: 'Chef',
      avatar: require('../../assets/images/members/mahmud-kholil.png'),
    },
    {
      id: 11,
      name: 'Ataur Rahman',
      position: 'Chef',
      avatar: require('../../assets/images/members/ataur-rahman.png'),
    },
    {
      id: 12,
      name: 'Monalisa holly',
      position: 'Chef',
      avatar: require('../../assets/images/members/monalisa-holly.png'),
    }
  ]

  return (
    <motion.section className="container grid">
      {members.map((member) => (
        <motion.div
          key={member.id}
          className="col-3_sm-6_xs-12"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <img className="w-100" src={member.avatar} alt={member.name} />
          <div className="text-center">
            <Heading level={4} size="xs" className="mt-1">{member.name}</Heading>
            <Paragraph as="span" size="lg" className="mt-1">{member.position}</Paragraph>
          </div>
        </motion.div>
      ))}
    </motion.section>
  )
}

Members.defaultProps = {}

export default Members