import React from 'react';

function CourtCard({ courts, handleUpdateLike }) {
  const {
    id,
    name,
    image,
    likes,
    address,
    google,
    indoor,
    outdoor,
    cost,
    shade,
    court_rating,
    backboard,
    nets,
    restroom,
  } = courts;


  function handleLikeClick() {
    const updateObj = {
      likes: likes + 1,
    };

    fetch(`http://localhost:4004/courts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(handleUpdateLike);
  }

  return (
    <div>
      <div className="card">
        <div className="title">
          <h2>{name}</h2>
        </div>
        <h2>{indoor === 'true' ? 'Indoor' : ''}</h2>
        <h2>{outdoor === 'true' ? 'Outdoor' : ''}</h2>
        <div className="address" onClick={() => window.open(google)}>
          <h3>{address}</h3>
        </div>
        <h3>{cost}</h3>
        <img src={image} alt={name} className="court-image" />
        <h4>Court Rating: {court_rating}</h4>
        <h4>Backboard: {backboard}</h4>
        <h4>Nets: {nets}</h4>
        <h4>Shade: {shade}</h4>
        <h4>Restroom: {restroom}</h4>
        <p>{likes} Likes </p>
        <button onClick={handleLikeClick} className="like-btn">
          Like {'🏀'}
        </button>
       
      </div>
    </div>
  );
}

export default CourtCard;
