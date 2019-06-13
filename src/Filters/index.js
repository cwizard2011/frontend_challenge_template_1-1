/**
  This component is meant to display filter department, filter by category on the landing page
  We use an array to display all the lists of department and categories, you are to fix the following
  - Dynamically render Categories and departments from backend
  - Style to suit your purpose, but do not change the default IDs, ClassNames and HTML INPUT names
  - Filter by Category should be hidden by default
  - Category for a selected department should be displayed in filter by category when a user select a department
 */
import React, { Component } from 'react';
import { Collapse, FormGroup, Form } from 'reactstrap';
import RadioButton from '../RadioButton';
import './styles.scss';

const CATEGORIES = ['French', 'Italian', 'Irish', 'Animal', 'Flower', 'Christmas', 'Valentine\'s'];
const DEPARTMENTS = ['Regional', 'Nature', 'Seasonal'];

class Filter extends Component {

  render() {
    return (
      <div className="filter-cards-container">
        <div>
          <p
            className={"filter-cards-button"}
            >
            Filter by Category
          </p>
          <Collapse isOpen={true}>
            <Form>
              <FormGroup tag="fieldset" className="categories">
              {
                CATEGORIES.map((category, index) => (
                  <RadioButton
                    labelText={category}
                    name="category"
                    className="category"
                    toggleClick={() => console.log(`${category} is clicked`)}
                    key={index}
                    />
                ))
              }
              </FormGroup>
            </Form>
          </Collapse>
        </div>
        <div>
          <p
            className={"filter-cards-button"}>
            Filter by Department
          </p>
          <Collapse isOpen={true}>
          <Form>
              <FormGroup tag="fieldset" className="departments">
              {
                DEPARTMENTS.map((department, index) => (
                  <RadioButton
                    labelText={department}
                    name="department"
                    className="department"
                    toggleClick={() => console.log(`${department} is clicked`)}
                    key={index}
                  />
                ))
              }
              </FormGroup>
            </Form>
          </Collapse>
        </div>
      </div>
    )
  }
}

export default Filter;
