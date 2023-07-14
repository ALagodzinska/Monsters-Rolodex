// import { Component } from "react";
import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { getData } from "./utils/data.utils";

//represents entire react app
//written in jsx - js + html
// allows to write smth that looks like html in js

// Functional component - they gets runes and they are done with it
// Function will rerun every time component needs to be rerendered

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  // will run function top to bottom
  // whatever is returned will be UI

  // allows to create state in functional env.
  const [searchField, setSearchField] = useState(""); // [value(we want to store), SETvALUE(function)]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // make an api request
  // is a side effect

  // if [] is empty, runs on mount
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  // to update filtered monsters only if search string or monsters array is changed
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   // runs first and initializes the state
//   constructor() {
//     super();

//     // always a json object
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // runs third
//   // whatever you write here will get run whenever component mounts (time when component get placed on DOM, it happens once)
//   // rerenders DOM, because state changes
//   componentDidMount() {
//     // make an api request
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users, filteredMonsters: users };
//           },
//           () => {
//             // runs after first method is finished
//             // console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   // runs second! Dictates what to show
//   // react needs key value to be specified
//   render() {
//     // more readable
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField)
//     );

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="Search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
