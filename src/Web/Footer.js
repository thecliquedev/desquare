import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import facebook from "bootstrap-icons/icons/facebook.svg";
import instagram from "bootstrap-icons/icons/instagram.svg";
import youtube from "bootstrap-icons/icons/youtube.svg";

const Footer = () => {
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
    <footer className="footer section bd-container">
      <div className="footer__container bd-grid">
        <div className="footer__content footer_image_social">
          <Link to="/index" className="footer__logo">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`} />
          </Link>
          <div>
            <ul className="footer__social">
              <li style={{ marginRight: 0 }}>
                <a href="https://www.facebook.com/DESQUARE1" target="_blank">
                  <img style={{ width: 32, padding: 0 }} src={facebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/desquarearchitects"
                  target="_blank"
                >
                  <img style={{ width: 32, padding: 0 }} src={instagram} />
                </a>
              </li>
              <li style={{ marginLeft: 0 }}>
                <a
                  href="https://youtube.com/channel/UCoZ84nH_A2451ti80hcWHeA"
                  target="_blank"
                >
                  <img style={{ width: 32, padding: 0 }} src={youtube} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__content">
          <h4 className="footer__title color__logo">Information</h4>
          <ul>
            <li>
              <Link to="/about" className="footer__link">
                About
              </Link>
            </li>
            <li>
              <Link to="/our-work" className="footer__link">
                Our Works
              </Link>
            </li>
            <li>
              <Link to="/publications" className="footer__link">
                Publication & Awards
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h4 className="footer__title">Address</h4>
          <ul>
            <li>de Square,“Brindavana complex”,</li>
            <li>No 507,15 th Cross, 7 th main,</li>
            <li>Indiranagar 2 nd stage Bangalore 560 038.</li>
          </ul>
          {/* <h4 className="footer__title">Landline</h4> */}
          <ul>
            <li>080-43726413</li>
            <li>+91-6360 333 979</li>
          </ul>
          {/* <h4 className="footer__title">Phone</h4> */}
          <ul>
          </ul>
          {/* <h4 className="footer__title">Email</h4> */}
          <ul>
            <li>info@desquare.net</li>
            <li>naveen@desquare.net</li>
          </ul>
        </div>
        <div className="footer__content footer_enquiry">
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

      <p className="footer__copy">&#169; 2023 desquare. All right reserved.</p>
    </footer>
  );
};

export default Footer;
