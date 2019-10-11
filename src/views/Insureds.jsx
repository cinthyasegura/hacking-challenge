import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import LeftSide from '../shared/screens/LeftSide';
import { DataContext } from '../context/Context';
import InsuredData from '../components/InsuredData';

const Insureds = () => {
  const [newInsured, setNewInsured] = useState(false);
  const { data, setData } = useContext(DataContext);

  const handleSetNewInsured = () => {
    setNewInsured(!newInsured);
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
          data.map(request => (
            <div>
              <hr className='divider margin-top-32 margin-bottom-0' />
              <div className='insured-count-wrapper margin-top-24 margin-bottom-0'>
                <p className='subtitle-form-h6 margin-top-0 margin-bottom-0'>
                  {request.tercero.nombres}
                </p>
                <Link className='link margin-top-0 margin-bottom-0'>
                  ELIMINAR
                </Link>
                <p>
                  DNI {request.tercero.numDocumento} - FN{' '}
                  {request.tercero.fecNacimiento}
                </p>
              </div>
            </div>
          ))
        ) : (
          <InsuredData />
        )}

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
