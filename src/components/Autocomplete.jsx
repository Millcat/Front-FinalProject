import React from "react";
import SearchBar from "material-ui-search-bar";
import Script from "react-load-script";

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      query: ""
    };
  }

  render() {
    return (
      <div>
        <SearchBar
          id="autocomplete"
          placeholder=""
          hintText="Search City"
          value={this.state.query}
          style={{
            margin: "0 auto",
            maxWidth: 800
          }}
        />
        <Script
          url="https://maps.googleapis.com/maps/api/js?                               key=your_api_key&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <SearchBar />
      </div>
    );
  }
}

export default Autocomplete;
