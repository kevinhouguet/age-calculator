import './style.scss'
import { useState } from 'react';

const Result = () => {

  const [days, setDay] = useState('--')
  const [months, setMonth] = useState('--')
  const [years, setYear] = useState('38')

  return (
    <div className="result__content">
      <div className="result__content__years">
        <span className="result__content__years__nb">{years}</span> years
      </div>
      <div className="result__content__month">
        <span className="result__content__months__nb">{months}</span> months
      </div>
      <div className="result__content__days">
        <span className="result__content__days__nb">{days}</span> days
      </div>
    </div>
  )
}

export default Result;