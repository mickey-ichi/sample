/* eslint-disable no-shadow */
// eslint-disable-next-line jsx-a11y/label-has-associated-control
import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'semantic-ui-react';
import { Formik } from 'formik';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  accountType: 'teacher',
};

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

const GetStartedForm = props => (
  <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={props.onSubmit}
  >
    {props => {
      /* eslint-disable react/prop-types */
      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isValid,
      } = props;

      /* eslint-disable jsx-a11y/label-has-associated-control */
      return (
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <h3 className="ui header">Get started now</h3>
          </div>
          <div
            className={
              errors.firstName && touched.firstName ? 'field error' : 'field'
            }
          >
            <label htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div
            className={
              errors.lastName && touched.lastName ? 'field error' : 'field'
            }
          >
            <label htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div
            className={errors.email && touched.email ? 'field error' : 'field'}
          >
            <label htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div
            className={
              errors.password && touched.password ? 'field error' : 'field'
            }
          >
            <label htmlFor="password">Password *</label>
            <input
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Last Name"
            />
          </div>
          <div className="field">
            <label>Account type</label>
            <div>
              <Radio
                label="Teacher"
                name="accountType"
                value="teacher"
                checked={values.accountType === 'teacher'}
                onChange={(e, { value }) => setFieldValue('accountType', value)}
              />
              <Radio
                label="Student"
                style={{ paddingLeft: 10 }}
                name="accountType"
                value="student"
                checked={values.accountType === 'student'}
                onChange={(e, { value }) => setFieldValue('accountType', value)}
              />
            </div>
          </div>
          <button type="submit" disabled={!isValid} className="ui teal button">
            Next Step
          </button>
        </form>
      );
    }}
  </Formik>
);

GetStartedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

GetStartedForm.defaultValues = {};

export default GetStartedForm;
