import { useEffect, useState } from 'react';
import './App.css'
import {  RouterProvider } from 'react-router-dom';
import { Router } from './Routers/Router';

function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setCount(window.innerWidth);

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
