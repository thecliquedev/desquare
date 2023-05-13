import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../http";

export default function MainRoute() {
  const [project, setProject] = useState({});

  useEffect(() => {
    let id = window.location.pathname.split("/").pop();
    axios
      .get(`/projects/${id}`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (!Object.values(project).length) {
    return null;
  }

  return (
    <div className="about-us bgImage">
      <div className="fromTop" />
      <div className="fromTop" />
      <div className="fromBottom" />
      <div className="fromBottom" />

      <div className="container">
        <div className="space-top-work" />
        <div
          className="scroll animated fadeInUp delayBy8"
          style={{ padding: "0 24px", height: 600 }}
        >
          <div className="row well" style={{ overflowX: "hidden" }}>
            <div className="text-left">
              <h2>
                Our Works{" "}
                <Link to="/our-work/1">
                  <span className="pull-right small">
                    <Link to="/our-work">Back</Link>
                  </span>
                </Link>
              </h2>
              <br />
            </div>
            <div className="row">
              <div className="row">
                <div className="col-md-12 text-uppercase text-center">
                  <h3 style={{ color: "#111 !important", opacity: 0.5 }}>
                    {project.subHeading}{" "}
                  </h3>
                  <hr />
                </div>
              </div>
              <div className="col-md-2 mar-bottom">
                <a
                  href={`https://api.desquare.net:4000/${project.images[0].src}`}
                  data-lightbox={project.mainHeading}
                >
                  <div
                    className="imageBlock main-image"
                    style={{
                      backgroundImage: `url('https://api.desquare.net/${project.images[0].src}')`,
                    }}
                  />
                </a>
              </div>
              <div className="col-md-5">
                <div className="row">
                  {project.images.slice(1).map((e, i) => (
                    <div className="col-md-4 col-xs-6 mar-bottom">
                      <a
                        href={`https://api.desquare.net/${e.src}`}
                        data-lightbox={project.mainHeading}
                      >
                        <div
                          className="imageBlock"
                          style={{
                            backgroundImage: `url('https://api.desquare.net/${e.src}')`,
                            height: 100,
                          }}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-5">
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{ __html: project.desc }}
                />
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
}
