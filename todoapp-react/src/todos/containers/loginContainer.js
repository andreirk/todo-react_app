import React, { Component } from 'react';
import styled from 'styled-components';
import {Button, Icon, Label, Menu, Input, Checkbox, Divider, Segment, Grid, Form} from 'semantic-ui-react'

const StyledContainer = styled.div`
  body, .ui.vertical.divider {
    color: #696969;
  }
  
  .ui.raised.segment {
    background-color: #fffacd;
    width: 60rem;
    margin-top: 0;
    position: fixed;
    left: 10px;
    top: 10px;
  }
  
  .footer {
    text-align: right;
  }

  .text {
    display: inline;
    margin: 5px;
  }
  `;

export default class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <StyledContainer>

        <Segment className="ui raised segment signin">
          <h3 className="ui inverted blue block header"> SIGN IN </h3>

          <Grid columns={2} className="ui two column grid basic segment">
            <Grid.Column>

              <Segment className="blue">
                <div className="ui form">
                  <div className="field">
                    <label> Username </label>
                    <div className="ui left labeled icon input">
                      <Input icon='user'/>
                    </div>
                  </div>
                  <div className="field">
                    <label> Password </label>
                    <div className="ui left labeled icon input">
                      <Input icon='lock'/>
                    </div>
                  </div>
                  <div className="inline field">
                    <div className="ui checkbox">
                      <Checkbox  label='Remember me'/>
                    </div>
                  </div>
                  <div className="ui red submit button"> Sign In</div>
                </div>
              </Segment>

            </Grid.Column>
            <Grid.Column verticalAlign='middle' textAlign='center' >

              <h4 className="ui header"> Sign in with: </h4>
              <Button color='facebook'>
                <Icon name='facebook' /> Facebook
              </Button>

            </Grid.Column>

          </Grid>

          <Divider horisontal />
          <Segment className="footer">
            <div className="text"> Not a member?</div>
            <div className="ui vertical animated blue mini button signup">
              <div className="visible content"> Join Us</div>
              <div className="hidden content">
                <i className="users icon"></i>
              </div>
            </div>
          </Segment>

        </Segment>

      </StyledContainer>
    );
  }
}



