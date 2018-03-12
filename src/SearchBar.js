import React from "react";
import Flexbox from "flexbox-react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import styling from "./styling.css";

// This looks like a full page refresh. Not something you want
// You probably need e.preventDefault() somewhere

// When do you use e.preventDefault() ?
// > The default behavior of the browser is to send a POST request when you submit a form.
// This used to be the way to do things back in the days when JS was rare, and apps were mostly HTML.
// Nowadays we don't want that behavior, so we have to tell the browser to NOT do that (preventDefault).
// By calling e.preventDefault() we stop the browser from sending that POST request and from refreshing the page

// So how do I call youtube API to get the videos that I want if I don't make Post requests?
// Now that the page is not refreshing, you can do anything u want using js.
// I remember you mentioned axios. THat's a good lib to use here
// something like: axios.get('')
// actually
// youtube has their own JS library that you should include and use.
// Well the other question I had was how do I re-render the DOM with different elements?
// I'll show you an example with no network requests.

/*const headerStyle = {
  backgroundColor: "grey",
  height: "100%",
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "row",
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "center",
};*/

const rootURL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = "AIzaSyA7_JtopQHv6JmDfv3VuZa34uDZgrzZVwQ";

const SearchBar = ({videos, ...props}) => {
    return (
      <div class="flex-container">
        <div class="item">
          <a href="https://74k0l7vvyx.codesandbox.io/" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" color="white" />
          </a>
        </div>
        <div class="item">
          <form onSubmit={props.onSubmitPress}>
            <input
              onChange={props.handleSearch}
              type="search"
              name="q"
              maxLength="50"
              size="38"
              value={props.searchQuery}
              placeholder="Search for something here"
            />
            <button type="submit">
              <FontAwesomeIcon icon="search" />
            </button>
          </form>
        </div>
        <div class="item" />
      </div>
    )
}

export default SearchBar;
