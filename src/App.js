import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Repos from "./Repos";

const App = () => {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [rname, setRname] = useState("");

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}`).then((res) => {
      console.log(res.data);
      setProfile(res.data.avatar_url);
      setLocation(res.data.location);
      setRname(res.data.name);
    });
  });

  // const getData = () => {
  //   fetch(`https://api.github.com/users/${userName}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res)
  //       setProfile(res.avatar_url)
  //       setLocation(res.location)
  //       setRname(res.name)
  //     })
  // }

  // useEffect(() => {
  //   getData()
  // }, [])
  const EnterInput = (e) => {
    // console.log(e.target.value);
    setUser(e.target.value);
  };
  const Enter = (e) => {
    if (user) {
      setUserName(user);
    }
    setUser("");
    e.preventDefault();
  };
  return (
    <>
    <div className="nav-page">
    
    </div>



      <div className="main-page">
        <div className="main-container-page">
          <nav className="nav-search-bar">
            <form onSubmit={Enter}>
              <input
                size="35"
                type="text"
                name="search"
                value={user}
                placeholder="Search GitHub"
                onChange={EnterInput}
              />
              <button type="submit" id="btn">
                Search
              </button>
            </form>
          </nav>
          <div className="profile-card">
            <img src={profile} alt="profile-pics" />
            <h2>{rname}</h2>

            <button>
              <strong>Edit Profile</strong>
            </button>
            <p>{location}</p>
          </div>
        </div>

        <Repos nameurl={userName} />
      </div>
    </>
  );
};
export default App;
