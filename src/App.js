// import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstcomponent';
import NameComponent from './NameComponent';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <NameComponent />

      <Person
        name="Homer"
        age={38}
        hobbies={["bowling", "watching tv", "drinking beer"]}
      />
      <Person name="Marge" age={34} hobbies={["painting", "gambling"]} />
      <Person
        name="Bart"
        age={10}
        hobbies={["skateboarding", "making prank calls"]}
      />
      <Person
        name="Lisa"
        age={8}
        hobbies={["reading", "saxophone", "eating vegetables"]}
      />
    </div>
  );
}

export default App;
