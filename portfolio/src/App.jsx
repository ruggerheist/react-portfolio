import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import Portfolio from './pages/Portfolio'
import About from './pages/About'

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

  // if (page === 'About') {
  //   console.log('hello');
  // //   setCurrentPage(<About />);
  // };
  

  // if (page === 'Portfolio') {
  //   console.log('hi');
  //   setCurrentPage(<Portfolio />);
  // };

  // if (page === 'Contact') {
  //   console.log('hey');
  //   // setCurrentPage(<Contact />);
  // };

  // if (page === 'Resume') {
  //   console.log('yo');
  //   // setCurrentPage(<Resume />);
  // };

  return (
    <>
      <Nav setpage = {setPage} />
      {currentPage}      
    </>
  )
}

export default App;
