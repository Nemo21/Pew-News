import React, { useState } from 'react'
import RecipeReviewCard from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { useParams } from "react-router-dom";
import apiDummyData from '../apiDummyData.json'
import axios from 'axios'

const CategoryPage = () => {

    const { category } = useParams();
    const API_KEY = "2e7a52f057e54499b3487cee0f3641f3"

    //GET https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=API_KEY

    const [data, setData] = useState(apiDummyData.articles)
    const getData = async () => {

      try{
        const response = await axios.get(`https://newsapi.org/v2/everything/sources?category=${category}&apiKey=${API_KEY}`)
        console.log(response.data.sources);
      }catch (error){
        console.log(error);
      }

    }

    getData();
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