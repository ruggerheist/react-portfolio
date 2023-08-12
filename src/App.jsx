import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'

function App() {
  const [page, setPage] = useState();
  const [currentPage, setCurrentPage] = useState(<About />); 
  useEffect(() => {
    console.log('page changed', page);
    if (page === 'About') {
      setCurrentPage(<About />);
    };
    if (page === 'Portfolio') {
      setCurrentPage(<Portfolio />);
    };
    if (page === 'Contact') {
      setCurrentPage(<Contact />);
    };
    if (page === 'Resume') {
      setCurrentPage(<Resume />);
    };
  }, [page]);

  return (
    <>
      <Nav setpage = {setPage} />
      {currentPage} 
      <Footer />     
    </>
  )
}

export default App;
