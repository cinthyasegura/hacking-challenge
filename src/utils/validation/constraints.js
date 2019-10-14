export const constraints = {
  email: {
    presence: { allowEmpty: false, message: '^Completar el campo.' },
    format: {
      pattern: '^[^@]+@[^@]+.[a-zA-Z]{2,}$',
      message: '^Ingresa un correo valido'
    }
  },
  dniNumber: {
    presence: { allowEmpty: false, message: '^Campo vacio.' },
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
    presence: { allowEmpty: false, message: '^Completar campo.' }
  },
  mothersLastName: {
    presence: { allowEmpty: false, message: '^Completar campo.' }
  },
  fathersLastName: {
    presence: { allowEmpty: false, message: '^Completar campo.' }
  },
  birthDate: {
    presence: { allowEmpty: false, message: '^Completar campo.' }
  },
  userName: {
    presence: { allowEmpty: false, message: '^Campo vacio.' },
    format: {
      pattern: '[a-zA-Z ]+',
      message: '^Solo se permite letras.'
    }
  }
};
