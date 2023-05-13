import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../http";

import { checkLogin } from "../setAuthToken";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    checkLogin();
  }, []);

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

  function onSubmit(e) {
    e.preventDefault();

    const userData = new FormData();
    userData.append("images", e.target.images.files[0]);
    userData.append("mainHeading", e.target.mainHeading.value);
    userData.append("subHeading", e.target.subHeading.value);
    userData.append("desc", e.target.desc.value);

    axios
      .post("/projects/createProject", userData)
      .then((res) => {
        window.location.href = "/admin";
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function editProject(e, id) {
    e.preventDefault();

    const userData = new FormData();
    userData.append("images", e.target.images.files[0]);
    userData.append("mainHeading", e.target.mainHeading.value);
    userData.append("subHeading", e.target.subHeading.value);
    userData.append("desc", e.target.desc.value);

    axios
      .post("/projects/createProject", userData)
      .then((res) => {
        window.location.href = "/admin";
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function deleteProject(e, id) {
    e.preventDefault();
    axios
      .delete(`/projects/${id}`)
      .then((res) => {})
      .catch((e) => {
        console.log(e);
      });
    window.location.href = "/admin";
  }

  return (
    <div className="container">
      <div className="text-center">
        <h3></h3>
      </div>
      <div className="text-right">
        <button
          className="btn btn-default"
          data-toggle="modal"
          data-target="#myModal"
        >
          <h5>
            Add Projects{" "}
            <i
              className="fa fa-plus-square"
              aria-hidden="true"
              style={{ paddingLeft: 5 }}
            />
          </h5>
        </button>
      </div>

      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <div className="text-center">
                <h4 className="modal-title">Add Projects</h4>
              </div>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit} encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="name">Main Heading:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mainHeading"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Sub Heading:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subHeading"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Description:</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="comment"
                    name="desc"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Main Image:</label>
                  <input type="file" name="images" required /> <br />
                </div>

                <div className="text-right">
                  <button type="submit" className="btn btn-default">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {projects.length !== 0 &&
          projects.map((p) => (
            <div className="col-md-3 events-thumbnail" key={p._id}>
              <Link to={`admin/${p._id}`}>
                <div
                  className="event-thumbnail img-thumbnail"
                  style={{
                    backgroundImage: `url('https://api.desquare.net/${
                      p.images.length && p.images[0].src
                    }')`,
                  }}
                ></div>

                <div className="editing">
                  <button
                    className="btn btn-danger"
                    onClick={(e) => deleteProject(e, p._id)}
                  >
                    <i className="fa fa-trash-o" aria-hidden="true" />
                  </button>
                </div>
                <h4>{p.mainHeading}</h4>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
