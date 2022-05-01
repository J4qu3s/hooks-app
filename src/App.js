import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';

export default () => {

  const items = [
    {
      title : "what is react??",
      content : "Something that you do when you get surprised!"
    },
    {
      title : "what is react??",
      content : "Something that you do when you get surprised!"
    },
    {
      title : "what is react??",
      content : "Something that you do when you get surprised!"
    }
  ]

  return (
    <div>
      <Search/>
    </div>
  )
}
