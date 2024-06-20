import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const IconLink = (props) => {
  const { link, title, icon } = props;
  return (
    <Link
      href={link}
      title={title}
      className="footer-link"
      target={title === "Email" ? "_top" : "_blank"}
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};

export default IconLink;
