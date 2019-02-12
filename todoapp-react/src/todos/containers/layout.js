import React, { Component } from 'react';
import {Checkbox, Container, Header, Input, Segment} from 'semantic-ui-react';
import {Grid} from 'semantic-ui-react/dist/commonjs/collections/Grid';
import Footer from '../components/footer';
import styled from 'styled-components';

const StyledContainer = styled.div`
  * {
    outline: none;
  }

    .form-container {
        margin: 5em 5em;
        margin-top: 0px;
    }

    .signup-btn {
        width: 12em;
    }

    #signup-btn {
       
  background-image: linear-gradient(
    rgba(0, 30, 0, 0.1) 0%,
    rgba(0, 0, 45, 0.05) 100%);
    }

    .ui.form {
  .field {
    position: relative;
    width: 100%;

    &:not(.checkbox) {
      margin-top: 1rem;
      margin-bottom: 1.7rem;
    }

    label {
      color: lightgrey;
      position: absolute;
      left: .7rem;
      top: .7rem;
      transition: .2s ease-in;
    }

    &.select {
      display: flex;

      &:after {
        align-self: center;
        color: lightgrey;
        content: "\\f107";
        font-family: "Icons";
        margin-left: -1rem;
      }

      select {
        background: transparent;
        border: none;
        border-bottom: 2px solid lightgrey;
        padding: .7rem 2rem .7rem .7rem;
        position: relative;
        border-radius: 0;
        // Chrome and Safari both ignore border-radius on <select>
        // elements unless -webkit-appearance is overridden to an appropriate value.
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
        -webkit-appearance: none;
        -moz-appearance: none;
        transition: .2s ease-in;

        &:focus {
          outline: none !important;
          border-bottom: 2px solid dodgerblue !important;
        }

        &:focus ~ label,
        &:valid ~ label {
          color: gray;
          font-size: 80%;
          top: -1rem;
          left: 0;
        }
      }
    }

    input:not([type=checkbox]),
    textarea {
      background: transparent;
      border: none;
      border-bottom: 2px solid lightgrey;
      border-radius: 0;
      padding: .7rem;
      transition: .2s ease-in;


      &[value=" "] {
          background: grey !important;
        }

      &:focus ~ label,
      &:valid ~ label {
        color: grey;
        font-size: 80%;
        top: -1rem;
        left: 0;
      }

      &:focus {
        border-bottom: 2px solid dodgerblue;
        outline: none;
      }
    }

    &.checkbox {
      align-items: flex-start;
      align-content: flex-start;
      display: flex;
      margin: .7rem 0;
      position: relative;

      input[type=checkbox] {
        padding: .7rem;
        border: 2px solid lightgrey;
        transition: .2s ease-in;
        -webkit-appearance: none;
        -moz-appearance: none;

        &:focus {
          outline: none;
        }

        &:before {
          color: grey;
          content: "";
          transition: .2s ease-in;
        }

        &:checked {
          padding: .6rem .35rem;
          margin: -.3rem .1rem 0 .7rem;
          border-left: none;
          border-top: none;
          transform: rotate(45deg);
        }
      }

      label {
        font-size: initial;
        position: static;
        margin-left: 1rem;
        align-self: center;
      }
    }
  }  
}
 
  `;


export default  (props) => {
  return   <StyledContainer>

    {props.children}

    <Footer/>
  </StyledContainer>
}