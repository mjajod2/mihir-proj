import React from 'react';
import './App.css';
import TypeWriterEffect from 'react-typewriter-effect';
import Rodal from 'rodal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      visibleA: false,
      visibleP: false,
      visibleC: false 
    };
  }

  showA = () =>{
    this.setState({ visibleA: true });
  }

  hideA = () => {
    this.setState({ visibleA: false });
  }

  showP = () =>{
    this.setState({ visibleP: true });
  }

  hideP = () => {
    this.setState({ visibleP: false });
  }

  showC = () =>{
    this.setState({ visibleC: true });
  }

  hideC = () => {
    this.setState({ visibleC: false });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"
        style ={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url('/images/person.jpg') center center no-repeat",
                  // backgroundPosition: "center center",
                  // backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"}}>
          <p>
            <TypeWriterEffect
              textStyle={{ fontFamily: 'monospace',
                            color : 'antiquewhite',
                            fontSize : '350%', 
                            letterSpacing: '10px',
                            marginTop : '10rem',
                            textAlign : 'center',
                            fontWeight : '400'}}
              startDelay={120}
              cursorColor="antiquewhite"
              text="Welcome to my world. :)"
              typeSpeed={200}
            />
            <div>
              <button className="about" onClick={this.showA}>About Me</button>
                <Rodal visible={this.state.visibleA} onClose={this.hideA}>
                  <span className="hah">
                  <a className="linkstyle" href="/images/mjn.pdf" target="_blank"
                  style = {{textDecoration :'none', fontSize: '18px'}}>Click here to see my résumé</a><br/><br/>
                    Hi, thank you for checking out my website! My name is mihir jajodia, and i am currently a junior majoring in computer science at 
                    the university of illinois at chicago. <br/><br/>
                    I was born and brought up in New Delhi, and I have been in
                    Chicago since 2018! <br/><br/>
                    Currently i'm seeking internships for summer 2021. my primary field of interest is software engineering, but i am not restricted to it!<br/><br/>
                    Feel free to reach out to me. I look forward to connecting with you! :)
                  </span>
                </Rodal>
              <button className="about" onClick={this.showP}>Projects</button>
                <Rodal visible={this.state.visibleP} onClose={this.hideP}>
                  <span className="hah"> During my time as a CS student at UIC, i've had the chance to work on 
                  many interesting projects, which can be found on my <a className = "linkstyle" href = "https://github.com/mjajod2" target="_blank"
                  style = {{textDecoration :'none', fontSize: '18px'}}>GitHub</a><br/> Here is a list the ones  
                  I enjoyed doing the most:</span>
                  <ul className="hah">
                    <li><a className="linkstyle2" href="https://github.com/mjajod2/Openstreet-Maps" target="_blank">Openstreet Maps</a></li>
                    <li><a className="linkstyle2" href="https://github.com/mjajod2/File-Compression" target="_blank">Huffman Coding</a></li>
                    <li><a className="linkstyle2" href="https://github.com/mjajod2/Autocomplete" target="_blank">Autocomplete Text</a></li>
                  </ul>
                </Rodal>
              <button className="about" onClick={this.showC}>Contact</button>
                <Rodal visible={this.state.visibleC} onClose={this.hideC}>
                  <span className="hah">click on any of these links to check out my socials!</span><br/><br/><br/><br/>
                  <a className = "linkstyle" href = "https://www.linkedin.com/in/mihir-jajodia-ba8050173/" target="_blank"
                  style = {{textDecoration :'none'}}>LinkedIn</a><br/><br/><br/><br/>
                  <a className="linkstyle" href="mailto: mjajod2@uic.edu"target="_blank"
                  style = {{textDecoration :'none'}}>Email</a><br/><br/><br/><br/>
                  <a className = "linkstyle" href = "https://github.com/mjajod2" target="_blank"
                  style = {{textDecoration :'none'}}>GitHub</a><br/><br/><br/><br/>
                  <a className = "linkstyle" href = "https://www.instagram.com/mihirjajodia/" target="_blank"
                  style = {{textDecoration :'none'}}>Instagram</a><br/><br/><br/><br/>
                </Rodal>
            </div>
          </p>
        </div>
      </div>
    );
  }
}
export default App;