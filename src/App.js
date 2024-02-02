import logo from './logo.svg';
import './App.css';
import HomePage from './Page/HomePage';
import Paragraph from './component/Paragraph';
import AboutPage from './Page/AboutPage';
import ContactPage from './Page/ContactPage';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';


//Router
function App() {
  return (
   <Router>
    <Routes>

      <Route exact path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>} />

      </Routes>     
   </Router>
  );
}

export default App;
