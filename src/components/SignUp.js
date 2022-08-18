import React from 'react';

function SignUp() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="court-form">
      <form onSubmit={handleSubmit} className="court-form">
        <img src="https://i.imgur.com/bE9gNSp.png" alt="signup"></img>
        <br></br>
        <input
          type="text"
          name="name"
        
          placeholder="First Name"
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="name"
        
          placeholder="Last Name"
          className="input-text"
        />
        <br />
        <input
          type="email"
          name="email"
    
          placeholder="Email"
          className="input-text"
        />
        <br />
        <select
          name="level"
          className="select"
     
        >
          <option value="">Choose Your Level</option>
          <option value="1">Junior Varsity</option>
          <option value="2">Varsity</option>
          <option value="3">College</option>
          <option value="4">Semi-Pro</option>
          <option value="5">NBA</option>
        </select>
        <br />

        <input
          type="submit"
          name="submit"
          value="Submit"
          className="submit-btn"
        />
      </form>
    </div>
  );
}

export default SignUp;
