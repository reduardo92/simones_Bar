import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Styled = styled.div`
  position: relative;

  .qoute {
    position: relative;
    padding: 0 2em;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto;
    justify-items: center;
    gap: 0.2em;
    max-width: 650px;
    margin: 0 auto;
    opacity: 0;
    visibility: hidden;
    height: 0;
    transition: var(--ease--in--out--02s);
  }

  .activeQoute {
    opacity: 1;
    visibility: visible;
    height: auto;
    animation: fadeOp 1s 0s ease-out;
  }

  .left--qoute,
  .right--qoute {
    color: black;
    font-size: 1.8rem;
    justify-self: center;
  }

  .review--name {
    grid-area: 2 / 1 / 2 / 6;
    color: var(--accent-clr);
    font-family: var(--fn-reenie);
    font-size: 2.4rem;
    text-transform: capitalize;
    -webkit-text-stroke: 0.1px var(--accent-clr);
  }
`;

const Qoute = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % reviews.length;
    const id = setTimeout(() => setCurrent(next), 6000);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <Styled>
      {reviews.map(({ id, name, text }) => (
        <div
          key={id}
          className={`qoute ${id === current ? 'activeQoute' : ''}`}
        >
          <FaQuoteLeft className='left--qoute' />
          <p className='review'>{text}</p>
          <FaQuoteRight className='right--qoute' />
          <h3 className='review--name'>{name}</h3>
        </div>
      ))}
    </Styled>
  );
};

export default Qoute;

const reviews = [
  {
    id: 0,
    name: 'Linda Colon Corona',
    text: `Came here on a friday night for the first time. I had such a good time.
    The drinks are great staff was very attentive. I especially loved the
    vegan burger i had. Very nice atmosphere. Definatly recommend this bar
    and will be back soon!!!`
  },
  {
    id: 1,
    name: 'Lorenzo Casarrubias',
    text:
      'Stop in for a drink and good conversation with Stevie and Abel.  Pizza and PBR on Mondays is a solid deal.  Love the rotation of 80s classics on the CRT'
  },
  {
    id: 2,
    name: 'Bobby Martin',
    text: 'Nice Atmosphere, Great Drink selection. Good vibes'
  },
  {
    id: 3,
    name: 'Poonam Sharma',
    text: `This place will surprise you. Fast, efficient, and courteous service.
    The decor is unique and amazing. Very good selection of beers.`
  },
  {
    id: 4,
    name: 'Sean Rapp',
    text: `Staple of the neighborhood.  They do everything with quality and are a model of consistency with both food and drinks. A "come as you are" bar/eatery without any pretentious nonsense you see elsewhere. Come eat, drink and exchange some banter.`
  },
  {
    id: 5,
    name: 'Paul Carrano',
    text: `Awesome place. Food is good, service is great and atmosphere is fantastic. Daily booze specials along with fun nights like comedy, trivia, etc.`
  },
  {
    id: 6,
    name: 'Saul Duarte',
    text: `Ask for just sweet potato fries! They give you a mix of sweet potato fries and regular fries, and they're both tasty, but the sweet potato are amazing!`
  },
  {
    id: 7,
    name: 'Angela Jacobs',
    text: `Delicious contemporary food & drinks w/ fusion flare. Great spot in Pilsen.`
  },
  {
    id: 8,
    name: 'Gabriel Breshears',
    text: `Simone's does a little bit of everything. The beer specials keep me coming back and the karoke nights. I miss the burlesque shows but love the atmosphere. Would come back more if they bring back burlesque. They are a great bar, I have literally met best friends ther`
  },
  {
    id: 9,
    name: 'Abraham Jimenez',
    text: `If in Pilsen you have to Simones! Local drafts and local bands! This place brings out the best in us!
    `
  },
  {
    id: 10,
    name: 'natalia rodriguez',
    text: `Burger was cooked on point and flavorful, pizza was crispy and soft with the right amount of toppings
    `
  }
];
