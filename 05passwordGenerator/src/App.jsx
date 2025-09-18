import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [Password, setpassword] = useState('')

  // USEREF HOOK :--->
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (character) str += "!@#$&*?/\}{[]~:;"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
  
    setpassword(pass)
  },[length, number, character, setpassword] )

  
  const copyPasswordToClipBoard = useCallback( () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  }, [Password] )


  useEffect( () => { passwordGenerator()}, [length, number, character, passwordGenerator] )

  return (
    <>
    <div className='width-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input 
        type='text'
        value={Password}
        className='outline-none w-full py-1 px-3 bg-white text-gray-700'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />

        <button 
        onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-700
        text-white px-3 py-0.5 shrink-0 hover:bg-green-800'
        >Copy</button>

      </div>


      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1 '>
          <input 
          type='range'
          min={6}
          max={50}
          value={length} 
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label>length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked = {number}
            id='numberInput'
            onChange={() => {
              setnumber((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked = {character}
            id='characterInput'
            onChange={() => {
              setcharacter((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">character</label>
        </div>
        
        
      </div>
    </div>
   
    </>
  )
}

export default App
