import './App.css'
import Form from './Components/Form'
import Result from './Components/Result'
import { useState } from 'react'
import dayjs from 'dayjs';

const App = () => {

  document.title = 'Age Calculator'

  const [days, setDay] = useState('--')
  const [months, setMonth] = useState('--')
  const [years, setYear] = useState('--')

  const handleSubmitForm = (e) => {
    e.preventDefault()

    // TODO : calculate age from input
    calculateAge(e.target.day.value, e.target.month.value, e.target.year.value)
  }

  const calculateAge = (day, month, year) => {
    const birthDate = new Date(year, month, day)

    setYear(Math.round(dayjs().diff(dayjs(birthDate), 'month', true) / 12))
    setMonth(Math.round(dayjs().diff(dayjs(birthDate), 'month', true) % 12))
    setDay(Math.floor(dayjs().diff(dayjs(birthDate), 'day', true) % 31))

  }

  return (
    <>
      <main className='container'>
        <Form onSubmit={handleSubmitForm}/>
        <Result days={days} months={months} years={years}/>

      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </footer>
    </>
  )
}

export default App
