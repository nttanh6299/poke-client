import React from 'react'

const ErrorPage: React.FC = () => {
  const onClick = () => {
    throw new Error(`This error created at ${new Date()}`)
  }

  return <div onClick={onClick}>Click here!</div>
}

export default ErrorPage
