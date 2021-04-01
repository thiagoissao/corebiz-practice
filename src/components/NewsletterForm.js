import React, { useState } from 'react';
import './NewsletterForm.css'

const NewsletterForm = ({ onClick }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleClick = event => {
    event.preventDefault()
    onClick({ name, email })
  }

  return (
    <form className="Form">
      <label>
        Nome:
          <input
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Email:
          <input
          name="email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button type='submit' onClick={handleClick}>
        EU QUERO
      </button>
    </form>
  );
}

export default NewsletterForm;
