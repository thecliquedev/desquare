import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../http";

export default function MainRoute() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div
      className="about-us bgImage"
      style={{ backgroundImage: "url(./img/bg.jpg)" }}
    >
      <div className="container">
        <div className="space-top-work" />

        <div
          className="animated fadeInUp delayBy8"
          style={{ padding: "0 24px" }}
        >
          <div className="row well">
            <div className="wrap">
              {projects.length !== 0 &&
                projects.map((p, i) => (
                  <div key={i} className="col">
                    <Link to={`/our-work/${p._id}`}>
                      <div
                        className="imageBlock"
                        style={{
                          backgroundImage: `url('https://api.desquare.net/${
                            p.images.length && p.images[0].src
                          }')`,
                        }}
                      >
                        <div className="flot-left">
                          <div className="veticle-letter">
                            <h3>{p.mainHeading}</h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
}
