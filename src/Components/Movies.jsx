import React from 'react'
import { UseProps } from '../Data-Store/Context'


const Movies = () => {

  const {apidata,load} = UseProps()


  if (load) {
    return (
      <div>
        <h2>
          loading
        </h2>
      </div>
    )
     
  }

  return (
    <div>
{
  apidata.map((curmov)=>{
    return <h2> {curmov.Title} </h2>
  }
  
  )
}
    </div>
  )
}

export default Movies