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
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url);
  }, []);
  return (
    <main className="main-wrapper">
      <article className="user-details">
        <img src={defaultImage} className="user-Image" />
        <p>My name is</p>
        <h3>Default Name</h3>
        <div className="font-icons">
          <FaUser />
          <FaEnvelopeOpen />
          <FaCreativeCommonsNcJp />
          <FaLock />
          <FaMap />
          <FaPhone />
          <FaCalendarTimes />
        </div>
      </article>
    </main>
  );
}

export default App;
