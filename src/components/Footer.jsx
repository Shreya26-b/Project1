import React from "react";
import { SocialIcon } from "react-social-icons";
function Footer() {
    return <footer className="text-center text-lg-start">
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <img src="./images/shreya.png" />
          <h2 >Shreya Rajanala</h2>
          <div className="icons">
          <span><SocialIcon style={{width:40, height:40, margin:5}}  network="email" /></span>
          <span><SocialIcon style={{width:40, height:40, margin:5}}  network="linkedin"  /></span>
          <span><SocialIcon style={{width:40, height:40, margin:5}}  network="twitter" /></span>
          <span><SocialIcon style={{width:40, height:40, margin:5}}  network="github" /></span>
        </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h4>Hello Everyone!</h4>
  
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
            aliquam voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </div>
      </div>
    </div>

    <p className="text-center p-3 bottom fp" style={{backgroundColor: "black"}}>
      © 2022 Copyright: Shreya Rajanala
    </p>
  </footer>
}
export default Footer;