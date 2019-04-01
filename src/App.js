import React, { Component } from 'react';
import './App.css';

import { Form, Col, Button } from 'react-bootstrap'

class App extends Component {
  getRefEmail = (ref) => {
    this.emailRef = ref
  }

  getRefPassword = (ref) => {
    this.passwordRef = ref
  }

  getRefAddress1 = (ref) => {
    this.address1Ref = ref
  }

  getRefAddress2 = (ref) => {
    this.address2Ref = ref
  }

  getRefCity = (ref) => {
    this.cityRef = ref
  }

  getRefState = (ref) => {
    this.stateRef = ref
  }

  getRefZip = (ref) => {
    this.zipRef = ref
  }

  getRefCheckout = (ref) => {
    this.checkoutRef = ref
  }

  handleSubmit = () => {
    console.log('Email: ', this.emailRef.value)
    console.log('Password: ', this.passwordRef.value)
    fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    })
      .then((data) => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={this.getRefEmail} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={this.getRefPassword} />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" ref={this.getRefAddress1} />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" ref={this.getRefAddress2} />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control ref={this.getRefCity} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" ref={this.getRefState}>
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control ref={this.getRefZip} />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" ref={this.getRefCheckout} />
            </Form.Group>

            <Button variant="primary" type="button" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
