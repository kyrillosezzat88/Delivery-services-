import "./Hero.scss";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero_content">
        <h1 className="Hero_content_title">We make logistics smart</h1>
        <p className="Hero_content_desc">
          Saloodo! connects shippers and carriers on a digital freight platform.
        </p>
        <div className="Hero_content_actions">
          <button className="btn-primary">
            <b>I am a shipper</b> <br />
            Find a carrier now
          </button>
          <button className="btn-secondary">
            <b>I am a carrier</b>
            <br />
            Find the right freight
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
