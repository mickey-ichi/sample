/* eslint-disable no-shadow,react/no-unused-prop-types */
// eslint-disable-next-line jsx-a11y/label-has-associated-control
import React from 'react';
import PropTypes from 'prop-types';

const PrivacyTermsForm = props => (
  <div>
    <div className="field">
      <h1 className="ui header center aligned">Privacy and Terms</h1>
    </div>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
    <button
      type="button"
      className="ui basic button"
      onClick={() => props.onBackStep}
    >
      Back Step
    </button>
    <button onClick={() => props.onSubmit} className="ui teal button">
      Next Step
    </button>
  </div>
);
PrivacyTermsForm.propTypes = {
  onSubmit: PropTypes.func,
  onBackStep: PropTypes.func,
};

PrivacyTermsForm.defaultValues = {};

export default PrivacyTermsForm;
