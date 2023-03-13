import "./Login.scss";
import { Navbar } from "../../components";
import LoginImg from "../../assets/imgaes/login_image.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
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
    console.log(formData);
  };
  return (
    <section className="Login">
      <Navbar />
      <div className="Login_content">
        <div className="Login_content_left">
          <img src={LoginImg} alt="LoginImgae" />
        </div>
        <div className="Login_content_right">
          <div className="Login_content_right_content">
            <h1 className="Login_content_right_content_title">Welcome Back</h1>
            <h3 className="Login_content_right_content_subtitle">
              Login to Saloodo!
            </h3>
            <form
              className="Login_content_right_content_form"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="inpt Login_content_right_content_form_input"
                onChange={handleChange}
                required
              />
              <div className="Login_content_right_content_form_password">
                <input
                  type={`${showPass ? "text" : "password"}`}
                  name="password"
                  placeholder="Password"
                  className="inpt Login_content_right_content_form_input"
                  onChange={handleChange}
                  minLength="6"
                  maxLength="12"
                  required
                />
                <span onClick={handlePassword}>
                  {showPass ? "hide" : "show"}
                </span>
              </div>
              <span className="Login_content_right_content_form_text">
                Forget your password?
              </span>
              <button className="btn-primary">Login</button>
            </form>
            <div className="Login_content_right_content_underForm">
              <span>Don`t have an account?</span>
              <div className="Login_content_right_content_underForm_actions">
                <Link to="/register" state={{ type: "shipper" }}>
                  <button className="btn-outline">
                    Create shipper account
                  </button>
                </Link>
                <Link to="/register" state={{ type: "carrier" }}>
                  <button className="btn-outline">
                    Create carrier account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
