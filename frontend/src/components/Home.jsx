

import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <img
        src="https://exclusivemart.netlify.app/static/media/banner1.eba8a127843249448e29.png"
        alt="Shopping Hero"
        className="w-[70vw] px-14 py-10 mx-auto"
      />
      <Product/>
    </div>
  )
}

export default Home