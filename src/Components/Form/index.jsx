import './style.scss'

const Form = () => {

  return (
    <form action="#" className='form'>
      <div className="form__content">
        <div className="form__content__groupform">
          <label htmlFor="day">Day</label>
          <input 
            className='form__content__input'
            type="number" name="day" id="day" min="1" max="31" placeholder='DD'
          />
        </div>
        <div className="form__content__groupform">
          <label htmlFor="month">Month</label>
          <input 
            className='form__content__input'
            type="number" name="month" id="month" min="1" max="12" placeholder='MM'/>
        </div>
        <div className="form__content__groupform">
          <label htmlFor="year">Year</label>
          <input 
            className='form__content__input'
            type="number" name="year" id="year" min="1900" max="2023" placeholder='YYYY'/>
        </div>
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