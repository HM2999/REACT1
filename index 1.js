import React from 'react';
import ReactDOM from 'react-dom';
import Message from "./TestJsx/test"

class Bro extends React.Component {
  render() {
    return <h2>hi bro!</h2>;
  }
}

class Gg extends React.Component {
  render() {
    return (
      <div>
      <h1>Good boy hh </h1>
      <Bro />
      </div>
    );
  }
}

ReactDOM.render(<Gg />, document.getElementById('root'));
ReactDOM.render(<Gg />, document.getElementById('root1'));
ReactDOM.render(<Message />, document.getElementById('root2'));

