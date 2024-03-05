/***
 * REACT so node modules requires , It deals with Component
 * 
 * In JavaScript, a higher-order component (HOC) is a function that takes a component as an argument and 
 * returns a new component. The new component is often created by wrapping the
 *  original component with additional functionality.

HOCs are often used in React, a JavaScript library for building user interfaces. They can be used to add
 additional features to a component, such as handling data fetching, handling state, or providing additional context.
 * 



import React from 'react';

const withLoadingIndicator = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return this.props.isLoading
        ? <div>Loading...</div>
        : <WrappedComponent {...this.props} />;
    }
  }
}

export default withLoadingIndicator;

This HOC takes a component as an argument (WrappedComponent) and returns a new component that wraps the original component with a loading indicator.
 The HOC can then be used to wrap other components to add the loading indicator functionality:

 import withLoadingIndicator from './withLoadingIndicator';

class MyComponent extends React.Component {
  // component implementation
}

export default withLoadingIndicator(MyComponent);


The HOC is used to wrap the MyComponent with the loading indicator, creating a new component that has the additional functionality provided by the HOC.
 */
import React, { Component } from 'react'

const subject = (STUDENT)=> {
    class Subject extends Component{
        render(){
            return(
                <STUDENT hocsub="Java"></STUDENT>
            )
        }
    }
    return subject;
}

export default subject;