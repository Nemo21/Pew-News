import React from 'react'
import Body from '../components/Body'
import RecipeReviewCard from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

const Home = () => {

    

  return (
    <>
        <Header />
        <Nav />
        <Hero />
        <Body />
        {/* <RecipeReviewCard/> */}
        <Footer />
    </>
  )
}

export default Home