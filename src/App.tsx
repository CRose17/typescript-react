import React from "react";
import "./App.css";

// use any if you don't want to specify a type, not recommended
let name: any;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// using void will return undefined, whereas never won't return anything
let printName: (name: string) => never;

/* type Person = {
  name: string;
  age?: number;
};

let person: Person;

let lotsOfPeople: Person[];
 */

// use uknown type instead of any when type is otherwise not specified
let personName: unknown;

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
