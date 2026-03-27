import { useEffect, useCallback, useState, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
        let charIndex = Math.floor(Math.random() * str.length)
        pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Password Generator</h1>
        
        <div className="input-group">
          <input 
            type="text"
            value={password}
            className="password-input"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className="copy-btn"
          >
            Copy
          </button>
        </div>

        <div className="controls">
          <div className="control-group">
            <input 
              type="range" 
              min={6}
              max={50}
              value={length}
              className="slider"
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label className="label">Length: {length}</label>
          </div>

          <div className="checkbox-group">
            <div className="checkbox-item">
              <input 
                type="checkbox"
                defaultChecked={numAllow}
                id="numberInput"
                onChange={() => {
                  setNumAllow((prev) => !prev)
                }}
              />
              <label htmlFor="numberInput" className="label">Numbers</label>
            </div>

            <div className="checkbox-item">
              <input 
                type="checkbox"
                defaultChecked={charAllow}
                id="characterInput"
                onChange={() => {
                  setCharAllow((prev) => !prev)
                }}
              />
              <label htmlFor="characterInput" className="label">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
