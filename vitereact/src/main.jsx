import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href:'https://www.google.com/',
//       target: '_blank'
//   },
//   children: 'Click me to visited google'
// }

const anotherElement = (
  <a href="https://www.google.com/" target='_blank' >Visit google</a>
)

const anotherUser= "Chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com/', target:'_blank'},
  'click me to visited google',
  anotherElement

)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App />
  
)
