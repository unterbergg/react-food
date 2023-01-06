import 'materialize-css/dist/css/materialize.min.css';
import "materialize-css/dist/js/materialize.min.js";
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Preloader} from "./components/Preloader";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Category} from "./pages/Category";
import {Meal} from "./pages/Meal";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Router basename="/react-food">
      <Header/>
      <main className="container content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/category/:name" element={<Category />}/>
            <Route path="/meal/:id" element={<Meal />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
      </main>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
