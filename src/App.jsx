import './App.css'

const App = () => {

  document.title = 'Age Calculator'

  return (
    <main className='container'>
      <form action="#">
        <div className="form__groupform">
          <label htmlFor="day">Day</label>
          <input type="number" name="day" id="day" min="1" max="31" placeholder='DD'/>
        </div>
        <div className="form__groupform">
          <label htmlFor="month">Month</label>
          <input type="number" name="month" id="month" min="1" max="12" placeholder='MM'/>
        </div>
        <div className="form__groupform">
          <label htmlFor="year">Year</label>
          <input type="number" name="year" id="year" min="1900" max="2023" placeholder='YYYY'/>
        </div>
        <div className="button__container">
          <button className="btn">Calculate</button>          
        </div>
      </form>
      <div className="result__content">
        <div className="result__content__years">
          <span className="result__content__years__nb">--</span> years
        </div>
        <div className="result__content__month">
          <span className="result__content__months__nb">--</span> months
        </div>
        <div className="result__content__days">
          <span className="result__content__days__nb">--</span> days
        </div>
      </div>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </footer>
    </main>
  )
}

export default App
