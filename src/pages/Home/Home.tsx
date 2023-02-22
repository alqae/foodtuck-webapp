import React from 'react'
import { useHelloQuery } from '../../generated/graphql';

interface Props {
}

export default ({}: Props) => {
  const { data, loading } = useHelloQuery()

  if (loading || !data) {
    return <div>loading...</div>
  }

  return <div style={{padding: '100px 0'}}>{data.hello}</div>
}
