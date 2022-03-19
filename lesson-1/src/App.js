import React from 'react';
import Message from './Message';

function App() {
  let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique facere dolores optio? Amet doloribus sed commodi deleniti in? Obcaecati!';

  return (
    <div className="App">
      <Message messagetext={text} />
    </div>
  );
}

export default App;
