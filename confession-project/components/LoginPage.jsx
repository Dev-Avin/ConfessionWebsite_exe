import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LoginPage.css';
import heart from './assets/heart.png';
import account from './assets/account.png';
import call from './assets/call.png';
import instagram from './assets/instagram.png';
import message from './assets/message.png';
import eyes from './assets/eyes.png';
import save from './assets/Save.png';

const optionArray = [
  {
    id: 1,
    title: 'Account',
    url: account,
  },
  {
    id: 2,
    title: 'Confessions',
    url: eyes,
  },
  {
    id: 3,
    title: 'Favorite',
    url: save,
  },
  {
    id: 4,
    title: 'Liked',
    url: heart,
  }
];

const navArr = [
  {
    id: 1,
    title: 'Instagram',
    url: instagram,
  }, 
  {
    id: 2,
    title: 'Messages',
    url: message,
  },
  {
    id: 3,
    title: 'Call',
    url: call,
  }
];

const LoginPage = () => {
  const [UserName, setUserName] = useState('Anonymous');
  const [largeParagraph, setLargeParagraph] = useState('');
  const [Content , setContent] = useState('Null');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="homeContainer"
    >
      <motion.div className='flexChild account' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h3 style={{ color: '#00327d', textShadow: 'rgba(0,0,0,0.5) 0.1em 0.1em' }}>TEAM EXE</h3>
        <div className='flexCont'>
          <div className='accountImg'>
            {/* Implement Logic As PER Your OWN IDEA */}
          </div>
          <div>
            <p className='text'>{UserName}</p>
          </div>
        </div>
        <div className='options'>
          {optionArray.map(({ id, title, url }) => (
            <div className='optInd' key={id}>
              <img src={url} alt={title} />
              <p>{title}</p>
            </div>
          ))}
        </div>
        <div className='iconTab'>
          {navArr.map(({ id, title, url }) => (
            <img key={id} src={url} alt={title} />
          ))}
        </div>
      </motion.div>
      <motion.div className='flexChild confess' style={{ color: '#00327d' }} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <h1>Anonymous Voices</h1>
        <p>You can confess here too, nobody will know!</p>
        <input className='confInput' placeholder='Gender' />
        <input className='confInput' placeholder='Age' />
        <input className='confInput' placeholder='Title' />
        <textarea
          className='confInputMain'
          placeholder='Confess Your Feelings'
          value={largeParagraph}
          onChange={(e) => setLargeParagraph(e.target.value)}
        />
        <button className='confSubmit'>Submit</button>
      </motion.div>
      <motion.div className='flexChild topConfession' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <h2 style={{ color: '#00327d' }}>Confession Of The Day</h2>
        <div className='whiteDiv'>
          <div className='gradientDiv'>{Content}</div>
        </div>
        <div>
          <button className='gradButton'>See More</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
