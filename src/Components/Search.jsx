import React from 'react'
import { UseProps } from '../Data-Store/Context'

const Search = () => {

  const { query, setquery, isError } = UseProps()

  return (
    <section className='search-section'>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text"
          placeholder='search movie'
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
      </form>

      <div className='card-error'>
<p>{isError.show && isError.msg}</p>
      </div>
    </section>
  )
}

export default Search