import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Forumexample.css'; 
import culturebkg from '../assets/culturebakg.png';
import phillip from '../assets/phillipprofile.png';
import foodbkg from '../assets/foodbkg.png';
import tipsbkg from '../assets/tipsbkg.png';
import recom1 from '../assets/recom1.png';
import recom2 from '../assets/recom2.png';
import recom3 from '../assets/recom3.png';
import { posts } from '../utils'; 

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

function Cultureexample() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate(); 
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const imageBlocks = [
    { src: recom1, text: 'First Day'},
    { src: recom2, text: 'New people' },
    { src: recom3, text: 'New Culture' }
  ];
  
  const handleculture = () => {
    navigate('/Cultureexample'); 
  };

  const handlefood = () => {
    navigate('/Foodexample'); 
  };

  const handletips = () => {
    navigate('/Tipsexample'); 
  };

  const handleprofile = () => {
    navigate('/share'); 
  };

  const handleLike = () => {
    setLikes(likes + 1); 
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  const [recommendedArticles, setRecommendedArticles] = useState([]);

  useEffect(() => {
    // randomly pick 3 articles from the posts
    const shuffled = posts.sort(() => 0.5 - Math.random());
    setRecommendedArticles(shuffled.slice(0, 3));
  }, []); 


  const handlePostsClick = (postsName,id) => {

    console.log(`Category clicked: ${postsName}`);
    navigate(`/${id}`)
  }; 

  return (
    <div>
      <Section className="Forums">
          <div className="forum-content">
            <img src={culturebkg} alt="culture background"></img>
          </div>
      </Section>
    <div className="post-container">
    <div className="post-header">
      <img src={phillip} alt="Phillip Johnson" className="profile-pic" />
      <div>
        <h2 className='title'>Finnish Culture</h2>
        <div className='profile-info'>
          <h3 className='name'>Phillip Johnson</h3> 
          <h3 className='location'>Helsinki, Finland</h3>
        </div>
      </div>
      <div className="tag">CULTURE</div>
    </div>
    <div className="post-body">
      <p>Hei kaikki!<br /><br></br>
      It's Phillip here. Adapting to Finnish culture has been an exciting, but hard journey. Finns might seem quiet at first, but they're incredibly friendly once you get to know them.<br /><br></br>
      My advice? Participate in local events and student organizations. There's always something happening, from music festivals to 'vappu' (May Day) celebrations. Libraries here are amazing places to study and unwind. And remember, the sauna is a significant part of Finnish culture - it's a must-try for anyone!
      </p>
    </div>
    <div className="post-footer">
      <div className="post-stats">
        Seen 230 times | 11 nov. 2023
      </div>
      <div className="post-actions">
        <button onClick={handleLike}>❤️ Like it</button>
        <span>{likes} reaction{likes !== 1 ? 's' : ''}</span>
      </div>
    </div>
    <div className="post-comments">
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
      <form onSubmit={handleCommentSubmit}>
        <input 
          type="text" 
          placeholder="Add a comment" 
          value={commentText} 
          onChange={(e) => setCommentText(e.target.value)} 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
  <Section title="Recommendations for you">
        <div className="image-text-container">
           {recommendedArticles.map((article) => (
             <div className="image-block" key={article.id}>
               <img src={article.src} alt={article.title} className="image" onClick={() => handlePostsClick(article.name, article.id)}/>
               <div className="text">{article.title}</div>
             </div>
           ))}
         </div>
      </Section>

      <Section title="">
        <div className="story-share">
          <h1 className='story-text1'>Share your story</h1>
          <p className='story-text2'>Do you want to keep track of your journey? Or do you prefer to connect with others who are also new in Finland? Please share your story and experiences here!</p>
          <button className="share-story-button" onClick={handleprofile}>Click here</button>
        </div>
      </Section>
  </div>
  );
}

export default Cultureexample;