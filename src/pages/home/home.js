import React, { useEffect, useState } from 'react'
import "./home.css"
import Posts from './../post/post';
import axios from 'axios';

const Home = () => {
  const category = "Article"
  const [arts, setArts] = useState();

  useEffect(() => {
    const getart = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/posts/products`);
        const newdata = res.data.post;

        setArts(newdata);
      } catch (err) {
        console.log(err);
      }
    };
    getart();
  }, []);
  console.log(arts);
  return (
    < >

        <Posts category={category} arts={arts}/>

    </>
  )
}

export default Home