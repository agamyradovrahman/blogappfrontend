import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./postdetail.css";
import dayjs from "dayjs";

const Postdetail = () => {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const getart = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/posts/${params.id}`);
        const newdata = res.data.post;

        setPost(newdata);
      } catch (err) {
        console.log(err);
      }
    };
    getart();
  }, [params.id]);
  console.log(post);

  return (
    <div className="postdetail_container">
      <div className="postdetail_date">
        By: {post?.author} {dayjs(post?.createdAt).format("MM/DD/YYYY")}
      </div>
      <div className="postdetail_title">{post?.title}</div>
      <div className="postdetail_image">
        <img className="postdetail_thumbnail" src={post?.image.url} alt="" />
      </div>
      <div className="postdetail_content">
        {post?.content}
      </div>
    </div>
  );
};

export default Postdetail;
