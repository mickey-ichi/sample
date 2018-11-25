import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="ui container">
        <h2
          className="ui dividing header"
          style={{ marginTop: '3em', marginBottom: '2em' }}
        >
          Register
        </h2>
        <form className="ui form">
          <div className="field">
            <label>
              First Name
              <input type="text" name="first-name" placeholder="First Name" />
            </label>
          </div>
          <div className="field">
            <label>
              Last Name
              <input type="text" name="last-name" placeholder="Last Name" />
            </label>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <label>
                <input type="checkbox" tabIndex="0" className="hidden" />I agree
                to the Terms and Conditions
              </label>
            </div>
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
