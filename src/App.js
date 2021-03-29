import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: 'What is React?',
    text: 'React is a front end js framework',
  },
  {
    title: 'Why use React?',
    text: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    text: 'You use React by creating components',
  }
]

function App() {
  return (
    <div>
      {/*<Accordion items={items}/>*/}
      <Search/>
    </div>
  );
}

export default App;
