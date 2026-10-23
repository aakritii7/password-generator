import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const limitPass = 100;
  const [password,setPassword] = useState('');
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);
  const [length,setLength] = useState(8)

  const [savePass, setSavePass] = useState([]);
  const passwordRef = useRef();

  const generatePassword =()=>{
    let pass = '';
    let str = 'abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(numberAllowed) str += '0123456789';
    if(characterAllowed) str += '!@#$%^&*';
    for(let i =1;i<=length;i++){
      let randomIndex = Math.floor(Math.random()*str.length);
      let characterPicked = str.charAt(randomIndex);
      pass += characterPicked;

    }
    setPassword(pass)
  }

  const copyPass =()=>{
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, limitPass)
  }




  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,characterAllowed])

  return (
    <>
    <div className='flex flex-col mt-10 m-auto gap-5 w-[600px] shadow-2xl bg-pink-200 py-5 rounded-2xl px-10'>
      <h1>Generate Password</h1>
      <input type="text" ref={passwordRef} readOnly={true} value={password} placeholder='Password' className='outline-none bg-white cursor-pointer w-full py-2 rounded-xl' />
      <div className='flex gap-3'>
      <input className='w-full' type="range" min={0} max={limitPass} value={length} onChange={(e)=>setLength(e.target.value)} />
      <p>{length}</p>
      </div>
      <label htmlFor="isCharacter">
        <input type="checkbox" id='isCharacter' checked={characterAllowed} onChange={(e)=>setCharacterAllowed(e.target.checked)} />Character Allowed
      </label>
      <label htmlFor="isNumber">
        <input type="checkbox" id='isNumber' checked={numberAllowed} onChange={(e)=>setNumberAllowed(e.target.checked)} /> Number Allowed
      </label>
      <button className='bg-blue-500 px-3 py-1 rounded-xl text-white' onClick={copyPass}>Copy Password</button>
      <button className='bg-blue-500 px-3 py-1 rounded-xl text-white' onClick={()=>{
        setCharacterAllowed(false);
        setLength(8);
        setNumberAllowed(false);
      }}>Reset Password</button>
      <button className='bg-blue-500 px-3 py-1 rounded-xl text-white' onClick={()=>setSavePass(prev =>([...prev,password]))}>Save Password</button>
      {savePass.map((item)=>{
        return (
          <p key={item}>{item}</p>
        )
      })}
    </div>
    </>
  )
}

export default App
