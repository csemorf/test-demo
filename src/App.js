import Navbar from './components/Navbar';
import { FaGithub } from 'react-icons/fa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Notfound from './Notfound';
import { GithubProvider } from './context/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/Alert';
import User from './components/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="h-screen flex flex-col justify-between">
            <Navbar></Navbar>
            <main className="container mx-auto px-3 pb-5">
              <Alert></Alert>
              <Routes>
                <Route exact path="/" element={<Home></Home>}></Route>
                <Route path="/user/:login" element={<User></User>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/*" element={<Notfound></Notfound>}></Route>
              </Routes>
            </main>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
