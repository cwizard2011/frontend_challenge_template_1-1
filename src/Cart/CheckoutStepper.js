/**
  This Component displays the checkout stepper on the checkout modal in Cart page
  You can modify and style the component to achieve your goal, BUT ENSURE YOU USE OUR DEFAULT
  HTML ID and CLASSNAMES
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeliveryInfoForm from './DeliveryInfoForm';
import OrderSummary from './OrderSummary';
import Payments from './Payments';
import OrderConfirmation from './OrderConfirmation';

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  stepIcon: {
    color: '#F62F5E'
  },
});


/**
 * @class CheckoutStepper
 * @param {*} stepIndex
 * @param {*} event
 * @param {*} step
 *
 */
class CheckoutStepper extends React.Component {
  state = {
    activeStep: 0,
    error: '',
    isLoading: false,
  }

  getSteps = () => ['Delivery', 'Confirmation', 'Payment', 'Finish'] // step array

  /**
    Control individual step content
  */
  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <DeliveryInfoForm />

        );
      case 1:
        return (
          <OrderSummary />
        );
      case 2:
        return (
          <Payments />
        );
      default:
        return 'Unknown stepIndex';
    }
  }

  handleNext = () => {
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        error: ''
      }));
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  /**
   * @returns {*} returns jsx
   */
  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep, error } = this.state;
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}
              classes={{
                root: classes.step,
              }}
            >
              <StepLabel
                StepIconProps={{
                  classes: { root: classes.stepIcon }
                }}
              >
                {label}

              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div style={{ color: '#F62F5E' }}>{error}</div>
        <div>
          {activeStep === steps.length - 1 ? (
            <div>
              <Typography className={classes.instructions}><OrderConfirmation /></Typography>
            </div>
          ) : (
            <div>
              <Typography
                className={classes.instructions}
              >
                {this.getStepContent(activeStep)}
              </Typography>
              <div className="d-flex p-2 justify-content-around">
                <Button
                  onClick={this.handleBack}
                  style={{
                    visibility: (activeStep === 2 ) || activeStep === 0 ? 'hidden' : 'visible', color: '#F62F5E', backgroundColor: '#F7F7F7', 'border-radius': '20px', padding: '8px 16px', width: '120px' // eslint-disable-line
                  }}
                >
                  Back
                </Button>
                <Button
                  id="btnNext"
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  style={{
                    visibility: activeStep === 3 ? 'hidden' : 'visible', color: '#F7F7F7', backgroundColor: '#F62F5E', 'border-radius': '20px', padding: '8px 16px', width: '120px' // eslint-disable-line
                  }}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

CheckoutStepper.propTypes = {
  classes: PropTypes.shape({}),
};

export default withStyles(styles)(CheckoutStepper);
