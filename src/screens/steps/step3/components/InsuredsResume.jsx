import React from 'react';
import { DataConsumer } from '../../../../context/Context';

const InsuredsResume = () => {
  return (
    // <p>no data</p>
    <DataConsumer>
      {value => (
        <>
          {value.data.map(request => (
            <>
              <div
                key={request.numDocumento}
                className='insureds-container-grid'
              >
                <div className='margin-top-16'>
                  <p className='gray'>{request.nomCompleto}</p>
                  <p className='user-data'>
                    DNI {request.numDocumento} - FN {request.fecNacimiento}
                  </p>
                </div>
              </div>
            </>
          ))}
          <hr className='divider margin-top-16 margin-bottom-0' />
        </>
      )}
    </DataConsumer>
  );
};

export default InsuredsResume;
