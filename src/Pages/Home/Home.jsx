import React from 'react'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Hero from '../../Components/hero/hero'
import Recent from '../../Components/Recent/Recent'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Recent/>
      <NewsLetter/>
    </div>
  )
}

export default Home
