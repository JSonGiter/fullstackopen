import React from 'react'
import ReactDOM from 'react-dom'

/*
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return(
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
*/
/*
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name = "George"/>
      <Hello name = "Daisy"/>
      <Hello name = "World"/>
    </div>
  )
}
*/

const Hello = (props) => {
  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))