import './style.scss'
import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * Input component
 * @param {string} period - day, month, year
 * @returns {HTMLElement} - Html input element
 */
const Input = ({period,placeholder, error}) => {

  let colorLabel;
  let colorInput;

  if(error.length > 0 && (error[0].message === 'Must be a valid date' || error.some(err => err.field === period))){
    colorLabel = 'var(--primary-red-light)'
    colorInput = 'var(--primary-red-light)'
  } else {
    colorLabel = 'var(--neutral-smokey-gray)'
    colorInput = 'var(--neutral-light-gray)'
  }

  return (
    <div className="form__content__groupform">
      <label 
        style={{color: colorLabel}}
        htmlFor={period}>{period}</label>
      <input 
        style={{borderColor: colorInput}}
        className='form__content__input'
        type="number" 
        name={period} 
        id={period} 
        placeholder={placeholder}
      />
      { error.length > 0 && error.some(err => err.field === period) && (
        <ErrorLayout 
          error={error.filter(err => err.field === period)}/>
      )}
    </div>
  )
}

const ErrorLayout = ({error}) => {
  return (
    <div className="form__error">
      {error.map((err, index) => (
        <p key={index}>{err.message}</p>
      ))}
    </div>
  )
}

const Form = ({onSubmit, error}) => {

  return (
    <form action="#" className='form' onSubmit={onSubmit}>
      <div className="form__content">
        <Input period='day' placeholder='DD' error={error}/>
        <Input period='month' placeholder='MM' error={error} />
        <Input period='year' placeholder='YYYY' error={error}/>
      </div>
      <div className="form__submit">
        <button 
          className="form__submit__button"
          ><svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="46" 
          height="44" 
          viewBox="0 0 46 44"
          > <g fill="none" stroke="#FFF" strokeWidth="2">
            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
            </g></svg>
        </button>          
      </div>
    </form>
  )
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    field: PropTypes.string
  })).isRequired,
  maxYear: PropTypes.string.isRequired
}

Input.propTypes = {
  period: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

ErrorLayout.propTypes = {
  error: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    field: PropTypes.string
  })).isRequired
}