import React from 'react';
import './styles.scss';

function App() {
  let circles = [];
  let i;
  for (i = 0; i < 50; i++) {
      circles.push(<div className="circle"></div>)  
  }
  return (
    <div className="wrapper">
    {circles}
    </div>
  );
}

export default App;
