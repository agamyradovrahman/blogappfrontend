import React from "react";
import "./posts.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function Posts( {category, arts} ) {
  
  return (
    <div className="Esas_container">
      <div className="post_line">
        <div className="post_linetitle">
          {category}
        </div>
      </div>
      <div className="Post_container">
        {arts &&
          arts.map((art) => {
            return (
              <Link to={`/${art._id}`} className="link_style">
                <div className="Post_each" key={uuidv4()}>
                  <img className="post_thumbnail" src={art.image.url} alt="" />
                  <div className="post_title">{art.title}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
