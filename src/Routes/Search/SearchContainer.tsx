import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {
  rennder() {
    console.log("search: ", this.props);
    return <SearchPresenter></SearchPresenter>;
  }
}

export default SearchContainer;
