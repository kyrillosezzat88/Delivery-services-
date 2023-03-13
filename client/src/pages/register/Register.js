import { useLocation, Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useState } from "react";
import carrierImg from "../../assets/imgaes/carrier.png";
import ShipperImg from "../../assets/imgaes/shipper.png";
import "./Register.scss";
const Register = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({});
  const [showPass, setShowPass] = useState(false);

  //handle passwrod visibility
  const handlePassword = () => {
    setShowPass((prevState) => !prevState);
  };

  //handle inputs change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    //simple validation
    if (!formData.email || !formData.password) {
      return alert("email and password are requried!");
    }
  };
  return (
    <section className="Register">
      <Navbar />
      <div className="Register_content">
        <div className="Register_content_left">
          {location.state.type === "shipper" ? (
            <img src={ShipperImg} alt="RegisterImgae" />
          ) : (
            <img src={carrierImg} alt="RegisterImgae" />
          )}
        </div>
        <div className="Register_content_right">
          <div className="Register_content_right_content">
            <h3 className="Register_content_right_content_subtitle">
              Create {location.state.type} account!
            </h3>
            <form
              className="Register_content_right_content_form"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                className="inpt Register_content_right_content_form_input"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                className="inpt Register_content_right_content_form_input"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="inpt Register_content_right_content_form_input"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="inpt Register_content_right_content_form_input"
                onChange={handleChange}
                required
              />
              <div className="Register_content_right_content_form_password">
                <input
                  type={`${showPass ? "text" : "password"}`}
                  name="password"
                  placeholder="Password"
                  className="inpt Register_content_right_content_form_input"
                  onChange={handleChange}
                  minLength="6"
                  maxLength="12"
                  required
                />
                <span onClick={handlePassword}>
                  {showPass ? "hide" : "show"}
                </span>
              </div>

              <button className="btn-primary">Register Now</button>
            </form>
            <div className="Register_content_right_content_underForm">
              <div className="Register_content_right_content_underForm_actions">
                <p>
                  Already have an account ?{" "}
                  <span>
                    <Link to={"/login"}>Login</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
