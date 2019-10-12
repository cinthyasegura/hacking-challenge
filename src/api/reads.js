const url = `https://front-challenge-cinthyasegura.getsandbox.com`;

export const getDocType = async () => {
  const docTypeUrl = `${url}/tipodoc`;
  try {
    const getData = await fetch(docTypeUrl);
    return await getData.json();
  } catch (error) {
    console.warn(error);
  }
};

export const getpaymentMethod = async () => {
  const paymentMethodUrl = `${url}/formapago`;
  try {
    const getData = await fetch(paymentMethodUrl);
    return await getData.json();
  } catch (error) {
    console.warn(error);
  }
};

export const getPromCodes = async code => {
  const promCodeUrl = `${url}/validacodigo/${code}`;
  try {
    const getData = await fetch(promCodeUrl);
    return await getData.json();
  } catch (error) {
    console.warn(error);
  }
};

export const getUsers = async () => {
  const usersUrl = `${url}/personas`;
  try {
    const getData = await fetch(usersUrl);
    // const dati = await getData.json();
    // console.log(dati);

    return await getData.json();
  } catch (error) {
    console.warn(error);
  }
};

export const getUserData = async userDoc => {
  const userUrl = `${url}/personas/${userDoc}`;
  try {
    const getData = await fetch(userUrl);
    return await getData.json();
  } catch (error) {
    console.warn(error);
  }
};
