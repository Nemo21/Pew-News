import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import RecipeReviewCard from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import apiDummyData from '../apiDummyData.json'

const TermPage = () => {

    const [data, setData] = useState(apiDummyData.articles)
    const { term } = useParams();

    console.log(term);
  return (
    <>
      <Header />
      <Nav />
      <RecipeReviewCard data={data}/>
      <Footer />
    </>
  )
}

export default TermPage