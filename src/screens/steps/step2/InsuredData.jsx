import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './InsuredData.scss';
import Input from '../../../shared/ui/Input';
import RadioButton from '../../../shared/ui/RadioButton';
import { DataContext } from '../../../context/Context';

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
  fullName: {
    presence: true,
    format: {
      pattern: '[a-zA-Z ]+',
      message: '^Solo se permite letras.'
    }
  }
};

class InsuredData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dniNumber: '',
      fullName: '',
      formErrors: {}
    };
  }
  onChange = event => {
    const newState = {
      [event.target.name]: event.target.value
    };
    this.setState(newState);
  };

  onFocus = e => {
    e.currentTarget.type = 'date';
  };
  onBlur = e => {
    e.currentTarget.type = 'text';
    e.currentTarget.placeholder = 'Fecha de nacimiento';
  };
  render() {
    const { data, setData } = this.context;
    const { dniNumber, fullName, birthDate } = this.state;
    return (
      <div>
        <hr className='divider margin-top-32 margin-bottom-0' />
        <div className='insured-count-wrapper margin-top-24 margin-bottom-0'>
          <p className='subtitle-form-h6 margin-top-0 margin-bottom-0'>
            {`ASEGURADOS (${data.length})`}
          </p>
          <Link className='link margin-top-0 margin-bottom-0'>VER TODOS</Link>
        </div>
        <hr className='divider margin-top-24 margin-bottom-0' />
        <p className='subtitle-form-h3 margin-top-32 margin-bottom-0'>
          {`Datos del asegurado Nº${data.length + 1}`}
        </p>
        <div /* className='input-select-section margin-top-24' */>
          <select className='select'>
            <option>DNI</option>
          </select>
          <Input
            type='number'
            placeholder='Nro. de Documento'
            className='input-select-large'
            name='dniNumber'
            value={dniNumber}
            onChange={this.onChange}
          />
        </div>
        <Input
          type='text'
          placeholder='Nombres'
          className='large-input'
          name='fullName'
          value={fullName}
          onChange={this.onChange}
        />
        <Input
          type='text'
          placeholder='Apellidos Paternos'
          className='large-input'
          // name='dniNumber'
          // value={dniNumber}
          onChange={this.onChange}
        />
        <Input
          type='text'
          placeholder='Apellidos Maternos'
          className='large-input'
          onChange={this.onChange}
        />
        <Input
          type='text'
          placeholder='Fecha de nacimiento'
          className='large-input'
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          name='birthDate'
          value={birthDate}
          onChange={this.onChange}
        />
        <p className='subtitle-form-h6 margin-top-32 margin-bottom-0'>GÉNERO</p>
        <RadioButton value='Masculino' className='radiobutton margin-top-24' />
        <RadioButton value='Femenino' className='radiobutton margin-top-16' />
      </div>
    );
  }
}
InsuredData.contextType = DataContext;

export default InsuredData;
