import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';

import NewCourtForm from './NewCourtForm';
import About from './About';
import Login from './SignUp';

function App() {
  const [courts, setCourts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:4004/courts')
      .then((r) => r.json())
      .then((courtArr) => {
        setCourts(courtArr);
      });
  }, []);

  function handleUpdateLike(updatedLike) {
    const updatedCourt = courts.map((court) =>
      court.id === updatedLike.id ? updatedLike : court
    );
    setCourts(updatedCourt);
  }

  const displayedCourts = courts.filter((court) => {
    return court.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="home">
      <Header />

      <Switch>
        <Route exact path="/">
          <Hero
            key={courts.id}
            courts={displayedCourts}
            handleUpdateLike={handleUpdateLike}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/courts/new">
          <NewCourtForm setCourts={setCourts} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
