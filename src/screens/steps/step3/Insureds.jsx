import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import LeftSide from '../../../shared/components/LeftSide';
import { DataContext } from '../../../context/Context';
import InsuredData from '../step2/InsuredData';
import { deleteUSer, createNewUser } from '../../../api/writes';

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
    numDocumento: '00456675',
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
          <InsuredData />
        ) : (
          data.map(request => (
            <div key={request.numDocumento}>
              <hr className='divider margin-top-32 margin-bottom-0' />
              <div className='insured-count-wrapper margin-top-24 margin-bottom-0'>
                <p className='subtitle-form-h6 margin-top-0 margin-bottom-0'>
                  {request.nomCompleto}
                </p>
                <button
                  className='link margin-top-0 margin-bottom-0'
                  onClick={() => deleteInsured(request.numDocumento)}
                >
                  ELIMINAR
                </button>
                <p>
                  DNI {request.numDocumento} - FN {request.fecNacimiento}
                </p>
              </div>
            </div>
          ))
        )}

        {/* </ScrollView>
        <Button onPress={this.createPost} title="Create Post" />
      </View>
    )
  }

  createPost = () => {
    this.props.router.push('/create')
  } */}

        <p onClick={handleSetNewInsured}>Quiero asegurar a alguien más </p>
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
