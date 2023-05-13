import './App.css'
import Form from './Components/Form'
import Result from './Components/Result'

const App = () => {

  document.title = 'Age Calculator'

  return (
    <main className='container'>
      <Form/>
      <Result/>

      {/* <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </footer> */}
    </main>
  )
}

export default App
