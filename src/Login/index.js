/**
 * Implement Facebook and Google signin here, you are free to use your customised
 * design, but ensure you use our predifined ID and classes
 */
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from '../Navbar';
import FacebookLogin from 'react-facebook-login';
import '../utils/toastrconfig';
import './style.scss';

export class Login extends Component {
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
        <div className="login-container">
          <h5 className="sign-up-text">Login</h5>
          <Form id="signInForm" className="form-class">
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
        <p className="new-account">New to our platform?
            <span
              onClick={() => history.push('/signup')}
              style={{ color: '#de3624', cursor: 'pointer', marginLeft: 5 }}>
              Sign up
            </span>
          </p>
          <button
            id="btnFormSignIn"
            className="signup-button-class"
          >
            Login
          </button>
          <p className="or">or</p>
          <div className="btnFacebook" style={{ alignSelf: 'center' }}>
            {fbContent}
          </div>
          <button id="btnGoogle" className="signup-button-class mt-2">Google Signin Here</button>
      </Form>
        </div>
      </div>
    )
  }
}


export default Login;
