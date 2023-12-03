import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP ( Currently Under Development)</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="http://instagram.com/sagar6644" target="blank">
          Instagram
        </a>
        <a
          href="http://youtube.com/channel/UCJEijj-Y15mAKDuMa2Xr5nQ"
          target="blank"
        >
          Youtube
        </a>
        <a href="http://facebook.com/sagar.arora.3511" target="blank">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
