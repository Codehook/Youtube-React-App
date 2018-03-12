import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import styling from "./styling.css";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <a class="item_icons" href="https://github.com/Codehook" title="Github Profile">
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" color="black"/>
        </a>
        <a class="item_icons" href="https://www.linkedin.com/in/brian-garza-761b7897/" title="Linkedin Profile">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" color="#4875B4"/>
        </a>
      </footer>
    );
  }
}

export default Footer;
