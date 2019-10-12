import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HolderInformation.scss';
import LeftSide from '../../../shared/components/LeftSide';
import Input from '../../../shared/ui/Input';
import RadioButton from '../../../shared/ui/RadioButton';
import Steps from '../../../shared/components/Steps';

class HolderInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    };
  }
  render() {
    const { dniNumber, userName } = this.props.location.state;
    const { isChecked } = this.state;

    return (
      <div className='wrapper'>
        <LeftSide />

        <div className='form-align-left'>
          <Steps actualStep={1} />
          <p className='title-form margin-top-64 margin-bottom-0'>
            Hola{' '}
            <span className='primary-color'>{`${userName
              .charAt(0)
              .toUpperCase()}${userName.slice(1)}`}</span>
          </p>
          <p className='title-form margin-top-0 margin-bottom-0'>
            cuéntanos sobre ti
          </p>
          <p className='subtitle-form-1 margin-top-24 margin-bottom-0'>
            Podrás protegerlos
            <span className='bold h3'> por solo S/20 al mes</span> por asegurado
          </p>
          <p className='subtitle-form-2 margin-top-16 margin-bottom-0'>
            Datos del titular
          </p>
          <div className='input-select-section margin-top-24'>
            <select className='select-disable'>
              <option>DNI</option>
            </select>
            <Input
              type='number'
              placeholder='Nro. de Documento'
              className='input-select-disable'
              name='dniNumber'
              value={dniNumber}
              disabled
            />
          </div>
          <Input type='email' placeholder='Correo' className='large-input' />
          <p className='subtitle-form-h6 margin-top-32 margin-bottom-0'>
            ¿ESTE SEGURO ES PARA TI?
          </p>
          <RadioButton value='No' className='radiobutton margin-top-24' />
          <RadioButton value='Si' className='radiobutton margin-top-16' />
          <div className='bottom'>
            <a className='margin-left-16 h6' href='/'>
              Modificar DNI
            </a>
            <Link to='/step-2'>
              {isChecked ? (
                <button
                  // onClick={() => {}}
                  className='primary-button margin-left-16'
                >
                  Continuar >
                </button>
              ) : (
                <button className='button-disabled margin-left-16' disabled>
                  {' '}
                  Continuar >
                </button>
              )}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default HolderInformation;

// const HolderInformation = props => {
//   // const context = useContext(DataContext);
//   // const { dniNumber, userName } = props.location.state;
//   // console.log(context.data.data, 'holderx');

//   return (
//     <div className='wrapper'>
//       <LeftSide />

//       <div className='form'>
//         <p> PASO 1 DE 4 </p>
//         <p>
//           Hola{' '}
//           <span>{`${userName.charAt(0).toUpperCase()}${userName.slice(
//             1
//           )}`}</span>
//           , cuéntanos sobre ti
//         </p>
//         <p>Podrás protegerlos por solo S/20 al mes por asegurado</p>
//         <p>Datos del titular</p>
//         <div className='input-select-section'>
//           <select>
//             <option>DNI</option>
//           </select>
//           <Input
//             type='number'
//             placeholder='Nro. de Documento'
//             className='input-select'
//             name='dniNumber'
//             value={dniNumber}
//             disabled
//           />
//         </div>
//         <p>¿ESTE SEGURO ES PARA TI?</p>
//         <CheckBox value='No' />
//         <CheckBox value='Si' />
//       </div>
//     </div>
//   );
// };
// export default HolderInformation;
