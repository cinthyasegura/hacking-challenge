import React, { Component } from 'react';
import './Intro.scss';
import HolderForm from './components/HolderForm';
import { validation } from '../../utils/validation/validation';
import { DataContext } from '../../context/Context';
import { constraints } from '../../utils/validation/constraints';
import InsureDetails from './components/InsureDetails';

class Intro extends Component {
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

    const errors = validation(
      { dniNumber, userName },
      { dniNumber: constraints.dniNumber, userName: constraints.userName },
      formErrors
    );

    if (errors !== undefined) {
      this.setState({ formErrors: errors });
    } else {
      this.setState({ route: '/step-1' });
    }
  };

  render() {
    // const { data, setData } = this.context;

    // if (data !== undefined) {
    //   console.log(data.tercero.numDocumento);
    // }

    const {
      requestPermisions,
      dniNumber,
      userName,
      formErrors,
      route
    } = this.state;

    return (
      <div className='container'>
        <InsureDetails />
        <HolderForm
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
      </div>
    );
  }
}
Intro.contextType = DataContext;

export default Intro;
