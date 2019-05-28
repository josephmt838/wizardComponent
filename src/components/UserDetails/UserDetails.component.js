import React from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@material-ui/core";
import NumberFormat from "react-number-format";
import "../../styles/formStyles.scss";

const UserDetails = props => {
  const { next, handleInputChange, formData } = props;
  const { firstName, lastName, email, phone } = formData;
  return (
    <section className="simpleForm">
      <h3>Basic Information</h3>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={handleInputChange}
        variant="outlined"
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={handleInputChange}
        variant="outlined"
      />
      <TextField
        label="Email"
        name="email"
        value={email}
        onChange={handleInputChange}
        variant="outlined"
      />
      <NumberFormat
        label="Phone Number"
        name="phone"
        value={phone}
        format="(###) ###-####"
        mask="_"
        customInput={TextField}
        variant="outlined"
        onChange={handleInputChange}
      />
      <Button
        variant="outlined"
        onClick={next}
        color="primary"
        size="large"
        className="next-btn-full"
      >
        Continue
      </Button>
    </section>
  );
};

UserDetails.propTypes = {
  next: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    occupation: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.number
  })
};

export default UserDetails;
