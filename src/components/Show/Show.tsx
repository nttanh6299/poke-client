import React from 'react'

interface IShowProps {
  when: boolean
}

const Show: React.FC<IShowProps> = ({ when, children }) => {
  if (!when) return null

  return <>{children}</>
}

export default Show
