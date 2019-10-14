import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      // this.props.history.push('/step-1');
      this.setState({ route: 'step-1' });
    }
  };

  render() {
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
// export default withRouter(Intro);

// const AuthPage = ({ formErrors }) => {
//   if (forErrors !== undefined) {
//     return <Redirect to="/dashboard" />;
//   } else {
//     return <h3>User not loggedin</h3>;
//   }
// };

{
  /* <Route exact path="/auth-not-loggedin" render={(props) => <AuthPage {...props} isLoggedIn={false} />} /> */
}

{
  /* <Link to="/auth-loggedin">User Loggedin</Link> */
}
