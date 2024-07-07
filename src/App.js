import logo from './logo.svg';
import './App.css';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import { Test } from './service/index.js';
import { increment, fetchUserById } from './store/slices/test.ts'

function App() {
  const count = useSelector(state => state.test.value)
  const data = useSelector(state => state.test.data);
  console.log(data?.data?.data, 'x');
  const name = data?.data?.data?.name;
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment())
          dispatch(fetchUserById())
        }}
      >
        Increment {count}
      </button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.{name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
