import React from 'react'
import { UseProps } from '../Data-Store/Context'
const Error = () => {

    const name = UseProps()


  return (
    <div>Error {name} </div>
  )
}

export default Error