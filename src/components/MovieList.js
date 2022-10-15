import React from "react";
import "../App.css";
import IcPlay from "../assets/icons/ic_play.svg";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div class="relative group overflow-hidden mr-[30px]">
          <img
            src={movie.Poster}
            class="object-cover rounded-[30px] h-[340px] w-[250px]"
            alt=""
          />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
            <div class="px-7 pb-7">
              <div class="font-medium text-xl text-white">{movie.Title}</div>
            </div>
          </div>
          <div
            class="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2 -translate-x-1/2 z-20 transition ease-in-out duration-500"
          >
            <img src={IcPlay} class="" width="50" alt="" />
          </div>
          <a href="watching.html" class="inset-0 absolute z-50"></a>
        </div>
      ))}
    </>
  );
};

export default MovieList;
