function StringRes({ text, amount,isLarge }) {
    let res
    //console.log(isLarge)
    if (isLarge != true) {
         res = <p className="text-5xl text-right "> {amount} </p>
    } else {
         res = <p className="text-2xl text-right "> {amount} </p>
    }
    return (
        <div className="grid grid-cols-2 m-3">
            <div className="flex flex-col justify-center">
                <p>
                    {text}
                </p>
                <p className="text-green-400 text-xs">
                    / person
                </p>
            </div>
            {res}
        </div>
    )
}

function Results({tipAmount,total,reset}) {
    let isLarge = false
    //console.log(typeof(tipAmount))
    if (tipAmount.toFixed(1).length>5 || total.toFixed(1).length>5) {
        isLarge = true
    }
    return (
        <div className="w-1/2 h-full bg-green-700 rounded-lg p-6">
            <div className="h-1/2 text-gray-100  text-sm">
                <StringRes isLarge = {isLarge} text="Tip Amount" amount = {tipAmount.toFixed(1)}/>
                <StringRes isLarge = {isLarge} text="Total" amount = {total.toFixed(1)}/>

            </div>
            <div className="h-1/2 flex flex-col justify-end">
                <button onClick = {reset} className=" h-9 mb-4 hover:bg-green-100 text-green-700 hover:text-green-700 bg-green-300 w-full rounded-md">
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Results