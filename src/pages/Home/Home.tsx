import React from 'react'
import { useHelloQuery } from '../../generated/graphql';

interface Props {
}

const Home: React.FC<Props> = () => {
  const { data, loading } = useHelloQuery()

  if (loading || !data) {
    return <div>loading...</div>
  }

  return <div style={{padding: '100px 0'}}>{data.hello}</div>
}

Home.defaultProps = {}

export default Home
