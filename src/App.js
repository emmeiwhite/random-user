import React, { useState, useEffect } from "react";
import "./App.css";

import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
  FaCreativeCommonsNcJp,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState([]);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("DATA IS HERE ");
        console.log(data);
      });
  }, []);

  // One function to handle them all :-)
  const handleValue = (e) => {
    console.log(e.target["data-label"]);
  };
  return (
    <main className="main-wrapper">
      <article className="user-details">
        <img
          src={(person && person.image) || defaultImage}
          className="user-Image"
        />

        <p>My {title} is</p>
        <h3>{value}</h3>
        <div className="font-icons">
          <button className="icon" data-label="name" onMouseOver={handleValue}>
            <FaUser />
          </button>
          <button className="icon" data-label="email" onMouseOver={handleValue}>
            <FaEnvelopeOpen />
          </button>
          <button className="icon" data-label="age" onMouseOver={handleValue}>
            <FaCalendarTimes />
          </button>
          <button
            className="icon"
            data-label="street"
            onMouseOver={handleValue}
          >
            <FaMap />
          </button>
          <button className="icon" data-label="phone" onMouseOver={handleValue}>
            <FaPhone />
          </button>
          <button
            className="icon"
            data-label="password"
            onMouseOver={handleValue}
          >
            <FaLock />
          </button>
        </div>

        <button className="btn btn-action">
          {loading ? "loading..." : "RANDOM USER"}
        </button>
      </article>
    </main>
  );
}

export default App;
