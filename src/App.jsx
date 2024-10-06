import { useEffect, useState } from "react";
function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(25);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const numbers = "0123456789";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";
  const COPY_SUCCESS = "Password successfully copied to clipboard";
  const COPY_Fail = "Password successfully copied to clipboard";
  const passwordGenerator = () => {
    if (!upper && !lower && !symbol && !number) {
      notify("To generate password you must select atleast one checkbox", true);
    } else {
      let charcterList = "";
      if (number) {
        charcterList = charcterList + numbers;
      }
      if (upper) {
        charcterList = charcterList + upperCaseLetters;
      }
      if (lower) {
        charcterList = charcterList + lowerCaseLetters;
      }
      if (symbol) {
        charcterList = charcterList + specialCharacters;
      }
      setPassword(generatePassword(charcterList));
      notify("Password is generated successfully", false);
    }
  };
  const generatePassword = (charcterList) => {
    let password = "";
    const charcterListLength = charcterList.length;
    for (let i = 0; i < length; i++) {
      const characterIndex = Math.round(Math.random() * charcterListLength);
      password = password + charcterList.charAt(characterIndex);
    }
    return password;
  };
  const copyToClipbord = (password) => {
    navigator.clipboard.writeText(password);
  };
  const notify = (message, hasError = false) => {
    if (hasError) {
    alert(message)
  }
  else {
      alert(message)
   
    }

  }
  const CopyPassword = (e) => {
    if (password === "") {
      notify(COPY_Fail, true)
    }
    else {
      copyToClipbord(password)
      notify(COPY_SUCCESS)
    }

  }
  return (
    <div className="screen">
      <h1 className="h1">Password Generator</h1>
      <section className="container">
        <div className="password">
          <p>{password}</p>
          <button type="button" onClick={CopyPassword} className="btn ">
            copy
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="password-length"> Password Length</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            name="password-length"
            id=""
            max="25"
            min="10"
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="UseUppercase"
            id="upper"
            checked={upper}
            onChange={(e) => setUpper(e.target.checked)}
          />
          <label htmlFor="useUppercase">Use Upper Case</label>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="UseLowercase"
            id="lower"
            checked={lower}
            onChange={(e) => setLower(e.target.checked)}
          />
          <label htmlFor="useLowerCase">Use Lower Case</label>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="symbol"
            id="symbol"
            checked={symbol}
            onChange={(e) => setSymbol(e.target.checked)}
          />
          <label htmlFor="symbol">Include Symbol</label>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="number"
            id="number"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
          <label htmlFor="number">Include Number</label>
        </div>
          <button type="button" onClick={passwordGenerator}>
            Generate
          </button>

      </section>
    </div>
  );
}

export default App;
