import { useLocation, Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { useContext, useEffect, useState } from "react";
import carrierImg from "../../assets/imgaes/carrier.png";
import ShipperImg from "../../assets/imgaes/shipper.png";
import "./Register.scss";
import { RegisterApi } from "../../Apis/auth";
import { AppContext } from "../../contextApi/AppContext";
const Register = () => {
  const {
    AppData: { isLoading },
    dispatch,
  } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    isShipper: location.state.type === "shipper" ? true : false,
  });
  const [showPass, setShowPass] = useState(false);
  useEffect(() => {
    setFormData({
      isShipper: location.state.type === "shipper" ? true : false,
    });
  }, [location.state.type]);
  //handle passwrod visibility
  const handlePassword = () => {
    setShowPass((prevState) => !prevState);
  };

  //handle inputs change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOADING", payload: true });

    try {
      //simple validation
      if (!formData.email || !formData.password) {
        return alert("email and password are requried!");
      }
      // destrcturing messager from api when user register successfully
      const {
        data: { message },
      } = await RegisterApi(formData);
      alert(message);
      // reset form data
      setFormData({
        isShipper: location.state.type === "shipper" ? true : false,
      });

      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data.message);
      dispatch({ type: "LOADING", payload: false });
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
                value={formData.first_name ? formData.first_name : ""}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                className="inpt Register_content_right_content_form_input"
                onChange={handleChange}
                value={formData.last_name ? formData.last_name : ""}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="inpt Register_content_right_content_form_input"
                onChange={handleChange}
                value={formData.phone ? formData.phone : ""}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="inpt Register_content_right_content_form_input"
                onChange={handleChange}
                value={formData.email ? formData.email : ""}
                required
              />
              <div className="Register_content_right_content_form_password">
                <input
                  type={`${showPass ? "text" : "password"}`}
                  name="password"
                  placeholder="Password"
                  className="inpt Register_content_right_content_form_input"
                  onChange={handleChange}
                  value={formData.password ? formData.password : ""}
                  minLength="6"
                  maxLength="12"
                  required
                />
                <span onClick={handlePassword}>
                  {showPass ? "hide" : "show"}
                </span>
              </div>

              <button className="btn-primary" disabled={isLoading}>
                Register Now
              </button>
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
