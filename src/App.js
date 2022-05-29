import React from 'react'
import Form from './components/Form.js'

const generalItems = [
  {
    label: 'Full Name',
    text: '',
    id: 'full-name'
},
{
    label: 'Email',
    text: '',
    id: 'email'
},
{
    label: 'Phone',
    text: '',
    id: 'phone'
}
]

function App() {
  return (
    <>
      <h1>CV Generator</h1>
      <div>
        <h2>General</h2>
        <Form props={generalItems}/>
      </div>
      <div>
        
      </div>
    </>
  );
}

export default App;
