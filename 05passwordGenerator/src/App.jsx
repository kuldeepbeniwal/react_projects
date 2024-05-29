import { useEffect,useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
   
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789";
    if (charAllowed) str+="!@#$%^&*-_+=[]{}~`"
console.log(str)
    for (let i=0; i<=length;i++){
      let index=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(index)
    }
    console.log("pass",pass)
    setPassword(pass)
  },[length,numberAllowed,charAllowed])
  
 useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed])
 

  return (
    <>
      <div className="top-4 bg-gray-700 mx-10 p-4 rounded-lg text-center">
        <h1 className="text-4xl text-white">Password Generator</h1>
        <div className=" bg-white flex my-10  rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full text-4xl py-2 outline-none rounded-s"
          />
          <button className="text-black bg-blue-500 px-3 py-5 text-2xl rounded-e">
            Copy
          </button>
        </div>
        <div className="flex gap-3 justify-center text-white">
          <input
            type="range"
            min={8}
            max={30}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label className="text-white">Lenght:{length}</label>
          <input
            type="checkbox"
            value={numberAllowed}
            onClick={() => setNumberAllowed(!numberAllowed)}
          ></input>
          <label>Number Allowed</label>
          <input
            type="checkbox"
            value={charAllowed}
            onClick={() => setCharAllowed(!charAllowed)}
          ></input>
          <label>Char Allowed</label>
        </div>
      </div>
    </>
  );
}

export default App;
