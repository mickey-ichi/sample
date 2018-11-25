import React from 'react';
import Steps, { Step } from 'rc-steps';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

import {
  GetStartedForm,
  PrivacyTermsForm,
  WelcomeForm,
} from '../../components/RegisterForm';
function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({});

/* eslint-disable react/prefer-stateless-function */
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class HomePage extends React.PureComponent {
  nextStep = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="ui container">
        <h2
          className="ui dividing header"
          style={{ marginTop: '3em', marginBottom: '2em' }}
        >
          Register
        </h2>
        <Steps labelPlacement="vertical" current={0}>
          <Step title="Get started" />
          <Step title="Information" />
          <Step title="Finish" />
        </Steps>
        <GetStartedForm onSubmit={this.nextStep} />
        <WelcomeForm onSubmit={this.nextStep} />
        <PrivacyTermsForm onSubmit={this.nextStep} />
      </div>
    );
  }
}

export default HomePage;
