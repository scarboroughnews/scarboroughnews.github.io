import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Blog extends React.Component {
  render() {
    return (
      <div className="Blog">
        <h1> Scarbough News </h1>
        <p>Congee Me is the best!</p>
      </div>
    );
  }
}

ReactDOM.render(<Blog />, document.getElementById("root"));
