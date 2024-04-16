import React from 'react'
import useLatestMovies from '../hooks/useLatestMovies'

const SecondaryContainer = () => {
  useLatestMovies();
  return (
    <div>SecondaryContainer</div>
  )
}

export default SecondaryContainer