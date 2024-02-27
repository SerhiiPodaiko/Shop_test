import { useState } from 'react'
import './Search.scss'

const Search = ({ placeholder }) => {
  const [value, setValue] = useState('')

  return (
    <div className='search'>
      <input
        type='search'
        className='search__input'
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className='search__icon'>
        &#128269;
      </span>
    </div>
  )
}

export default Search
