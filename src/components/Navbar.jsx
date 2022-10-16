import React from 'react';
import travelJournal from '../assets/travel-journal.png';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='nav--logo' src={travelJournal} />
      <h6 className='nav--title'>my travel journal.</h6>
    </div>
  );
};

export default Navbar;
