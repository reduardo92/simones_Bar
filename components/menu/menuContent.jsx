import { useState } from 'react';
import menu from './menu';
import TabStyled from '../ui/tabs';
import TitleBanner from '../ui/titleBanner';
import styled from 'styled-components';

const Styled = styled.section`
  margin: 3em 1em 5em;
  .container {
    display: grid;
    justify-items: center;
    gap: 3em;
  }

  /* TAbs */
  .taps--container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .tab {
    color: var(--white-clr);
    background-color: var(--second-clr);
    padding: 0.8em 1.3em;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;
    font-weight: var(--fw-bold);
  }

  .menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
    gap: 3em;
    width: 100%;
  }

  .menu--img {
    max-width: 340px;
  }

  .title {
    color: var(--primary-clr);
  }

  .menu--item {
    border-bottom: 2px dotted var(--second-clr);
    padding-bottom: 1em;
    display: flex;
    align-items: flex-start;

    &:last-child {
      border: none;
    }
  }

  .menu--item--last {
    border: none;
  }

  .menu--item--text {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .price {
    color: var(--primary-clr);
    font-weight: var(--fw-bold);
    margin-left: auto;
  }

  /* Button */
  .button {
    &:hover,
    &focus {
      border-color: var(--second-clr);
    }
  }

  /* Sandwiches subtile */

  .sandwiche--subtitle {
    margin-top: auto;
  }

  @media screen and (min-width: 760px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      max-width: 1300px;
      margin: 0 auto;
    }

    .taps--container {
      grid-template-columns: repeat(4, 1fr);
    }

    .title--banner,
    .taps--container,
    .menu {
      grid-column: 1/3;
    }

    .menu--item:nth-last-child(2) {
      border: none;
    }

    .menu--img {
      margin-top: -5em;
      justify-self: flex-end;
      grid-column: 1/3;
    }

    .menu--title {
      grid-column: 1 / 3;
      color: var(--accent-clr);
    }
  }
  @media screen and (min-width: 1300px) {
    .taps--container {
      grid-template-columns: repeat(8, 1fr);
    }
  }
`;

const MenuContent = () => {
  const [tab, setTab] = useState('drinks');

  return (
    <Styled>
      <div className='container'>
        <TitleBanner
          topTitle='CHECK IT OUT'
          title='menu'
          botTitle='come eat some good food'
        />
        <div className='taps--container'>
          <TabStyled
            color
            onClick={() => setTab('drinks')}
            active={tab === 'drinks'}
          >
            drinks
          </TabStyled>
          <TabStyled
            color
            onClick={() => setTab('beer')}
            active={tab === 'beer'}
          >
            beer
          </TabStyled>
          <TabStyled
            color
            onClick={() => setTab('appetizers')}
            active={tab === 'appetizers'}
          >
            Appetizers
          </TabStyled>
          <TabStyled
            color
            onClick={() => setTab('soupSalad')}
            active={tab === 'soupSalad'}
          >
            Soups&Salads
          </TabStyled>
          <TabStyled
            color
            onClick={() => setTab('pizzas')}
            active={tab === 'pizzas'}
          >
            pizzas
          </TabStyled>
          <TabStyled
            color
            onClick={() => setTab('sandwiches')}
            active={tab === 'sandwiches'}
          >
            sandwiches
          </TabStyled>
          <TabStyled
            color
            onClick={() => setTab('desserts')}
            active={tab === 'desserts'}
          >
            desserts
          </TabStyled>
          <TabStyled
            color
            onClick={() => setTab('brunch')}
            active={tab === 'brunch'}
          >
            brunch
          </TabStyled>
        </div>
        <div className='menu'>
          {tab === 'drinks' && (
            <>
              <h2 className='title menu--title'>Cocktails</h2>
              {menu.drinks.cocktails.map(({ title, text, price }, i) => (
                <div key={title + i} className='menu--item'>
                  <div className='menu--item--text'>
                    <h3 className='title'>{title}</h3>
                    <p className='para'>{text}</p>
                  </div>
                  <p className='price'>${price}</p>
                </div>
              ))}
              <h2 className='title menu--title'>Wines</h2>
              {menu.drinks.wines.map(({ title, text, price }, i) => (
                <div key={title + i} className='menu--item'>
                  <div className='menu--item--text'>
                    <h3 className='title'>{title}</h3>
                    <p className='para'>{text}</p>
                  </div>
                  <p className='price'>${price}</p>
                </div>
              ))}
            </>
          )}
          {tab === 'beer' && (
            <>
              <h2 className='title menu--title'>Drafts</h2>
              {menu.beer.drafts.map(({ title, text, price }, i) => (
                <div key={title + i} className='menu--item'>
                  <div className='menu--item--text'>
                    <h3 className='title'>{title}</h3>
                    <p className='para'>{text}</p>
                  </div>
                  <p className='price'>${price}</p>
                </div>
              ))}
              <h2 className='title menu--title'>Packaged</h2>
              {menu.beer.packaged.map(({ title, text, price }, i) => (
                <div key={title + i} className='menu--item'>
                  <div className='menu--item--text'>
                    <h3 className='title'>{title}</h3>
                    <p className='para'>{text}</p>
                  </div>
                  <p className='price'>${price}</p>
                </div>
              ))}
            </>
          )}
          {tab !== 'drinks' &&
            tab !== 'beer' &&
            menu[tab].map(({ title, text, subtitle, price }, i) => (
              <div key={title + i} className='menu--item'>
                <div className='menu--item--text'>
                  <h3 className='title'>{title}</h3>
                  <p className='para'>{text}</p>
                  {subtitle && subtitle}
                </div>
                <p className='price'>${price}</p>
              </div>
            ))}
        </div>
        <div className='menu--img'>
          <img
            src='/fast-food-lunch-dinner-hamburger-2-transparent.png'
            alt='nacho beer image'
          />
        </div>
      </div>
    </Styled>
  );
};

export default MenuContent;
