/**
  This component should dynamically render user profile from backend
  You are free to customise and modify things to suit your goal
*/
import React, { Component } from 'react';
import Navbar from '../Navbar';
import './styles.scss';

export class UserProfile extends Component {
  
  render() {
    const { history } = this.props;
    return (
      <div>
        <Navbar
          history={history}
        />
        <div className="profile-user-container">
          <h5>User Profile</h5>
          <hr />
          <div className="fields-wrapper-container">
            <div>
              <p className="bold-table-header">Address 1</p>
              <p className="opaque-field-values">234 Allen drive</p>
            </div>
            <div className="left-field-auto">
              <p className="bold-table-header">Address 2</p>
              <p className="opaque-field-values">12 Park lane</p>
            </div>
          </div>
          <div className="fields-wrapper-container">
            <div>
              <p className="bold-table-header">City</p>
              <p className="opaque-field-values">Washington</p>
            </div>
            <div className="left-field-auto">
              <p className="bold-table-header">Region</p>
              <p className="opaque-field-values">Central America</p>
            </div>
          </div>
          <div className="fields-wrapper-container">
            <div>
              <p className="bold-table-header">Postal Code</p>
              <p className="opaque-field-values">23012</p>
            </div>
            <div className="left-field-auto">
              <p className="bold-table-header">Country</p>
              <p className="opaque-field-values">USA</p>
            </div>
          </div>
          <div onClick={() => history.push('/edit-profile')} className="edit-button-style">
            <i class="far fa-edit"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;
