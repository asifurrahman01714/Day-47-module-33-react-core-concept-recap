import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setNayoks(data))
  },[])


 // const nayoks = ['asif', 'sakib', 'rafiq'];
  const products = [
    {name: 'laptop'},
    {name: 'mobile'},
    {name: 'cycle'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {
        nayoks.map(nk => <Nayok nayok = {nk.name}></Nayok>)
      }
      
      {
        products.map(product => <Product product = {product}></Product>)
      }

      <MovieCounter></MovieCounter>
      <Users></Users>
    </div>
  );
}

//creating first component
function Nayok(props) {
  const nayokStyle = {
    backgroundColor: 'cyan',
    border: '1px solid red',
    borderRadius: '5px'
  }
  return(
    <div style={nayokStyle}>
      <h1>Nayok name:{props.nayok} </h1>
    </div>
  )
}



function Product(props) {
  const productStyle = {
    backgroundColor: 'cyan',
    border: '1px solid red',
    borderRadius: '5px'
  };
  console.log(props);
  return(
    <div style={productStyle}>
      <h1>Product name:{props.product.name} </h1>
    </div>
  )
}

function MovieCounter() {
  const [count, setCount] = useState(0);
  // const incerase = () => setCount(count + 1);
  return(
    <div>
      <button onClick ={() => setCount(count + 1)}>Increase</button>
      <button onClick ={() => setCount(count - 1)}>Decrease</button>
      <h3>Number of movies:{count} </h3>
      <MovieDisplay count = {count}></MovieDisplay>
      <MovieDisplay count = {count+10}></MovieDisplay>
      <MovieDisplay count = {count+20}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return <h3>Movie I have acted: {props.count}</h3>
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setUsers(data);
    })
  },[])
  return (
    <div>
      <h3> Dynamic Users:{users.length} </h3>
     
        {
          users.map(user => <div style={{backgroundColor: 'cyan', margin:'5px', padding:'5px'}}>{user.name}</div>)
        }
      
    </div>
  )
}
export default App;
