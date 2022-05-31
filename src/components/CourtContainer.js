import React from 'react';
import CourtCard from './CourtCard';

function CourtContainer({ courts, handleUpdateLike }) {
  function displayedCourts() {
    return courts.map((court) => (
      <CourtCard
        key={court.id}
        courts={court}
        handleUpdateLike={handleUpdateLike}
      />
    ));
  }

  return <div className="list">{displayedCourts()}</div>;
}

export default CourtContainer;
