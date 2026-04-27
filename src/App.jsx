import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Post from './componets/Post'

function App() {

  const onClickPost = (name) => {
    alert(`Post by ${name} clicked!`);
  }

  return(
    <>
  <Post name="Tamar Amitay" Content="Hello, World!"></Post> 
  <Post name="Jane Smith" Content="Hi there!"></Post>
  <Post name="Alice Johnson" Content="Welcome to my blog!" ></Post>
  </>
  );
  
}

export default App
