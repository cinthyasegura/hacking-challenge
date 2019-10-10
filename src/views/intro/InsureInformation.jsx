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
      errors: '',
      route: ''
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

  goToSteps = () => {
    const { requestPermisions, dniNumber, userName } = this.state;
    if (dniNumber && userName !== '') this.setState({ route: '/information' });
  };

  render() {
    const {
      requestPermisions,
      dniNumber,
      userName,
      errors,
      route
    } = this.state;

    return (
      <SignInForm
        requestPermisions={requestPermisions}
        dniNumber={dniNumber}
        userName={userName}
        onChange={this.onChange}
        handleCheck={this.handleCheck}
        errors={errors}
        goToSteps={this.goToSteps}
        route={route}
        {...this.props}
      />
    );
  }
}

export default InsureInformation;
