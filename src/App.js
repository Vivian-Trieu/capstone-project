import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

const Home = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booking" element={<BookingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
