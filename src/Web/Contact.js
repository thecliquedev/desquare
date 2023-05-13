import React, { useState } from "react";
import axios from "axios";

export default function MainRoute() {
  const [hide, setHide] = useState(true);

  function sendEmail(e) {
    e.preventDefault();
    axios
      .post("/sendEmail", {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <div className="contact">
        <div className="top-layer" />
        <div
          className="block"
          style={{ opacity: 1, transition: "all 0.3s ease-in-out" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.9715023248849!2d77.63315!3d12.979142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32661e49c6a0e90f!2sDesquare!5e0!3m2!1sen!2sus!4v1528363200858"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: "0", background: "#000" }}
            allowFullScreen
          />
        </div>

        <div
          className="floting-menu text-center hidden-lg hidden-md"
          data-toggle="modal"
          data-target="#myModal"
        >
          <span style={{ color: "#111", letterSpacing: "1px" }}>
            Contact Us
          </span>
        </div>

        <div className="well-contact animated fadeInDown delayBy8 hidden-sm hidden-xs">
          <div>
            <p>
              <span>Address:</span> <br /> de Square, "Brindavana complex", <br />{" "}
              No 507, 15 th Cross, 7 th main, <br /> Indiranagar 2 nd stage
              Bangalore 560 038 <br />
              <br /> <span>Landline:</span>
              <br /> 080-43726413 <br /> <br />
              <span>Phone:</span> <br /> 91-6360 333 979 <br /> <br />
              <span>Email:</span> <br /> info@desquare.net <br />{" "}
              naveen@desquare.net
            </p>
          </div>

          {hide && (
            <React.Fragment>
              <button
                className="btn btn-default btn-block"
                onClick={() => setHide(false)}
              >
                Enquiry Form!
              </button>
            </React.Fragment>
          )}

          {!hide && (
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  name="message"
                  placeholder="Enter Description"
                />
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-default">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/*<script>*/}
      {/*$("#nq-form-click").click(function(){*/}
      {/*$("#nq-form-click").hide();*/}
      {/*$("#enq-form").show();*/}
      {/*})*/}
      {/*</script>*/}

      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div>
                <p>
                  <span>Address:</span> <br /> de Square, "Brindavana complex",{" "}
                  <br /> No 507, 15 th Cross, 7 th main, <br /> Indiranagar 2 nd
                  stage Bangalore 560 038 <br />
                  <br /> <span>Landline:</span>
                  <br /> 080-43726413 <br /> <br />
                  <span>Phone:</span> <br /> 91-6360 333 979 <br /> <br />
                  <span>Email:</span> <br /> info@desquare.net <br />{" "}
                  naveen@desquare.net
                </p>
              </div>
              <hr />
              <h3>Get in touch!</h3>
              <form onSubmit={sendEmail}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group" name="message">
                  <textarea
                    className="form-control"
                    rows="5"
                    name="message"
                    placeholder="Enter Description"
                  />
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
    </div>
  );
}
