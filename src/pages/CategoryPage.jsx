import React, { useEffect, useState } from 'react'
import RecipeReviewCard from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { useParams } from "react-router-dom";
import apiDummyData from '../apiDummyData.json'
import axios from 'axios'

const CategoryPage = () => {

    const { category } = useParams();
    const API_KEY = "970d448337af4526a32943339ad14ec1"

    //GET https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=API_KEY

    const [data, setData] = useState()
    const getData = async () => {

      try{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=de&category=${category}&apiKey=${API_KEY}`)
        setData(response.data.articles)
      }catch (error){
        console.log(error);
      }

    }

    useEffect(() => {

      getData();
      console.log(data);

    }, [category])
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