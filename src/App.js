import './index.css';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {

  const [display, setDisplay] = useState("");

  return (
    <div className="App">

      <nav>
        <h1 className={display && "resize"}>hello.</h1>

        <div className="right">
          <h3 onClick={() => {setDisplay("work")}}>WORK</h3>
          <h3 onClick={() => {setDisplay("about")}}>ABOUT</h3>
          <h3 onClick={() => {setDisplay("contact")}}>CONTACT</h3>
        </div>
      </nav>

        <div className="content">
          {
            display === "work" && <Work />
          }

          {
            display === "about" && <About />
          }

          {
            display === "contact" && <Contact />
          }
        </div>
    </div>
  );
}

export default App;
