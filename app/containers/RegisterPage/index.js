/* eslint-disable react/prop-types */
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
import { makeStep } from './selectors';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  nextStepInformation = values => {
    console.log(values);
  };

  nextStepFinish = values => {
    console.log(values);
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
          {step === 0 && <GetStartedForm onSubmit={this.nextStepInformation} />}
          {step === 1 && <WelcomeForm onSubmit={this.nextStepFinish} />}
          {step === 2 && <PrivacyTermsForm onSubmit={this.submit} />}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {};
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
