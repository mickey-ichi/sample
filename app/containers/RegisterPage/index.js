/* eslint-disable react/prop-types,prefer-destructuring,react/no-unused-state */
import React from 'react';
import Steps, { Step } from 'rc-steps';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
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
import { changeStep, updateUser, registerUser } from './actions';
import { makeStep, makeUser } from './selectors';
import { STEP_GET_STATED, STEP_INFORMATION, STEP_FINISH } from './constants';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  nextStepInformation = values => {
    const user = { ...this.props.user };
    Object.assign(user, values);
    this.props.updateUser(user);
    this.props.changeStep(STEP_INFORMATION);
  };

  nextStepFinish = values => {
    const user = { ...this.props.user };
    Object.assign(user, values);
    this.props.updateUser(user);
    this.props.changeStep(STEP_FINISH);
  };

  backStepStarted = () => {
    this.props.changeStep(STEP_GET_STATED);
  };

  backStepInformation = () => {
    this.props.changeStep(STEP_INFORMATION);
  };

  submit = () => {
    new Promise((resolve, reject) => {
      this.props.registerUser(this.props.user, resolve, reject);
    }).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    const { step, user } = this.props;
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
            <GetStartedForm
              values={{
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                accountType: user.accountType,
              }}
              onSubmit={this.nextStepInformation}
            />
          )}
          {step === STEP_INFORMATION && (
            <WelcomeForm
              values={{
                language: user.language,
                country: user.country,
                timezone: user.timezone,
                birthYear: user.birthYear,
              }}
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
    updateUser: user => dispatch(updateUser(user)),
    registerUser: (user, resolve, reject) =>
      dispatch(registerUser(user, resolve, reject)),
  };
}

const mapStateToProps = createStructuredSelector({
  step: makeStep(),
  user: makeUser(),
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
)(withRouter(HomePage));
