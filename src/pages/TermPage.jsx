import React from 'react'
import { useParams } from 'react-router-dom'
import RecipeReviewCard from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

const TermPage = () => {

    const { term } = useParams();

    console.log(term);
    
  return (
    <>
        <Header />
        <Nav />
        <RecipeReviewCard/>
        <Footer />
    </>
  )
}

export default TermPage