import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import IconLink from "./IconLink";
import "./index.css";

const Footer = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="text-base md:text-lg uppercase pt-2">
        ©2024 Jeff Hampton
      </div>
      <div className="flex gap-6">
        <IconLink
          link={"mailto:jeffreylawhampton@gmail.com"}
          title="Email"
          icon={faEnvelope}
        />

        <IconLink
          link={"https://www.instagram.com/hampton_jeff/"}
          title="Instagram"
          icon={faInstagram}
        />

        <IconLink
          link={"https://www.linkedin.com/in/jeffreylawhampton/"}
          title="Linkedin"
          icon={faLinkedinIn}
        />
      </div>
    </div>
  );
};

export default Footer;
