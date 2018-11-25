import React from 'react';

import { GetStartedForm } from '../../components/RegisterForm';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
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
        <GetStartedForm onSubmit={this.nextStep} />
      </div>
    );
  }
}
