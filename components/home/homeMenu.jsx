import React, { useState } from 'react';
import styled from 'styled-components';
import TitleBanner from '../ui/titleBanner';
import Button from '../ui/button';
import TabStyled from '../ui/tabs';

const Styled = styled.section`
  background-color: var(--primary-clr);
  margin: 5em 0;
  padding: 4em 1em 2em;
  .container {
    display: grid;
    justify-items: center;
    gap: 3em;
  }

  /* title--banner */
  .title--banner {
    .title {
      color: var(--white-clr);
      -webkit-text-stroke: 2px var(--white-clr);
    }
  }

  /* TAbs */
  .taps--container {
    /* margin: 2em 0; */
    display: flex;
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

  .price {
    color: var(--white-clr);
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

  /* .activeTab {
    transform: scale(0.95);
    background-color: transparent;
    border-color: var(--second-clr);
    outline-color: var(--second-clr);
  } */

  @media screen and (min-width: 760px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      max-width: 1300px;
      margin: 0 auto;
    }
    /* padding-left: 23vw; */
    /* padding-right: 23vw; */

    .title--banner {
      align-items: flex-start;
      justify-self: flex-start;
    }

    .taps--container {
      align-self: flex-end;
      max-width: 400px;
    }

    .menu {
      grid-column: 1/3;
    }

    .menu--item:nth-last-child(2) {
      border: none;
    }

    .button {
      align-self: baseline;
      justify-self: flex-start;
    }

    .menu--img {
      margin-top: -5em;
      justify-self: flex-end;
    }
  }
`;

const HomeMenu = () => {
  const [tab, setTab] = useState('drinks');

  const menu = {
    drinks: [
      {
        title: 'Mango Unchained',
        text: `Pinnacle mango vodka, mango
            nectar, lime, tripel sec and chamoy`,
        price: '10.00'
      },
      {
        title: 'Pilesen Negroni',
        text: `Espolon rep,  Tattersaill bitter orange, 
            punt y mes`,
        price: '10.00'
      },
      {
        title: 'Punch Drunk',
        text: `Nordic rum, apple cider &
            cinnamon stick, served warm`,
        price: '10.00'
      },
      {
        title: 'Winter Mule',
        text: `Ginger beer, Tito’s vodka,
            Tattersall cranberry liquer`,
        price: '10.00'
      },
      {
        title: 'WHITE',
        text: `Forchir Pinot  Grigio
Blanc De Camarsac Sauv Blanc`,
        price: '8.00'
      },
      {
        title: 'SPARKLING',
        text: `Gougenheim  Sparkling Rose
            J. Roget `,
        price: '8.00'
      }
    ],
    beer: [
      {
        title: 'Virtue Southcider',
        text: 'slightly sweet w/ subtle vanilla notes. 5/5%',
        price: '6.00'
      },
      {
        title: '21st Amendment El Sully',
        text: 'mexican-styleger, light & crisp. 4.8%',
        price: '5.00'
      },
      {
        title: 'Allagash White',
        text: 'belgian style wheat w/ corriander & orange 5.2%',
        price: '6.00'
      },
      {
        title: "Avery Ellies's Brown",
        text: 'well balanced brown ale w/ vanilla notes',
        price: '6.00'
      },
      {
        title: 'Sweet Water Mango Kush',
        text: 'american wheat w/ herbal mango notes. 5%',
        price: '6.00'
      },
      {
        title: 'Press Blackerry & Hibiscous',
        text: 'naturally flavored hard seltzer. 4%',
        price: '5.00'
      }
    ],
    food: [
      {
        title: 'Chipotle Burger',
        text: 'chipotle bbq sauce, cheddar and bacon topped with an onion ring',
        price: '9.00'
      },
      {
        title: 'Pilsen Burger',
        text: 'jalapenos, guacamole and chihuahua cheese',
        price: '9.00'
      },
      {
        title: 'Simones Pizza',
        text: 'potatoes, parmesan and rosemary simple syrup',
        price: '8.00'
      },
      {
        title: 'Bbq Chicken Pizza',
        text:
          'barbequed chicken, chipotle peppers and jack and cheddar cheeses',
        price: '8.00'
      },
      {
        title: "Kristoffer's Tres Leches Cake",
        text: 'the classic dulce de leche. made fresh by the best',
        price: '6.00'
      },
      {
        title: 'Simones Salad',
        text:
          'spring mix, cranberries, almonds, goat cheese and balsamic vinaigrette, topped with pickled red onions',
        price: '8.00'
      }
    ]
  };

  return (
    <Styled className='home--menu'>
      <div className='container'>
        <TitleBanner
          topTitle='CHECK IT OUT'
          title='menu'
          botTitle='come eat some good food'
        />
        <div className='taps--container'>
          <TabStyled onClick={() => setTab('drinks')} active={tab === 'drinks'}>
            drinks
          </TabStyled>
          <TabStyled onClick={() => setTab('beer')} active={tab === 'beer'}>
            beer
          </TabStyled>
          <TabStyled onClick={() => setTab('food')} active={tab === 'food'}>
            food
          </TabStyled>
        </div>
        <div className='menu'>
          {menu[tab].map(({ title, text, price }, i) => (
            <div key={title + i} className='menu--item'>
              <div className='menu--item--text'>
                <h3 className='title'>{title}</h3>
                <p className='para'>{text}</p>
              </div>
              <p className='price'>${price}</p>
            </div>
          ))}
        </div>
        <Button toLink='/menu' title='view more' bgclr />
        <div className='menu--img'>
          <img src='/menu_img.png' alt='nacho beer image' />
        </div>
      </div>
    </Styled>
  );
};

export default HomeMenu;
