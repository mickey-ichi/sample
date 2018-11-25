/* eslint-disable no-shadow */
// eslint-disable-next-line jsx-a11y/label-has-associated-control
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Dropdown, Radio } from 'semantic-ui-react';

const languageTeachOptions = [
  { key: 'gb', value: 'gb', flag: 'gb', text: 'England' },
  { key: 'vn', value: 'fr', flag: 'vn', text: 'Vietnam' },
];

const countryOptions = [
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
  { key: 'fr', value: 'fr', flag: 'fr', text: 'France' },
  { key: 'vn', value: 'fr', flag: 'vn', text: 'Vietnam' },
  { key: 'it', value: 'it', flag: 'it', text: 'Italy' },
];

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  accountType: 'teacher',
};

const validate = values => {
  const errors = {};
  return errors;
};

const WelcomeForm = props => (
  <Formik
    initialValues={props.values || initialValues}
    validate={validate}
    onSubmit={props.onSubmit}
  >
    {props => {
      /* eslint-disable react/prop-types */
      const {
        values,
        touched,
        errors,
        handleSubmit,
        setFieldValue,
        isValid,
      } = props;

      /* eslint-disable jsx-a11y/label-has-associated-control */
      return (
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <h3 className="ui header center aligned">Welcome Teacher</h3>
          </div>
          <div
            className={
              errors.firstName && touched.firstName ? 'field error' : 'field'
            }
          >
            <label>Language teach</label>
            <Dropdown
              placeholder="Select language"
              fluid
              search
              selection
              options={languageTeachOptions}
            />
          </div>
          <div
            className={
              errors.lastName && touched.lastName ? 'field error' : 'field'
            }
          >
            <label>Home country *</label>
            <Dropdown
              placeholder="Select country"
              fluid
              search
              selection
              options={countryOptions}
            />
          </div>
          <div
            className={errors.email && touched.email ? 'field error' : 'field'}
          >
            <label>Timezone *</label>
            <Dropdown
              placeholder="Select timezone"
              fluid
              search
              selection
              options={[
                { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
              ]}
            />
          </div>
          <div
            className={
              errors.password && touched.password ? 'field error' : 'field'
            }
          >
            <label>Birth year *</label>
            <Dropdown
              placeholder="Select timezone"
              fluid
              search
              selection
              options={[
                { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
              ]}
            />
          </div>
          <button
            type="button"
            className="ui basic button"
            onClick={() => props.onBackStep}
          >
            Back Step
          </button>
          <button type="submit" disabled={!isValid} className="ui teal button">
            Next Step
          </button>
        </form>
      );
    }}
  </Formik>
);

WelcomeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.object,
  onBackStep: PropTypes.func,
};

WelcomeForm.defaultValues = {};

export default WelcomeForm;
