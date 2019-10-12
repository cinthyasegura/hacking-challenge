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
      onChange,
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
            className='link margin-top-0 margin-bottom-0'
          >
            VER TODOS
          </p>
        </div>
        <hr className='divider margin-top-24 margin-bottom-0' />
        <p className='subtitle-form-h3 margin-top-32 margin-bottom-0'>
          {`Datos del asegurado Nº${data.length + 1}`}
        </p>
        <form onSubmit={handleSubmit}>
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
              onChange={onChange}
              errors={formErrors.dniNumber && formErrors.dniNumber[0]}
            />
          </div>

          <Input
            type='text'
            placeholder='Nombres'
            className='large-input'
            name='fullName'
            value={fullName}
            onChange={onChange}
            errors={formErrors.fullName && formErrors.fullName[0]}
          />
          <Input
            type='text'
            placeholder='Apellidos Paternos'
            className='large-input'
            name='mothersLastName'
            value={mothersLastName}
            onChange={onChange}
            errors={formErrors.mothersLastName && formErrors.mothersLastName[0]}
          />
          <Input
            type='text'
            placeholder='Apellidos Maternos'
            className='large-input'
            name='fathersLastName'
            value={fathersLastName}
            onChange={onChange}
            errors={formErrors.fathersLastName && formErrors.fathersLastName[0]}
          />
          <Input
            type='text'
            placeholder='Fecha de nacimiento'
            className='large-input'
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            name='birthDate'
            value={birthDate}
            onChange={onChange}
          />
          <p className='subtitle-form-h6 margin-top-32 margin-bottom-0'>
            GÉNERO
          </p>
          <RadioButton
            value='Masculino'
            className='radiobutton margin-top-24'
          />
          <RadioButton value='Femenino' className='radiobutton margin-top-16' />
          <button type='submit' className='primary-button'>
            Guardar edición
          </button>
        </form>
      </div>
    );
  }
}
NewInsuredForm.contextType = DataContext;

export default NewInsuredForm;
