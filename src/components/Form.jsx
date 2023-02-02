import React, { Component } from "react";
class Form extends Component {
  render() {
    const { onStepChange } = this.props;
    return (
      <React.Fragment>
        <h1>Select an input field in order to move the progress line</h1>
        <div className="inputs">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Shipping"
            aria-label=".form-control-lg example"
            onFocus={() => onStepChange("Shipping")}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Review & payments"
            aria-label="default input example"
            onFocus={() => onStepChange("Review & payments")}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Terms and Conditions"
            aria-label="default input example"
            onFocus={() => onStepChange("Terms and Conditions")}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Summary"
            aria-label="default input example"
            onFocus={() => onStepChange("Summary")}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
