import React, { Component } from 'react';
import styled from 'styled-components';
import {Button, Icon, Label, Menu, Input, Checkbox} from 'semantic-ui-react'

const StyledContainer = styled.div`
  body, .ui.vertical.divider {
  color: #696969;
  }

  .ui.vertical.divider {
    margin: 0 4px;
  }
  
  .ui.raised.segment {
    background-color: #fffacd;
    width: 600px;
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
  
  a {
    text-decoration: none;
    color: #1E90FF;
  }
  
  `;

export default class SignUpContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <StyledContainer>
        <div className="ui raised segment signup inactive">
          <h3 className="ui inverted blue block header"> SIGN UP </h3>
          <div className="ui blue stacked segment">
            <div className="ui form">
              <div className="two fields">
                <div className="field">
                  <label> Username </label>
                  <div className="ui left labeled icon input">
                    <Input label={{ icon: 'asterisk' }} icon='user' labelPosition='right corner'  />
                  </div>
                </div>
                <div className="field">
                  <label> Email </label>
                  <div className="ui left labeled icon input">
                    <Input label={{ icon: 'asterisk' }} icon='mail' labelPosition='right corner'  />
                  </div>
                </div>
              </div>
              <div className="two fields">
                <div className="field">
                  <label> Password </label>
                  <div className="ui left labeled icon input">
                    <Input label={{ icon: 'asterisk' }} icon='lock' type='password' labelPosition='right corner' placeholder="e.g., !@#$%^&amp;*()_+:)"  />
                  </div>
                </div>
                <div className="field">
                  <label> Confirm Password </label>
                  <div className="ui left labeled icon input">

                      <Input label={{ icon: 'asterisk' }} icon='lock' labelPosition='right corner' placeholder="e.g., !@#$%^&amp;*()_+:)" />
                  </div>
                </div>
              </div>
              <div className="inline field">
                <Checkbox label='I agree to terms'/>
              </div>
              <div className="ui red submit button"> Sign Up</div>
              <div className="ui error message"></div>
            </div>
          </div>
          <div className="ui divider"></div>
          <div className="footer">
            <div className="text"> Already a member?</div>
            <div className="ui vertical animated blue mini button signin">
              <div className="visible content"> Log In</div>
              <div className="hidden content">
                <i className="sign in icon"></i>
              </div>
            </div>
          </div>
        </div>
      </StyledContainer>
    );
  }
}



