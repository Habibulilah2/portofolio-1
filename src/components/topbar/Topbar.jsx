import "./topbar.scss";
import { Mail, Person } from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        {/* left */}
        <div className="left">
          <a href="#intro" className="logo">
            habib.
          </a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+62 822 4911 7208</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>lhabibulilah@gmail.com</span>
          </div>
        </div>

        {/* right */}
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
