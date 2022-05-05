import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return (
      <>
        <header className='flex-row-between vertical-center splash'>
          <h2>MusPlay</h2>
          <div className='flex-row-end vertical-center'>
            <Link className='white-text-link' to='/login'>
              Войти
            </Link>
            <Link className='white-text-link' to='/signup'>
              <button className='white-btn'>Trial-подписка</button>
            </Link>
          </div>
        </header>
        <div className='flex-col-start splash-container'>
          <div className='flex-col-start splash-items'>
            <p className='hero-text'>Музыка между</p>
            <p className='hero-text'>жизнью ума и жизнью чувств.</p>
            <Link className='white-text-link' to='/signup'>
              <button className='hero-btn'>Trial-подписка</button>
            </Link>
            <p>Присоединяйся к нам!</p>
          </div>
        </div>
      </>
    );
  }
}

const mSTP = (state) => ({
  isLoggedIn: Boolean(state.session.id),
});

export default connect(mSTP)(Splash);
