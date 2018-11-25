/* eslint-disable react/prop-types,prefer-destructuring */
import React from 'react';
import Steps, { Step } from 'rc-steps';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  GetStartedForm,
  PrivacyTermsForm,
  WelcomeForm,
} from '../../components/RegisterForm';
import reducer from './reducer';
import saga from './saga';
import { changeStep } from './actions';
import { makeStep } from './selectors';
import { STEP_GET_STATED, STEP_INFORMATION, STEP_FINISH } from './constants';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  nextStepInformation = values => {
    console.log(values);
    this.props.changeStep(STEP_INFORMATION);
  };

  nextStepFinish = values => {
    console.log(values);
    this.props.changeStep(STEP_FINISH);
  };

  backStepStarted = () => {
    console.log('back');
    this.props.changeStep(STEP_GET_STATED);
  };

  backStepInformation = () => {
    this.props.changeStep(STEP_INFORMATION);
  };

  submit = () => {};

  render() {
    const { step } = this.props;
    return (
      <div className="ui container">
        <h2
          className="ui dividing header"
          style={{ marginTop: '3em', marginBottom: '2em' }}
        >
          Register User
        </h2>
        <Steps labelPlacement="vertical" current={step}>
          <Step title="Get started" />
          <Step title="Information" />
          <Step title="Finish" />
        </Steps>
        <div style={{ marginTop: 30 }}>
          {step === STEP_GET_STATED && (
            <GetStartedForm onSubmit={this.nextStepInformation} />
          )}
          {step === STEP_INFORMATION && (
            <WelcomeForm
              onBackStep={this.backStepStarted}
              onSubmit={this.nextStepFinish}
            />
          )}
          {step === STEP_FINISH && (
            <PrivacyTermsForm
              onBackStep={this.backStepInformation}
              onSubmit={this.submit}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeStep: step => dispatch(changeStep(step)),
  };
}

const mapStateToProps = createStructuredSelector({
  step: makeStep(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'register', reducer });
const withSaga = injectSaga({ key: 'register', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
