import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import soundfile from '../audio/01 Space Jam (From _Space Jam_) [Karaoke Version].mp3';

import NewCourtForm from './NewCourtForm';
import About from './About';
import Login from './SignUp';

function App() {
  const [courts, setCourts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const audio = new Audio(soundfile);

  const start = () => {
    audio.play();
  };
  const pause = () => {
    audio.pause();
  };

  useEffect(() => {
    fetch('https://backend-placejam.herokuapp.com/courts')
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
      <div className="audio">
        <button className="audio-btn" onClick={start}>
          <h2> Play </h2>
        </button>
        <div id="audio-img">
          {' '}
          <img src="https://i.imgur.com/VpyuAnm.png"></img>{' '}
        </div>
        <button className="audio-btn" onClick={pause}>
          <h2>Pause</h2>
        </button>
      </div>

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
