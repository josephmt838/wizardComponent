import React from "react";
import PropTypes from "prop-types";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

const PersonalData = props => {
  const { next, handleInputChange, formData, toggleSwitchChange, prev } = props;
  const { subscribe, address, city, state, zip } = formData;
  return (
    <section className="simpleForm">
      <h3>Personal Information</h3>
      <TextField
        label="Address"
        name="address"
        value={address}
        onChange={handleInputChange}
        variant="outlined"
      />
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={handleInputChange}
        variant="outlined"
      />
      <TextField
        label="State"
        name="state"
        value={state}
        onChange={handleInputChange}
        variant="outlined"
      />
      <TextField
        label="Zip"
        name="zip"
        value={zip}
        onChange={handleInputChange}
        variant="outlined"
      />
      <FormControlLabel
        label="Subscribe"
        labelPlacement="start"
        control={
          <Switch
            value={subscribe}
            color="primary"
            onChange={toggleSwitchChange}
            name="subscribe"
          />
        }
      />
      <div>
        <Button
          variant="outlined"
          onClick={prev}
          color="default"
          size="large"
          className="control-btn"
        >
          Back
        </Button>
        <Button
          variant="outlined"
          onClick={next}
          color="primary"
          size="large"
          className="control-btn"
        >
          Continue
        </Button>
      </div>
    </section>
  );
};

PersonalData.propTypes = {
  next: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.number,
    subscribe: PropTypes.bool
  }),
  toggleSwitchChange: PropTypes.func.isRequired
};

export default PersonalData;
