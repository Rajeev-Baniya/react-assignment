import React, { useState, useEffect } from "react";
import "./gallery.css";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
const Gallery = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const apiKey = process.env.REACT_APP_CLIENT;
  console.log(apiKey);
  const endPoint = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${apiKey}`;

  const { data, loading, error, reFetch } = useFetch(endPoint);
  console.log(data);

  return (
    <div className="gallery">
      <div className="d-flex align-items-center justify-content-between mb-5 flex-wrap">
        <h3 className="a-heading ">
          <i class="fa-solid fa-image"></i>Photo Library
        </h3>
        <Link to="/">Appointment page</Link>
      </div>
      <div className="search mb-5">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="row g-5">
        {data.results &&
          data?.results.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
              <img src={item.urls.regular} alt={query} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
