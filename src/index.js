import React from "react";
import { render } from "react-dom";
import { faSquare } from "@fortawesome/fontawesome-free-solid";
import brands from "@fortawesome/fontawesome-free-brands";
import Flexbox from "flexbox-react";
import * as firebase from "firebase";
import Hello from "./Hello";
import SearchBar from "./SearchBar";
import styling from "./styling.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <div style={{ background: "green" }}>
        <SearchBar />
        <div style={styles}>
          <Hello name="CodeSandbox" />
          <h2>Start editing to see some magic happen {"\u2728"}</h2>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
