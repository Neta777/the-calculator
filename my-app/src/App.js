import React, { useState } from 'react'
import './App.css';



let App = ()=> {
  const onClick = (num) => {
    if (num === '=') {
      const result = eval(theValue)
      setTheValue(result.toString())
    } else {
    setTheValue(theValue + num)
  }
}
  const clearInput = () => {
    setTheValue('')
  }
const [theValue, setTheValue] = useState('')
return ( <>
  < div className= 'calculator'>
  <h1>Calculator</h1>
  <form action = ''>

  < input type = 'text' value= {theValue} className='inputNumber'onFocus={clearInput}/>
  < input type = 'button' value= '=' className='equal' onClick={() => onClick('=')} />

  <br/>
<div className= 'inputContainer'>
  < input type = 'button' value= '1' className='theButton' onClick={() => onClick('1')}/>
  < input type = 'button' value= '2' className='theButton' onClick={() => onClick('2')}/>
  < input type = 'button' value= '3' className='theButton' onClick={() => onClick('3')}/><br/>
  < input type = 'button' value= '4' className='theButton' onClick={() => onClick('4')}/>
  < input type = 'button' value= '5' className='theButton' onClick={() => onClick('5')}/>
  < input type = 'button' value= '6' className='theButton' onClick={() => onClick('6')}/><br/>
  < input type = 'button' value= '7' className='theButton' onClick={() => onClick('7')}/>
  < input type = 'button' value= '8' className='theButton' onClick={() => onClick('8')}/>
  < input type = 'button' value= '9' className='theButton' onClick={() => onClick('9')}/><br/>
  < input type = 'button' value= '0' className='theButton' onClick={() => onClick('0')}/>
  < input type = 'button' value= '-' className='theButton'onClick={() => onClick('-')}/>
  < input type = 'button' value= '+' className='theButton' onClick={() => onClick('+')}/><br/>

</div>
  </form>

  </div>
  </>)
}
export default App
