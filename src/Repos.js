import axios from "axios";
import React, { useEffect, useState } from "react";

const Repos = (props) => {
  const [repoUrl, setRepoUrl] = useState([]);
  console.log(props.nameurl);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.nameurl}/repos`)
      .then((res) => {
        console.log(res.data);
        // console.log(res.data[0].name);
        // console.log(res.data[0].language);
        setRepoUrl(res.data);
      });
  });
  return (
    <>
      <div className="main-repo">
        {repoUrl.map((ele, idx) => {
          return (
            <>
              <div key={idx} id="repo-cantainer">
                <div className="containt-line">
                  <a href={ele.html_url} target='_blank'>
                    <h2>{ele.name}</h2>
                  </a>
                  <span>
                    {ele.private ? (
                      <strong>Private</strong>
                    ) : (
                      <strong>Public</strong>
                    )}
                  </span>
                </div>
                <p>{ele.language}</p>

                <br />
                <br />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Repos;
