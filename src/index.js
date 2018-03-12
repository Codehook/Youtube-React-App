import React from "react";
import { render } from "react-dom";
import { faSquare } from "@fortawesome/fontawesome-free-solid";
import brands from "@fortawesome/fontawesome-free-brands";
import Flexbox from "flexbox-react";
import * as firebase from "firebase";
import YTSearch from "youtube-api-search";
import axios from "axios";
import Hello from "./Hello";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Footer from "./Footer";
import styling from "./styling.css";

const API_KEY = "AIzaSyA7_JtopQHv6JmDfv3VuZa34uDZgrzZVwQ";

class App extends React.Component {
  state = {loading: false, videos: [], searchQuery: "", };

  handleSearch = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  onSubmitPress = e => {
    e.preventDefault()
    //console.log("inside app.js")
    //console.log(this.state.searchQuery)
    this.setState({
      loading: true
    })
    YTSearch({ key: API_KEY, term: this.state.searchQuery }, videos => {
      this.setState({
        loading: false,
        videos: videos,
        searchQuery: ""
      });
      //console.log(this.state.searchResults)
      //console.log(videos)
    });
  }

  render() {
    return (
      <body class="main">
        <SearchBar 
        videos={this.state.videos}
        onSubmitPress={this.onSubmitPress}
        handleSearch={this.handleSearch}
        searchQuery={this.state.searchQuery}
        />
        <SearchResults videos={this.state.videos}/>
        <div class="container">
          <Hello name="CodeSandbox" />
          <h2>Start editing to see some magic happen {"\u2728"}</h2>
        </div>
        <Footer />
      </body>
    );
  }
}

render(<App />, document.getElementById("root"));
