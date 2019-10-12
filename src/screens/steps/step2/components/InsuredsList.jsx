import React, { useContext } from 'react';
import { DataContext, DataConsumer } from '../../../../context/Context';

const InsuredsList = ({ deleteInsured }) => {
  //   const { data, setData } = useContext(DataContext);
  return (
    <DataConsumer>
      {value => {
        return value.data.map(request => (
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
        ));
      }}
    </DataConsumer>
  );
};
export default InsuredsList;
