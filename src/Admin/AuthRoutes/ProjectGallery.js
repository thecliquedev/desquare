import React, { useEffect, useState } from "react";
import axios from "../../http";

export default function Portfolio() {
  const [project, setProject] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("Token");

    if (localStorage.getItem("Token")) {
      axios.defaults.headers.common["auth"] = token;
    } else {
      window.location.href = "/admin";
      delete axios.defaults.headers.common["auth"];
    }
  }, []);

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

  function onSubmit(e) {
    e.preventDefault();
    let id = window.location.pathname.split("/").pop();

    if (!e.target.images.files[0]) {
      alert("Select an image and try again!");
      return null;
    }

    const userData = new FormData();
    userData.append("images", e.target.images.files[0]);

    axios
      .post(`/projects/addimage/${id}`, userData)
      .then((res) => {
        window.location.href = `/admin/${id}`;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function onEdit(e) {
    e.preventDefault();

    let imgId = project.images[0]._id;
    let pId = project._id;

    const userData = new FormData();
    userData.append("images", e.target.images.files[0]);
    userData.append("mainHeading", e.target.mainHeading.value);
    userData.append("subHeading", e.target.subHeading.value);
    userData.append("desc", e.target.desc.value);

    axios
      .post(`/projects/edit/${pId}/${imgId}`, userData)
      .then((res) => {
        window.location.href = "/admin";
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function deleteImage(id) {
    let pid = project._id;
    axios
      .delete(`/projects/unLinkGalleryImage/${pid}/${id}`)
      .then((res) => {
        window.location.href = `/admin/${pid}`;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="container">
      <div className="text-center">
        <h3>Add Gallery</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href="/admin">
          <button className="btn btn-default" style={{ marginRight: 25 }}>
            <h5>Back</h5>
          </button>
        </a>

        <form onSubmit={onSubmit} style={{ display: "flex" }}>
          <span>
            <label
              htmlFor="galleryImage"
              className="btn btn-default"
              style={{ lineHeight: "35px" }}
            >
              Add Images:
            </label>
            <input
              type="file"
              id="galleryImage"
              name="images"
              style={{ visibility: "hidden" }}
            />{" "}
            <br />
          </span>

          <span>
            <button type="submit" className="btn btn-default">
              <h5>Submit</h5>
            </button>
          </span>
        </form>
      </div>

      <div id="editModel" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <div className="text-center">
                <h4 className="modal-title">Edit Project</h4>
              </div>
            </div>
            <div className="modal-body">
              <form onSubmit={onEdit} encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="name">Main Heading:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mainHeading"
                    defaultValue={project.mainHeading}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Sub Heading:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subHeading"
                    defaultValue={project.subHeading}
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
                    defaultValue={project.desc}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-5">
                    {project.images && (
                      <img
                        src={`https://api.desquare.net/${project.images[0].src}`}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="col-md-7">
                    <div className="form-group">
                      <label htmlFor="comment">Main Image:</label>
                      <input type="file" name="images" required /> <br />
                    </div>
                  </div>
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

      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <div className="text-center">
                <h4 className="modal-title">Add Images</h4>
              </div>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
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
        {!!Object.values(project).length &&
          project.images.map((e) => (
            <div className="col-md-3 events-thumbnail" key={e._id}>
              <div
                className="event-thumbnail img-thumbnail"
                style={{
                  backgroundImage: `url('https://api.desquare.net/${e.src}')`,
                }}
              ></div>

              {!(project.images.length < 2) && (
                <div className="editing">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteImage(e._id)}
                  >
                    <i className="fa fa-trash-o" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
