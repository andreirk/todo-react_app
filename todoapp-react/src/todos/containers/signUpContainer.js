import React, { Component } from 'react';
import styled from 'styled-components';
import {Button, Icon, Label, Header, Input, Checkbox, Divider, Segment, Grid, Form, Container} from 'semantic-ui-react'


const SignUpForm = () => (
  <Form>

    <div className='field'>
      <Form.Input  placeholder='Email' />
    </div>

    <Form.Field  control='input' transparent placeholder='Password' />
    <Form.Field control='input' transparent placeholder='Password again' />

    <div className="ui container center aligned">
      <Button id='signup-btn'  className='signup-btn' circular type='submit'>Sign Up</Button>
    </div>

    <div className="ui container center aligned">
      I already have an account Sign In
    </div>

    <div className="ui container center aligned">
      By accessing your account you agree to our
      Terms conditions and Privacy Policy
    </div>

  </Form>
)


export default class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (

      <Container fluid >
        <Segment>
          <Grid columns={2}>
            <Grid.Column>
              JustDo
            </Grid.Column>
            <Grid.Column>
              <div className='content'>
                <Segment className='signup' textAlign='center'>
                  <Header as='h3'>Sign Up</Header>
                </Segment>

                <div className='form-container' >
                  <SignUpForm/>
                </div>

              </div>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>

    );
  }
}



