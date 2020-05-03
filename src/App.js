import React from 'react';
import Header from "./component/header"
import HeadLine from "./component/headline"
import './app.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
          <HeadLine header="Posts" desc="How do you do?"/>
      </section>
    </div>
  );
}

export default App;
