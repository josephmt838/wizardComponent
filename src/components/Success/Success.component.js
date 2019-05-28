import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Success = props => {
  const { loginLink } = props;
  return (
    <section className="simpleForm">
      <h3>Successfully signed up!</h3>
      <p>
        Please visit our <Link to={loginLink}>Login Page</Link>.
      </p>
    </section>
  );
};

Success.propTypes = {
  loginLink: PropTypes.string.isRequired
};

export default Success;
