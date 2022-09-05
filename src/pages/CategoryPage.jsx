import React from 'react'
import RecipeReviewCard from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { useParams } from "react-router-dom";
import data from '../apiDummyData.json'

const CategoryPage = () => {

    const { category } = useParams();

    console.log(category);
  return (
    <>
      <Header />
      <Nav />
      <RecipeReviewCard data={data.articles}/>
      <Footer />
    </>
  )
}

export default CategoryPage