import './App.css';

function App() {
  return (
    <div className="App">
      <District></District>
      <District></District>
      <District></District>
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
function District () {
  return (
    <div style={district}>
      <h5>Name : </h5>
      <p>Special : </p>
    </div>
  )
}

export default App;
