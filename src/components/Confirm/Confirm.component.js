import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const Confirm = props => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zip,
    prev,
    next,
    changePage
  } = props;
  return (
    <section className="simpleForm">
      <section className="user-data">
        <h6>First Name</h6>
        <p>{firstName}</p>
        <h6>Last Name</h6>
        <p>{lastName}</p>
        <h6>Email</h6>
        <p>{email}</p>
        <h6>Phone</h6>
        <p>{phone}</p>
        <Edit className="edit" onClick={() => changePage(1)} />
      </section>
      <section className="user-data">
        <h6>Address</h6>
        <p>{address}</p>
        <h6>City</h6>
        <p>{city}</p>
        <h6>State</h6>
        <p>{state}</p>
        <h6>Zip Code</h6>
        <p>{zip}</p>
        <Edit className="edit" onClick={() => changePage(2)} />
      </section>
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
    </section>
  );
};

Confirm.propTypes = {
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
    zip: PropTypes.number
  }),
  changePage: PropTypes.func.isRequired
};

export default Confirm;
