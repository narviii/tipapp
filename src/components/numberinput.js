import { useState } from "react";

function NumberInput({ label, icon, type,value,setValue,refresh }) {
    //const [value, setValue] = useState("");
    var isInt = /^\+?\d+$/

    let handleChange
    let handleBlur

    const handleBlurFloat = () =>{
        setValue(parseFloat(value))
        refresh()
    }

    const handleBlurInt = () =>{
        
    }

    const handleFloat = (e) => {
        if (!isNaN(e.target.value) && (Number(e.target.value)>0)) {
            
            setValue(e.target.value)
        }
        if (e.target.value === "") {
            setValue(0)
        }
        refresh()
    }
    const handleInt = (e) => {
        if (Number.isInteger(Number(e.target.value))&& Number(e.target.value)>0 ) {
            setValue(parseInt(e.target.value))
            
        }
        if (e.target.value === "") {
            setValue(0)
        }
        refresh()
    }

    if (type === "float") {
        handleChange = handleFloat
        handleBlur = handleBlurFloat
    }else {
        handleChange = handleInt
        handleBlur = handleBlurInt
    }

    return (
        <form >
            <label htmlFor="billinput" className="text-sm block text-gray-600">
                {label}
            </label>
            <div>
                <span className="text-md text-gray-500 " style={{ position: "absolute", marginTop: "5px", marginLeft: "10px" }}>{icon}</span>
                <input
                    value={value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className=" outline-none block w-full bg-green-50 h-8 text-gray-500 p-5 text-right" type="text" id="billinput" />
            </div>
        </form>
    )
}
export default NumberInput;