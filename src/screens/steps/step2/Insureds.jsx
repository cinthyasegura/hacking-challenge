import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import LeftSide from '../../../shared/components/LeftSide';
import { DataContext } from '../../../context/Context';
import NewInsuredForm from './components/NewInsuredForm';
import { deleteUSer, createNewUser } from '../../../api/writes';
import InsuredsList from './components/InsuredsList';

const Insureds = () => {
  const [newInsured, setNewInsured] = useState(false);
  const { data, setData } = useContext(DataContext);

  console.log(data);
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

  const handleSetNewInsured = async () => {
    setNewInsured(!newInsured);
    // await createNewUser(datas);
  };

  const deleteInsured = async docId => {
    await deleteUSer(docId);
  };

  return (
    <div className='wrapper'>
      <LeftSide />
      <div className='form-align-left'>
        <p className='form-steps'>
          <span className='primary-color'>PASO 2</span> DE 4
        </p>
        <p className='title-form margin-top-64 margin-bottom-0'>
          Tus <span className='primary-color'>asegurados</span>{' '}
        </p>
        <p>Preséntanos a quién vamos a proteger.</p>

        {newInsured ? (
          <NewInsuredForm />
        ) : (
          <>
            <InsuredsList
              newInsured={newInsured}
              deleteInsured={deleteInsured}
            />
            <p onClick={handleSetNewInsured}>Quiero asegurar a alguien más </p>
          </>
        )}
        <Link to='/step-2'>
          <button onClick={() => {}} className='primary-button margin-left-16'>
            Continuar >
          </button>
        </Link>
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
