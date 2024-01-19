import { useState, ChangeEvent } from 'react';

const NewUser = () => {
  const [name, setName] = useState('');
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <div>
      <h2>Create User</h2>
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
  );
};

export default NewUser;
