/* eslint-disable react/prop-types */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import { connect } from 'react-redux';
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { makeIsAuthenticated, makeProfile } from '../AuthProvider/selectors';
import { logout } from '../AuthProvider/actions';

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeIsAuthenticated(),
  profile: makeProfile(),
});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class HomePage extends React.PureComponent {
  logout = () => {
    this.props.logout();
  };

  render() {
    const { isAuthenticated, profile } = this.props;
    return (
      <div className="ui container">
        <div className="ui grid" style={{ paddingTop: 15 }}>
          {!isAuthenticated ? (
            <div className="column">
              <Link to="/register" className="teal ui button right floated">
                <i className="key icon" />
                Sign up
              </Link>
            </div>
          ) : (
            <div className="column">
              <div style={{ textAlign: 'right' }}>
                Welcome {profile.accountType} {profile.lastName}
              </div>
              <div>
                <button type="button" onClick={this.logout} className="teal ui button right floated">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="ui divider" />
      </div>
    );
  }
}

export default HomePage;
