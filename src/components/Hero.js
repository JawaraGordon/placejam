import React from 'react';
import CourtContainer from './CourtContainer';
import Search from './Search';

function Hero({ courts, handleUpdateLike, searchTerm, setSearchTerm }) {
 
  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CourtContainer
        key={courts.id}
        courts={courts}
        handleUpdateLike={handleUpdateLike}
      />
    </div>
  );
}

export default Hero;
