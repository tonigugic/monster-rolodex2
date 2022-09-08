// import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');//[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  const [title, setTitle] = useState('Monster Rolodex');

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users));

  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((el) => {
      return el.name.toLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  const onTitleChange = (event) => {
    const titleFieldString = event.target.value;
    setTitle(titleFieldString);
  };

  return (
    <div className="App" >
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster" className="monsters-search-box" />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="change title" className="title-search-box" />
      <CardList monsters={filteredMonsters} />
    </div >
  );
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };

//     // console.log('constructor');
//   }

//   componentDidMount() {
//     // console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users };
//       }));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });

//   };

//   render() {
//     // console.log('render');

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((el) => {
//       return el.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App" >
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder="search monster" className="monsters-search-box" />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
