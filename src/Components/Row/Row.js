import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../../axios";
import { RowWrapper } from "./Row.styles";
import movieTrailer from "movie-trailer";
import ScrollContainer from "react-indiana-drag-scroll";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //   A snippet of code which runs based on a specific condition/variable

  useEffect(() => {
    // if [], run once when the row loads and don't  run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  console.log(movies);

  const handleClick = (movie) => {
    console.log(trailerUrl);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name ?? movie?.original_name, { mutli: true })
        .then((url) => {
          console.log("url", url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log("url", urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <RowWrapper className="row">
      {/* title */}
      <h2 className="text-white">{title}</h2>

      <ScrollContainer className="scroll-container">
        <div className="row-posters">
          {/* row-posters */}
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row-poster ${isLargeRow && "row-poster-large"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </ScrollContainer>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* container => posters */}
    </RowWrapper>
  );
};

export default Row;
