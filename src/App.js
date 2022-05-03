import React, {useEffect, useState} from 'react';

import './App.css';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';



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
      <Dropdown 
      options={options} 
      selected={selected}
      onSelectedChange={setSelected}
      />
    </div>
  );
};
