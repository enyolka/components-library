import * as React from "react";
import "./footer.css";
import Link from "../link/link";

type ContactInfo = {
  phone: string;
  mail: string;
  city: string;
  street: string;
  link?: string;
}

type LinkInfo = {
  name: string;
  link: string;
}

type Props = {
  links: LinkInfo[];
  contactInfo: ContactInfo; 
  children?: React.ReactElement;
}

const Footer = ({links, contactInfo, children}: Props) => {
  return (
    <footer className="footer">
      {/* <Newsletter size="small" /> */}
      <div className="footer__menu">
        {links.map((link) => (
          <Link to={link.link}>{link.name}</Link>
        ))}
      </div>
      <div>
        <h4>Kontakt</h4>
        <div className="contact__info">
          <span>{contactInfo.phone}</span>
          <span>{contactInfo.mail}</span>
        </div>
        <div className="contact__info">
          <span>{contactInfo.street}</span>
          <span>{contactInfo.city}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
