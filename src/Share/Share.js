import React, { useState , useRef , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sharebkg from '../assets/sharebkg.png';
import recom1 from '../assets/recom1.png';
import recom2 from '../assets/recom2.png';
import recom3 from '../assets/recom3.png';
import icon from '../assets/uploadicon.png';
//import { Link } from 'react-router-dom';
import './Share.css';
import { posts } from '../utils'; 

const Section = ({ title, children }) => {
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  };

function Share() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const imageBlocks = [
    { src: recom1, text: 'First Day'},
    { src: recom2, text: 'New people' },
    { src: recom3, text: 'New Culture' }
  ];
  const navigate = useNavigate();
  const handlefood = () => {
    navigate('/Foodexample'); 
  };

  const handletips = () => {
    navigate('/Tipsexample'); 
  };
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);
  
  const handleButtonClick = () => {
    if(fileInputRef.current) {
      fileInputRef.current.click();
    }// Opens the file dialog
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile({
        name: uploadedFile.name,
        type: uploadedFile.type,
        size: uploadedFile.size,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('text', text);
    if (file) {
      formData.append('file', file);
    }
    // 你可以在这里添加发送 formData 到服务器的代码
    console.log('File submitted', formData);
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
      <Section className="header">
        <div className="header-content">
           <img src={sharebkg} alt="header background"></img>
        </div>
       </Section>

       <Section title="Share your story">
          <div className="story-share">
            <h1 className='story-text1'>Share your story</h1>
            <p className='story-text2'>Do you want to keep track of your journey? Or do you prefer to connect with others who are also new in Finland? Please share your story and experiences here!</p>
            <p className='story-text3'>Upload your images, texts or documents and you decide to make your blog private or public!</p>
            <form onSubmit={handleSubmit}>
            <textarea
               placeholder="Type here..."
               value={text}
               onChange={handleTextChange}
             />
            <div>
               <input
                 type="file"
                 onChange={handleFileChange}
                 style={{ display: 'none' }}
                 ref={fileInputRef}
               />
               
               <div className='button'>
                 <button  onClick={handleButtonClick} className="share-story-button1" >
                  <img src={icon} alt="Button Icon" />
                 </button>
                 <button className="share-story-button2" type="submit">SEND</button>
               </div>
             </div>
            </form>
            {file && (
                 <div className='filedetail'>
                   <p>File name: {file.name}</p>
                   <p>File type: {file.type}</p>
                   <p>File size: {file.size} bytes</p>
                 </div>
                )}
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

    </div>
  );
}

export default Share;