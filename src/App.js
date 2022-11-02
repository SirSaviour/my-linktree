
import './App.css';
import spb from "./spb_.jpeg"
import {TbArrowBackUp} from "react-icons/tb";
import {BsSlack, BsGithub} from "react-icons/bs"
import {GoPrimitiveDot} from "react-icons/go";
import {BiWorld} from "react-icons/bi"


function App() {
  return (
    <div className="App">
      
      <header className="header">
        <p><TbArrowBackUp className="theme-btn" /></p>      
        <img id="profile__img" src={spb} alt="profile-img" className="eminem"/>
        <p>Saviour Prosper</p>
        <p id="slack">sirsaviour</p>
      </header>
      <main className="links">
        <a id="twitter" href="https://twitter.com/SirSaviour_"> <button type="button" >Twitter Link</button> </a>
        <a id="btn__zuri" href="https://training.zuri.team/"> <button type="button">Zuri Team</button> </a>
        <a id="books" href="https://books.zuri.team/"> <button type="button">Zuri Books</button> </a>
        <a id="books__python" href="https://books.zuri.team/python-for-beginners?ref_id=<sirsaviour>"> <button type="button">Python Books</button> </a>
        <a id="pitch" href="https://background.zuri.team/"> <button type="button">Background Check for Coders</button> </a>
        <a id="book__design" href="https://books.zuri.team/design-rules"> <button type="button">Design Books</button> </a>
        <div className="sml-icons">
          <BsSlack className="footer-icon" />
          <a id='githubpad' href='https://github.com/SirSaviour'> <BsGithub className="footer-icon"/> </a>
        </div>
     </main>
     <hr />

     <footer className="footer">
      <div>
        <h4>Zuri <GoPrimitiveDot /> Internship</h4>
      </div>
      <div>
        <p>HNG Internship 9 Front-End Task</p>
      </div>
      <div className="ingressive-sect"> 
        <p className="world-icn"><BiWorld /></p>
        <h4 className="world">Ingressive <br/> For Good</h4>
      </div>
      </footer>

      

    </div> //End of the Div className; App
  );
}

export default App;
