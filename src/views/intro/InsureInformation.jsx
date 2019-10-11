import React, { Component } from 'react';
import './InsureInformation.scss';
import SignInForm from '../../components/SignInForm';
import { validation } from '../../utils/validation';
import { DataContext } from '../../context/Context';

const constraints = {
  dniNumber: {
    presence: true,
    format: {
      pattern: '[0-9]+',
      message: '^Solo se permite números.'
    },
    length: {
      is: 8,
      message: '^Nro de DNI debe tener 8 digitos'
    }
  },
  userName: {
    presence: true,
    format: {
      pattern: '[a-zA-Z ]+',
      message: '^Solo se permite letras.'
    }
  }
};

class InsureInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestPermisions: false,
      dniNumber: '',
      userName: '',
      formErrors: { dniNumber: '', userName: '' },
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
    const { dniNumber, userName, formErrors } = this.state;

    const errors = validation({ dniNumber, userName }, constraints, formErrors);

    if (errors !== undefined) {
      this.setState({ formErrors: errors });
    } else {
      this.setState({ route: '/information' });
    }
  };

  render() {
    const { data, setData } = this.context;
    const user = data.data;
    if (user !== undefined) {
      console.log(user.tercero.numDocumento);
    }

    const {
      requestPermisions,
      dniNumber,
      userName,
      formErrors,
      route
    } = this.state;

    return (
      <SignInForm
        requestPermisions={requestPermisions}
        dniNumber={dniNumber}
        userName={userName}
        onChange={this.onChange}
        handleCheck={this.handleCheck}
        errors={formErrors}
        goToSteps={this.goToSteps}
        route={route}
        {...this.props}
      />
    );
  }
}
InsureInformation.contextType = DataContext;

export default InsureInformation;
