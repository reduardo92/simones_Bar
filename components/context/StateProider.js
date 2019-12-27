import { useState } from 'react';
import StateContext from './StateContext';

const StateProvider = ({ children }) => {
  const [tab, setTab] = useState('drinks');

  return (
    <StateContext.Provider
      value={{
        tab,
        setTab,
        Hello
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
