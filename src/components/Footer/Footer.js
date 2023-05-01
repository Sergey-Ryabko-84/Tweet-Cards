import { BsTelephone, BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import {
  ContactLinkList,
  ContactList,
  FooterWrapper,
  Link,
  LogoWrapper,
} from "./Footer.styled";

function Footer() {
  const name = "Serhii Riabko";
  const phoneNumber = "+1234567890";
  const email = "serhii.riabko@example.com";
  const githubLink = "https://github.com/yourusername";
  const linkedinLink = "https://www.linkedin.com/in/yourprofile";
  const telegramLink = "https://t.me/yourusername";

  return (
    <FooterWrapper>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <ContactList>
        <li>© 2023 {name}</li>
        <li>
          <BsTelephone /> <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
        </li>
        <li>
          <FiMail /> <Link href={`mailto:${email}`}>{email}</Link>
        </li>
      </ContactList>
      <ContactLinkList>
        <li>
          <Link href={githubLink}>
            <BsGithub size={28} />
          </Link>
        </li>
        <li>
          <Link href={linkedinLink}>
            <BsLinkedin size={28} />
          </Link>
        </li>
        <li>
          <Link href={telegramLink}>
            <BsTelegram size={28} />
          </Link>
        </li>
      </ContactLinkList>
    </FooterWrapper>
  );
}

export default Footer;
