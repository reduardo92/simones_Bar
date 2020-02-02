import { useState, useEffect, useRef } from 'react';
import StateContext from './StateContext';

const StateProvider = ({ children }) => {
  const [tab, setTab] = useState('drinks');
  const [windowSize, setWindowSize] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const [navheight, setNavHeight] = useState(null);
  const navRef = useRef();

  const setCarosuel = (tablet = 3, laptop = 4, laptopLg = 5) => {
    if (windowSize < 768) {
      return 1;
    } else if (windowSize <= 768 || windowSize < 1280) {
      return tablet;
    } else if (windowSize <= 1280 || windowSize < 2000) {
      return laptop;
    } else if (windowSize >= 2000) {
      return laptopLg;
    }
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    setNavHeight(navRef.current.scrollHeight);
    window.addEventListener('scroll', () => {
      if (window.scrollY > navheight) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, [navheight]);

  return (
    <StateContext.Provider
      value={{
        tab,
        setTab,
        windowSize,
        setCarosuel,
        toggle,
        setToggle,
        navScroll,
        navRef
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
