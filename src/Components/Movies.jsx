import React from 'react'
import { UseProps } from '../Data-Store/Context'
import { NavLink } from 'react-router-dom'

const Movies = () => {

  const {apidata,load} = UseProps()


  if (load) {
    return (
      <div className=''>
        <div className='loading'>
          loading
        </div>
      </div>
    )
     
  }

  return (
   <>
   <section className='movie-page'>
<div className='container grid grid-4-col'>
{
  apidata.map((curmov)=>{
    const {imdbID,Title,Poster} = curmov;
    return <NavLink to={`movie/${imdbID }`} key={imdbID}>
        <div className="card">
          <div className='card-inf0'>
            <h2> {Title}</h2>
            <img src={Poster} alt={imdbID}  />

          </div>
        </div>
    </NavLink>
  })
}
</div>
   </section>
   </>
  )
}

export default Movies