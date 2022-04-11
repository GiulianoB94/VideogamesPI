import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../Actions/index";
import { useEffect } from "react";

export default function Details(props) {
  console.log(props);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch]);

  const myVideogame = useSelector((state) => state.details);

  return (
    <div>
      {myVideogame.length > 0 ? (
        <div>
          <h1>{myVideogame[0].name}</h1>
          <img src={myVideogame[0].background_image} alt="img not found" />
          <h2>Genre : {myVideogame[0].genres}</h2>
          <p>Platform : {myVideogame[0].platforms}</p>
          <p>Release Date : {myVideogame[0].released}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <Link to="/Home">
        <button>Back</button>
      </Link>
    </div>
  );
}
