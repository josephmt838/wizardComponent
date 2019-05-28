import React, { Component } from "react";

// import components here
import UserDetails from "../UserDetails";
import Success from "../Success";
import PersonalData from "../PersonalData";
import Confirm from "../Confirm";

export default class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      subscribe: false
    };
  }
  nextStep = () => this.setState({ step: this.state.step + 1 });
  prevStep = () => this.setState({ step: this.state.step - 1 });
  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });
  toggleSwitchChange = e =>
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  changePage = page => this.setState({ step: page });
  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      subscribe
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      subscribe
    };
    const {
      nextStep,
      prevStep,
      handleInputChange,
      toggleSwitchChange,
      changePage
    } = this;
    switch (step) {
      case 1:
        return (
          <UserDetails
            next={nextStep}
            handleInputChange={handleInputChange}
            formData={values}
          />
        );
      case 2:
        return (
          <PersonalData
            next={nextStep}
            handleInputChange={handleInputChange}
            prev={prevStep}
            formData={values}
            toggleSwitchChange={toggleSwitchChange}
          />
        );
      case 3:
        return (
          <Confirm
            next={nextStep}
            prev={prevStep}
            formData={values}
            changePage={changePage}
          />
        );
      case 4:
        return <Success />;
      default:
        return (
          <UserDetails
            next={nextStep}
            handleInputChange={handleInputChange}
            formData={values}
          />
        );
    }
  }
}
