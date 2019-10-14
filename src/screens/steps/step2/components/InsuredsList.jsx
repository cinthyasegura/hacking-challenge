import React, { useContext } from 'react';
import { DataContext } from '../../../../context/Context';
import '../Insureds.scss';

const InsuredsList = ({ deleteInsured }) => {
  const { data } = useContext(DataContext);
  return (
    <>
      {data.map(request => (
        <>
          <hr className='divider margin-top-16 margin-bottom-0' />
          <div key={request.numDocumento} className='insureds-container-grid'>
            <div className='margin-top-16'>
              <p className='gray'>{request.nomCompleto}</p>
              <p className='user-data'>
                DNI {request.numDocumento} - FN {request.fecNacimiento}
              </p>
            </div>
            <p
              className='edit-delete margin-top-32 pointer'
              onClick={() => deleteInsured(request.numDocumento)}
            >
              EDITAR
            </p>
            <p
              className='edit-delete margin-top-32 pointer'
              onClick={() => deleteInsured(request.numDocumento)}
            >
              ELIMINAR
            </p>
          </div>
        </>
      ))}
      <hr className='divider margin-top-16 margin-bottom-0' />
    </>
  );
};
export default InsuredsList;
