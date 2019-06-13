/**
  This is the navigation bar, things to do here include:
  - Include search functionality
  - Display login and signup for users that are not logged in
  - Display User name drop down with profile and Logout link and logout functionality for authenticated user
  - Display cart item price and quantity instead of the static text
  - Hide Login and signup button when user is authenticated
*/
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './styles.scss';

class NavbarComponent extends Component {

  state = {
    isOpen: false
  }

  render() {
    const { history } = this.props;
    return (
      <div>
      <Navbar style={{ backgroundColor: '#FFF' }} light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
          <p style={{ marginTop: 8, marginLeft: 20, fontFamily: 'Montserrat' }}>Hi</p>
                <NavItem style={{ display: 'flex', flexDirection: 'row' }}>
                <NavLink id="btnSignIn" onClick={() => history.push('/login')} style={{ color: '#f7436b', fontFamily: 'Montserrat', fontWeight: 'bold', cursor: 'pointer' }}>Sign in</NavLink>
              </NavItem>
              <NavItem style={{ display: 'flex', flexDirection: 'row' }}>
                <p style={{ marginTop: 8, fontFamily: 'Montserrat' }}>Or</p>
                <NavLink id="btnRegister" onClick={() => history.push('/signup')} style={{ color: '#f7436b', fontFamily: 'Montserrat', fontWeight: 'bold', cursor: 'pointer' }}>Register</NavLink>
              </NavItem>
              <UncontrolledDropdown id="btnLogout" nav inNavbar>
                <DropdownToggle style={{ color: '#f7436b' }} nav caret>
                  Demo User
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem onClick={() => history.push('/user')} style={{ color: '#f7436b', fontFamily: 'Montserrat' }}>
                    MY PROFILE
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem style={{ fontFamily: 'Montserrat' }}>
                    LOGOUT
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav id="menuCartLink" className="ml-auto" navbar>
              <NavItem style={{ marginRight: 20 }}>
                <NavLink onClick={() => history.push('/cart')} style={{ display: 'flex', cursor: 'pointer' }}>
                  <i className="fas fa-shopping-bag" style={{
                    color: 'black',
                    fontSize: 20,
                    position: 'absolute'
                    }}>
                    </i>
                    <div style={{
                        marginTop: -10,
                        position: 'absolute',
                        backgroundColor: '#f7436b',
                        height: 20,
                        width: 20,
                        borderRadius: '50%',
                        textAlign: 'center',
                        color: '#FFF',
                        marginLeft: 10
                      }}>
                    <p id="menuCartQuantity" style={{ marginTop: 0, fontSize: 14, fontFamily: 'Montserrat' }}>5</p>
                    </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ fontFamily: 'Montserrat', cursor: 'pointer' }} onClick={() => history.push('/cart')}>Your Bag: </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="menuCartTotalPrice" style={{ fontFamily: 'Montserrat', cursor: 'pointer' }} onClick={() => history.push('/cart')}>$ 30 </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Navbar style={{ backgroundColor: 'black' }} light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar style={{ justifyContent: 'space-between' }}>
          <Nav navbar>
              <NavItem style={{ display: 'flex', flexDirection: 'row' }}>
                <NavLink href="/" style={{ color: '#f7436b', fontFamily: 'Montserrat', fontSize: 20 }}>SHOPMATE</NavLink>
              </NavItem>
            </Nav>
              <NavItem>
                <input
                  name="search"
                  id="search"
                  placeholder="&#x1F50D; Search"
                  className="search-bar-style"
                />
              </NavItem>
            <Nav className="" navbar>
              <NavItem style={{ marginRight: 20 }}>
                <NavLink onClick={() => history.push('/cart')} style={{ display: 'flex', cursor: 'pointer' }}>
                  <i className="fas fa-shopping-bag" style={{
                    color: '#FFF',
                    fontSize: 20,
                    position: 'absolute',
                    }}>
                    </i>
                    <div style={{
                        marginTop: -10,
                        position: 'absolute',
                        backgroundColor: '#f7436b',
                        height: 20,
                        width: 20,
                        borderRadius: '50%',
                        textAlign: 'center',
                        color: '#FFF',
                        marginLeft: 10
                      }}>
                    <p style={{ marginTop: 0, fontSize: 14, fontFamily: 'Montserrat' }}>5</p>
                    </div>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavbarComponent;
