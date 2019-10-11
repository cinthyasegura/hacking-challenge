import React, { useState, useEffect } from 'react';

export const DataContext = React.createContext();
export const DataConsumer = DataContext.Consumer;

const DataProvider = props => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const url = 'https://freestyle.getsandbox.com/dummy/obtenerdatospersona';

      try {
        const getData = await fetch(url, {
          method: 'POST'
        });
        const dataResponse = await getData.json();
        setData(dataResponse);
        console.log(dataResponse);
      } catch (error) {
        console.warn(error);
      }
    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;
