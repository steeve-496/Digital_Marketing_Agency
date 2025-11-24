import { useEffect, useState } from 'react';

import Header_s from './components/pages/header_s/header_s';

function Admin() {
  return (
    <section className='admin'>
      <form className='admin_form'>
        
        <div className='header__section'>
          <label>Logo Name</label>
        </div>

        <div className="hero__section">
          <h2>Hero Section</h2>
          <label>Title</label>
          <input type="text" /><input type="text" />
          <label>Subtitles</label>
          <input type="text"/><input type="text" />
        </div>

        <div className='about__us'>
          <h2>About Section</h2>
          <label>Title</label>
          <input type="text" />
          <label>Description</label>
        </div>

        <div className='services'>
          <h2>Services Section</h2>
          <label>Title</label>
          <input type="text" />
        </div>

      </form>
    </section>
  )
}

export default Admin