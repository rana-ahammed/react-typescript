import { useState, ChangeEvent, FormEvent } from 'react';

const NewUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = { name, email };
    console.log(newUser);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h2>Create User</h2>
        <div>
          <label htmlFor='name'>
            Name:{' '}
            <input
              type='text'
              id='name'
              value={name}
              required
              onChange={handleNameChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor='email'>
            Email:
            <input
              type='text'
              name='email'
              id='email'
              value={email}
              required
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <button type='submit'>Create User</button>
      </form>
    </div>
  );
};

export default NewUser;
