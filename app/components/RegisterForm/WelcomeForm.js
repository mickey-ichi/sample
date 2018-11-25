/* eslint-disable no-shadow */
// eslint-disable-next-line jsx-a11y/label-has-associated-control
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Dropdown } from 'semantic-ui-react';

const languageTeachOptions = [
  { key: 'gb', value: 'gb', flag: 'gb', text: 'England' },
  { key: 'vn', value: 'fr', flag: 'vn', text: 'Vietnam' },
];

const timeZoneOptions = [
  {
    key: '1',
    value: 'Asia/Bangkok',
    text: '(GMT+07:00) Bangkok, Hanoi, Jakarta',
  },
  { key: '2', value: 'Asia/Tokyo', text: '(GMT+09:00) Osaka, Sapporo, Tokyo' },
  {
    key: '3',
    value: 'US/Central',
    text: '(GMT-06:00) Central Time (US & Canada)',
  },
];

const countryOptions = [
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
  { key: 'fr', value: 'fr', flag: 'fr', text: 'France' },
  { key: 'vn', value: 'fr', flag: 'vn', text: 'Vietnam' },
  { key: 'gb', value: 'gb', flag: 'gb', text: 'England' },
  { key: 'it', value: 'it', flag: 'it', text: 'Italy' },
];

const birthYearOptions = [
  { key: '1', value: '1990', text: '1990' },
  { key: '2', value: '1991', text: '1991' },
  { key: '3', value: '1992', text: '1992' },
  { key: '4', value: '1993', text: '1993' },
  { key: '5', value: '1994', text: '1994' },
  { key: '6', value: '1995', text: '1995' },
  { key: '7', value: '1996', text: '1996' },
  { key: '8', value: '1997', text: '1997' },
  { key: '9', value: '1998', text: '1998' },
  { key: '10', value: '1999', text: '1999' },
  { key: '11', value: '2000', text: '2000' },
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

class WelcomeForm extends React.PureComponent {
  onBackStep = () => {
    this.props.onBackStep();
  };

  render() {
    return (
      <Formik
        initialValues={this.props.values || initialValues}
        validate={validate}
        onSubmit={this.props.onSubmit}
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
            onBackStep,
          } = props;

          /* eslint-disable jsx-a11y/label-has-associated-control */
          return (
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="field">
                <h3 className="ui header center aligned">Welcome Teacher</h3>
              </div>
              <div
                className={
                  errors.firstName && touched.firstName
                    ? 'field error'
                    : 'field'
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
                className={
                  errors.email && touched.email ? 'field error' : 'field'
                }
              >
                <label>Timezone *</label>
                <Dropdown
                  placeholder="Select timezone"
                  fluid
                  search
                  selection
                  options={timeZoneOptions}
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
                  options={birthYearOptions}
                />
              </div>
              <button
                type="button"
                className="ui basic button"
                onClick={() => {
                  this.onBackStep();
                }}
              >
                Back Step
              </button>
              <button
                type="submit"
                disabled={!isValid}
                className="ui teal button"
              >
                Next Step
              </button>
            </form>
          );
        }}
      </Formik>
    );
  }
}

WelcomeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.object,
  onBackStep: PropTypes.func,
};

WelcomeForm.defaultValues = {};

export default WelcomeForm;
