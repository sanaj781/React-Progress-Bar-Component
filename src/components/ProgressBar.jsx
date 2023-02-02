import React, { Component } from "react";

class ProgressBar extends Component {
  render() {
    const { currentStep, steps } = this.props;

    //All step names from received steps object to 1 array
    const stepsName = [];
    for (const key in steps) {
      const element = steps[key];
      stepsName.push(element.title.value);
    }

    //Finding an index of current step
    const indexOfCurrentStep = stepsName.indexOf(currentStep);

    //Deleting the last step ("Success") from the array of steps
    stepsName.splice(stepsName.length - 1, 1);
    const checkpointWidth = 50;
    //Setting up styles denpendent on progress value
    const styles = {
      //.checkpoint css width
      marginForStepsStyle: {
        marginLeft: `calc((100% / (${stepsName.length} + 1)) - ${checkpointWidth}px)`,
      },
      stepTextStyle: (index) => {
        if (index >= indexOfCurrentStep + 1)
          return {
            backgroundColor: `hsl(0deg 0% 86%)`,
          };
        else return null;
      },
      checkpointNameStyle: (index) => {
        if (index >= indexOfCurrentStep + 1)
          return {
            color: `hsl(0deg 0% 86%)`,
          };
        else return null;
      },

      progressBarValue:
        (100 / (stepsName.length + 1)) * (indexOfCurrentStep + 1),
    };
    // End of Setting up styles denpendent on progress value
    return (
      <div className="progressBarWrapper">
        <div className="checkpoints">
          {stepsName.map((step, index) => (
            <div
              key={step}
              className="checkpoint"
              style={styles.marginForStepsStyle}
            >
              <div
                className="checkpointIndex"
                style={styles.stepTextStyle(index)}
              >
                {index >= indexOfCurrentStep ? index : <span>&#10003;</span>}
              </div>
              <div
                className="checkpointName"
                style={styles.checkpointNameStyle(index)}
              >
                {step}
              </div>
            </div>
          ))}
        </div>
        <progress
          className="progressBar"
          value={styles.progressBarValue}
          max="100"
        ></progress>
      </div>
    );
  }
}

export default ProgressBar;
