//restrict search to only addresses in Paris

import React from "react";
import Form from "react-bootstrap/Form";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";

export default function App() {
  const [address, setAddress] = React.useState("");

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    setAddress(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Form.Group controlId="exampleForm.ControlInput4">
              <Form.Label>Meeting point</Form.Label>
              <Form.Control {...getInputProps({ placeholder: "Type address" })} name="meetingLocation" >
              </Form.Control>
            </Form.Group>
            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                console.log(suggestion)
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
