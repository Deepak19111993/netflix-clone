import React, { useEffect, useState } from "react";
import { BannerWrapper } from "./Banner.styles";
import axios from "../../axios";
import requests from "../../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log("banner Data", movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <BannerWrapper
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        {/* title */}
        <h1 className="banner-title text-white">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description text-white">
          {truncate(movie?.overview, 150)}
        </h1>
        {/* div > 2 buttons */}
        {/* description */}
      </div>
      <div className="banner-fadeBottom"></div>
    </BannerWrapper>
  );
};

export default Banner;
