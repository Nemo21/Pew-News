import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeReviewCard from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import apiDummyData from "../apiDummyData.json";
import axios from "axios";
import TestCard from "../components/TestCard";

const Test = () => {
  const { source, category } = useParams();
  const [data, setData] = useState();

  const API_URL = `http://localhost:5000/api/`;

  const getData = async () => {
    try {
      const response = await axios.get(
        API_URL + "NDTV" + `?category=${category}`
      );
      console.log(response.data.news);
      setData(response.data.news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [source]);

  return (
    <>
      <Header />
      <Nav />
      <TestCard data={data} />
      <Footer />
    </>
  );
};

export default Test;
