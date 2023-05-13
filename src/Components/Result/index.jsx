import './style.css'

const Result = () => {
  return (
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
  )
}

export default Result;