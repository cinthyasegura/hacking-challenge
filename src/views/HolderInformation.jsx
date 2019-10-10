import React, { Component } from 'react';
import './HolderInformation.scss';
import LeftSide from '../shared/screens/LeftSide';
import Input from '../shared/components/Input';
import CheckBox from '../shared/components/CheckBox';

class HolderInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dniNumber: ''
    };
  }
  componentDidMount() {
    const { dniNumber } = this.props.location.state;
    this.setState({ dniNumber });
  }
  render() {
    const { dniNumber } = this.state;
    return (
      <div className='wrapper'>
        <LeftSide />

        <div className='form'>
          <p> PASO 1 DE 4 </p>
          <p>Hola Eva, cuéntanos sobre ti</p>
          <p>Podrás protegerlos por solo S/20 al mes por asegurado</p>
          <p>Datos del titular</p>
          <div className='input-select-section'>
            <select>
              <option>DNI</option>
            </select>
            <input
              type='number'
              placeholder='Nro. de Documento'
              className='input-select'
              name='dniNumber'
              value={dniNumber}
              disabled
            />
          </div>
          <p>¿ESTE SEGURO ES PARA TI?</p>
          <CheckBox value='No' />
          <CheckBox value='Si' />
        </div>
      </div>
    );
  }
}
export default HolderInformation;
