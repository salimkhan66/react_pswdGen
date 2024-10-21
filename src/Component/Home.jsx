import React, { useEffect, useState } from "react";

function Home() {
  
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [copyTrue,setCopyTrue] = useState(false);
  
  const handleChange = (e) => {
    setLength(e.target.value);
  };
  const [password, setPassword] = useState("akfjwe");
  const passwordGenerator = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv";
    let num = "0123456789";
    let specialChar = "!@#$%^&*()-_=+[{]}|;:'\",<.>/?";
    if (numberAllowed) str += num;
    if (specialCharAllowed) str += specialChar;
    let pass = "";
    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str[idx];
    }

    setPassword(pass);
  };
  const copyPassword = () => {
    navigator.clipboard.writeText(password)
     .then(() => setCopyTrue(true))
  }

  useEffect(() => {
    setCopyTrue(false)
    passwordGenerator();
   
  }, [length, numberAllowed, specialCharAllowed]);

  return (
    <div className="  flex items-center justify-center h-screen bg-gray-600">
      <div className="bg-slate-400 justify-center py-5 text-white text-center w-1/2  rounded shadow">

      <div className="">
        <input type="text" value={password} className="text-black  px-2 w-1/2 py-1 rounded shadow bg-red" />
        <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={copyPassword}>{copyTrue?"Copied!":"COPY"}</button>
      </div>

      <div className=" space-x-3">
        <input type="range" min={8} max={16} defaultValue={5} className="bg-rose-500"  onChange={(e)=>setLength(e.target.value)}  />
        <label htmlFor="length">length({length})</label>
        
        <label htmlFor="length">Special Charactor</label>
        <input type="checkbox" name="char"     onClick={() => setSpecialCharAllowed(prev => !prev)} />
        <label htmlFor="length">Number</label>
        <input type="checkbox" name="number" id=""  onClick={() => setNumberAllowed(prev => !prev)}  />
      </div>
      </div>
    </div>

  )
}

export default Home;

<div>
  <div></div>
</div>
