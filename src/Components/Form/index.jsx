import './style.scss'
import PropTypes from 'prop-types';

/**
 * Input component
 * @param {string} period - day, month, year
 * @returns {HTMLElement} - Html input element
 */
const Input = ({period,min,max,placeholder}) => {
  return (
    <div className="form__content__groupform">
      <label htmlFor={period}>{period}</label>
      <input 
        className='form__content__input'
        type="number" 
        name={period} 
        id={period} 
        min={min} 
        max={max} 
        placeholder={placeholder}
      />
    </div>
  )
}

const Form = ({onSubmit, error}) => {

  return (
    <form action="#" className='form' onSubmit={onSubmit}>
      <div className="form__content">
        <Input period='day' min='1' max='31' placeholder='DD'/>
        <Input period='month' min='1' max='12' placeholder='MM'/>
        <Input period='year' min='1900' max='2023' placeholder='YYYY'/>
      </div>
      {error && <p className='form__error'>{error}</p>}
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
  onSubmit: PropTypes.func.isRequired
}

Input.propTypes = {
  period: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}