import React, { useEffect, useState } from 'react'
import "./economic.css"
import Posts from './../post/post';
import axios from 'axios';

const Economic = () => {
  const category = "Economic"
  const [politics, setPolitics] = useState();

  useEffect(() => {
    const getart = async () => {
      try {
        const res = await axios.get(`https://blogappbackend-rxso.onrender.com/posts/category/economic`);
        const newdata = res.data.post;

        setPolitics(newdata);
      } catch (err) {
        console.log(err);
      }
    };
    getart();
  }, []);
  console.log(politics);
  return (
    < >

        <Posts category={category} arts={politics}/>

    </>
  )
}

export default Economic