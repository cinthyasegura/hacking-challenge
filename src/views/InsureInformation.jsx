import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../shared/components/Input';
import logo from '../assets/logo.svg';
import ic_medicine from '../assets/ic_medicine.svg';
import girl from '../assets/girl.svg';
import CheckBox from '../shared/components/CheckBox';
// import Button from '../shared/components/Button';
import { onlyNumbers } from '../utils/regex';
import './InsureInformation.css';

class InsureInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestPermisions: false
    };
  }
  handleCheck = () => {
    const { requestPermisions } = this.state;
    this.setState({
      requestPermisions: !requestPermisions
    });
  };

  render() {
    const { requestPermisions } = this.state;
    return (
      <div className='container'>
        <aside className='aside'>
          <header className='header'>
            <img src={logo} alt='logo' className='logo' />
            <hr className='line' />
          </header>

          <div className='text'>
            <p className='title'>
              Seguro de accidentes para <b>Niños y Jóvenes</b>
            </p>
            <p className='subtitle'>
              En accidentes <b>los cubrimos al 100%</b> para que se recuperen
              por completo.
            </p>
            <p>
              <img className='icon' src={ic_medicine} alt='maletin' /> Atención
              médica y medicinas
            </p>
            <p>
              <img className='icon' src={ic_medicine} alt='maletin' /> Examenes
              de laboratorio
            </p>
            <p>
              <img className='icon' src={ic_medicine} alt='maletin' />{' '}
              Hospitalización y rehabilitación
            </p>
            <p>
              <img className='icon' src={ic_medicine} alt='maletin' /> Cirugías
              y operaciones
            </p>
            <p className='footer'>© 2018 RIMAC Seguros y Reaseguros. </p>
          </div>
        </aside>

        <div className='girl-image'>
          <img src={girl} alt='niña' />
        </div>

        <div className='form'>
          <main className='form-inputs'>
            <p className='title-form'>
              Protégelos <span className='primary-color'>ahora</span>
            </p>
            <p className='subtitle-form'>Ingresa los datos del titular.</p>

            <div className='input-select-section'>
              <select>
                <option>DNI</option>
              </select>
              <Input
                type='number'
                placeholder='Nro. de Documento'
                pattern={onlyNumbers}
                className='input-select'
              />
            </div>
            <Input
              className='input'
              type='text'
              placeholder='Nombre' /* pattern={onlyNumbers} */
            />

            <CheckBox
              value='Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.'
              checked={requestPermisions}
              onClick={this.handleCheck}
              disabled={false}
              className='checkbox-protection'
            />
            <CheckBox
              value='Acepto la Política de Envío de Comunicaciones Comerciales.'
              checked={requestPermisions}
              onClick={this.handleCheck}
              disabled={false}
              className='checkbox-cc'
            />

            <Link to='/information' className='primary-button'>
              Comencemos
            </Link>
          </main>
        </div>
      </div>
    );
  }
}

export default InsureInformation;
