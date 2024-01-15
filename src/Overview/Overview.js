import React, { useEffect, useState } from 'react';
import './Overview.css';
import { useNavigate } from 'react-router-dom';
import overviewbkg from '../assets/overviewbkg.png';
import culturebkg from '../assets/culturebkg.png';
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

function Overview() {
  const imageBlocks = [
    { src: recom1, text: 'First Day'},
    { src: recom2, text: 'New people' },
    { src: recom3, text: 'New Culture' }
  ];
  const navigate = useNavigate();
  
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="Forum">
      <Section className="Forums">
          <div className="forum-content">
            <img src={overviewbkg} alt="forum background"></img>
          </div>
      </Section>

      <Section title="Stories of the day">
        <div className="story-card">
          <div className="story-content">
            <img src={culturebkg} alt="culture background" onClick={handleculture}></img>
          </div>
          <div className="foodtips-content">
            <img src={foodbkg} alt="food background" onClick={handlefood} className='sidebyside'></img>
            <img src={tipsbkg} alt="tips background" onClick={handletips} className='sidebyside'></img>
          </div>
        </div>
      </Section>

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

export default Overview;