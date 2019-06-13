/**
 * Implement Facebook and Google signin here, you are free to use your customised
 * design, but ensure you use our predifined ID and classes
 */
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import Navbar from '../Navbar';
import '../utils/toastrconfig';
import './style.scss';

export class Signup extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    let fbContent;
    const { history } = this.props;
    const { isLoggedIn } = this.state;
    if (!isLoggedIn) {
      fbContent = (
        <FacebookLogin
          appId="352854622106208"
          fields="name,email,picture"
          cssClass="kep-login-facebook metro"
          />
      )
    }
    return (
      <div>
        <Navbar
          history={history}
        />
        <div className="signup-container">
          <h5 className="sign-up-text">Sign up</h5>
          <Form id="registerForm" className="form-class">
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            />
        </FormGroup>
        <p className="new-account">Already have an account?
            <span
              onClick={() => history.push('/login')}
              style={{ color: '#de3624', cursor: 'pointer', marginLeft: 5 }}>
              Login
            </span>
          </p>
          <button
            id="btnFormRegister"
            className="signup-button-class"
          >
            Register
          </button>
          <p className="or">Or</p>
          <div style={{ alignSelf: 'center' }}>
            {fbContent}
          </div>
          <button id="btnGoogle" className="signup-button-class mt-2">Google Signin Here</button>
      </Form>
        </div>
      </div>
    )
  }
}

export default Signup;
