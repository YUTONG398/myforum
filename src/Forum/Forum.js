import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Forum.css'; 
import forumbkg from '../assets/forumbkg.png';
import recom1 from '../assets/recom1.png';
import recom2 from '../assets/recom2.png';
import recom3 from '../assets/recom3.png';
import { posts } from '../utils'; 

/*
const posts = [
  {
    id: 'Cultureexample',
    title: 'Finnish Culture',
    author: 'Phillip Johnson',
    createdAt: '2023-11-11T12:59-0500'
  },
  {
    id: 'Foodexample',
    title: 'Finnish Food 101',
    author: 'Aino S.',
    createdAt: '2023-11-05T12:59-0500'
  },
  {
    id: 'Tipsexample',
    title: 'General tips',
    author: 'Sara S.',
    createdAt: '2023-11-08T12:59-0500'
  },
  {
    id: 'Guildexample',
    title: 'Teekkarilakki',
    author: 'Kalle S.',
    createdAt: '2023-11-13T12:59-0500'
  },
  {
    id: 'Transportexample',
    title: 'Navigating Public Transport',
    author: 'Mikka L.',
    createdAt: '2023-11-05T12:59-0500'
  },
  {
    id: 'Housingexample',
    title: 'Student housing',
    author: 'Atti S.',
    createdAt: '2023-11-06T12:59-0500'
  },
  {
    id: 'Clothesexample',
    title: 'Winter clothes',
    author: 'Sam P.',
    createdAt: '2023-11-12T12:59-0500'
  },
  {
    id: 'Winter',
    title: 'Winter wonderland',
    author: 'ISFGF',
    createdAt: '2023-11-05T12:59-0500'
  },
  {
    id: 'Spring',
    title: 'Slowly defrosting',
    author: 'ISFGF',
    createdAt: '2023-11-05T12:59-0500'
  },
  {
    id: 'Summer',
    title: 'Midnight Suns',
    author: 'ISFGF',
    createdAt: '2023-11-05T12:59-0500'
  },
  {
    id: 'Autumn',
    title: 'Fall foliage',
    author: 'ISFGF',
    createdAt: '2023-11-05T12:59-0500'
  },

];
*/
const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

function Forum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate(); 

  const goToPost = (postId) => {
    navigate(`/${postId}`);
  };
  const imageBlocks = [
    { src: recom1, text: 'First Day'},
    { src: recom2, text: 'New people' },
    { src: recom3, text: 'New Culture' }
  ];
  
  const handleprofile = () => {
    navigate('/share'); 
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
    <div className="Forum">
      <Section className="Forums">
          <div className="forum-content">
            <img src={forumbkg} alt="forum background"></img>
          </div>
      </Section>

      <Section title='Forum Posts' >
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3 onClick={() => goToPost(post.id)} className="post-title">
              {post.title}
            </h3>
            <p className="post-details">
              <span className="post-author">{post.author}</span> |{' '}
              <time className="post-date">{new Date(post.createdAt).toLocaleDateString()}</time>
            </p>
          </div>
        ))}
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

export default Forum;
