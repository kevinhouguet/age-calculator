import './App.css'
import Form from './Components/Form'
import Result from './Components/Result'
import { useState } from 'react'
import dayjs from 'dayjs';
import customParseFormat from'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

const App = () => {

  document.title = 'Age Calculator'

  const [days, setDay] = useState('--')
  const [months, setMonth] = useState('--')
  const [years, setYear] = useState('--')
  const [error, setError] = useState([{}])
  const maxYear = dayjs().format('YYYY')

  const handleSubmitForm = (e) => {    
    e.preventDefault()
    // TODO : validate input
    const validate = validateInput(e.target.day.value, e.target.month.value, e.target.year.value)

    if(validate === true){
      // TODO : calculate age from input
      calculateAge(e.target.day.value, e.target.month.value, e.target.year.value)
    }
  }

  const calculateAge = (day, month, year) => {
    const birthDate = new Date(year, month, day)

    setYear(Math.round(dayjs().diff(dayjs(birthDate), 'month', true) / 12))
    setMonth(Math.round(dayjs().diff(dayjs(birthDate), 'month', true) % 12))
    setDay(Math.floor(dayjs().diff(dayjs(birthDate), 'day', true) % 31))

  }

  const validateInput = (day, month, year) => {
    const errorTemp = []

    if(day === ''){
      errorTemp.push({message: 'This field is required', field: 'day'})
    }
    if(month === ''){
      errorTemp.push({message: 'This field is required', field: 'month'})
    }
    if(year === ''){
      errorTemp.push({message: 'This field is required', field: 'year'})
    }
    
    

    if(day){
      if(day < 1 || day > 31){
        errorTemp.push({message: 'Must be a valid day', field: 'day'})
      }
    }
    if(month){
      if(month < 1 || month > 12){
        errorTemp.push({message: 'Must be a valid month', field: 'month'})
      }
    }
    if(year){
      if(year < 1900 || year > maxYear){
        errorTemp.push({message: 'Must be a valid year', field: 'year'})
      }
    }
    if(!errorTemp.some(err => err.field === 'day') && !errorTemp.some(err => err.field === 'month')){
      if(day && month && year && !dayjs(`${year}-${month}-${day}`, 'YYYY-MM-DD', true).isValid()){
        errorTemp.push({message: 'Must be a valid date', field: 'day'})
      }
    }

    
    if(errorTemp.length > 0){
      setError(errorTemp)
      setDay('--')
      setMonth('--')
      setYear('--')
      return false
    } else {
      setError([{}])
      return true
    }
  }

  return (
    <>
      <main className='container'>
        <Form onSubmit={handleSubmitForm} error={error} maxYear={maxYear}/>
        <Result days={days.toString()} months={months.toString()} years={years.toString()}/>

      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/kevinhouguet">kevinHouguet</a>.
      </footer>
    </>
  )
}

export default App
