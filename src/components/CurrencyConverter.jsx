import React, { useId } from 'react'

function CurrencyConverter({
    fromTo,
    inputDisabled = false,
    amount,
    onAmountChange,
    selectedCurrency,
    onCurrencyChange,
    currencies=[],
    className=''
}) {
    const id = useId()
    const id2 = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1-2'>


                <label className='text-black/40 mb-2 inline-block' htmlFor={id}>{fromTo}</label>
                <input
                    className='outline-none w-full bg-transparent py-1.5'
                    type="number"
                    name=""
                    id={id}
                    disabled={inputDisabled}
                    value={amount}
                    onChange={(e)=> onAmountChange(Number(e.target.value))}
                />

            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className="text-black/40 mb-2 w-full">Currency</p>
                <select 
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    name="" 
                    id={id2}
                    value={selectedCurrency}
                    onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                >
                    {currencies.map((currency)=>(<option key={currency} value={currency}>{currency}</option>))}
                    
                </select>
            </div>
        </div>
    )
}

export default CurrencyConverter