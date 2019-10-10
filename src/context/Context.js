import React, { Component } from 'react';

const Context = React.createContext();
export const DataConsumer = Context.Consumer;

class DataProvider extends Component {
  state = { data: [] };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = 'https://freestyle.getsandbox.com/dummy/obtenerdatospersona';

    try {
      const fetchData = await fetch(url, {
        method: 'POST'
      });
      const data = await fetchData.json();
      console.log(data)

      this.setState({ data });
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    const { data } = this.state;

    return (
      <Context.Provider value={{ data }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default DataProvider;
