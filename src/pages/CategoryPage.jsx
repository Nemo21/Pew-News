import React, { useState } from 'react'
import RecipeReviewCard from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { useParams } from "react-router-dom";
import apiDummyData from '../apiDummyData.json'

const CategoryPage = () => {

    const { category } = useParams();
    const [data, setData] = useState(apiDummyData.articles)

    console.log(category);
  return (
    <>
      <Header />
      <Nav />
      <RecipeReviewCard data={data}/>
      <Footer />
    </>
  )
}

export default CategoryPage