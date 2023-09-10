import './App.css';
// import socketIO from "socket.io-client";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from "./component/Join/Join";

// const ENDPOINT = 'http://localhost:4500/';
// const socket = socketIO(ENDPOINT, { transports: ['websocket'] });

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Join} />
        <Route path="/chat" />
      </Router>
    </div>
  );
}

export default App;
