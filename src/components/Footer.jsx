import { socialImgs } from "@/data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} className="icon" href={socialImg.link}>
              <img src={socialImg.imgPath} alt={socialImg.name}/>
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © 2025 Shrinivas Waney. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;