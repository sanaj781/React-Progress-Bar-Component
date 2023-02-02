import React, { Component } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import Form from "./components/Form";
import { steps } from "./steps/steps";

class App extends Component {
  state = {
    currentStep: "Shipping",
  };
  onStepChange = (currentStep) => {
    this.setState({ currentStep });
  };
  render() {
    return (
      <React.Fragment>
        <ProgressBar steps={steps} currentStep={this.state.currentStep} />
        <Form onStepChange={this.onStepChange} />
      </React.Fragment>
    );
  }
}

export default App;
