import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import LeftSide from '../../../shared/components/LeftSide';
import { DataContext } from '../../../context/Context';
import NewInsuredForm from './components/NewInsuredForm';
import { deleteUSer, createNewUser } from '../../../api/writes';
import InsuredsList from './components/InsuredsList';
import { useForm } from '../../../shared/customHooks/UseFormInput';
import { validation } from '../../../utils/validation';
import Steps from '../../../shared/components/Steps';

const constraints = {
  dniNumber: {
    presence: { allowEmpty: false, message: '^Completar el campo.' },
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
    presence: { allowEmpty: false, message: '^Completar el campo.' }
  },
  mothersLastName: {
    presence: { allowEmpty: false, message: '^Completar el campo.' }
  },
  fathersLastName: {
    presence: { allowEmpty: false, message: '^Completar el campo.' }
  },
  birthDate: {
    presence: { allowEmpty: false, message: '^Completar el campo.' }
  }
};

const Insureds = () => {
  const [newInsured, setNewInsured] = useState(false);
  const [formErrors, setFormErrors] = useState({
    dniNumber: '',
    fullName: '',
    mothersLastName: '',
    fathersLastName: '',
    birthDate: ''
  });

  const { values, handleChange, handleSubmit } = useForm(Submit);

  // const { data, setData } = useContext(DataContext);

  const datas = {
    nomCompleto: 'Chester Segura Tarazona',
    telefono: '921300000',
    apellidoPaterno: 'Segura',
    sexo: 'M',
    nombres: 'Chester',
    tipoDocumento: '01',
    apellidoMaterno: 'Tarazona',
    numDocumento: '48324201',
    fecNacimiento: '15/11/1993',
    correo: 'cinthyaless@gmail.com'
  };

  const handleSetNewInsured = () => {
    setNewInsured(!newInsured);
    // await createNewUser(datas);
  };

  const deleteInsured = async docId => {
    await deleteUSer(docId);
    // setData(data);
  };

  async function Submit() {
    const errors = validation(
      {
        dniNumber: values.dniNumber,
        fullName: values.fullName,
        mothersLastName: values.mothersLastName,
        fathersLastName: values.fathersLastName,
        birthDate: values.birthDate
      },
      constraints,
      formErrors
    );

    if (errors !== undefined) {
      setFormErrors(errors);
    }
    // } else {
    //   await createNewUser(datas);
    // }
  }

  return (
    <div className='wrapper'>
      <LeftSide />
      <div className='form-align-left'>
        <Steps actualStep={2} />
        <p className='title-form margin-top-64 margin-bottom-0'>
          Tus <span className='primary-color'>asegurados</span>{' '}
        </p>
        <p>Preséntanos a quién vamos a proteger.</p>

        {newInsured ? (
          <NewInsuredForm
            dniNumber={values.dniNumber}
            fullName={values.fullName}
            mothersLastName={values.mothersLastName}
            fathersLastName={values.fathersLastName}
            birthDate={values.birthDate}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formErrors={formErrors}
            handleSetNewInsured={handleSetNewInsured}
          />
        ) : (
          <>
            <InsuredsList deleteInsured={deleteInsured} />
            <p onClick={handleSetNewInsured}>Quiero asegurar a alguien más </p>
            <Link to='/step-3'>
              <button
                onClick={() => {}}
                className='primary-button margin-left-16'
              >
                Continuar >
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Insureds;

{
  /* </ScrollView>
        <Button onPress={this.createPost} title="Create Post" />
      </View>
    )
  }

  createPost = () => {
    this.props.router.push('/create')
  } */
}
