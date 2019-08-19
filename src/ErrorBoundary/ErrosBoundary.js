import React, { Component } from 'react';

// this component will wrap any component that is likely to throw error

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  };

  // this function will fire if the children component fires any error
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
