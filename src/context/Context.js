import React, { useState, useEffect } from 'react';
import { getUsers } from '../api/reads';

export const DataContext = React.createContext();
export const DataConsumer = DataContext.Consumer;

const DataProvider = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const dataResponse = await getUsers();
        setData(dataResponse);
      } catch (error) {
        return error;
      }
    }
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;
