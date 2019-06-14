/**
  This component is meant to display and update user profile, you can customise the component to suit your purpose
*/
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from '../Navbar';
import './styles.scss';

export class EditUserProfile extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Form style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          width: '30%',
          marginTop: 30
        }}>
          <p style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '600'
          }}>User Profile</p>
          <FormGroup>
            <Label className="label-style" for="exampleEmail">Address 1</Label>
            <Input
              value=''
              type="text" name="address_1"
              id="address_1"
              placeholder="Address 1"
              />
          </FormGroup>
          <FormGroup>
            <Label className="label-style" for="examplePassword">Address 2</Label>
            <Input
              value=''
              type="text"
              name="address_2"
              id="address_2"
              placeholder="Address 2"
              />
          </FormGroup>
          <FormGroup>
            <Label className="label-style" for="examplePassword">City</Label>
            <Input
              value=''
              type="text"
              name="city"
              id="city"
              placeholder="City"
              />
          </FormGroup>
          <FormGroup>
            <Label className="label-style" for="exampleSelect">Region</Label>
            <Input
              type="select"
              name="region"
              id="region"
            >
                <option value="Select Region">
                  Implement region here
                </option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label className="label-style" for="examplePassword">Postal Code</Label>
            <Input
              value=''
              type="text"
              name="postal_code"
              id="postal_code"
              placeholder="Postal Code"
              />
          </FormGroup>
          <FormGroup>
            <Label className="label-style" for="examplePassword">Country</Label>
            <Input
              value=''
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              />
          </FormGroup>
          <Button>
            Update Profile
          </Button>
        </Form>
      </div>
    )
  }
}

export default EditUserProfile;
