import { useState, useEffect } from "react";



function Btn({ btnText, isActive, handleChange, rate }) {

    if (isActive) {
        return (
            <button
                rate={rate}
                name={btnText}
                onClick={handleChange}
                className="bg-green-500 text-green-50 hover:text-green-800 rounded-md  h-12">
                {btnText}
            </button>
        )
    } else {
        return (
            <button
                rate={rate}
                name={btnText}
                onClick={handleChange}
                className="bg-green-800 hover:bg-gray-100 text-green-50 hover:text-green-800 rounded-md  h-12">
                {btnText}
            </button>
        )
    }


}

function ButtonGrid({ active, setActive, refresh, input, setInput, displayInput, setDisplayInput }) {

    useEffect(() => {
        refresh()
    });

    const btnArray = [
        {
            label: "5%",
            rate: 0.05
        },
        {
            label: "10%",
            rate: 0.1
        },
        {
            label: "15%",
            rate: 0.15
        },
        {
            label: "25%",
            rate: 0.25
        },
        {
            label: "50%",
            rate: 0.5
        }

    ]
    const handleChange = (e) => {
        setActive({ label: e.target.name, rate: e.target.getAttribute('rate') })
        //setInput("")
        //setDisplayInput(false)
    }

    const handleCustom = (e) => {
        setDisplayInput(true)

    }



    const handleInput = (e) => {
        if (Number.isInteger(Number(e.target.value)) && Number(e.target.value) >= 0 && Number(e.target.value) <= 100) {
            console.log(e.target.value)
            setInput(e.target.value)
            
            if (e.target.value != "") {
                console.log('aaa')
                setActive({ label: "custom", rate: e.target.value / 100 })
            }

        }
        //console.log('aaa')

    }



    const customInput = <input
        onSelect={handleInput}
        value={input}
        onChange={handleInput}
        className=" outline-none border-2 border-transparent rounded focus:border-red-500 block w-full bg-green-50 h-8 text-gray-500 p-5 text-right" type="text" />

    const buttonsMapped = btnArray.map(elem => (
        <Btn
            handleChange={handleChange}
            rate={elem.rate}
            key={elem.label}
            btnText={elem.label}
            isActive={active.label === elem.label ? true : false}
        />))

    return (
        <div>
            <label className="text-sm block">
                Select tip %
            </label>
            <div className="grid gap-4 grid-cols-3">
                {buttonsMapped}
                {displayInput ? customInput : <Btn handleChange={handleCustom} btnText="Custom" />}

            </div>
        </div>
    )
}

export default ButtonGrid