import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name='Cumilla' special='Bus Stop'></District>
      <District name='Sylhet' special='Nature'></District>
      <District name='Chittagong' special='Hilly Area'></District>
    </div>
  );
}
//css style for each district
const district = {
  backgroundColor:'lightGrey',
  padding:'15px',
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
//Post Component
function LoadPost () {
  const [posts,setPost]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>setPost(data))
  },[])
  return (
    <div>
      <h1>Post : {posts.length}</h1>
      {
        posts.map((post,idx) => <Post key={idx} title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
//single Post Component
const Post= (props)=>{
  return (
    <div style={{backgroundColor:'lightsalmon', padding:'5px',border:'2px solid gray', margin:'2px'}}>
      <h6>Title : {props.title}</h6>
      <p>Body : {props.body}</p>
    </div>
  )
}

export default App;
