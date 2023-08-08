import React, { useEffect, useState } from 'react'
import "./sport.css"
import Posts from './../post/post';
import axios from 'axios';

const Sport = () => {
  const category = "Sport"
  const [politics, setPolitics] = useState();

  useEffect(() => {
    const getart = async () => {
      try {
        const res = await axios.get(`https://blogappbackend-rxso.onrender.com/posts/category/sport`, {category: "sport"});
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

export default Sport