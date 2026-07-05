import { useEffect } from 'react';
import './App.css'
import {  RouterProvider } from 'react-router-dom';
import { Router } from './Routers/Router';

function App() {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        console.log("yes");
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    if (window.innerWidth < 720) {
      console.log("yes1");
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])

  return (
    <RouterProvider router={Router} />
  )
}

export default App
