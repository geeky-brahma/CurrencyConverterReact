import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyConverter from './components/CurrencyConverter'
import { onCurrencyChange } from './hooks/onCurrencyChange'
function App() {
  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('inr')
  const [toAmount, setToAmount] = useState(0)
  const data = onCurrencyChange(fromCurrency)
  const currencies = Object.keys(data)
  // console.log(currencies)
  const convertCurrency = () => {
    setToAmount(amount * data[toCurrency])
  }
  const swapCurrencies = () => {
    setToCurrency(fromCurrency)
    setFromCurrency(toCurrency)
  }
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(https://images.pexels.com/photos/4386379/pexels-photo-4386379.jpeg)` }}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <div className='w-full mb-1'>
            <CurrencyConverter
              fromTo='From'
              onAmountChange={(amount) => setAmount(amount)}
              amount={amount}
              currencies={currencies}
              selectedCurrency={fromCurrency}
              onCurrencyChange={(fromCurrency) => setFromCurrency(fromCurrency)}
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button
              onClick={swapCurrencies}
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
            >
              Swap
            </button>
          </div>
          <div className='w-full mb-1'>
          <CurrencyConverter
            fromTo='To'
            amount={toAmount}
            onAmountChange={(amount) => setToAmount(amount)}
            inputDisabled
            currencies={currencies}
            selectedCurrency={toCurrency}
            onCurrencyChange={(toCurrency) => setToCurrency(toCurrency)}
          />
          </div>
          <button
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            onClick={convertCurrency}
          >
            Convert {fromCurrency} To {toCurrency}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
