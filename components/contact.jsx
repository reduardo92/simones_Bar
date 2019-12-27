import { useState } from 'react';
import styled from 'styled-components';
import TitleBanner from './ui/titleBanner';
import TabStyled from './ui/tabs';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import Icon from './ui/icon';

const Styled = styled.section`
  text-align: center;
  padding: 0 1em;

  .title--banner {
    /* margin-bottom: 1em; */
  }

  .info {
    font-weight: var(--fw-bold);
    margin: 0.5em 0;
  }

  .form {
    display: grid;
    gap: 2em;
    align-items: center;
    padding-top: 1.5em;
    max-width: 1100px;
    margin: 0 auto;
  }

  .input--link,
  .textarea {
    color: var(--second-clr);
    font-weight: var(--fw-bold);
    font-size: 0.9rem;
    text-align: center;
    outline: 2px solid var(--second-clr);
    border: none;

    &::placeholder {
      text-align: center;
    }
  }

  .input--link {
    padding: 1em;
    transition: var(--ease--in--out--02s);

    &:focus {
      outline-color: var(--accent-clr);
    }
  }

  .textarea {
    padding-top: 1em;
    transition: var(--ease--in--out--02s);
    &:focus {
      outline-color: var(--accent-clr);
    }
  }

  .form--button {
    background-color: var(--primary-clr);
    justify-self: center;
    &:hover,
    &focus {
      background-color: transparent;
      border-color: var(--primary-clr);
      outline-color: var(--primary-clr);
      color: var(--second-clr);
    }
  }

  @media screen and (min-width: 760px) {
    .form {
      grid-template-columns: repeat(2, 1fr);
    }

    .textarea,
    .form--button {
      grid-column: 1 / 3;
    }
  }
`;

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const { name, email, phone, subject, message } = form;

  const handleChange = ({ target }) =>
    setForm(form => ({ ...form, [target.name]: target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Styled className='contact section'>
      <TitleBanner
        topTitle='GET IN TOUCH'
        title='CONTACT US'
        botTitle='SHOOT US A QUESTION'
      />
      <Icon className='info' href='tel:+312668601'>
        <MdLocalPhone /> (312) 666-8601
      </Icon>
      <Icon className='info'>
        <MdEmail /> info@simonesbar.com
      </Icon>
      <form
        className='form'
        name='contact'
        method='POST'
        data-netlify-recaptcha='true'
        data-netlify='true'
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          value={name}
          name='name'
          type='text'
          className='input--link name'
          placeholder='FULL NAME'
        />
        <input
          onChange={handleChange}
          value={email}
          name='email'
          type='text'
          className='input--link email--form'
          placeholder='EMAIL'
        />
        <input
          onChange={handleChange}
          value={phone}
          name='phone'
          type='text'
          className='input--link phone'
          placeholder='PHONE NUMBER'
        />
        <select
          onChange={handleChange}
          value={subject}
          name='subject'
          className='input--link subject'
          placeholder='SUBJECT'
        >
          <option>Select a subject...</option>
          <option>General Inquiries</option>
          <option>Music Bookings</option>
          <option>Special Events</option>
        </select>
        <textarea
          onChange={handleChange}
          value={message}
          className='textarea'
          name='message'
          cols='30'
          rows='9'
          placeholder='MESSAGE / QUESTION'
        ></textarea>
        <TabStyled className='form--button' type='submit'>
          send message
        </TabStyled>
      </form>
    </Styled>
  );
};

export default Contact;
