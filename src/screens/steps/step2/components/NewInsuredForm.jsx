import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Insureds.scss';
import Input from '../../../../shared/ui/Input';
import RadioButton from '../../../../shared/ui/RadioButton';
import { DataContext } from '../../../../context/Context';

class NewInsuredForm extends Component {
  onFocus = e => {
    e.currentTarget.type = 'date';
  };

  onBlur = e => {
    e.currentTarget.type = 'text';
    e.currentTarget.placeholder = 'Fecha de nacimiento';
  };

  render() {
    const { data, setData } = this.context;
    const {
      dniNumber,
      fullName,
      birthDate,
      mothersLastName,
      fathersLastName,
      handleChange,
      handleSubmit,
      handleSetNewInsured,
      formErrors
    } = this.props;
    return (
      <div className='insured-data-container'>
        <hr className='divider margin-top-32 margin-bottom-0' />
        <div className='insured-count-wrapper margin-top-24 margin-bottom-0'>
          <p className='subtitle-form-h6 margin-top-0 margin-bottom-0'>
            {`ASEGURADOS (${data.length})`}
          </p>
          <p
            onClick={handleSetNewInsured}
            className='link margin-top-0 margin-bottom-0 pointer'
          >
            VER TODOS
          </p>
        </div>
        <hr className='divider margin-top-24 margin-bottom-0' />
        <p className='subtitle-form-h3 margin-top-32 margin-bottom-0'>
          {`Datos del asegurado Nº${data.length + 1}`}
        </p>
        <form onSubmit={handleSubmit} className='align-left-flex'>
          <div className='input-select-section margin-top-24'>
            <select className='select'>
              <option>DNI</option>
            </select>
            <Input
              type='number'
              placeholder='Nro. de Documento'
              className='input-select-large'
              name='dniNumber'
              value={dniNumber}
              onChange={handleChange}
              errors={formErrors.dniNumber && formErrors.dniNumber[0]}
            />
          </div>

          <Input
            type='text'
            placeholder='Nombres'
            className='input-large'
            name='fullName'
            value={fullName}
            onChange={handleChange}
            errors={formErrors.fullName && formErrors.fullName[0]}
          />
          <Input
            type='text'
            placeholder='Apellidos Paternos'
            className='input-large'
            name='mothersLastName'
            value={mothersLastName}
            onChange={handleChange}
            errors={formErrors.mothersLastName && formErrors.mothersLastName[0]}
          />
          <Input
            type='text'
            placeholder='Apellidos Maternos'
            className='input-large'
            name='fathersLastName'
            value={fathersLastName}
            onChange={handleChange}
            errors={formErrors.fathersLastName && formErrors.fathersLastName[0]}
          />
          <Input
            type='text'
            placeholder='Fecha de nacimiento'
            className='input-large'
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            name='birthDate'
            value={birthDate}
            onChange={handleChange}
          />
          <p className='subtitle-form-h6 margin-top-32 margin-bottom-0'>
            GÉNERO
          </p>
          <RadioButton
            value='Masculino'
            className='radiobutton margin-top-16'
          />
          <RadioButton value='Femenino' className='radiobutton margin-top-12' />
          <div className='button-right'>
            <span className='link pointer' onClick={handleSetNewInsured}>
              Cancelar
            </span>
            <button type='submit' className='primary-button width-219'>
              Guardar edición
            </button>
          </div>
        </form>
      </div>
    );
  }
}
NewInsuredForm.contextType = DataContext;

export default NewInsuredForm;
