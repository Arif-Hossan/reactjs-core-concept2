import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name='Cumilla' special='Bus Stop'></District>
      <District name='Sylhet' special='Nature'></District>
      <District name='Chittagong' special='Hilly Area'></District>
    </div>
  );
}
//css style for each district
const district = {
  backgroundColor:'lightGrey',
  padding:'5px',
  margin:'5px',
  borderRadius:'10px'
}
function District (props) {
  //power state declaration
  const [power,setPower] = useState(1);
  const boostPower = () =>setPower(power*2);
  return (
    <div style={district}>
      <h5>Name : {props.name}</h5>
      <p>Special : {props.special}</p>
      <h6>Power : {power}</h6>
      <button onClick={boostPower}>Boost Power</button>
    </div>
  )
}

export default App;
