import React, { Component } from 'react';
import './InsureInformation.scss';
import SignInForm from '../../components/SignInForm';

class InsureInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestPermisions: false,
      dniNumber: '',
      userName: '',
      errors: ''
    };
  }

  handleCheck = () => {
    const { requestPermisions } = this.state;
    this.setState({
      requestPermisions: !requestPermisions
    });
  };

  onChange = event => {
    const newState = {
      [event.target.name]: event.target.value
    };
    this.setState(newState);
  };

  goToSteps = event => {
    event.preventDefault();
    //validate inputs
  };

  render() {
    const { requestPermisions, dniNumber, userName, errors } = this.state;

    return (
      <SignInForm
        requestPermisions={requestPermisions}
        dniNumber={dniNumber}
        userName={userName}
        onChange={this.onChange}
        handleCheck={this.handleCheck}
        errors={errors}
        {...this.props}
      />
    );
  }
}

export default InsureInformation;
