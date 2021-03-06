import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import TitleBanner from './ui/titleBanner';
import TabStyled from './ui/tabs';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import Icon from './ui/icon';

const Styled = styled.section`
  text-align: center;
  padding: 0 1em;

  .info {
    font-weight: var(--fw-bold);
    margin: 0.5em 0;
  }

  .form {
    display: grid;
    gap: 2em;
    grid-gap: 2em;

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

  /* Alert msg to subject */
  .alert--msg {
    outline-color: #af0000;
  }

  .alert--title {
    color: #af0000;
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

  .msg {
    justify-self: center;
    color: var(--primary-clr);
    grid-column: 1 / 3;
    font-weight: bold;
    font-size: 1.5rem;
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
  const [status, setStatus] = useState();
  const [msg, setMsg] = useState(null);
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

  const clearMsg = () => setInterval(() => setMsg(null), 8000);

  const handleSubmit = ev => {
    ev.preventDefault();
    if (subject === 'Select a subject...' || subject === '') {
      setMsg('please choose a subject');
      clearMsg();
      return;
    }

    console.log(form);

    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);

    setInterval(() => setStatus(), 8000);
  };

  return (
    <Fade>
      <Styled className='contact section'>
        <Fade bottom>
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
        </Fade>
        {msg && <h3 className='alert--title'>{msg}</h3>}
        <form
          className='form'
          onSubmit={handleSubmit}
          action='https://formspree.io/mnqjlvaz'
          method='POST'
        >
          <input type='hidden' name='form-name' value='contact' />
          <input
            onChange={handleChange}
            value={name}
            name='name'
            type='text'
            className='input--link name'
            placeholder='FULL NAME'
            required
          />
          <input
            onChange={handleChange}
            value={email}
            name='email'
            type='email'
            className='input--link email--form'
            placeholder='EMAIL'
            required
          />
          <input
            onChange={handleChange}
            value={phone}
            name='phone'
            type='number'
            className='input--link phone'
            placeholder='PHONE NUMBER'
            required
          />
          <select
            onChange={handleChange}
            value={subject}
            name='subject'
            className={`input--link subject ${msg && 'alert--msg'}`}
            required
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
            required
          ></textarea>
          {status === 'SUCCESS' ? (
            <p className='msg'>Message Sent!</p>
          ) : (
            <TabStyled className='form--button' type='submit'>
              send message
            </TabStyled>
          )}
          {status === 'ERROR' && (
            <p className='msg'>Ooops! There was an error.</p>
          )}
        </form>
      </Styled>
    </Fade>
  );
};

export default Contact;
