import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Post from './componets/Post'
import NewPost from './componets/NewPost'

function App() {

 const [isFormOpen, setIsFormOpen] = useState(false); 

 const [posts, setPosts] = useState([
                {name: "Tamar Amitay", content: "Hello, World!"},
                {name: "Jane Smith", content: "Hi there!"} ,
                {name: "Alice Johnson", content: "Welcome to my blog!"},
              ]);
  
  const andleEditPost = (index, newContent) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts[index].content = newContent;
      return updatedPosts;
    });

  }
  const handleLogPost = () => {
    console.log("Current Posts:", posts);}

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handlecancelForm = () => {
    setIsFormOpen(false);
  } 

  return(
    <>
     <div className="top-buttons-container">
       
      <button className='buttonLogPost' onClick={handleLogPost}> Log Posts to Console </button>

      <button className='buttonNewPost' onClick={handleOpenForm}> Add New Post </button>

    </div> 
        
     {posts.map((post, index) => (
       <Post key={index}  name={post.name} content={post.content} onEdit={(newContent) => andleEditPost (index, newContent)} />
     ))}
     {isFormOpen && 
     <>
    
       <div className="overlay" >
        <NewPost onCancel={handlecancelForm} /> 
      </div> 
     
     
    
     </>
     }
     
    
    </>
  );
  
}

export default App
