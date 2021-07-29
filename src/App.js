import './App.css';
import NumberInput from './components/numberinput'
import ButtonGrid from './components/buttongrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import Results from './components/results';


function App() {
  const [active, setActive] = useState({ label: "", rate: "" })
  const [billValue, setBillValue] = useState("");
  const [peopleNum, setPeopleNum] = useState("");
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const [input, setInput] = useState("")
  const [displayInput, setDisplayInput] = useState(false)

  const reset = () =>{
    setActive({ label: "", rate: "" })
    setBillValue("")
    setPeopleNum("")
    setTipAmount(0)
    setTotal(0)
    setInput("")
    setDisplayInput(false)
  }



  const refresh = () => {
    //console.log(active)
    //setActive({ label: "custom", rate: input/100 })
    
    if (active.rate !== "" && billValue !== "" && peopleNum !== "") {
      setTipAmount((billValue*active.rate)/peopleNum)
      setTotal(billValue/peopleNum+tipAmount)

    } else {
      setTipAmount(0)
      setTotal(0)
    }
    

    //setTotal(5)
  }

  return (
    <div className="h-screen font-monoGoogle bg-green-100 flex flex-col justify-center">
      <div className="mx-auto max-w-xs w-24 m-6">
        <h1 className="text-center text-4xl text-green-800 overflow-breakword ">
          SPLITTER
        </h1>
      </div>

      <div className="bg-white w-5/6 md:w-200 md:h-96 mx-auto rounded-3xl shadow-xl max-w-7xl flex md:flex-row flex-col  p-6">
        <div className="md:w-1/2 w-full h-full rounded-lg flex flex-col justify-between p-6">
          <NumberInput
            refresh={refresh}
            value={billValue}
            setValue={setBillValue}
            label="Bill"
            type="float" icon={<FontAwesomeIcon icon={faDollarSign} />} />
          <ButtonGrid refresh={refresh} active={active} setActive={setActive} input={input} setInput={setInput} displayInput={displayInput} setDisplayInput={setDisplayInput} />
          <NumberInput
            refresh={refresh}
            value={peopleNum}
            setValue={setPeopleNum}
            label="Number of People"
            type="int" icon={<FontAwesomeIcon icon={faUser} />} />
        </div>

        <Results tipAmount={tipAmount} total={total} reset = {reset} />

      </div>
    </div>
  );
}

export default App;
