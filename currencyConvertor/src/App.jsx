import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from,setForm]= useState("usd")
  const [to, setTo] = useState ("inr")
  const [convertedAmount, setConvertedAmount]= useState(0)

  const currencyInfo= useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setForm(to)
    setTo (from)
    setConvertedAmount (amount)
    setAmount(convertedAmount)
  }
  const convert =() => {
  setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <h1 className='text-3xl bg-orange-500'>Currency App</h1>
    </>
  )
}

export default App
