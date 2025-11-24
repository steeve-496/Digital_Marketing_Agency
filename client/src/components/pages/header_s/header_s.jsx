import "./header_s.css";
import Services from "../services/services.jsx";
export default function Header_s() {

  return (
    <header className="navbar_s">
      <div className="logo_s" >SysDevCode</div>

      <ul className="nav-links_s">
        <li><a href={<Services />}>Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}
