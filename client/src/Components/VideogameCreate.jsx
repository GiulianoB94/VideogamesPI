import React from "react";
import { useEffect, useState, dispatch } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideogames, postVideogame } from "../Actions";
import "./VideogameCreate.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!input.platforms) {
    errors.platforms = "Platform is required";
  }

  return errors;
}

export default function VideogameCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    genres: [],
    platforms: [],
    image: "",
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  function handleSelectGenre(e) {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }
  function handleSelectPlatforms(e) {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postVideogame(input));
    alert("Videogame Created!");
    setInput({
      name: "",
      genres: "",
      platforms: [],
      image: "",
    });
    navigate("/home");
  }

  return (
    <div className="containerPost">
      <header className="header">
        <h1 className="title">HENRY GAMES</h1>
      </header>

      <div className="mainscreen">
        <div className="rightsidePost">
          <form action="">
            <h1 className="titlePost">Create Videogame</h1>
            <label className="labelCardPost">Game title</label>
            <input
              type="text"
              class="inputbox"
              name="name"
              required
              value={input.name}
              onChange={handleChange}
            />
            <label className="labelCardPost">Description</label>
            <input
              type="text"
              class="inputbox"
              name="Description"
              id="card_number"
              value={input.Description}
              onChange={handleChange}
              required
            />
            <label className="labelCardPost">Image</label>
            <input
              type="text"
              class="inputbox"
              name="Image"
              id="card_number"
              value={input.platforms}
              onChange={handleChange}
              required
            />
            <label className="labelCardPost">Release Date</label>
            <input
              type="text"
              class="inputbox"
              name="name"
              required
              value={input.Release}
              onChange={handleChange}
            />
            <label className="labelCardPost">Ratings</label>
            <input
              type="text"
              class="inputbox"
              name="name"
              required
              value={input.Release}
              onChange={handleChange}
            />
            <label className="labelCardPost">Select Genre</label>
            <select
              onChange={(e) => handleSelectGenre(e)}
              class="inputbox"
              name="card_type"
              id="card_type"
              required
            >
              {genres.map((genre) => (
                <option value={genre.name}>{genre.name}</option>
              ))}
            </select>
            <div>{input.genres.map((el) => el + ",")}</div>
            <label className="labelCardPost">Select Platform</label>
            <select
              onChange={(e) => handleSelectPlatforms(e)}
              class="inputbox"
              name="card_type"
              id="card_type"
              required
            >
              {platforms}
            </select>
            <div>{input.platforms.map((el) => el + ",")}</div>
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              class="button"
            >
              Submit
            </button>
          </form>
        </div>
        <Link to="/home">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

// <div className="cardBody">
// <h1 className="titlePost">Create Videogame</h1>
// <form>
//   <div className="formCont">
//     <label>Name</label>
//     <input
//       className="inputCard"
//       type="text"
//       value={input.name}
//       name="Name"
//       onChange={handleChange}
//     />
//     {errors.name && <label className="error">{errors.name}</label>}
//   </div>
//   <div>
//     <label>Platform</label>
//     <input
//       className="inputCard"
//       type="text"
//       value={input.platforms}
//       name="Platform"
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     <label>Image</label>
//     <input
//       className="inputCard"
//       type="text"
//       value={input.image}
//       name="Image"
//       onChange={handleChange}
//     />
//   </div>
//   <div>
//     Genres
//     <select onChange={(e) => handleSelect(e)}>
//       {genres.map((genre) => (
//         <option value={genre.name}>{genre.name}</option>
//       ))}
//     </select>
//   </div>
//   <div>{input.genres.map((el) => el + ",")}</div>
//   <button onClick={handleSubmit}>Create Videogame</button>
// </form>
// </div>
