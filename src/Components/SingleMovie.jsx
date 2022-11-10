import React ,{useEffect,useState}from 'react'
import { useParams,NavLink } from 'react-router-dom'
import { API } from '../Data-Store/Context';

const SingleMovie = () => {

  const {id} = useParams();

  
  const [apidata, setapidata] = useState('')
  const [load, setload] = useState(true)

  
  // api fetching function
  const get_api = async (url)  => {
      try {
       const res = await fetch(url);
       const data = await res.json() 
       console.log(data); 
       if (data.Response === 'True') {
          setapidata(data)
          setload(false)
        
       } 
      } catch (error) {
          console.log(error);
      }
  }
  
  // useeefect for fetching
  useEffect(() => {
  
     let debounce =  setTimeout(() => {
          get_api(`${API}&i=${id}`)
      }, 800);
  
      return ()=> clearTimeout(debounce);
   
  }, [id])
  
if (load) {
  return(
    <div className='movie-section'>
    <div className='loading'>
      loading
    </div>
  </div>
  )
}

  return (
    <>
    <section className='movie-section'>
<div className='movie-card'>
<figure>
  <img src={apidata.Poster} alt="" />
</figure>
<div className='card-content'>
<p className='title'> {apidata.Title} </p>
<p className='card-text'> {apidata.Released} </p>
<p className='card-text'> {apidata.Genre} </p>
<p className='card-text'> {apidata.imdbRating} </p>
<p className='card-text'> {apidata.Country} </p>
<NavLink to="/" className='back-btn '>
  GO Back
</NavLink>
</div>
</div>
    </section>
    </>
  )
}

export default SingleMovie