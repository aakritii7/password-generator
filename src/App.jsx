import React, { useState } from 'react'

const App = () => {
  const [password,setPassword] = useState();
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);

  return (
    <div>
      <h1>Generate Password</h1>
      <input type="text" placeholder='Password' className='outline-none bg-white cursor-pointer' />
      <label htmlFor="isCharacter">
        <input type="checkbox" />
      </label>
      <label htmlFor="isNumber">
        <input type="checkbox" />
      </label>
      <button>Copy Password</button>
      <button>Reset Password</button>
      <button>Save Password</button>

    </div>
  )
}

export default App
