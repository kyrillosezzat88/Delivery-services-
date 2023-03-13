import "./Featured.scss";
import DVZ from "../../assets/imgaes/DVZ.png";
import FAZ from "../../assets/imgaes/FAZ.png";
import HB from "../../assets/imgaes/HB.png";
import SZ1 from "../../assets/imgaes/SZ1.png";
import wLogo from "../../assets/imgaes/wLogo.png";
import zdf from "../../assets/imgaes/zdf.png";

const Featured = () => {
  return (
    <div className="Featured">
      <div className="container">
        <div className="Featured_content">
          <span>Featured In:</span>
          <div>
            <img src={DVZ} alt="DVZ" />
            <img src={FAZ} alt="FAZ" />
            <img src={HB} alt="HB" />
            <img src={SZ1} alt="SZ1" />
            <img src={wLogo} alt="WIWO" />
            <img src={zdf} alt="zdf" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
