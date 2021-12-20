import { useState, useContext } from 'react';
import { DataContext } from './DataContext';

export const DataProvider = (props) => {
  const [data, setData] = useState({});
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const dataContext = useContext(DataContext);
  return dataContext;
};
