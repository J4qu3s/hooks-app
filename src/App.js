import React, {useEffect, useState} from 'react';

import './App.css';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';



const items = [
  {
    title: "what is react??",
    content: "Something that you do when you get surprised!"
  },
  {
    title: "what is react??",
    content: "Something that you do when you get surprised!"
  },
  {
    title: "what is react??",
    content: "Something that you do when you get surprised!"
  }
];

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Yellow',
    value: 'yellow'
  },
  {
    label: 'The color Blue',
    value: 'blue'
  }
]

export default () => {

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search/>
      </Route>
      <Route path="/dropdown">
        <Dropdown 
        label="Select a color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

    </div>
  );
};
