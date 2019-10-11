const url = `https://front-challenge-cinthyasegura.getsandbox.com/personas`;

export const createNewUser = async userData => {
  try {
    const addUser = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    return await addUser.json();
  } catch (error) {
    console.warn(error);
  }
};

export const deleteUSer = async userDoc => {
  const urlforUser = `${url}/${userDoc}`;
  try {
    return await fetch(urlforUser, {
      method: 'DELETE'
    });
  } catch (error) {
    console.warn(error);
  }
};
