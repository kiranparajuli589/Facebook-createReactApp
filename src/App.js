import React from 'react';
import Header from "./component/header"
import HeadLine from "./component/headline"
import './app.scss'

const tempArr = [{
    fName: "John",
    lName: "Doe",
    email: "john@doe.co",
    age: 21,
    onlineStatus: true
}]
const header = "Posts"
const desc = "How do you do?"

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
          <HeadLine header={header} description={desc} tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
