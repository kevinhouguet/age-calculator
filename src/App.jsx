import './App.css'
import Form from './Components/Form'
import Result from './Components/Result'
import { useState } from 'react'

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
    const today = new Date()
    const birthDate = new Date(year, month - 1, day)

    // getFullYear() returns the year of the specified date.
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()

    // If the date of birth is greater than the current date of birth, the age is reduced by 1.
    // It is because the current date of birth has not yet been reached.
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--

    setDay(birthDate.getDate())
    setMonth(birthDate.getMonth() + 1)
    setYear(age)
  }

  return (
    <main className='container'>
      <Form onSubmit={handleSubmitForm}/>
      <Result days={days} months={months} years={years}/>

      {/* <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </footer> */}
    </main>
  )
}

export default App
