import React, { useState , useEffect } from 'react';
import backgroundImage from '../assets/tembkg.png';
import profileImage from '../assets/Sandraprofile.png'; 
import './Profile.css'; 
import recom1 from '../assets/recom1.png';
import recom2 from '../assets/recom2.png';
import recom3 from '../assets/recom3.png';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

const ChecklistItem = ({ text, isComplete, onToggle }) => {
  return (
    <div className={`checklist-item ${isComplete ? 'complete' : ''}`} onClick={onToggle}>
      {isComplete ? '✓' : '○'} {text}
    </div>
  );
};


function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [items, setItems] = useState([
    { id: 1, text: 'Arrived at the airport', isComplete: false },
    { id: 2, text: 'Weather appropriate clothing', isComplete: true },
    { id: 3, text: 'Connected with a local', isComplete: false },
    { id: 4, text: 'Shared a story', isComplete: false },
    { id: 5, text: 'Made a comment', isComplete: false },
  ]);

  const toggleComplete = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isComplete: !item.isComplete } : item
    ));
  };

  const completedCount = items.filter(item => item.isComplete).length;
  const progressPercentage = (completedCount / items.length) * 100;
  const imageBlocks = [
    { src: recom1, text: 'First Day'},
    { src: recom2, text: 'New people' },
    { src: recom3, text: 'New Culture' }
  ];
  return (
    <div>
    <Section title="">
    <div className="welcome-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="welcome-text">
        <h1>Welcome back</h1>
        <h1 className='username'>Sandra</h1>
      </div>
      <div className="profile-image-container">
        <img src={profileImage} alt="Sandra" className="profile-image" />
      </div>
    </div>
    </Section>

    <Section title="Your shared stories">
        <div className="image-text-container">
           {imageBlocks.map((block, index) => (
             <div className="image-block" key={index}>
               <img src={block.src} alt={block.text} className="image" />
               <div className="text">{block.text}</div>
             </div>
           ))}
         </div>
      </Section>

      <Section title='Process of your checklist'>
      <div className="checklist">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      {items.map((item) => (
        <ChecklistItem
          key={item.id}
          text={item.text}
          isComplete={item.isComplete}
          onToggle={() => toggleComplete(item.id)}
        />
      ))}
    </div>
      </Section>
    </div>
  );
};

export default Profile;
