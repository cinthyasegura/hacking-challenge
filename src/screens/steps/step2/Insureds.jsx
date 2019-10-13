import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftSide from '../../../shared/components/LeftSide';
import { DataContext, DataConsumer } from '../../../context/Context';
import NewInsuredForm from './components/NewInsuredForm';
import { deleteUSer, createNewUser } from '../../../api/writes';
import InsuredsList from './components/InsuredsList';
import { useFormInput } from '../../../shared/customHooks/UseFormInput';
import { validation } from '../../../utils/validation/validation';
import Steps from '../../../shared/components/Steps';
import add from '../../../assets/add.svg';
import { constraints } from '../../../utils/validation/constraints';
import './Insureds.scss';

const Insureds = () => {
  const [newInsured, setNewInsured] = useState(false);
  const [formErrors, setFormErrors] = useState({
    dniNumber: '',
    fullName: '',
    mothersLastName: '',
    fathersLastName: '',
    birthDate: ''
  });

  const { values, handleChange, handleSubmit } = useFormInput(Submit);

  // const { data, setData } = useContext(DataContext);

  const inputValues = {
    dniNumber: values.dniNumber,
    fullName: values.fullName,
    mothersLastName: values.mothersLastName,
    fathersLastName: values.fathersLastName,
    birthDate: values.birthDate
  };

  const constraintsValidations = {
    dniNumber: constraints.dniNumber,
    fullName: constraints.fullName,
    mothersLastName: constraints.mothersLastName,
    fathersLastName: constraints.fathersLastName,
    birthDate: constraints.birthDate
  };

  const handleSetNewInsured = () => setNewInsured(!newInsured);

  const deleteInsured = async docId => {
    await deleteUSer(docId);
  };

  async function Submit() {
    const errors = validation(inputValues, constraintsValidations, formErrors);

    if (errors !== undefined) {
      setFormErrors(errors);
    } else {
      const inputValuesOnSave = {
        nomCompleto: `${values.fullName} ${values.mothersLastName} ${values.fathersLastName} `,
        apellidoPaterno: `${values.fathersLastName}`,
        sexo: 'M',
        nombres: `${values.fullName}`,
        tipoDocumento: '01',
        apellidoMaterno: `${values.mothersLastName}`,
        numDocumento: `${values.dniNumber}`,
        fecNacimiento: `${values.birthDate}`,
        correo: 'cinthyaless@gmail.com'
      };

      await createNewUser(inputValuesOnSave);
      handleSetNewInsured();
    }
  }

  return (
    <div className='wrapper'>
      <LeftSide />
      <div className='form-align-left'>
        <Steps actualStep={2} />
        <p className='title-form margin-top-64 margin-bottom-0'>
          Tus <span className='primary-color'>asegurados</span>{' '}
        </p>
        <p className='text-color roboto-light'>
          Preséntanos a quién vamos a proteger.
        </p>

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
          <DataConsumer>
            {value => (
              <>
                <InsuredsList deleteInsured={deleteInsured} />
                <div
                  onClick={handleSetNewInsured}
                  className='margin-top-32 pointer'
                >
                  <img src={add} alt='agregar' className='margin-right-16' />
                  <span className='purple-link'>
                    Quiero asegurar a alguien más
                  </span>
                </div>

                <Link to='/step-3' className='button-right'>
                  <button
                    className={
                      value.data.length !== 0
                        ? 'primary-button'
                        : 'disabled-button'
                    }
                    disabled={value.data.length !== 0 ? false : true}
                  >
                    Continuar >
                  </button>
                </Link>
              </>
            )}
          </DataConsumer>
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
